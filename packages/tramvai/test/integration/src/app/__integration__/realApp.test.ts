import { resolve } from 'path';
import { runRealApp } from '../startCliRealApp';
import type { ThenArg } from '../types';
import { initPuppeteer } from '../../../../legacy/puppeteer';

describe('test/integration/app/runFakeApp', () => {
  jest.setTimeout(60000);

  let app: ThenArg<ReturnType<typeof runRealApp>>;

  beforeAll(async () => {
    app = await runRealApp(
      resolve(__dirname, '../../../../../../../examples/bootstrap'),
      'bootstrap',
      {
        env: {
          FRONT_LOG_API: 'test',
        },
      }
    );
  }, 80000);

  afterAll(() => {
    return app.close();
  });

  it('should return 200 status', async () => {
    return app.request('/').expect(200);
  });
  it('should run app', async () => {
    const { application } = await app.render('/');
    expect(application).toMatchInlineSnapshot(
      `"<div class=\\"layout__layout__KclA\\"><div><h1>Tramvai<span role=\\"img\\" aria-label=\\"dummy icon\\">🥳</span></h1></div><div>Main Page <button>click link</button></div><div class=\\"Footer__footer_Y_5TM\\"><div>this Footer in bootstrap</div></div></div>"`
    );
  });

  it('should work with puppeteer', async () => {
    const { browser } = await initPuppeteer(app.serverUrl);

    const page = await browser.newPage();

    await page.goto(app.serverUrl);

    expect(await page.$eval('.application', (node) => (node as HTMLElement).innerText))
      .toMatchInlineSnapshot(`
      "Tramvai🥳
      Main Page click link
      this Footer in bootstrap"
    `);

    await browser.close();
  });
});
