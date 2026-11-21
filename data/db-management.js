(function () {
  window.ISFORUS_SUBJECTS = window.ISFORUS_SUBJECTS || [];

  window.ISFORUS_SUBJECTS.push({
    id: "db-management",
    title: {
      ru: "Управление и автоматизация БД",
      en: "Database Management & Automation"
    },
    desc: {
      ru: "Полный курс DBA: транзакции (ACID), уровни изоляции и взаимоблокировки, индексы (B-Tree, Hash, GIN) и EXPLAIN, представления (VIEW), хранимые процедуры и триггеры, роли (GRANT/REVOKE), бэкапы (PITR) и репликация.",
      en: "Complete DBA guide: ACID transactions, isolation levels & deadlocks, indexes & EXPLAIN, views, stored procedures & triggers, roles (GRANT/REVOKE), backups, and replication."
    },
    topics: [
      {
        id: "db-acid-transactions",
        title: {
          ru: "Транзакции (ACID), уровни изоляции и блокировки",
          en: "Transactions (ACID), Isolation Levels & Locks"
        },
        shortTag: { ru: "ACID и Блокировки", en: "ACID & Locks" },
        summary: {
          ru: "Как СУБД гарантирует сохранность денег при сбое питания (ACID), какие аномалии возникают при параллельной работе (Dirty Read, Phantom Read), как выбрать уровень изоляции и как бороться с взаимоблокировками (Deadlock).",
          en: "How DBMS guarantees reliability via ACID, concurrency anomalies (Dirty/Phantom Read), isolation levels, and handling deadlocks."
        },
        whereUsed: "В любых системах с финансовыми операциями, бронированием билетов, складским учётом и высокой конкурентной нагрузкой (PostgreSQL, MS SQL Server, MySQL/InnoDB, Oracle).",
        elements: [
          {
            name: "Транзакция (BEGIN / COMMIT / ROLLBACK)",
            desc: "Группа SQL-команд, которая выполняется как единое целое: либо все успешно (`COMMIT`), либо всё отменяется (`ROLLBACK`). `SAVEPOINT` позволяет откатить только часть транзакции."
          },
          {
            name: "A — Atomicity (Атомарность)",
            desc: "Принцип «всё или ничего»: если списание прошло, а зачисление упало — списание откатится назад."
          },
          {
            name: "C — Consistency (Согласованность)",
            desc: "Транзакция переводит БД из одного корректного состояния в другое без нарушения ключей, типов и ограничений (`FK`, `CHECK`, `UNIQUE`)."
          },
          {
            name: "I — Isolation (Изолированность)",
            desc: "Параллельные транзакции не мешают друг другу и не видят незавершённых промежуточных данных."
          },
          {
            name: "D — Durability (Надёжность)",
            desc: "Если БД подтвердила `COMMIT`, данные сохранятся даже при внезапном отключении электричества (за счёт журнала предзаписи WAL)."
          },
          {
            name: "4 уровня изоляции (SQL)",
            desc: "От быстрого к строгому: `Read Uncommitted` → `Read Committed` (по умолчанию в PostgreSQL) → `Repeatable Read` (по умолчанию в MySQL) → `Serializable`."
          },
          {
            name: "Аномалии чтения",
            desc: "Dirty Read (чтение незакоммиченных данных), Non-Repeatable Read (строка изменилась между двумя чтениями), Phantom Read (появились новые строки)."
          },
          {
            name: "MVCC (Версионность)",
            desc: "Механизм в PostgreSQL/MySQL: читатели не блокируют писателей, а писатели не блокируют читателей — каждый видит свой «снимок» данных."
          },
          {
            name: "Deadlock (Взаимоблокировка)",
            desc: "Транзакция А ждёт строку, занятую Б, а Б ждёт строку, занятую А. СУБД сама находит тупик и принудительно откатывает одну из транзакций."
          }
        ],
        examples: [
          {
            label: "1. Банковский перевод",
            title: "Использование транзакции BEGIN ... COMMIT и SAVEPOINT",
            desc: "Если на втором шаге произойдёт ошибка, ROLLBACK вернёт деньги обратно на первый счёт.",
            code: `BEGIN;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
SAVEPOINT after_debit;

UPDATE accounts SET balance = balance + 1000 WHERE id = 2;

-- Если зачисление не удалось, можно откатиться к точке сохранения:
-- ROLLBACK TO SAVEPOINT after_debit;

-- Если обе операции успешны, фиксируем изменения:
COMMIT;`
          },
          {
            label: "2. Защита от гонки (FOR UPDATE)",
            title: "Безопасное бронирование последнего билета",
            desc: "SELECT ... FOR UPDATE блокирует выбранную строку до конца транзакции, чтобы два человека не купили одно и то же место.",
            code: `BEGIN;

-- Блокируем строку с билетом №42 для других транзакций
SELECT status FROM tickets WHERE id = 42 FOR UPDATE;

-- Если свободен, помечаем проданным
UPDATE tickets SET status = 'sold', user_id = 7 WHERE id = 42;

COMMIT;`
          }
        ],
        mistakes: [
          "Выполняют связанные финансовые или складские обновления отдельными запросами без транзакции.",
          "Держат транзакцию открытой слишком долго (например, ждут ответа от внешнего API внутри `BEGIN ... COMMIT`), блокируя других пользователей.",
          "Обновляют строки в разном порядке в разных частях кода — это главная причина `Deadlock` (всегда сортируйте ID перед блокировкой!)."
        ],
        quiz: [
          {
            q: "Какое свойство ACID гарантирует принцип «всё или ничего» (если часть транзакции упала, все предыдущие шаги откатываются)?",
            options: ["Атомарность (Atomicity)", "Доступность (Availability)", "Изолированность (Isolation)"],
            answer: 0,
            explain: "Атомарность не допускает частичного выполнения транзакции."
          },
          {
            q: "Какая команда отменяет все незафиксированные изменения внутри текущей транзакции?",
            options: ["COMMIT", "ROLLBACK", "DROP"],
            answer: 1,
            explain: "ROLLBACK откатывает базу к состоянию до команды BEGIN."
          },
          {
            type: "match",
            q: "Соедините букву аббревиатуры ACID с её значением:",
            pairs: [
              { left: "A — Atomicity", right: "Всё или ничего (откат при сбое)" },
              { left: "C — Consistency", right: "Соблюдение всех ключей и ограничений" },
              { left: "I — Isolation", right: "Параллельные транзакции не мешают друг другу" },
              { left: "D — Durability", right: "Сохранность после COMMIT даже при сбое питания" }
            ],
            explain: "ACID — главный стандарт надёжности реляционных СУБД."
          },
          {
            type: "order",
            q: "Расставьте уровни изоляции транзакций от самого СЛАБОГО к самому СТРОГОМУ:",
            items: [
              "Read Uncommitted (допускает грязное чтение)",
              "Read Committed (по умолчанию в PostgreSQL)",
              "Repeatable Read (по умолчанию в MySQL)",
              "Serializable (полная строгая изоляция)"
            ],
            explain: "Чем выше уровень изоляции, тем меньше аномалий, но выше нагрузка на блокировки и конфликты."
          }
        ]
      },
      {
        id: "db-indexes-tuning",
        title: {
          ru: "Индексы (B-Tree, Hash, GIN), план запроса и оптимизация",
          en: "Indexes (B-Tree, Hash, GIN), Query Plans & Tuning"
        },
        shortTag: { ru: "Индексы и EXPLAIN", en: "Indexes & Tuning" },
        summary: {
          ru: "Как ускорить медленный SQL-запрос с 5 секунд до 2 миллисекунд: устройство B-Tree индекса, составные и частичные индексы, чтение плана `EXPLAIN ANALYZE` и главные причины тормозов.",
          en: "Speeding up slow SQL queries: B-Tree, Hash & GIN indexes, composite & partial indexes, reading EXPLAIN ANALYZE, and common bottlenecks."
        },
        whereUsed: "В оптимизации нагруженных таблиц с миллионами строк, ускорении отчётов, поиска и соединений `JOIN`.",
        elements: [
          {
            name: "B-Tree индекс (по умолчанию)",
            desc: "Сбалансированное дерево (как оглавление книги): ускоряет `=`, `<`, `>`, `BETWEEN`, `ORDER BY` и `LIKE 'abc%'`."
          },
          {
            name: "Hash / GIN индексы",
            desc: "`Hash` — только точное сравнение `=`; `GIN` — для поиска внутри массивов, `JSONB` и полнотекстового поиска в PostgreSQL."
          },
          {
            name: "Составной индекс (a, b)",
            desc: "Индекс сразу по двум столбцам. Работает правило «левого префикса»: ускорит поиск по `(a)` и `(a, b)`, но НЕ по одному `(b)`!"
          },
          {
            name: "Покрывающий индекс (INCLUDE)",
            desc: "Содержит все нужные для `SELECT` столбцы прямо внутри индекса (`Index Only Scan` — СУБД даже не открывает саму таблицу!)."
          },
          {
            name: "Seq Scan vs Index Scan",
            desc: "`Seq Scan` — полный перебор всей таблицы строка за строкой (медленно на миллионах строк); `Index Scan` — мгновенный переход по индексу."
          },
          {
            name: "EXPLAIN ANALYZE",
            desc: "Выполняет запрос и показывает реальное время каждого шага, число строк и использованные индексы."
          },
          {
            name: "VACUUM / ANALYZE",
            desc: "Обслуживание в PostgreSQL: `VACUUM` очищает «мёртвые» строки после UPDATE/DELETE, `ANALYZE` обновляет статистику для планировщика."
          }
        ],
        examples: [
          {
            label: "1. Индекс и EXPLAIN",
            title: "Создание индекса и проверка плана запроса",
            desc: "Индекс превращает полный перебор миллиона строк (Seq Scan) в мгновенный поиск (Index Scan).",
            code: `-- Создаём индекс на часто используемом поле поиска
CREATE INDEX idx_users_email ON users(email);

-- Частичный индекс (индексируем только активные заказы — занимает в 10 раз меньше места!)
CREATE INDEX idx_orders_active ON orders(created_at)
WHERE status = 'new';

-- Проверяем реальный план выполнения запроса (PostgreSQL)
EXPLAIN ANALYZE
SELECT id, name FROM users WHERE email = 'student@mail.ru';`
          },
          {
            label: "2. Почему индекс НЕ сработал",
            title: "Как функции в WHERE «убивают» индекс",
            desc: "Если обернуть индексированный столбец в функцию, СУБД не сможет использовать обычный B-Tree индекс.",
            code: `-- ПЛОХО: функция LOWER(email) отключает обычный индекс idx_users_email!
SELECT * FROM users WHERE LOWER(email) = 'student@mail.ru';

-- ПЛОХО: ведущий процент '%mail.ru' отключает B-Tree индекс!
SELECT * FROM users WHERE email LIKE '%mail.ru';

-- ХОРОШО: функциональный индекс или поиск по префиксу 'stud%'
CREATE INDEX idx_users_lower_email ON users(LOWER(email));`
          }
        ],
        mistakes: [
          "Создают индексы на абсолютно каждом столбце таблицы — это раздувает размер БД и сильно тормозит `INSERT`/`UPDATE`.",
          "Создают составной индекс `(group_id, created_at)`, а фильтруют только по `created_at` — индекс не используется.",
          "Оборачивают столбец в функцию в `WHERE` (`YEAR(created_at) = 2026` вместо `created_at >= '2026-01-01' AND created_at < '2027-01-01'`)."
        ],
        quiz: [
          {
            q: "Какой побочный эффект даёт добавление большого числа индексов в таблицу?",
            options: [
              "Ускоряет чтение (SELECT), но замедляет вставку/обновление (INSERT/UPDATE) и занимает место на диске",
              "Ускоряет вообще все операции без минусов",
              "Удаляет внешние ключи"
            ],
            answer: 0,
            explain: "При каждой записи СУБД вынуждена обновлять все индексы этой таблицы."
          },
          {
            q: "Создан составной B-Tree индекс `(city, age)`. Для какого запроса он НЕ сможет использоваться эффективно?",
            options: [
              "WHERE city = 'Москва'",
              "WHERE city = 'Москва' AND age > 20",
              "WHERE age > 20 (без указания city)"
            ],
            answer: 2,
            explain: "По правилу левого префикса поиск должен начинаться с первого столбца индекса (city)."
          },
          {
            type: "match",
            q: "Соедините понятие оптимизации БД с его смыслом:",
            pairs: [
              { left: "Seq Scan", right: "Полный перебор всех строк таблицы" },
              { left: "Index Scan", right: "Быстрый поиск строк через индекс" },
              { left: "GIN-индекс", right: "Поиск внутри JSONB, массивов и текста" },
              { left: "EXPLAIN ANALYZE", right: "Показывает реальный план и время запроса" }
            ],
            explain: "Умение читать EXPLAIN ANALYZE — главный навык оптимизации SQL."
          },
          {
            type: "order",
            q: "Расставьте шаги оптимизации медленного SQL-запроса в правильном порядке:",
            items: [
              "Найти самый медленный запрос в логах БД",
              "Запустить EXPLAIN ANALYZE и увидеть проблемный Seq Scan",
              "Создать подходящий индекс (B-Tree / составной / частичный)",
              "Повторно запустить EXPLAIN ANALYZE и убедиться в ускорении"
            ],
            explain: "Оптимизация всегда начинается с замера (EXPLAIN), а не с гадания."
          }
        ]
      },
      {
        id: "db-automation-triggers",
        title: {
          ru: "Автоматизация БД: VIEW, процедуры, триггеры и события",
          en: "DB Automation: Views, Procedures, Triggers & Events"
        },
        shortTag: { ru: "Автоматизация БД", en: "DB Automation" },
        summary: {
          ru: "Как перенести рутинную логику внутрь самой СУБД: виртуальные и материализованные представления (`VIEW` / `MATERIALIZED VIEW`), хранимые процедуры и функции, автоматические триггеры аудита.",
          en: "Automating database logic with Views, Materialized Views, Stored Procedures, Functions, and Triggers."
        },
        whereUsed: "В администрировании баз данных (DBA): автоматическое логирование изменений (аудит), пересчёт итогов, скрытие секретных столбцов и ускорение тяжёлых аналитических отчётов.",
        elements: [
          {
            name: "VIEW (Представление)",
            desc: "Сохранённый SQL-запрос, который выглядит как обычная таблица. Упрощает сложные отчёты и скрывает лишние столбцы."
          },
          {
            name: "MATERIALIZED VIEW",
            desc: "Материализованное представление: кэширует результат тяжёлого запроса на диске (читается мгновенно, обновляется командой `REFRESH MATERIALIZED VIEW`)."
          },
          {
            name: "Хранимая процедура / Функция",
            desc: "Именованный блок SQL/PLpgSQL кода внутри БД (`CALL proc()` или `SELECT func()`). Уменьшает число сетевых запросов от приложения."
          },
          {
            name: "Триггер (TRIGGER)",
            desc: "Код, который БД запускает АВТОМАТИЧЕСКИ при событии (`BEFORE/AFTER INSERT, UPDATE, DELETE`) — например, запись в журнал аудита или обновление `updated_at`."
          },
          {
            name: "NEW и OLD в триггерах",
            desc: "`OLD` хранит старые значения строки (до `UPDATE`/`DELETE`), а `NEW` — новые значения (при `INSERT`/`UPDATE`)."
          }
        ],
        examples: [
          {
            label: "1. VIEW и Materialized View",
            title: "Скрываем личные данные и кэшируем тяжёлый отчёт",
            desc: "Обычный VIEW всегда свежий, а Materialized View даёт мгновенную скорость на миллионных отчётах.",
            code: `-- 1. Обычное представление (виртуальная таблица)
CREATE VIEW v_top_students AS
SELECT full_name, group_name, avg_score
FROM students
WHERE avg_score >= 4.5;

-- 2. Материализованное представление для тяжёлой аналитики
CREATE MATERIALIZED VIEW mv_monthly_sales AS
SELECT DATE_TRUNC('month', created_at) AS month, SUM(amount) AS total
FROM orders
GROUP BY 1;

-- Обновление кэша по расписанию:
REFRESH MATERIALIZED VIEW mv_monthly_sales;`
          },
          {
            label: "2. Триггер аудита (PostgreSQL)",
            title: "Автоматическое обновление поля updated_at при изменении строки",
            desc: "Разработчику больше не нужно помнить об обновлении даты — СУБД сделает это сама.",
            code: `-- 1. Создаём триггерную функцию
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Привязываем триггер к таблице orders
CREATE TRIGGER trg_orders_updated
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();`
          }
        ],
        mistakes: [
          "Создают цепочку вложенных триггеров (триггер A меняет таблицу B, а триггер B меняет таблицу A) — это приводит к бесконечному циклу.",
          "Прячут всю бизнес-логику приложения в сотни триггеров — потом новым разработчикам очень трудно отлаживать «магию», происходящую в БД."
        ],
        quiz: [
          {
            q: "Что такое триггер (TRIGGER) в базе данных?",
            options: [
              "Специальный код, который автоматически срабатывает при INSERT, UPDATE или DELETE в таблице",
              "Пароль администратора",
              "Тип первичного ключа"
            ],
            answer: 0,
            explain: "Триггеры позволяют автоматизировать аудит, проверки и пересчёты прямо на уровне СУБД."
          },
          {
            q: "Чем `MATERIALIZED VIEW` отличается от обычного `VIEW`?",
            options: [
              "Ничем",
              "Materialized View физически сохраняет результат запроса на диске (как кэш) и требует явного обновления (REFRESH)",
              "Обычный VIEW нельзя читать через SELECT"
            ],
            answer: 1,
            explain: "Материализованные представления ускоряют тяжёлые отчёты ценой небольшой неактуальности до следующего REFRESH."
          },
          {
            type: "match",
            q: "Соедините объект автоматизации БД с его задачей:",
            pairs: [
              { left: "VIEW", right: "Виртуальная таблица для упрощения SELECT и скрытия полей" },
              { left: "MATERIALIZED VIEW", right: "Кэшированный на диске результат тяжёлого отчёта" },
              { left: "TRIGGER", right: "Автоматический запуск кода при INSERT/UPDATE/DELETE" },
              { left: "Хранимая процедура", right: "Именованный сценарий SQL, вызываемый через CALL" }
            ],
            explain: "Эти 4 инструмента составляют основу автоматизации внутри реляционной СУБД."
          },
          {
            type: "order",
            q: "Расставьте шаги создания триггера в PostgreSQL в правильном порядке:",
            items: [
              "Написать триггерную функцию (RETURNS TRIGGER)",
              "Изменить или проверить поля через объект NEW / OLD",
              "Привязать функцию к таблице командой CREATE TRIGGER",
              "Выполнить UPDATE/INSERT и проверить срабатывание"
            ],
            explain: "В PostgreSQL логика триггера сначала оформляется как функция, а затем привязывается к таблице."
          }
        ]
      },
      {
        id: "db-security-backups-scale",
        title: {
          ru: "Права (GRANT), автобэкапы, репликация и шардирование",
          en: "Roles (GRANT), Auto-Backups, Replication & Sharding"
        },
        shortTag: { ru: "Бэкапы и Масштаб", en: "Backups & Scale" },
        summary: {
          ru: "Как защитить базу данных и подготовить её к росту нагрузки: разграничение прав (`GRANT`/`REVOKE`), логические и физические бэкапы (`pg_dump`, PITR, `cron`), репликация Primary–Replica и шардирование.",
          en: "Securing and scaling databases: roles & permissions, logical/physical backups (pg_dump, PITR, cron), Primary-Replica replication, and sharding."
        },
        whereUsed: "В продакшен-эксплуатации любых баз данных: защита от случайного `DROP TABLE`, восстановление после аварий и масштабирование под миллионы пользователей.",
        elements: [
          {
            name: "GRANT / REVOKE",
            desc: "Выдача и отзыв прав доступа ролям БД (например, дать аналитику только `SELECT`, запретив `DELETE` и `DROP`)."
          },
          {
            name: "pg_dump / mysqldump",
            desc: "Утилиты для создания логических резервных копий (SQL-дампов), которые легко запускать по расписанию через `cron`."
          },
          {
            name: "PITR (Point-in-Time Recovery)",
            desc: "Восстановление БД на точную секунду в прошлом (например, за 10 секунд до случайного `DELETE` без `WHERE`) с помощью архива журналов WAL."
          },
          {
            name: "Репликация (Primary → Replica)",
            desc: "Автоматическое копирование данных с главного сервера (запись) на резервные реплики (чтение + горячий резерв при падении Primary)."
          },
          {
            name: "Партиционирование (Partitioning)",
            desc: "Разбиение одной огромной таблицы (например, логи за 5 лет) на физические куски по месяцам на ОДНОМ сервере."
          },
          {
            name: "Шардирование (Sharding)",
            desc: "Горизонтальное разнесение данных по РАЗНЫМ серверам (например, пользователи A–M на Сервере 1, N–Z на Сервере 2)."
          }
        ],
        examples: [
          {
            label: "1. Роли и автобэкап (Cron)",
            title: "Выдача минимальных прав аналитику и ночной бэкап PostgreSQL",
            desc: "Никогда не подключайте приложение под суперпользователем `postgres` или `root`.",
            code: `-- 1. Создаём роль только для чтения отчётов
CREATE ROLE analyst LOGIN PASSWORD 'StrongPassword123!';
GRANT SELECT ON v_top_students TO analyst;

# 2. Команда ручного бэкапа в сжатый архив:
pg_dump -U postgres university_db | gzip > /backups/univ_$(date +%F).sql.gz

# 3. Строка в crontab (автобэкап каждый день в 03:00 ночи):
0 3 * * * pg_dump -U postgres university_db | gzip > /backups/univ_$(date +\%F).sql.gz`
          }
        ],
        mistakes: [
          "Выдают веб-приложению доступ к БД под суперпользователем `postgres` / `root` вместо отдельной роли с минимальными правами.",
          "Никогда не проверяют восстановление из бэкапа на тестовом сервере — в критический момент файл дампа может оказаться пустым или битым.",
          "Путают репликацию (копия всей БД для чтения и отказоустойчивости) с шардированием (разделение БД на части между серверами)."
        ],
        quiz: [
          {
            q: "Какая технология позволяет восстановить базу данных на точную секунду в прошлом (например, прямо перед случайным удалением таблицы)?",
            options: ["PITR (Point-in-Time Recovery) с архивом WAL", "Обычный SELECT", "Индекс B-Tree"],
            answer: 0,
            explain: "PITR накатывает сохранённые журналы транзакций (WAL) поверх базового бэкапа до нужного момента времени."
          },
          {
            type: "match",
            q: "Соедините технологию масштабирования и защиты БД с её ролью:",
            pairs: [
              { left: "GRANT SELECT", right: "Выдача роли права только на чтение" },
              { left: "pg_dump + cron", right: "Регулярное автоматическое резервное копирование" },
              { left: "Репликация", right: "Копии БД на резервных серверах для чтения и отказоустойчивости" },
              { left: "Шардирование", right: "Разделение данных одной БД по разным серверам" }
            ],
            explain: "Эти 4 механизма обеспечивают безопасность и рост любой серьёзной базы данных."
          },
          {
            type: "order",
            q: "Расставьте этапы настройки надёжного резервного копирования БД:",
            items: [
              "Написать команду создания дампа (pg_dump | gzip)",
              "Добавить задачу в планировщик cron на ночное время",
              "Настроить отправку копии на удалённый сервер / в облако (правило 3-2-1)",
              "Проверить реальное восстановление дампа на тестовом сервере"
            ],
            explain: "Непроверенный бэкап считается отсутствующим бэкапом."
          }
        ]
      }
    ]
  });
})();