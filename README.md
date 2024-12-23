Для цікавості добавив героя Манчкіна який вбиває монстрів.

**Tusk 1:**
Демонструє роботу асинхронної функції filter на основі callback-функцій.
- `asyncFilter`: фільтрує масив чисел, залишаючи тільки ті, які відповідають заданій умові.
- Асинхронність досягається через затримку (1 секунда) для кожного елемента.
- Обробка помилок: якщо рівень монстра менший за 0, виникає помилка.

**Tusk 2:**
Демонструє оновлену реалізацію filter, тепер на основі Promises та async/await.
- Реалізація функції `asyncFilter` переведена з callback-функцій на Promises.
- Підтримка `async/await` для більш зручного читання та роботи з асинхронними операціями.
- Додано підтримку паралельної обробки елементів масиву через `Promise.all`.

**Tusk 3:**
Демонструє інтеграцію `AbortController` для керування скасуванням асинхронних операцій.
- Оновлено функцію asyncFilter для підтримки `AbortController`.
- Тепер можна вручну або автоматично скасовувати фільтрацію.
- Приклад автоматичного скасування через 3 секунди.
- Сигнал `AbortController` додає можливість зупинити обробку навіть без виникнення помилок.

