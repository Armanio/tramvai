import { createContainer } from '@tinkoff/dippy';
import { CommandLineRunner } from './commandLineRunner';

const lines = {
  server: {
    init: ['A', 'B'],
    customer: ['C', 'D'],
  },
  client: {
    init: ['B', 'A'],
    customer: ['D', 'C'],
  },
};

function generateCommand(name, actual) {
  return function command() {
    return Promise.resolve(name).then((k) => actual.push(k));
  };
}

function generateProvider(provide, value) {
  return {
    provide,
    useValue: value,
  };
}

const factoryTestActions = (actual) => {
  const di = createContainer();
  const actions = [
    ['A', generateCommand('fable', actual)],
    ['B', [generateCommand('book', actual), generateCommand('magic', actual)]],
    ['C', generateCommand('elf', actual)],
    [
      'D',
      [
        generateCommand('gnome', actual),
        generateCommand('dwarf', actual),
        generateCommand('ork', actual),
      ],
    ],
  ];

  actions.forEach((item) => di.register(generateProvider(item[0], item[1])));

  return { di };
};

const LoggerMock: any = (name: any) => ({ log: () => {}, error: () => {}, debug: () => {} });

function generateBaseIt(type, status, result) {
  const actual = [];
  const { di } = factoryTestActions(actual);

  const flow = new CommandLineRunner({
    lines,
    rootDi: di,
    logger: LoggerMock,
  });

  return flow.run(type, status).then(() => {
    expect(actual).toEqual(result);
  });
}

describe('CommandLineRunner', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Запуск действий при инициализации на сервере', () => {
    return generateBaseIt('server', 'init', ['fable', 'book', 'magic']);
  });

  // eslint-disable-next-line jest/expect-expect
  it('Запуск действий при инициализации на клиенте', () => {
    return generateBaseIt('client', 'init', ['book', 'magic', 'fable']);
  });

  // eslint-disable-next-line jest/expect-expect
  it('Запуск действий при создании кастомера на сервере', () => {
    return generateBaseIt('server', 'customer', ['elf', 'gnome', 'dwarf', 'ork']);
  });

  // eslint-disable-next-line jest/expect-expect
  it('Запуск действий при создании кастомера на клиенте', () => {
    return generateBaseIt('client', 'customer', ['gnome', 'dwarf', 'ork', 'elf']);
  });

  describe('Ошибки', () => {
    it('Поломанные зависимости', async () => {
      const di = createContainer();

      di.register({
        provide: 'A',
        multi: true,
        useFactory: () => {
          return () => {};
        },
      });
      di.register({
        provide: 'A',
        multi: true,
        useFactory: () => {
          return () => {};
        },
        deps: {
          dsa: 'fff',
        },
      });

      const flow = new CommandLineRunner({
        lines,
        rootDi: di,
        logger: LoggerMock,
      });

      expect.assertions(1);

      await expect(flow.run('server', 'init')).rejects.toThrow('Token not found fff at A');
    });
  });
});
