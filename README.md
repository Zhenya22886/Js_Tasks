Для цікавості добавив героя Манчкіна який вбиває монстрів.

**Tusk 1:**
Демонструє роботу асинхронної функції filter на основі callback-функцій.
- `asyncFilter`: фільтрує масив чисел, залишаючи тільки ті, які відповідають заданій умові.

**Tusk 2:**
Демонструє оновлену реалізацію filter, тепер на основі Promises та async/await.
- Реалізація функції `asyncFilter` переведена з callback-функцій на Promises.
- Додано підтримку паралельної обробки елементів масиву через `Promise.all`.

**Tusk 3:**
Демонструє інтеграцію `AbortController` для керування скасуванням асинхронних операцій.
- Оновлено функцію asyncFilter для підтримки `AbortController`.
- Тепер можна вручну або автоматично скасовувати фільтрацію.
- Сигнал `AbortController` додає можливість зупинити обробку навіть без виникнення помилок.

 **Tusk 4:** 
Демонструє використання Node.js Streams для обробки  файлу з іменами монстрів.
- Використовує `Readable Stream і Writable Stream` для ефективного оброблення даних.
- Також добавив обробку помилок під час читання чи запису файлу.

  
**Tusk 5:** 
Демонструє реактивну систему обробки подій, пов'язаних із монстрами.
- Події обробляються через `EventEmitter`, кожна подія має відповідну реакцію.
- Також добавив затримку (0.5 секунди) між подією та відповіддю для реалістичності.

І анекдот:
Пара лінійної алгебри в інстітуті. Викладач вимальовує, пише скалдну формулу на дошці, а на задній парті студенти перекидуються в дурака.
Перший: накриває сімку вісімкою.
Другий: ти шо ах*єл!!!
Викладач пишучи: спокійно зараз все обʼясню.
