(function () {
  window.ISFORUS_SUBJECTS = window.ISFORUS_SUBJECTS || [];

  window.ISFORUS_SUBJECTS.push({
  "id": "algorithms",
  "title": {
    "ru": "Алгоритмизация и программирование",
    "en": "Algorithmization & Programming"
  },
  "desc": {
    "ru": "Подробный разбор от самых азов (переменные, ввод, условия, циклы) до продвинутых тем: Python, C++, JavaScript, Java, C#, HTML5/CSS и алгоритмы Big-O.",
    "en": "Complete guide from absolute basics (variables, I/O, conditions, loops) to advanced topics: Python, C++, JS, Java, C#, HTML5/CSS, and Big-O."
  },
  "topics": [
    {
      "id": "lang-python",
      "title": {
        "ru": "Python — от азов до ООП, файлов и исключений",
        "en": "Python — From Basics to OOP & Files"
      },
      "shortTag": {
        "ru": "Python",
        "en": "Python"
      },
      "summary": {
        "ru": "Самый дружелюбный язык для старта: начинаем с переменных, input/print, условий if и циклов for/while, а затем переходим к коллекциям, файлам, try/except и ООП.",
        "en": "Beginner-friendly language: starting from variables, input/print, if/else, loops, and advancing to collections, files, exceptions, and OOP."
      },
      "whereUsed": "Веб-бэкенд (Django, FastAPI), анализ данных и нейросети (Pandas, PyTorch), Telegram-боты, автоматизация рутинных задач. Язык интерпретируемый — код выполняется построчно без долгой компиляции.",
      "elements": [
        {
          "name": "name = 'Иван'",
          "desc": "Переменная. Тип (`int`, `float`, `str`, `bool`, `None`) определяется автоматически (динамическая типизация)."
        },
        {
          "name": "input() / print()",
          "desc": "Ввод текста с клавиатуры (всегда возвращает строку!) и вывод на экран."
        },
        {
          "name": "int('5') / str(5)",
          "desc": "Преобразование типов: чтобы сложить ввод пользователя, строку нужно перевести в `int` или `float`."
        },
        {
          "name": "f'Привет, {name}!'",
          "desc": "f-строки — самый удобный способ вставлять переменные внутрь текста."
        },
        {
          "name": "if / elif / else:",
          "desc": "Ветвление. После условия обязательно ставится двоеточие и отступ 4 пробела."
        },
        {
          "name": "for x in range(n):",
          "desc": "Цикл со счётчиком от 0 до n-1. Также умеет перебирать элементы списка напрямую."
        },
        {
          "name": "while cond:",
          "desc": "Цикл с предусловием — крутится, пока условие истинно."
        },
        {
          "name": "list [] / tuple ()",
          "desc": "`list` — изменяемый список `[1, 2, 3]`; `tuple` — неизменяемый кортеж `(1, 2, 3)`."
        },
        {
          "name": "set {} / dict {k: v}",
          "desc": "`set` — множество уникальных элементов (быстрый поиск `in` за O(1)); `dict` — словарь «ключ: значение»."
        },
        {
          "name": "[x*2 for x in nums if x>0]",
          "desc": "List Comprehension — компактное создание нового списка в одну строку."
        },
        {
          "name": "def / class / __init__",
          "desc": "`def` создаёт функцию, `class` описывает шаблон объекта (ООП), `__init__` — конструктор."
        },
        {
          "name": "with open(...) / try-except",
          "desc": "Безопасная работа с файлами (автозакрытие) и перехват ошибок, чтобы программа не падала."
        }
      ],
      "examples": [
        {
          "label": "1. Переменные и ввод",
          "title": "Первая программа: приветствие и расчёт возраста",
          "desc": "Считываем имя и год рождения. Так как input() возвращает строку, оборачиваем его в int().",
          "code": "name = input(\"Как вас зовут? \")\nbirth_year = int(input(\"Год рождения: \"))\n\nage = 2026 - birth_year\nprint(f\"Привет, {name}! Тебе примерно {age} лет.\")"
        },
        {
          "label": "2. Условия и циклы",
          "title": "Угадай число (while + if/elif/else)",
          "desc": "Цикл while повторяется, пока пользователь не угадает секретное число.",
          "code": "secret = 7\nguess = 0\n\nwhile guess != secret:\n    guess = int(input(\"Угадай число от 1 до 10: \"))\n    if guess < secret:\n        print(\"Больше!\")\n    elif guess > secret:\n        print(\"Меньше!\")\n    else:\n        print(\"Точно в цель!\")"
        },
        {
          "label": "3. Списки и функции",
          "title": "Фильтрация крупных заказов",
          "desc": "Функция принимает список цен, отбирает заказы от 1000 ₽ и возвращает сумму.",
          "code": "def sum_big_orders(orders):\n    total = 0\n    for price in orders:\n        if price >= 1000:\n            total += price\n    return total\n\nchecks = [450, 1200, 3100, 800]\nprint(\"Сумма крупных заказов:\", sum_big_orders(checks))  # 4300"
        },
        {
          "label": "4. Классы (ООП)",
          "title": "Класс «Студент» с методом подсчёта среднего балла",
          "desc": "__init__ — конструктор, который запускается при создании объекта.",
          "code": "class Student:\n    def __init__(self, name, grades):\n        self.name = name\n        self.grades = grades\n\n    def average(self):\n        return sum(self.grades) / len(self.grades)\n\nst = Student(\"Максим\", [5, 4, 5, 5])\nprint(st.name, \"— средний балл:\", st.average())  # 4.75"
        },
        {
          "label": "5. Продвинутый: словари и comprehensions",
          "title": "Генераторы списков, множества и подсчёт частоты слов",
          "desc": "Короткий и быстрый код в стиле Pythonic.",
          "code": "# 1. Квадраты чётных чисел в одну строку\nevens_sq = [x ** 2 for x in range(1, 11) if x % 2 == 0]\nprint(evens_sq)  # [4, 16, 36, 64, 100]\n\n# 2. Уникальные теги через set и подсчёт через dict\ntags = [\"sql\", \"python\", \"sql\", \"git\", \"python\"]\ncounts = {}\nfor word in tags:\n    counts[word] = counts.get(word, 0) + 1\nprint(\"Уникальные:\", set(tags))\nprint(\"Частота:\", counts)"
        },
        {
          "label": "6. Продвинутый: файлы и try/except",
          "title": "Безопасное чтение файла с обработкой ошибок",
          "desc": "Конструкция `with open` сама закроет файл, а `try/except` защитит от падения.",
          "code": "try:\n    with open(\"grades.txt\", \"r\", encoding=\"utf-8\") as f:\n        nums = [int(line.strip()) for line in f if line.strip()]\n    print(\"Средний балл:\", sum(nums) / len(nums))\nexcept FileNotFoundError:\n    print(\"Файл grades.txt не найден!\")\nexcept ValueError:\n    print(\"В файле встретилась строка, не являющаяся числом.\")"
        }
      ],
      "mistakes": [
        "Забывают перевести `input()` в число через `int()` и пытаются сложить строку с числом (`TypeError`).",
        "Забывают двоеточие «:» в конце строк с `if`, `for`, `while` и `def`.",
        "Смешивают табы и пробелы в отступах (`IndentationError`).",
        "Путают присваивание (`=`) и сравнение (`==`) в условии `if`.",
        "Используют изменяемый список (`def f(arr=[]):`) как аргумент по умолчанию — он становится общим для всех вызовов."
      ],
      "quiz": [
        {
          "q": "Что вернёт функция `input()` в Python, если пользователь введёт число `42`?",
          "options": [
            "Число int (42)",
            "Строку str ('42')",
            "Список [4, 2]"
          ],
          "answer": 1,
          "explain": "input() всегда возвращает строку. Для вычислений нужно использовать int(input())."
        },
        {
          "q": "Какие числа переберёт цикл `for i in range(3):`?",
          "options": [
            "1, 2, 3",
            "0, 1, 2",
            "0, 1, 2, 3"
          ],
          "answer": 1,
          "explain": "range(3) начинается с 0 и не включает правую границу 3."
        },
        {
          "q": "Зачем при чтении файлов используют конструкцию `with open(...) as f:`?",
          "options": [
            "Файл автоматически закроется после выхода из блока, даже при ошибке",
            "Файл сжимается",
            "Без неё файлы не открываются"
          ],
          "answer": 0,
          "explain": "Контекстный менеджер гарантирует безопасное закрытие файла."
        },
        {
          "type": "match",
          "q": "Соедините коллекцию Python с её главной особенностью:",
          "pairs": [
            {
              "left": "list [1, 2]",
              "right": "Упорядоченный изменяемый список"
            },
            {
              "left": "tuple (1, 2)",
              "right": "Неизменяемый кортеж"
            },
            {
              "left": "set {1, 2}",
              "right": "Только уникальные элементы, быстрый поиск"
            },
            {
              "left": "dict {'a': 1}",
              "right": "Пары «ключ: значение»"
            }
          ],
          "explain": "Знание 4 базовых коллекций Python — основа чистого и быстрого кода."
        },
        {
          "type": "order",
          "q": "Расставьте шаги безопасного чтения и подсчёта суммы чисел из файла в Python:",
          "items": [
            "Открыть блок try:",
            "Открыть файл через with open('data.txt', 'r') as f:",
            "Преобразовать строки в int и посчитать sum()",
            "Обработать возможную ошибку в except FileNotFoundError:"
          ],
          "explain": "Такая структура защищает программу от аварийного падения."
        }
      ]
    },
    {
      "id": "lang-cpp",
      "title": {
        "ru": "C++ — от азов (cin/cout, циклы) до памяти и STL",
        "en": "C++ — Basics to Memory & STL"
      },
      "shortTag": {
        "ru": "C++",
        "en": "C++"
      },
      "summary": {
        "ru": "Компилируемый язык со строгой типизацией и максимальной скоростью: начинаем с базового ввода/вывода, циклов и функций, а затем переходим к ссылкам, указателям, STL (`vector`, `sort`, `map`) и ООП.",
        "en": "Fast, statically typed compiled language: from basic I/O, loops, and functions to references, pointers, STL, and OOP."
      },
      "whereUsed": "Игровые движки (Unreal Engine), высоконагруженные серверы, драйверы, робототехника и олимпиадное программирование.",
      "elements": [
        {
          "name": "#include <iostream>",
          "desc": "Подключение библиотеки для работы с консолью (`cin` / `cout`)."
        },
        {
          "name": "int / long long / double / bool",
          "desc": "Строгие типы: `int` (~до 2 млрд), `long long` (64 бита для больших чисел), `double` (дробные), `bool`."
        },
        {
          "name": "std::string",
          "desc": "Строка текста (требует `#include <string>`). Для чтения строки с пробелами используют `getline(cin, s)`."
        },
        {
          "name": "cin >> x; / cout << x;",
          "desc": "Ввод данных с клавиатуры и вывод в консоль."
        },
        {
          "name": "if (a == b) { ... }",
          "desc": "Условие всегда в круглых скобках, тело блока — в фигурных."
        },
        {
          "name": "for (int i=0; i<n; i++)",
          "desc": "Цикл со счётчиком: старт, условие продолжения, шаг."
        },
        {
          "name": "int main() { return 0; }",
          "desc": "Главная функция — точка входа любой программы на C++."
        },
        {
          "name": "Указатель (int* p) vs Ссылка (int& r)",
          "desc": "Указатель хранит адрес в памяти и может быть `nullptr`; ссылка — постоянный псевдоним переменной."
        },
        {
          "name": "const T& (Конст. ссылка)",
          "desc": "Передача большого `vector` или `string` в функцию без копирования в памяти и без риска изменить оригинал."
        },
        {
          "name": "std::vector / std::unordered_map / std::sort",
          "desc": "Главные инструменты STL: динамический массив, хэш-таблица O(1) и быстрая сортировка O(n log n)."
        }
      ],
      "examples": [
        {
          "label": "1. Переменные и ввод",
          "title": "Первая программа: сумма двух чисел",
          "desc": "Объявляем переменные с указанием типа int, считываем через cin и выводим через cout.",
          "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cout << \"Введите два числа: \";\n    cin >> a >> b;\n    cout << \"Сумма: \" << (a + b) << endl;\n    return 0;\n}"
        },
        {
          "label": "2. Условия и циклы",
          "title": "Таблица умножения на 5",
          "desc": "Классический цикл for выводит 5 строк.",
          "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << \"5 * \" << i << \" = \" << (5 * i) << endl;\n    }\n    return 0;\n}"
        },
        {
          "label": "3. Вектор и функция",
          "title": "Поиск максимума в vector (передача по const &)",
          "desc": "Функция принимает вектор по константной ссылке, чтобы не копировать лишнюю память.",
          "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findMax(const vector<int>& nums) {\n    int best = nums[0];\n    for (int x : nums) {\n        if (x > best) best = x;\n    }\n    return best;\n}\n\nint main() {\n    vector<int> data = {12, 45, 7, 89, 23};\n    cout << \"Максимум: \" << findMax(data) << endl; // 89\n    return 0;\n}"
        },
        {
          "label": "4. Классы (ООП)",
          "title": "Класс «Прямоугольник» с конструктором",
          "desc": "В C++ после закрывающей скобки класса обязательно ставится точка с запятой.",
          "code": "#include <iostream>\nusing namespace std;\n\nclass Rect {\npublic:\n    double w, h;\n    Rect(double width, double height) : w(width), h(height) {}\n    double area() const { return w * h; }\n};\n\nint main() {\n    Rect r(4.5, 2.0);\n    cout << \"Площадь: \" << r.area() << endl; // 9\n    return 0;\n}"
        },
        {
          "label": "5. Продвинутый: STL sort",
          "title": "Сортировка вектора по убыванию через <algorithm>",
          "desc": "Стандартная сортировка работает за O(n log n).",
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {75, 92, 60, 88, 95};\n    sort(scores.begin(), scores.end(), greater<int>());\n\n    cout << \"Топ-3: \";\n    for (int i = 0; i < 3; i++) cout << scores[i] << \" \";\n    return 0;\n}"
        }
      ],
      "mistakes": [
        "Забывают точку с запятой «;» в конце инструкции или после определения класса.",
        "Делят два `int` (`5 / 2` даст `2`, а не `2.5` — для дроби нужно `5.0 / 2`).",
        "Переполнение `int` на больших числах (> 2.14 млрд) — используйте `long long`.",
        "Выходят за границы массива (для размера 5 допустимы индексы только от 0 до 4)."
      ],
      "quiz": [
        {
          "q": "Чему равен результат выражения `int res = 7 / 2;` в C++?",
          "options": [
            "3.5",
            "3",
            "4"
          ],
          "answer": 1,
          "explain": "При делении двух целых чисел int дробная часть отбрасывается."
        },
        {
          "q": "Какой индекс у последнего элемента массива `int arr[5];`?",
          "options": [
            "5",
            "4",
            "6"
          ],
          "answer": 1,
          "explain": "Индексы начинаются с 0: 0, 1, 2, 3, 4."
        },
        {
          "q": "Зачем передавать `std::vector<int>` в функцию как `const vector<int>& v`?",
          "options": [
            "Чтобы не копировать весь вектор в памяти и запретить его изменение",
            "Чтобы вектор отсортировался",
            "Иначе код не скомпилируется"
          ],
          "answer": 0,
          "explain": "Передача по константной ссылке экономит память и время."
        },
        {
          "type": "match",
          "q": "Соедините инструмент C++ с его задачей:",
          "pairs": [
            {
              "left": "std::vector<int>",
              "right": "Динамический массив"
            },
            {
              "left": "std::unordered_map",
              "right": "Хэш-таблица с поиском за O(1)"
            },
            {
              "left": "std::sort()",
              "right": "Сортировка за O(n log n)"
            },
            {
              "left": "long long",
              "right": "64-битное целое для очень больших чисел"
            }
          ],
          "explain": "Стандартная библиотека STL — главная сила современного C++."
        },
        {
          "type": "order",
          "q": "Расставьте этапы превращения исходного кода C++ в работающую программу:",
          "items": [
            "Препроцессор (подставляет #include и #define)",
            "Компилятор (переводит C++ в объектный код .o/.obj)",
            "Компоновщик / Linker (связывает объектные файлы в .exe)",
            "Запуск исполняемого файла с функции main()"
          ],
          "explain": "Знание этапов сборки помогает быстро понимать ошибки компилятора."
        }
      ]
    },
    {
      "id": "lang-js",
      "title": {
        "ru": "JavaScript — от азов до ES6+, DOM и async/await",
        "en": "JavaScript — Basics to ES6+, DOM & async/await"
      },
      "shortTag": {
        "ru": "JavaScript",
        "en": "JavaScript"
      },
      "summary": {
        "ru": "Главный язык браузера и Node.js: начинаем с `const`/`let`, шаблонных строк, `===`, методов массивов и классов, а затем разбираем DOM, JSON и асинхронные запросы `fetch`.",
        "en": "The language of web browsers and Node.js: variables, strict equality, array methods, classes, DOM, JSON, and async/await."
      },
      "whereUsed": "Фронтенд (React, Vue, анимации и интерактив — на нём работает и этот сайт), бэкенд (Node.js), мобильные приложения (React Native).",
      "elements": [
        {
          "name": "const / let",
          "desc": "`const` — для неизменяемых ссылок, `let` — если значение будет меняться (`var` устарел)."
        },
        {
          "name": "console.log()",
          "desc": "Вывод отладочной информации в консоль браузера (F12)."
        },
        {
          "name": "`Привет, ${name}`",
          "desc": "Шаблонная строка в обратных кавычках — удобно вставлять переменные."
        },
        {
          "name": "=== / !==",
          "desc": "Строгое сравнение (проверяет и значение, и тип)."
        },
        {
          "name": "const fn = (x) => x*2",
          "desc": "Стрелочная функция — современный короткий синтаксис."
        },
        {
          "name": "arr.map() / .filter() / .reduce()",
          "desc": "`map` преобразует каждый элемент, `filter` отбирает по условию, `reduce` сворачивает массив в сумму."
        },
        {
          "name": "{ key: 'value' } и JSON",
          "desc": "Объекты и их сериализация через `JSON.stringify()` / `JSON.parse()`."
        },
        {
          "name": "DOM (querySelector / addEventListener)",
          "desc": "Поиск элементов на странице и реакция на клики, ввод текста и клавиши."
        },
        {
          "name": "async / await и fetch()",
          "desc": "Асинхронные HTTP-запросы к серверу без вложенных коллбэков."
        }
      ],
      "examples": [
        {
          "label": "1. Переменные и строки",
          "title": "Шаблонные строки и строгое сравнение",
          "desc": "Используем const, обратные кавычки и безопасный оператор ===.",
          "code": "const user = \"Анна\";\nlet points = 85;\npoints += 15;\n\nconsole.log(`Студент: ${user}, баллы: ${points}`);\nconsole.log(points === 100); // true"
        },
        {
          "label": "2. Методы массивов",
          "title": "Отбор отличников через filter и map",
          "desc": "Комбинируем встроенные методы массивов без ручного цикла.",
          "code": "const students = [\n  { name: \"Анна\", avg: 4.8 },\n  { name: \"Иван\", avg: 3.5 },\n  { name: \"Максим\", avg: 4.3 }\n];\n\nconst names = students\n  .filter(s => s.avg >= 4.0)\n  .map(s => s.name);\n\nconsole.log(names); // [\"Анна\", \"Максим\"]"
        },
        {
          "label": "3. Классы (ООП)",
          "title": "Класс «Корзина» с подсчётом суммы через reduce",
          "desc": "Храним товары в массиве this.items и суммируем через reduce.",
          "code": "class Cart {\n  constructor() { this.items = []; }\n  add(title, price) { this.items.push({ title, price }); }\n  total() { return this.items.reduce((sum, i) => sum + i.price, 0); }\n}\n\nconst cart = new Cart();\ncart.add(\"Кофе\", 250);\ncart.add(\"Сэндвич\", 320);\nconsole.log(\"Итого:\", cart.total()); // 570"
        },
        {
          "label": "4. Продвинутый: async/await + fetch",
          "title": "Загрузка данных с API с проверкой ошибок",
          "desc": "Всегда оборачивайте `fetch` в `try/catch` и проверяйте `res.ok`.",
          "code": "async function loadUser(id) {\n  try {\n    const res = await fetch(`https://api.example.com/users/${id}`);\n    if (!res.ok) throw new Error(`HTTP ошибка: ${res.status}`);\n    const user = await res.json();\n    console.log(\"Загружен:\", user.name);\n  } catch (err) {\n    console.error(\"Ошибка загрузки:\", err.message);\n  }\n}"
        }
      ],
      "mistakes": [
        "Используют устаревшее `var` вместо `let` и `const`.",
        "Сравнивают через `==` вместо `===` (в JS `'5' == 5` вернёт `true`).",
        "Пытаются перезаписать переменную, объявленную через `const`.",
        "Забывают `await` перед `fetch()` или `res.json()` и получают `Promise {<pending>}` вместо данных."
      ],
      "quiz": [
        {
          "q": "В чём разница между `const` и `let` в JavaScript?",
          "options": [
            "const нельзя переопределить, а let можно",
            "let работает только в циклах",
            "Разницы нет"
          ],
          "answer": 0,
          "explain": "const защищает переменную от случайной перезаписи."
        },
        {
          "q": "Почему в JS рекомендуют использовать `===` вместо `==`?",
          "options": [
            "=== проверяет и значение, и тип",
            "Работает в 10 раз быстрее",
            "== запрещено"
          ],
          "answer": 0,
          "explain": "Строгое равенство исключает скрытое приведение типов."
        },
        {
          "q": "Какой тип кавычек позволяет вставлять переменные через `${x}`?",
          "options": [
            "Одинарные '...'",
            "Двойные \"...\"",
            "Обратные `...`"
          ],
          "answer": 2,
          "explain": "Обратные кавычки создают шаблонные строки."
        },
        {
          "type": "match",
          "q": "Соедините метод массива JS с его действием:",
          "pairs": [
            {
              "left": ".filter()",
              "right": "Оставляет элементы, прошедшие условие"
            },
            {
              "left": ".map()",
              "right": "Преобразует каждый элемент в новый массив"
            },
            {
              "left": ".reduce()",
              "right": "Сворачивает массив в одно значение (сумму)"
            },
            {
              "left": ".find()",
              "right": "Возвращает первый подходящий элемент"
            }
          ],
          "explain": "Эти 4 метода используются в каждом современном JS/React-проекте."
        },
        {
          "type": "order",
          "q": "Расставьте шаги безопасного GET-запроса через async/await в JS:",
          "items": [
            "Объявить async function и открыть блок try",
            "Выполнить const res = await fetch(url)",
            "Проверить if (!res.ok) throw new Error(...)",
            "Распарсить ответ: const data = await res.json()"
          ],
          "explain": "Проверка res.ok важна, так как fetch не бросает ошибку на статусы 404 или 500."
        }
      ]
    },
    {
      "id": "lang-java",
      "title": {
        "ru": "Java — от азов (main, циклы) до строгого ООП и JVM",
        "en": "Java — Basics to Strict OOP & JVM"
      },
      "shortTag": {
        "ru": "Java",
        "en": "Java"
      },
      "summary": {
        "ru": "Надёжный объектно-ориентированный язык по принципу «Написано однажды — работает везде» (JVM): базовый синтаксис, циклы, сравнение строк, 4 принципа ООП и коллекции.",
        "en": "Reliable OOP language on the JVM: basic syntax, loops, string equality, 4 pillars of OOP, and Collections."
      },
      "whereUsed": "Банковские и корпоративные системы (Spring Boot), Android-приложения, высоконагруженные микросервисы.",
      "elements": [
        {
          "name": "public class Main",
          "desc": "Класс — обязательная обёртка. Имя файла совпадает с именем `public`-класса."
        },
        {
          "name": "public static void main",
          "desc": "Стандартная точка входа программы."
        },
        {
          "name": "int / double / boolean / String",
          "desc": "Примитивы пишутся с маленькой буквы, `String` — с заглавной."
        },
        {
          "name": "System.out.println()",
          "desc": "Вывод текста в консоль с переносом строки."
        },
        {
          "name": "a.equals(b)",
          "desc": "Правильный способ сравнения строк (а не `==`, который сравнивает адреса в памяти!)."
        },
        {
          "name": "ArrayList / HashMap / HashSet",
          "desc": "Главные динамические коллекции из `java.util`."
        },
        {
          "name": "JVM / Bytecode",
          "desc": "Код `.java` компилируется в байт-код `.class` и выполняется на любой ОС внутри JVM."
        },
        {
          "name": "4 принципа ООП",
          "desc": "Инкапсуляция (`private`), Наследование (`extends`), Полиморфизм (`@Override`), Абстракция (`interface`)."
        }
      ],
      "examples": [
        {
          "label": "1. Переменные и цикл",
          "title": "Сумма чётных чисел от 1 до 20",
          "desc": "Классическая структура Java-программы с методом main.",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 20; i++) {\n            if (i % 2 == 0) sum += i;\n        }\n        System.out.println(\"Сумма чётных: \" + sum); // 110\n    }\n}"
        },
        {
          "label": "2. Классы (ООП)",
          "title": "Класс «Банковский счёт» с инкапсуляцией",
          "desc": "Поле balance скрыто (private), изменить его можно только через deposit().",
          "code": "class Account {\n    private double balance = 0;\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    public double getBalance() { return balance; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Account acc = new Account();\n        acc.deposit(1500);\n        System.out.println(\"Баланс: \" + acc.getBalance());\n    }\n}"
        },
        {
          "label": "3. Строки и HashMap",
          "title": "Правильное сравнение строк (.equals) и словарь HashMap",
          "desc": "Показываем, почему строки нельзя сравнивать через ==, и как хранить пары ключ-значение.",
          "code": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        String a = new String(\"Java\");\n        String b = new String(\"Java\");\n        System.out.println(a.equals(b)); // true (а вот a == b было бы false!)\n\n        Map<String, Integer> scores = new HashMap<>();\n        scores.put(\"Анна\", 95);\n        scores.put(\"Максим\", 90);\n        System.out.println(\"Балл Анны: \" + scores.get(\"Анна\"));\n    }\n}"
        }
      ],
      "mistakes": [
        "Сравнивают строки через `==` вместо метода `.equals()`.",
        "Пишут `string` с маленькой буквы вместо `String`.",
        "Забывают, что имя файла должно совпадать с именем `public`-класса."
      ],
      "quiz": [
        {
          "q": "Как правильно сравнить содержимое двух строк `String a` и `String b` в Java?",
          "options": [
            "a == b",
            "a.equals(b)",
            "a === b"
          ],
          "answer": 1,
          "explain": "В Java == сравнивает ссылки в памяти, а .equals() — сам текст."
        },
        {
          "q": "Какой тип данных хранит `true` или `false` в Java?",
          "options": [
            "bool",
            "boolean",
            "bit"
          ],
          "answer": 1,
          "explain": "В Java логический тип пишется полностью: boolean."
        },
        {
          "type": "match",
          "q": "Соедините принцип ООП с его смыслом в Java:",
          "pairs": [
            {
              "left": "Инкапсуляция",
              "right": "Скрытие полей (private) и доступ через методы"
            },
            {
              "left": "Наследование (extends)",
              "right": "Переиспользование свойств родительского класса"
            },
            {
              "left": "Полиморфизм (@Override)",
              "right": "Разное поведение одного метода у разных классов"
            },
            {
              "left": "Абстракция (interface)",
              "right": "Описание контракта без деталей реализации"
            }
          ],
          "explain": "4 принципа ООП — обязательный вопрос на любом экзамене по Java/C#."
        },
        {
          "type": "order",
          "q": "Расставьте шаги запуска программы на Java:",
          "items": [
            "Написать исходный код в файле Main.java",
            "Скомпилировать командой javac Main.java в байт-код Main.class",
            "Запустить виртуальную машину командой java Main",
            "JVM находит и выполняет метод public static void main"
          ],
          "explain": "Промежуточный байт-код и JVM делают Java кроссплатформенной."
        }
      ]
    },
    {
      "id": "lang-csharp",
      "title": {
        "ru": "C# и .NET — от азов до классов, свойств и LINQ",
        "en": "C# & .NET — Basics to OOP & LINQ"
      },
      "shortTag": {
        "ru": "C# / .NET",
        "en": "C# / .NET"
      },
      "summary": {
        "ru": "Современный объектно-ориентированный язык от Microsoft: начинаем с ввода/вывода, интерполяции и списков, затем переходим к свойствам, null-безопасности и мощному LINQ.",
        "en": "Modern OOP language on .NET: console I/O, string interpolation, lists, properties, null-safety, and LINQ."
      },
      "whereUsed": "Игры на движке Unity, веб-сервисы (ASP.NET Core), настольные программы под Windows (WPF), корпоративные ИС.",
      "elements": [
        {
          "name": "Console.WriteLine()",
          "desc": "Вывод строки в консоль (чтение — `Console.ReadLine()`)."
        },
        {
          "name": "int / double / bool / string",
          "desc": "Базовые типы данных (в C# и `bool`, и `string` пишутся с маленькой буквы)."
        },
        {
          "name": "var x = 10;",
          "desc": "Неявная типизация: компилятор сам подставит тип `int`."
        },
        {
          "name": "$\"Привет, {name}\"",
          "desc": "Интерполяция строк через знак `$`."
        },
        {
          "name": "Null-безопасность (?., ??)",
          "desc": "`user?.Name ?? \"Гость\"` — защита от `NullReferenceException`."
        },
        {
          "name": "List<T> / Dictionary<K, V>",
          "desc": "Обобщённые динамические коллекции (`Add`, `Remove`, `Count`)."
        },
        {
          "name": "LINQ (.Where / .Select / .OrderBy)",
          "desc": "Встроенный инструмент для фильтрации, преобразования и сортировки коллекций."
        },
        {
          "name": "public int Age { get; set; }",
          "desc": "Автосвойство класса."
        }
      ],
      "examples": [
        {
          "label": "1. Ввод и интерполяция",
          "title": "Первая программа на современном C#",
          "desc": "В .NET 6+ можно писать код сразу без громоздкой обёртки Program/Main.",
          "code": "Console.Write(\"Введите ваше имя: \");\nstring name = Console.ReadLine() ?? \"Гость\";\n\nConsole.Write(\"Ваш курс: \");\nint course = int.Parse(Console.ReadLine() ?? \"1\");\n\nConsole.WriteLine($\"Привет, {name}! Удачи на {course} курсе.\");"
        },
        {
          "label": "2. Списки и LINQ",
          "title": "Фильтрация товаров через LINQ",
          "desc": "LINQ позволяет фильтровать и суммировать списки в одну строку.",
          "code": "using System.Linq;\n\nvar prices = new List<int> { 350, 1200, 2900, 700, 1500 };\nvar expensive = prices.Where(p => p >= 1000).ToList();\n\nConsole.WriteLine($\"Дорогих: {expensive.Count}, сумма: {expensive.Sum()}\");"
        },
        {
          "label": "3. Классы и свойства",
          "title": "Класс «Товар» с автосвойствами",
          "desc": "Используем { get; set; } и конструктор.",
          "code": "class Product\n{\n    public string Name { get; set; }\n    public double Price { get; set; }\n    public Product(string name, double price) { Name = name; Price = price; }\n    public double WithDiscount(double p) => Price * (1 - p / 100.0);\n}\n\nvar laptop = new Product(\"Ноутбук\", 60000);\nConsole.WriteLine($\"{laptop.Name}: {laptop.WithDiscount(10)} ₽\");"
        },
        {
          "label": "4. Продвинутый: record и цепочка LINQ",
          "title": "Сортировка и отбор студентов через record + LINQ",
          "desc": "Современный стиль C# 10+ для лаконичных моделей данных.",
          "code": "using System.Linq;\n\nrecord Student(string Name, string Group, double Score);\n\nvar students = new List<Student>\n{\n    new(\"Анна\", \"ИВТ-21\", 4.9),\n    new(\"Иван\", \"ИВТ-21\", 3.6),\n    new(\"Максим\", \"ПИ-21\", 4.5)\n};\n\nvar topNames = students\n    .Where(s => s.Score >= 4.0)\n    .OrderByDescending(s => s.Score)\n    .Select(s => $\"{s.Name} ({s.Score})\")\n    .ToList();\n\nConsole.WriteLine(string.Join(\", \", topNames));"
        }
      ],
      "mistakes": [
        "Забывают знак `$` перед кавычками при использовании `{переменной}`.",
        "Путают `Length` (для массивов `int[]`) и `Count` (для списков `List<int>`).",
        "Забывают, что логический тип в C# называется `bool`, а не `boolean`."
      ],
      "quiz": [
        {
          "q": "Для чего в C# ставят символ `$` перед строкой `$\"Привет, {name}\"`?",
          "options": [
            "Для цены в долларах",
            "Для вставки переменных внутрь строки (интерполяция)",
            "Для константы"
          ],
          "answer": 1,
          "explain": "Интерполяция через $ подставляет значения выражений в фигурных скобках."
        },
        {
          "q": "Какой оператор в C# подставляет запасное значение, если слева `null` (`name ?? \"Гость\"`)?",
          "options": [
            "Оператор ??",
            "Оператор &&",
            "Оператор !="
          ],
          "answer": 0,
          "explain": "Null-coalescing оператор ?? защищает от пустых ссылок."
        },
        {
          "type": "match",
          "q": "Соедините конструкцию C# с её назначением:",
          "pairs": [
            {
              "left": "{ get; set; }",
              "right": "Автосвойство класса"
            },
            {
              "left": "LINQ .Where()",
              "right": "Фильтрация коллекции по условию"
            },
            {
              "left": "$\"Сумма: {x}\"",
              "right": "Интерполяция строк"
            },
            {
              "left": "List<int>",
              "right": "Динамический список целых чисел"
            }
          ],
          "explain": "Эти 4 конструкции — визитная карточка современного C#."
        },
        {
          "type": "order",
          "q": "Выстройте цепочку LINQ для получения имён топ-3 отличников:",
          "items": [
            "students (исходная коллекция)",
            ".Where(s => s.Score >= 4.5)",
            ".OrderByDescending(s => s.Score)",
            ".Take(3).Select(s => s.Name).ToList()"
          ],
          "explain": "Сначала фильтруем, затем сортируем, берём топ-3, выбираем имена и материализуем в список."
        }
      ]
    },
    {
      "id": "lang-html",
      "title": {
        "ru": "HTML5 и основы CSS — от каркаса до форм и Flexbox",
        "en": "HTML5 & CSS — Basics to Forms & Flexbox"
      },
      "shortTag": {
        "ru": "HTML5 / CSS",
        "en": "HTML5 / CSS"
      },
      "summary": {
        "ru": "Язык разметки, задающий скелет сайта: начинаем с базового каркаса, заголовков, списков, ссылок и форм, а затем добавляем блочную модель CSS (Box Model), Flexbox и адаптивность.",
        "en": "Markup language defining web page structure: basic skeleton, lists, links, forms, plus CSS Box Model and Flexbox."
      },
      "whereUsed": "Абсолютно на каждом сайте в интернете. HTML отвечает за каркас и смысл (семантику), CSS — за внешний вид, а JavaScript — за интерактивность.",
      "elements": [
        {
          "name": "<!DOCTYPE html>",
          "desc": "Говорит браузеру, что документ написан на современном HTML5."
        },
        {
          "name": "<h1> ... <h6>",
          "desc": "Заголовки от самого главного (`h1` — один на страницу) до мелкого (`h6`)."
        },
        {
          "name": "<p> / <br>",
          "desc": "Абзац текста и перенос строки."
        },
        {
          "name": "<a href='...'>",
          "desc": "Гиперссылка на другую страницу или внешний сайт."
        },
        {
          "name": "<img src='...' alt='...'>",
          "desc": "Картинка. Атрибут `alt` обязателен — описывает фото, если оно не загрузилось."
        },
        {
          "name": "<ul> / <ol> / <li>",
          "desc": "Маркированный (`ul`) и нумерованный (`ol`) списки; `li` — один пункт."
        },
        {
          "name": "<header> / <main> / <section> / <footer>",
          "desc": "Семантические блоки-контейнеры вместо бесконечных `<div>`."
        },
        {
          "name": "<form> / <input> / <button>",
          "desc": "Формы ввода данных и кнопки отправки."
        },
        {
          "name": "Box Model (padding / border / margin)",
          "desc": "`padding` — внутренний отступ, `border` — рамка, `margin` — внешний отступ."
        },
        {
          "name": "display: flex / display: grid",
          "desc": "Современные инструменты CSS для выравнивания блоков и адаптивных сеток."
        }
      ],
      "examples": [
        {
          "label": "1. Базовый каркас",
          "title": "Минимальная структура HTML5-страницы",
          "desc": "В <head> лежат настройки и заголовок вкладки, а в <body> — всё, что видит пользователь.",
          "code": "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Моя первая страница</title>\n</head>\n<body>\n  <h1>Привет, студент!</h1>\n  <p>Это мой первый сайт на HTML.</p>\n</body>\n</html>"
        },
        {
          "label": "2. Списки и ссылки",
          "title": "Навигация и список задач",
          "desc": "Атрибут target='_blank' открывает ссылку в новой вкладке.",
          "code": "<nav>\n  <a href=\"https://example.com\" target=\"_blank\">Открыть справочник</a>\n</nav>\n\n<h2>План на семестр:</h2>\n<ul>\n  <li>Разобраться с HTML и CSS</li>\n  <li>Выучить основы SQL</li>\n  <li>Сдать курсовую на 5</li>\n</ul>"
        },
        {
          "label": "3. Форма ввода",
          "title": "Форма обратной связи с валидацией",
          "desc": "Связываем <label> с <input> и задаём обязательность поля через required.",
          "code": "<form>\n  <label>Ваше имя:\n    <input type=\"text\" placeholder=\"Максим\" required>\n  </label>\n  <label>Email:\n    <input type=\"email\" placeholder=\"student@mail.ru\" required>\n  </label>\n  <button type=\"submit\">Отправить</button>\n</form>"
        },
        {
          "label": "4. Продвинутый: Flexbox-карточка",
          "title": "Адаптивная карточка на HTML5 + CSS Flexbox",
          "desc": "Используем display: flex и gap для ровных отступов.",
          "code": "<article class=\"card\">\n  <h2>Заголовок темы</h2>\n  <p>Краткое описание материала.</p>\n  <button type=\"button\">Открыть →</button>\n</article>\n\n<style>\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #dfe7e5;\n}\n</style>"
        }
      ],
      "mistakes": [
        "Забывают закрыть парный тег (например, открыли `<div>`, но не написали `</div>`).",
        "Используют `<h1>` просто чтобы сделать текст крупным, вместо CSS `font-size`.",
        "Не указывают атрибут `alt` у картинок `<img>`.",
        "Забывают `box-sizing: border-box`, из-за чего `padding` раздувает ширину блока."
      ],
      "quiz": [
        {
          "q": "В каком теге находится контент, который пользователь видит на самой странице?",
          "options": [
            "<head>",
            "<body>",
            "<meta>"
          ],
          "answer": 1,
          "explain": "В <head> хранятся метаданные, а всё видимое содержимое лежит в <body>."
        },
        {
          "q": "Какой тег создаёт нумерованный список (1, 2, 3)?",
          "options": [
            "<ul>",
            "<ol>",
            "<li>"
          ],
          "answer": 1,
          "explain": "ol (ordered list) — нумерованный список, ul — маркированный."
        },
        {
          "type": "match",
          "q": "Соедините технологию или атрибут веба с его ролью:",
          "pairs": [
            {
              "left": "HTML5",
              "right": "Структура и семантика страницы"
            },
            {
              "left": "CSS (Flexbox / Grid)",
              "right": "Стили, цвета и адаптивная сетка"
            },
            {
              "left": "JavaScript",
              "right": "Интерактивность, логика и запросы к API"
            },
            {
              "left": "alt у <img>",
              "right": "Описание картинки для доступности и SEO"
            }
          ],
          "explain": "Разделение ответственности между HTML, CSS и JS — основа современной веб-разработки."
        },
        {
          "type": "order",
          "q": "Расставьте слои CSS Box Model от самого ВНУТРЕННЕГО к самому ВНЕШНЕМУ:",
          "items": [
            "Content (текст или картинка)",
            "Padding (внутренний отступ)",
            "Border (рамка элемента)",
            "Margin (внешний отступ до соседей)"
          ],
          "explain": "Блочная модель всегда идёт изнутри наружу: Content -> Padding -> Border -> Margin."
        }
      ]
    },
    {
      "id": "algo-bigo-structures",
      "title": {
        "ru": "Алгоритмы, оценка Big-O и структуры данных",
        "en": "Algorithms, Big-O Notation & Data Structures"
      },
      "shortTag": {
        "ru": "Big-O и Структуры",
        "en": "Big-O & DS"
      },
      "summary": {
        "ru": "Как оценивать скорость программ без секундомера (нотация Big-O), чем массив отличается от списка, как работают стек, очередь, хэш-таблица и бинарный поиск.",
        "en": "Measuring algorithm efficiency with Big-O, arrays vs lists, stacks, queues, hash tables, and binary search."
      },
      "whereUsed": "Фундамент любого программирования и главный фильтр на технических собеседованиях. Выбор правильной структуры данных ускоряет программу в тысячи раз.",
      "elements": [
        {
          "name": "O(1) — Константная",
          "desc": "Мгновенно, не зависит от объёма данных: `arr[5]` или поиск по ключу в словаре."
        },
        {
          "name": "O(log n) — Логарифмическая",
          "desc": "На каждом шаге задача делится пополам: бинарный поиск в отсортированном массиве."
        },
        {
          "name": "O(n) — Линейная",
          "desc": "Один проход по всем элементам: поиск максимума, подсчёт суммы."
        },
        {
          "name": "O(n log n) — Быстрая сортировка",
          "desc": "Золотой стандарт сортировок: Merge Sort, Quick Sort, Timsort."
        },
        {
          "name": "O(n²) — Квадратичная",
          "desc": "Вложенный цикл в цикле: пузырьковая сортировка (Bubble Sort)."
        },
        {
          "name": "Стек (Stack — LIFO)",
          "desc": "«Последним пришёл — первым ушёл» (Ctrl+Z, стек вызовов функций)."
        },
        {
          "name": "Очередь (Queue — FIFO)",
          "desc": "«Первым пришёл — первым ушёл» (очередь задач, печать, обход в ширину BFS)."
        },
        {
          "name": "Хэш-таблица (Dict / Map)",
          "desc": "Хранит пары «ключ -> значение». Поиск и вставка в среднем за O(1)."
        }
      ],
      "examples": [
        {
          "label": "1. Бинарный поиск O(log n)",
          "title": "Поиск числа в отсортированном массиве",
          "desc": "Массив обязательно должен быть отсортирован.",
          "code": "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nnums = [3, 8, 15, 23, 42, 56, 91]\nprint(\"Индекс 42:\", binary_search(nums, 42))  # 4"
        },
        {
          "label": "2. Оптимизация O(n²) -> O(n)",
          "title": "Поиск двух чисел с заданной суммой (Two Sum)",
          "desc": "Замена вложенного цикла на словарь ускоряет код с O(n²) до O(n).",
          "code": "def two_sum(nums, target):\n    seen = {}\n    for i, x in enumerate(nums):\n        need = target - x\n        if need in seen:\n            return [seen[need], i]\n        seen[x] = i\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))  # [0, 1]"
        }
      ],
      "mistakes": [
        "Применяют бинарный поиск к неотсортированному массиву.",
        "Путают LIFO (Стек) и FIFO (Очередь)."
      ],
      "quiz": [
        {
          "q": "Какова временная сложность бинарного поиска в отсортированном массиве из `n` элементов?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n²)"
          ],
          "answer": 1,
          "explain": "На каждом шаге область поиска уменьшается вдвое — это O(log n)."
        },
        {
          "type": "order",
          "q": "Расставьте классы сложности Big-O от самого БЫСТРОГО к самому МЕДЛЕННОМУ:",
          "items": [
            "O(1) — Константная",
            "O(log n) — Логарифмическая",
            "O(n) — Линейная",
            "O(n log n) — Быстрая сортировка",
            "O(n²) — Квадратичная"
          ],
          "explain": "Чем ниже порядок роста, тем быстрее алгоритм работает на больших данных."
        },
        {
          "type": "match",
          "q": "Соедините структуру данных с её лучшим применением:",
          "pairs": [
            {
              "left": "Стек (Stack)",
              "right": "Кнопка «Отменить» (Ctrl+Z) и вызовы функций"
            },
            {
              "left": "Очередь (Queue)",
              "right": "Обработка заявок строго по порядку (FIFO)"
            },
            {
              "left": "Хэш-таблица (Dict/Map)",
              "right": "Мгновенный поиск по ключу за O(1)"
            },
            {
              "left": "Отсортированный массив",
              "right": "Бинарный поиск за O(log n)"
            }
          ],
          "explain": "Правильный выбор структуры данных — основа эффективного алгоритма."
        }
      ]
    }
  ]
});
})();
