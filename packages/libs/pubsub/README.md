# PubSub (publish/subscribe)

PubSub - класс для реализации шаблона издатель/подписчик на основе промисов.

### subscribe - подписка на события

`pubsub.subscribe(type, callback)` - подписаться на событие `type`. `callback` принимает в качестве параметров аргументы переданные при вызове `pubsub.publish`. `callback` может вернуть промис, резолв которого будет ожидаться при использовании `pubsub.publish`.

### publish - публикация события

`pubsub.publish(type, ...args)` - публикация события, все аргументы кроме первого будут переданы как аргументы в функции-подписчики. Возвращает промис, который зарезолвится после резолва всех функций-подписчиков.

## Типизированный PubSub

PubSub поддерживает использование типизированного списка событий. Например: есть общий PubSub, в который много кто отправляет события. Вы пишете функционал, который тоже будет отправлять события в общий PubSub и считывать оттуда события. Вы хотите, чтобы TS проверял, что подписчик правильно подписывается на события из PubSub.

В этом случае делаем следующее:

Заводим описание событий и требуемые обработчики

```ts
type MyAwesomeFeatureEvents = {
  event1: (payload: number) => any;
  event2: (payload: { prop: boolean }) => any;
};
```

Теперь в месте использования PubSub в рамках нашей фичи делаем тайпкаст. После этого pubsub становится типизированным и дает использовать только события из MyAwesomeFeatureEvents и typescript следит за совместимостью

```ts
const featurePubSub = (pubSub as any) as PubSub<MyAwesomeFeatureEvents>;

// OK! 👍
featurePubSub.subscribe('event1', (payload) => console.log(1 + payload));
featurePubSub.publish('event1', 2);

// Ошибки 👎
featurePubSub.subscribe('event3', (payload) => console.log(1 + payload)); // НЕТ ТАКОГО СОБЫТИЯ
featurePubSub.publish('event3', 2); // НЕТ ТАКОГО СОБЫТИЯ

featurePubSub.subscribe('event1', (payload) => payload.toLowerCase()); // Там число, а не строка!
featurePubSub.publish('event1', 'string'); // ожидается число!
```
