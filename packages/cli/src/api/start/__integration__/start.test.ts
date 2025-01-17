import { resolve } from 'path';
import supertest from 'supertest';
import { outputFile } from 'fs-extra';
import { start } from '@tramvai/cli';
import { getPort } from '@tramvai/internal-test-utils/utils/getPort';
import { getServerUrl } from '@tramvai/test-integration';
import { initPuppeteer } from '@tramvai/test-puppeteer';
import { getListeningPort } from '../utils/getListeningPort';

const FIXTURES_DIR = resolve(__dirname, '__fixtures__');

jest.useRealTimers();
jest.setTimeout(80000);

const supertestByPort = (port: number) => {
  return supertest(`http://localhost:${port}`);
};

const CMP_FILE_CONTENT_START = `import React from 'react';

export const Cmp = () => {
  return <div id="cmp">Cmp test: start</div>;
};
`;

const CMP_FILE_CONTENT_UPDATE = `import React from 'react';

export const Cmp = () => {
  return <div id="cmp">Cmp test: update</div>;
};
`;

describe('@tramvai/cli start command', () => {
  describe('application', () => {
    const REFRESH_CMP_PATH = resolve(FIXTURES_DIR, 'app', '__temp__', 'cmp.tsx');
    beforeAll(async () => {
      await outputFile(REFRESH_CMP_PATH, CMP_FILE_CONTENT_START);
    });
    it('should start application by target', async () => {
      const serverPort = await getPort();
      const staticServerPort = await getPort();

      const { server, staticServer, close } = await start({
        rootDir: FIXTURES_DIR,
        target: 'app',
        resolveSymlinks: false,
        port: serverPort,
        staticPort: staticServerPort,
      });

      expect(server?.address()).toMatchObject({
        port: serverPort,
      });
      expect(staticServer?.address()).toMatchObject({
        port: staticServerPort,
      });

      const responseServer = await supertestByPort(serverPort).get('/').expect(200);

      expect(responseServer.text)
        .toMatch(`<link rel="stylesheet" href="http://localhost:${staticServerPort}/dist/client/platform.css">
      <script src="http://localhost:${staticServerPort}/dist/client/hmr.js" defer></script>
      <script src="http://localhost:${staticServerPort}/dist/client/platform.js" defer></script>`);
      expect(responseServer.text).toMatch(`this is App`);

      const testStatic = supertestByPort(staticServerPort);
      await testStatic.get('/dist/client/platform.js').expect(200);
      await testStatic.get('/dist/server/server.js').expect(200);

      return close();
    });

    it('should start application from config', async () => {
      const serverPort = await getPort();
      const staticServerPort = await getPort();

      const root = resolve(FIXTURES_DIR, 'app');
      const { server, staticServer, close } = await start({
        rootDir: root,
        resolveSymlinks: false,
        port: serverPort,
        staticPort: staticServerPort,
        config: {
          name: 'app',
          type: 'application',
          root,
          commands: {
            build: {
              options: {
                server: resolve(root, 'server.tsx'),
              },
            },
          },
        },
      });

      expect(server?.address()).toMatchObject({
        port: serverPort,
      });
      expect(staticServer?.address()).toMatchObject({
        port: staticServerPort,
      });

      const responseServer = await supertestByPort(serverPort).get('/').expect(200);

      expect(responseServer.text)
        .toMatch(`<link rel="stylesheet" href="http://localhost:${staticServerPort}/dist/client/platform.css">
      <script src="http://localhost:${staticServerPort}/dist/client/hmr.js" defer></script>
      <script src="http://localhost:${staticServerPort}/dist/client/platform.js" defer></script>`);
      expect(responseServer.text).toMatch(`this is App`);

      const testStatic = supertestByPort(staticServerPort);
      await testStatic.get('/dist/client/platform.js').expect(200);
      await testStatic.get('/dist/server/server.js').expect(200);

      return close();
    });

    it('should start server on random ports', async () => {
      const { server, staticServer, close } = await start({
        rootDir: FIXTURES_DIR,
        target: 'app',
        port: 0,
        staticPort: 0,
        resolveSymlinks: false,
      });

      expect(server?.address()).toMatchObject({
        port: expect.any(Number),
      });
      expect(staticServer?.address()).toMatchObject({
        port: expect.any(Number),
      });

      await supertestByPort(getListeningPort(server)).get('/').expect(200);

      const testStatic = supertestByPort(getListeningPort(staticServer));
      await testStatic.get('/dist/client/platform.js').expect(200);
      await testStatic.get('/dist/server/server.js').expect(200);

      return close();
    });

    // eslint-disable-next-line jest/expect-expect
    it('should allow to exclude bundles from build', async () => {
      let { server, close } = await start({
        rootDir: FIXTURES_DIR,
        target: 'app',
        resolveSymlinks: false,
        port: 0,
        staticPort: 0,
      });

      let testServer = supertestByPort(getListeningPort(server));

      await testServer.get('/?bundle=main').expect(200);
      await testServer.get('/?bundle=first').expect(200);
      await testServer.get('/?bundle=second').expect(200);
      await testServer.get('/?bundle=third').expect(200);

      await close();

      ({ server, close } = await start({
        rootDir: FIXTURES_DIR,
        target: 'app',
        resolveSymlinks: false,
        onlyBundles: ['main', 'second'],
        port: 0,
        staticPort: 0,
      }));

      testServer = supertestByPort(getListeningPort(server));

      await testServer.get('/?bundle=main').expect(200);
      await testServer.get('/?bundle=first').expect(500);
      await testServer.get('/?bundle=second').expect(200);
      await testServer.get('/?bundle=third').expect(500);

      return close();
    });

    it('react-refresh should work', async () => {
      const startResult = await start({
        rootDir: FIXTURES_DIR,
        target: 'app',
        port: 0,
        staticPort: 0,
        resolveSymlinks: false,
      });
      const { close } = startResult;
      const serverUrl = getServerUrl(startResult);

      const { browser } = await initPuppeteer(serverUrl);

      const page = await browser.newPage();

      await page.goto(serverUrl);

      expect(
        await page.$eval('#cmp', (node) => (node as HTMLElement).innerText)
      ).toMatchInlineSnapshot(`"Cmp test: start"`);

      await outputFile(REFRESH_CMP_PATH, CMP_FILE_CONTENT_UPDATE);

      await page.waitForFunction(
        () => {
          return document.getElementById('cmp')?.innerHTML !== 'Cmp test: start';
        },
        { polling: 2000, timeout: 10000 }
      );

      expect(
        await page.$eval('#cmp', (node) => (node as HTMLElement).innerText)
      ).toMatchInlineSnapshot(`"Cmp test: update"`);

      await close();
    });
  });

  describe('module', () => {
    // eslint-disable-next-line jest/expect-expect
    it('should start module by target', async () => {
      const { staticServer, close } = await start({
        rootDir: FIXTURES_DIR,
        target: 'module',
        resolveSymlinks: false,
        port: 0,
      });

      const testStatic = supertestByPort(getListeningPort(staticServer));

      await testStatic.get('/module/0.1.0/module_server.js').expect(200);
      await testStatic.get('/module/0.1.0/module_client.js').expect(200);

      return close();
    });

    it('should start module by specific config', async () => {
      const staticServerPort = await getPort();

      const { staticServer, close } = await start({
        config: {
          type: 'module',
          name: 'module',
          root: resolve(FIXTURES_DIR, 'module'),
        },
        port: staticServerPort,
      });

      expect(staticServer?.address()).toMatchObject({
        port: staticServerPort,
      });

      const testStatic = supertestByPort(staticServerPort);

      await testStatic.get('/module/0.1.0/module_server.js').expect(200);
      await testStatic.get('/module/0.1.0/module_client.js').expect(200);

      return close();
    });
  });
});
