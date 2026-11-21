(function () {
  window.ISFORUS_SUBJECTS = window.ISFORUS_SUBJECTS || [];

  window.ISFORUS_SUBJECTS.push({
    id: "sql-db",
    title: { ru: "SQL и базы данных", en: "SQL & Databases" },
    desc: {
      ru: "Полный курс по реляционным БД: SELECT и порядок выполнения запросов, все виды JOIN, CTE, проектирование таблиц (DDL), нормализация (1НФ–НФБК) и оконные функции.",
      en: "Complete relational DB guide: SELECT & execution order, all JOIN types, CTEs, DDL & constraints, normalization (1NF–BCNF), and window functions."
    },
    topics: [
      {
        id: "sql-basics",
        title: { ru: "SQL: Основы, фильтрация, CRUD и порядок выполнения", en: "SQL: Basics, Filtering, CRUD & Execution Order" },
        shortTag: { ru: "SQL База", en: "SQL Basics" },
        summary: {
          ru: "Фундамент языка SQL: выборка данных, сложная фильтрация (IN, BETWEEN, LIKE, IS NULL), сортировка, пагинация, операции CRUD и реальный порядок, в котором СУБД выполняет запрос.",
          en: "SQL fundamentals: querying, advanced filtering (IN, BETWEEN, LIKE, IS NULL), sorting, pagination, CRUD, and actual query execution order."
        },
        whereUsed: "Во всех реляционных СУБД (PostgreSQL, MySQL, MS SQL Server, SQLite, Oracle). SQL — декларативный язык: вы описываете, ЧТО хотите получить, а планировщик СУБД сам строит оптимальный план поиска данных. Понимание порядка выполнения запроса спасает от 90% ошибок с псевдонимами (AS) и фильтрами.",
        elements: [
          { name: "SELECT [DISTINCT] col", desc: "Выбирает нужные столбцы. `DISTINCT` убирает дубликаты строк из результата. `AS alias` задаёт удобный псевдоним столбцу." },
          { name: "FROM table_name", desc: "Указывает основную таблицу (или представление), из которой СУБД читает данные." },
          { name: "WHERE condition", desc: "Фильтрует строки ДО группировки. Поддерживает `=`, `<>` (`!=`), `>`, `<`, `AND`, `OR`, `NOT`." },
          { name: "IN / BETWEEN", desc: "`IN ('ИВТ-21', 'ПИ-22')` — проверка по списку; `BETWEEN 4.0 AND 5.0` — диапазон включительно (обе границы входят!)." },
          { name: "LIKE / ILIKE", desc: "Поиск по шаблону: `%` — любое число символов, `_` — ровно один символ. В PostgreSQL `ILIKE` игнорирует регистр." },
          { name: "IS NULL / IS NOT NULL", desc: "Единственно правильный способ проверить отсутствие значения. Обычное `= NULL` всегда возвращает UNKNOWN (ложь)." },
          { name: "ORDER BY col [ASC|DESC]", desc: "Сортирует итоговые строки (`ASC` — по возрастанию по умолчанию, `DESC` — по убыванию). Можно сортировать по нескольким полям." },
          { name: "LIMIT n OFFSET m", desc: "Пагинация: `LIMIT 10` берёт 10 строк, `OFFSET 20` пропускает первые 20 (страница №3)." },
          { name: "INSERT / UPDATE / DELETE", desc: "Команды изменения данных (DML): добавление строк, обновление полей и удаление записей." }
        ],
        examples: [
          {
            label: "1. Сложная выборка",
            title: "Фильтрация студентов с IN, BETWEEN, LIKE и пагинацией",
            desc: "Ищем активных студентов из нужных групп с высоким баллом, чья фамилия начинается на «К», и выводим топ-5.",
            code: `SELECT
    id,
    full_name AS student_name,
    group_name,
    avg_score
FROM students
WHERE group_name IN ('ИВТ-21', 'ИВТ-22', 'ПИ-21')
  AND avg_score BETWEEN 4.0 AND 5.0
  AND full_name LIKE 'К%'
  AND expelled_at IS NULL
ORDER BY avg_score DESC, full_name ASC
LIMIT 5 OFFSET 0;`
          },
          {
            label: "2. Порядок выполнения SQL",
            title: "Почему нельзя использовать псевдоним из SELECT внутри WHERE",
            desc: "Мы пишем запрос начиная с SELECT, но СУБД выполняет его совсем в другом порядке!",
            code: `-- Логический порядок выполнения внутри СУБД:
-- 1. FROM / JOIN    (берём таблицы и склеиваем их)
-- 2. WHERE          (отсекаем лишние строки)
-- 3. GROUP BY       (объединяем в группы)
-- 4. HAVING         (фильтруем готовые группы)
-- 5. SELECT         (вычисляем выражения и создаём псевдонимы AS)
-- 6. DISTINCT       (убираем дубликаты)
-- 7. ORDER BY       (сортируем — здесь псевдонимы из SELECT уже видны!)
-- 8. LIMIT / OFFSET (обрезаем итоговую выборку)

-- ОШИБКА: WHERE выполняется ДО SELECT, поэтому total_price ещё не существует:
SELECT price * qty AS total_price FROM orders WHERE total_price > 1000;

-- ПРАВИЛЬНО:
SELECT price * qty AS total_price FROM orders WHERE price * qty > 1000;`
          },
          {
            label: "3. Безопасный CRUD",
            title: "Добавление, обновление и удаление записей с RETURNING",
            desc: "В PostgreSQL удобно добавлять RETURNING, чтобы сразу увидеть изменённые строки.",
            code: `-- 1. Вставка сразу двух записей (Multi-row INSERT)
INSERT INTO students (full_name, group_name, avg_score)
VALUES
    ('Иванов Иван', 'ИВТ-21', 4.5),
    ('Петрова Анна', 'ПИ-21', 4.9)
RETURNING id, full_name;

-- 2. Обновление (ВСЕГДА сначала проверьте условие через SELECT!)
UPDATE students
SET avg_score = avg_score + 0.1
WHERE group_name = 'ИВТ-21' AND avg_score <= 4.9;

-- 3. Удаление конкретной записи
DELETE FROM students
WHERE id = 104;`
          }
        ],
        mistakes: [
          "Запускают `UPDATE` или `DELETE` без `WHERE` — это мгновенно перезаписывает или стирает ВСЕ строки в таблице.",
          "Пишут `WHERE phone = NULL` или `WHERE phone != NULL` вместо `IS NULL` / `IS NOT NULL`.",
          "Забывают скобки при смешивании `AND` и `OR` (у `AND` приоритет выше, чем у `OR`: `A OR B AND C` читается как `A OR (B AND C)`).",
          "Пытаются использовать псевдоним столбца (`AS ...`) из `SELECT` внутри условия `WHERE`.",
          "Используют `SELECT *` в рабочем коде вместо явного списка столбцов — это нагружает сеть и ломает код при изменении схемы таблицы."
        ],
        quiz: [
          { q: "Что произойдёт, если выполнить `DELETE FROM students;` без условия `WHERE`?", options: ["Удалится только первая строка", "Удалятся абсолютно все строки в таблице", "СУБД выдаст синтаксическую ошибку"], answer: 1, explain: "Без WHERE команда DELETE удаляет каждую строку таблицы." },
          { q: "Как правильно найти всех пользователей, у которых не указан номер телефона (`NULL`)?", options: ["WHERE phone = NULL", "WHERE phone IS NULL", "WHERE phone == ''"], answer: 1, explain: "С NULL работают только операторы IS NULL и IS NOT NULL." },
          { q: "В выражении `WHERE role = 'admin' OR role = 'mod' AND active = true` какой оператор выполнится первым без скобок?", options: ["OR", "AND", "Строго слева направо"], answer: 1, explain: "У AND более высокий приоритет, чем у OR. Для надёжности всегда ставьте скобки: `(role = 'admin' OR role = 'mod') AND active = true`." },
          {
            type: "order",
            q: "Расставьте этапы реального выполнения SQL-запроса внутри СУБД в правильном порядке:",
            items: [
              "FROM (выбор таблицы)",
              "WHERE (фильтрация строк)",
              "GROUP BY (группировка)",
              "SELECT (выбор столбцов и псевдонимов)",
              "ORDER BY и LIMIT (сортировка и обрезка)"
            ],
            explain: "СУБД сначала читает таблицу (FROM), фильтрует строки (WHERE), группирует (GROUP BY), вычисляет SELECT и в конце сортирует (ORDER BY + LIMIT)."
          },
          {
            type: "match",
            q: "Соедините оператор SQL с его назначением:",
            pairs: [
              { left: "DISTINCT", right: "Убирает повторяющиеся строки" },
              { left: "LIKE 'А%'", right: "Строки, начинающиеся с буквы А" },
              { left: "BETWEEN 10 AND 20", right: "Диапазон от 10 до 20 включительно" },
              { left: "OFFSET 10", right: "Пропускает первые 10 строк результата" }
            ],
            explain: "Эти четыре конструкции закрывают большинство задач фильтрации и постраничного вывода."
          }
        ]
      },
      {
        id: "sql-joins",
        title: { ru: "Связи таблиц (JOIN), GROUP BY, HAVING и CTE", en: "JOINs, GROUP BY, HAVING & CTEs" },
        shortTag: { ru: "JOIN и Группировка", en: "JOIN & Grouping" },
        summary: {
          ru: "Сборка данных из нескольких связанных таблиц: все виды JOIN (INNER, LEFT, RIGHT, FULL, CROSS, SELF), агрегатные функции, отличие WHERE от HAVING, подзапросы и читаемые CTE (`WITH`).",
          en: "Combining related tables with all JOIN types, aggregate functions, WHERE vs HAVING, subqueries, and Common Table Expressions (WITH)."
        },
        whereUsed: "В любых отчётах, дашбордах и бэкенде. В нормализованной БД данные разнесены по разным таблицам (Клиенты, Заказы, Товары), и `JOIN` — главный способ собрать их в единый результат.",
        elements: [
          { name: "INNER JOIN", desc: "Пересечение: возвращает только те строки, у которых нашлось совпадение по ключу в ОБЕИХ таблицах." },
          { name: "LEFT [OUTER] JOIN", desc: "Берёт ВСЕ строки из левой таблицы и подтягивает совпадения из правой. Если пары нет — в полях правой таблицы будет `NULL`." },
          { name: "RIGHT / FULL JOIN", desc: "`RIGHT` — все строки из правой таблицы; `FULL OUTER JOIN` — все строки из обеих таблиц (с `NULL` там, где нет пары)." },
          { name: "CROSS JOIN", desc: "Декартово произведение: каждая строка первой таблицы соединяется с каждой строкой второй (N × M строк)." },
          { name: "SELF JOIN", desc: "Соединение таблицы самой с собой (например, таблица `employees`, где `manager_id` ссылается на `id` в той же таблице)." },
          { name: "COUNT / SUM / AVG / MIN / MAX", desc: "Агрегатные функции. Важно: `COUNT(*)` считает все строки, а `COUNT(col)` пропускает значения `NULL`!" },
          { name: "GROUP BY", desc: "Схлопывает строки с одинаковыми значениями в группы для расчёта агрегатов по каждой категории." },
          { name: "HAVING", desc: "Фильтрует УЖЕ СГРУППИРОВАННЫЕ данные (например, `HAVING SUM(amount) > 10000`)." },
          { name: "CTE (WITH name AS (...))", desc: "Временный именованный подзапрос перед основным `SELECT` — делает сложные многоступенчатые запросы чистыми и читаемыми." }
        ],
        examples: [
          {
            label: "1. INNER vs LEFT JOIN",
            title: "Поиск клиентов без единого заказа (Anti-Join)",
            desc: "Классический приём: делаем LEFT JOIN и оставляем только те строки, где правый ключ оказался NULL.",
            code: `-- 1. Клиенты И их заказы (только те, кто покупал)
SELECT c.name, o.id AS order_id, o.amount
FROM clients c
INNER JOIN orders o ON c.id = o.client_id;

-- 2. Найти «спящих» клиентов, у которых вообще нет заказов
SELECT c.id, c.name, c.email
FROM clients c
LEFT JOIN orders o ON c.id = o.client_id
WHERE o.id IS NULL;`
          },
          {
            label: "2. GROUP BY + HAVING",
            title: "Отчёт по группам: только группы со средним баллом >= 4.2",
            desc: "WHERE отсекает отчисленных ДО группировки, а HAVING фильтрует уже посчитанные средние баллы.",
            code: `SELECT
    group_name,
    COUNT(*) AS total_students,
    ROUND(AVG(avg_score), 2) AS group_avg,
    MAX(avg_score) AS best_score
FROM students
WHERE is_active = true
GROUP BY group_name
HAVING COUNT(*) >= 10 AND AVG(avg_score) >= 4.2
ORDER BY group_avg DESC;`
          },
          {
            label: "3. CTE (WITH)",
            title: "Многоступенчатый отчёт через CTE вместо вложенных подзапросов",
            desc: "Сначала считаем сумму покупок каждого клиента в блоке WITH, затем выбираем VIP-клиентов выше среднего чека.",
            code: `WITH client_totals AS (
    SELECT client_id, SUM(amount) AS total_spent
    FROM orders
    WHERE status = 'paid'
    GROUP BY client_id
)
SELECT c.name, ct.total_spent
FROM client_totals ct
JOIN clients c ON c.id = ct.client_id
WHERE ct.total_spent > (SELECT AVG(total_spent) FROM client_totals)
ORDER BY ct.total_spent DESC;`
          }
        ],
        mistakes: [
          "Забывают добавить неагрегированные столбцы из `SELECT` в `GROUP BY` — СУБД выдаёт ошибку.",
          "Пытаются написать агрегатную функцию в `WHERE` (например, `WHERE COUNT(*) > 5`) вместо `HAVING`.",
          "В `LEFT JOIN` ставят условие по правой таблице в `WHERE` (например, `WHERE o.status = 'paid'`) — это незаметно превращает `LEFT JOIN` в `INNER JOIN`! Условие нужно переносить в `ON`.",
          "Забывают условие `ON` или соединяют по неуникальным полям, из-за чего строки размножаются и суммы `SUM()` завышаются в разы."
        ],
        quiz: [
          { q: "Нужно вывести ВСЕХ клиентов и сумму их заказов, включая тех, кто ещё ничего не покупал (для них 0 или NULL). Какой JOIN выбрать?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN"], answer: 1, explain: "LEFT JOIN сохраняет все строки левой таблицы (clients), даже если в orders нет совпадений." },
          { q: "В чём разница между `COUNT(*)` и `COUNT(phone)`?", options: ["Никакой разницы", "COUNT(*) считает все строки, а COUNT(phone) игнорирует строки, где phone IS NULL", "COUNT(phone) работает только с числами"], answer: 1, explain: "COUNT(столбец) считает только непустые (NOT NULL) значения в этом столбце." },
          { q: "Где правильно писать условие `SUM(amount) > 5000`?", options: ["В WHERE", "В HAVING", "В ORDER BY"], answer: 1, explain: "Агрегатные функции фильтруются только в блоке HAVING после GROUP BY." },
          {
            type: "match",
            q: "Соедините вид JOIN с результатом его работы:",
            pairs: [
              { left: "INNER JOIN", right: "Только строки с совпадением в обеих таблицах" },
              { left: "LEFT JOIN", right: "Все строки левой таблицы + совпадения справа" },
              { left: "FULL OUTER JOIN", right: "Все строки из обеих таблиц (с NULL без пары)" },
              { left: "CROSS JOIN", right: "Каждая строка первой со всеми строками второй" }
            ],
            explain: "Чёткое понимание всех 4 типов соединений избавляет от потерянных или размноженных строк в отчётах."
          },
          {
            type: "order",
            q: "Выстройте части SQL-запроса с группировкой в правильном синтаксическом порядке:",
            items: [
              "SELECT group_name, COUNT(*)",
              "FROM students",
              "WHERE is_active = true",
              "GROUP BY group_name",
              "HAVING COUNT(*) > 5 ORDER BY COUNT(*) DESC"
            ],
            explain: "Синтаксис SQL всегда строгий: SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY."
          }
        ]
      },
      {
        id: "sql-ddl-constraints",
        title: { ru: "Проектирование таблиц (DDL), типы данных и ключи", en: "DDL, Data Types & Integrity Constraints" },
        shortTag: { ru: "DDL и Схема", en: "DDL & Schema" },
        summary: {
          ru: "Как правильно создавать и изменять структуру таблиц (`CREATE`, `ALTER`, `DROP`), выбирать типы данных (почему деньги хранят в `NUMERIC`, а не `FLOAT`) и защищать целостность через ограничения.",
          en: "Creating and altering tables (DDL), choosing exact data types (NUMERIC vs FLOAT), and enforcing data integrity with constraints."
        },
        whereUsed: "При создании базы данных с нуля, написании миграций в веб-фреймворках и защите курсовых по проектированию ИС.",
        elements: [
          { name: "CREATE / ALTER / DROP", desc: "Команды DDL (Data Definition Language): создать таблицу, изменить структуру (добавить столбец), удалить таблицу целиком." },
          { name: "INT / BIGINT / SERIAL", desc: "Целые числа. `SERIAL` или `GENERATED ALWAYS AS IDENTITY` — автоинкремент для первичных ключей." },
          { name: "NUMERIC(10, 2) vs FLOAT", desc: "`NUMERIC`/`DECIMAL` — точные десятичные дроби (ОБЯЗАТЕЛЬНО для денег!). `FLOAT` даёт ошибки округления." },
          { name: "VARCHAR(n) / TEXT", desc: "Строки текста. `VARCHAR(255)` ограничивает длину, `TEXT` хранит строку произвольной длины." },
          { name: "DATE / TIMESTAMP / TIMESTAMPTZ", desc: "Дата, дата+время и дата+время с часовым поясом (`TIMESTAMPTZ` — лучший выбор для серверов)." },
          { name: "PRIMARY KEY (PK)", desc: "Уникальный идентификатор строки. Автоматически включает `NOT NULL` и `UNIQUE` + создаёт индекс." },
          { name: "FOREIGN KEY (FK)", desc: "Внешний ключ: не даст вставить заказ для несуществующего клиента (ссылочная целостность)." },
          { name: "ON DELETE CASCADE / RESTRICT", desc: "Поведение при удалении родителя: `CASCADE` удалит дочерние записи, `RESTRICT` запретит удаление, `SET NULL` обнулит ссылку." },
          { name: "NOT NULL / UNIQUE / CHECK", desc: "`NOT NULL` запрещает пустоту; `UNIQUE` запрещает дубли (например, email); `CHECK (price > 0)` проверяет бизнес-правило." }
        ],
        examples: [
          {
            label: "1. CREATE TABLE с ключами",
            title: "Создание связанных таблиц «Пользователи» и «Заказы» (PostgreSQL)",
            desc: "Используем правильные типы данных, PK, FK, UNIQUE, CHECK и значения по умолчанию.",
            code: `CREATE TABLE users (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email       VARCHAR(150) NOT NULL UNIQUE,
    full_name   VARCHAR(100) NOT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    amount      NUMERIC(10, 2) NOT NULL CHECK (amount >= 0),
    status      VARCHAR(20) NOT NULL DEFAULT 'new'
                CHECK (status IN ('new', 'paid', 'cancelled')),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`
          },
          {
            label: "2. Изменение таблицы (ALTER)",
            title: "Добавление нового столбца и ограничения без потери данных",
            desc: "Типовая миграция на уже работающей базе данных.",
            code: `-- Добавить столбец телефона
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Добавить ограничение уникальности
ALTER TABLE users ADD CONSTRAINT uq_users_phone UNIQUE (phone);

-- Удалить ненужный столбец
ALTER TABLE users DROP COLUMN IF EXISTS old_temp_col;`
          }
        ],
        mistakes: [
          "Хранят цены и балансы в `FLOAT` / `DOUBLE` — потом `0.1 + 0.2` превращается в `0.30000000000000004` и ломает бухгалтерию.",
          "Ставят `ON DELETE CASCADE` везде подряд: случайное удаление одного пользователя сносит всю финансовую историю заказов компании.",
          "Путают `DELETE FROM table` (удаляет только строки), `TRUNCATE table` (быстро очищает всю таблицу) и `DROP TABLE` (удаляет саму таблицу и её структуру)."
        ],
        quiz: [
          { q: "Какой тип данных правильно выбрать для хранения цены товара и баланса счёта в SQL?", options: ["FLOAT", "NUMERIC(10, 2) / DECIMAL(10, 2)", "VARCHAR(50)"], answer: 1, explain: "NUMERIC/DECIMAL хранит десятичные дроби точно без погрешностей двоичной арифметики." },
          { q: "Что произойдёт при попытке удалить пользователя, если у его заказов на внешнем ключе задано `ON DELETE RESTRICT`?", options: ["Заказы удалятся автоматически", "СУБД запретит удаление пользователя, пока у него есть заказы", "Таблица заказов очистится"], answer: 1, explain: "RESTRICT защищает связанные данные от случайного удаления." },
          { q: "Какое ограничение гарантирует, что в столбце `age` нельзя записать отрицательное число?", options: ["UNIQUE", "CHECK (age >= 0)", "FOREIGN KEY"], answer: 1, explain: "CHECK проверяет произвольное логическое условие при каждой вставке или обновлении." },
          {
            type: "match",
            q: "Соедините команду или ограничение DDL с его действием:",
            pairs: [
              { left: "DROP TABLE", right: "Удаляет таблицу вместе со структурой" },
              { left: "ALTER TABLE", right: "Добавляет или меняет столбцы таблицы" },
              { left: "UNIQUE", right: "Запрещает повторяющиеся значения (например, email)" },
              { left: "DEFAULT NOW()", right: "Автоматически подставляет текущее время" }
            ],
            explain: "Эти команды формируют каркас любой реляционной базы данных."
          },
          {
            type: "order",
            q: "Расставьте действия при создании связанной схемы БД в правильном порядке:",
            items: [
              "Создать родительскую таблицу (users) с PRIMARY KEY",
              "Создать дочернюю таблицу (orders) с FOREIGN KEY на users(id)",
              "Вставить запись пользователя в users",
              "Вставить заказ в orders с существующим user_id"
            ],
            explain: "Сначала создаётся и наполняется родительская таблица, иначе внешний ключ (FK) не сможет на неё сослаться."
          }
        ]
      },
      {
        id: "db-normalization",
        title: { ru: "Нормализация БД (1НФ, 2НФ, 3НФ, НФБК) и аномалии", en: "DB Normalization (1NF–BCNF) & Anomalies" },
        shortTag: { ru: "Теория БД", en: "DB Theory" },
        summary: {
          ru: "Как проектировать таблицы без дублирования и противоречий: 3 типа аномалий данных, пошаговый разбор 1НФ, 2НФ, 3НФ и формы Бойса–Кодда (НФБК), а также когда оправдана денормализация.",
          en: "Eliminating redundancy and anomalies: insertion/update/deletion anomalies, 1NF through BCNF, and when denormalization makes sense."
        },
        whereUsed: "На этапе проектирования ER-диаграммы до создания таблиц. Главная теоретическая тема на зачётах, экзаменах и собеседованиях по базам данных.",
        elements: [
          { name: "Аномалия вставки", desc: "Невозможно добавить новую запись (например, нового преподавателя), пока у него нет ни одного студента." },
          { name: "Аномалия обновления", desc: "Телефон клиента продублирован в 50 заказах — обновили в 49, в 1 забыли -> в базе противоречивые данные." },
          { name: "Аномалия удаления", desc: "Удалили последний заказ клиента — и заодно случайно потеряли сам контакт клиента." },
          { name: "1НФ (Атомарность)", desc: "В каждой ячейке — строго одно неделимое значение (никаких списков через запятую), нет повторяющихся групп столбцов, есть PK." },
          { name: "2НФ (Полная зависимость)", desc: "Таблица в 1НФ + все неключевые столбцы зависят от ВСЕГО составного первичного ключа целиком, а не от его части." },
          { name: "3НФ (Нет транзитивности)", desc: "Таблица в 2НФ + неключевые столбцы не зависят друг от друга (только от ключа). Золотой стандарт для 95% проектов." },
          { name: "НФБК (BCNF)", desc: "Усиленная 3НФ: любой детерминант (столбец, определяющий другой столбец) обязан быть потенциальным ключом." },
          { name: "Денормализация", desc: "Осознанное добавление дублирования (например, хранение итоговой суммы заказа `total_amount` в таблице `orders`) ради высокой скорости чтения." }
        ],
        examples: [
          {
            label: "1. Пошагово: 0НФ -> 3НФ",
            title: "Превращаем «плохую» таблицу заказов в чистую схему 3НФ",
            desc: "Последовательно устраняем нарушения 1НФ, 2НФ и 3НФ.",
            code: `-- ИСХОДНАЯ ТАБЛИЦА (нарушено всё):
-- Заказы(id_заказа, дата, клиент_фио, клиент_город, товары="Кофе(200), Чай(150)")

-- ШАГ 1 (Приводим к 1НФ — убираем список из одной ячейки):
-- Строки_заказа(id_заказа, id_товара, дата, клиент_фио, клиент_город, название_товара, цена)

-- ШАГ 2 (Приводим к 2НФ — убираем частичную зависимость от составного ключа id_заказа + id_товара):
-- Товары(PK id_товара, название_товара, цена)
-- Заказы(PK id_заказа, дата, id_клиента, клиент_фио, клиент_город)
-- Состав_заказа(PK(FK id_заказа, FK id_товара), количество)

-- ШАГ 3 (Приводим к 3НФ — убираем транзитивную зависимость: клиент_город зависит от id_клиента, а не от id_заказа):
-- Клиенты(PK id_клиента, фио, город)
-- Заказы(PK id_заказа, дата, FK id_клиента)
-- Товары(PK id_товара, название, цена)
-- Состав_заказа(PK(FK id_заказа, FK id_товара), количество, цена_на_момент_покупки)`
          }
        ],
        mistakes: [
          "Хранят несколько телефонов, ролей или тегов в одной ячейке через запятую (нарушение 1НФ).",
          "Забывают, что цену товара в `Состав_заказа` всё же нужно фиксировать на момент покупки (иначе изменение цены товара в каталоге пересчитает все прошлогодние чеки!).",
          "Пытаются нормализовать базу до 5НФ–6НФ в простом учебном проекте — запросы превращаются в десятки медленных `JOIN`."
        ],
        quiz: [
          { q: "В ячейке таблицы записано `'Математика, Физика, Химия'`. Какая нормальная форма нарушена?", options: ["1НФ", "2НФ", "3НФ"], answer: 0, explain: "Первая нормальная форма (1НФ) требует атомарности: одно значение в одной ячейке." },
          { q: "В таблице `Заказы(id_заказа, id_клиента, телефон_клиента)` поле `телефон_клиента` зависит от `id_клиента`, а не напрямую от `id_заказа`. Какая нормальная форма нарушена?", options: ["1НФ", "2НФ", "3НФ (транзитивная зависимость)"], answer: 2, explain: "Транзитивная зависимость между неключевыми полями устраняется в 3НФ вынесением таблицы Клиенты." },
          { q: "Зачем в реальных высоконагруженных проектах иногда осознанно применяют денормализацию?", options: ["Чтобы ускорить частые сложные запросы чтения (уменьшить число JOIN)", "Чтобы запретить SQL-инъекции", "Потому что 3НФ устарела"], answer: 0, explain: "Денормализация ускоряет чтение ценой усложнения записи и контроля дублей." },
          {
            type: "match",
            q: "Соедините нормальную форму с её главным правилом:",
            pairs: [
              { left: "1НФ", right: "Атомарность: в одной ячейке только одно значение" },
              { left: "2НФ", right: "Полная зависимость от всего составного ключа" },
              { left: "3НФ", right: "Нет транзитивных зависимостей между неключевыми полями" },
              { left: "Денормализация", right: "Осознанное дублирование ради скорости SELECT" }
            ],
            explain: "Эти определения — классика любого экзамена по базам данных."
          },
          {
            type: "order",
            q: "Выстройте этапы нормализации таблицы по порядку:",
            items: [
              "Разбить списки в ячейках на отдельные строки (1НФ)",
              "Вынести поля, зависящие только от части составного ключа (2НФ)",
              "Вынести транзитивно зависимые сущности в отдельные таблицы (3НФ)",
              "При необходимости добавить индексы и точечную денормализацию"
            ],
            explain: "Каждая следующая нормальная форма строится строго поверх предыдущей."
          }
        ]
      },
      {
        id: "sql-window-functions",
        title: { ru: "Оконные функции, CASE WHEN и работа с NULL", en: "Window Functions, CASE WHEN & NULL Handling" },
        shortTag: { ru: "Продвинутый SQL", en: "Advanced SQL" },
        summary: {
          ru: "Инструменты, которые отличают уверенного разработчика от новичка: расчёт рейтингов и скользящих сумм без схлопывания строк (`OVER`, `PARTITION BY`), ветвление `CASE WHEN` и `COALESCE`.",
          en: "Level up your SQL: rankings and running totals without collapsing rows (OVER, PARTITION BY), CASE WHEN branching, and COALESCE."
        },
        whereUsed: "В аналитике данных, отчётах (топ-3 товара в каждой категории, сравнение продаж с прошлым месяцем) и на технических собеседованиях.",
        elements: [
          { name: "OVER (PARTITION BY ... ORDER BY ...)", desc: "Задаёт «окно» строк для расчёта. В отличие от `GROUP BY`, исходные строки НЕ схлопываются!" },
          { name: "ROW_NUMBER()", desc: "Присваивает строгий уникальный номер строки внутри окна: 1, 2, 3, 4." },
          { name: "RANK() vs DENSE_RANK()", desc: "При равных баллах: `RANK` даёт `1, 1, 3` (с пропуском), а `DENSE_RANK` даёт `1, 1, 2` (без пропуска)." },
          { name: "LAG() / LEAD()", desc: "Берут значение из предыдущей (`LAG`) или следующей (`LEAD`) строки окна — идеально для сравнения с прошлым месяцем." },
          { name: "CASE WHEN ... THEN ... ELSE ... END", desc: "Условный оператор `if/else` прямо внутри SQL-запроса (для категорий, флагов и условного подсчёта)." },
          { name: "COALESCE(a, b, 'нет')", desc: "Возвращает первое НЕ-NULL значение из списка (удобно для замены NULL на 0 или текст)." }
        ],
        examples: [
          {
            label: "1. Топ-2 в каждой группе",
            title: "Рейтинг студентов внутри каждой учебной группы (ROW_NUMBER)",
            desc: "Обычный LIMIT 2 вернул бы 2 студентов со всего вуза, а оконная функция — по 2 лучших в КАЖДОЙ группе.",
            code: `WITH ranked AS (
    SELECT
        full_name,
        group_name,
        avg_score,
        ROW_NUMBER() OVER (
            PARTITION BY group_name
            ORDER BY avg_score DESC
        ) AS place_in_group
    FROM students
)
SELECT full_name, group_name, avg_score, place_in_group
FROM ranked
WHERE place_in_group <= 2;`
          },
          {
            label: "2. CASE WHEN и COALESCE",
            title: "Классификация оценок и безопасная подстановка NULL",
            desc: "Превращаем числовой балл в понятный статус и заменяем пустой телефон заглушкой.",
            code: `SELECT
    full_name,
    COALESCE(phone, 'Не указан') AS contact_phone,
    CASE
        WHEN avg_score >= 4.75 THEN 'Отличник'
        WHEN avg_score >= 4.00 THEN 'Хорошист'
        ELSE 'Нужно подтянуть'
    END AS status
FROM students;`
          }
        ],
        mistakes: [
          "Пытаются фильтровать результат оконной функции прямо в `WHERE` (например, `WHERE ROW_NUMBER() OVER (...) <= 3`) — нужно обернуть запрос в CTE (`WITH`) и фильтровать снаружи.",
          "Путают `RANK()` и `DENSE_RANK()` при одинаковых значениях."
        ],
        quiz: [
          { q: "В чём главное отличие оконной функции (`OVER (PARTITION BY ...)`) от `GROUP BY`?", options: ["Оконная функция не схлопывает строки — каждая исходная строка остаётся в результате", "Оконная функция работает только с текстом", "Разницы нет"], answer: 0, explain: "GROUP BY сжимает группу в одну строку, а оконная функция добавляет вычисленное значение к каждой строке." },
          { q: "Что вернёт выражение `COALESCE(NULL, NULL, 'Гость', 'Иван')`?", options: ["NULL", "'Гость'", "'Иван'"], answer: 1, explain: "COALESCE возвращает самый первый аргумент, который не равен NULL." },
          {
            type: "match",
            q: "Соедините оконную функцию с её результатом:",
            pairs: [
              { left: "ROW_NUMBER()", right: "Строгая нумерация 1, 2, 3, 4" },
              { left: "RANK()", right: "Рейтинг с пропуском при ничьей: 1, 1, 3" },
              { left: "DENSE_RANK()", right: "Рейтинг без пропуска при ничьей: 1, 1, 2" },
              { left: "LAG()", right: "Значение из предыдущей строки окна" }
            ],
            explain: "Эти 4 функции — основа аналитического SQL."
          },
          {
            type: "order",
            q: "Как правильно получить топ-3 товара в каждой категории с помощью оконной функции?",
            items: [
              "Открыть CTE: WITH ranked AS (...)",
              "Посчитать ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) AS rn",
              "Закрыть CTE и сделать SELECT * FROM ranked",
              "Отфильтровать результат через WHERE rn <= 3"
            ],
            explain: "Так как оконные функции вычисляются после WHERE, фильтрацию по их результату делают во внешнем запросе."
          }
        ]
      }
    ]
  });
})();