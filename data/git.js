(function () {
  window.ISFORUS_SUBJECTS = window.ISFORUS_SUBJECTS || [];

  window.ISFORUS_SUBJECTS.push({
  "id": "git-github",
  "title": {
    "ru": "Git и GitHub",
    "en": "Git & GitHub"
  },
  "desc": {
    "ru": "Полный курс по контролю версий: локальные коммиты, 3 зоны и откаты (reset/revert/stash), ветки, merge/rebase и конфликты, GitHub, Pull Request, SSH-ключи и деплой на GitHub Pages.",
    "en": "Complete version control guide: local commits, 3 areas & undo (reset/revert/stash), branches, merge/rebase & conflicts, GitHub PRs, SSH keys, and GitHub Pages."
  },
  "topics": [
    {
      "id": "git-basics",
      "title": {
        "ru": "Основы Git: 3 зоны, коммиты и безопасный откат",
        "en": "Git Basics: 3 Areas, Commits & Undoing Changes"
      },
      "shortTag": {
        "ru": "Git База",
        "en": "Git Basics"
      },
      "summary": {
        "ru": "Git — «машина времени» для кода. Разбираем базовый цикл (`init`, `status`, `add`, `commit`, `log`), а также продвинутые команды спасения: `restore`, `stash`, `reset` и `revert`.",
        "en": "Git is a time machine for code: core workflow (init, status, add, commit, log) plus undo tools (restore, stash, reset, revert)."
      },
      "whereUsed": "Абсолютно в каждой IT-команде и личных проектах. Git хранит всю историю локально в скрытой папке `.git` — интернет ему не нужен, пока вы не решите отправить код на сервер.",
      "elements": [
        {
          "name": "git init",
          "desc": "Превращает обычную папку на ПК в Git-репозиторий (создаёт скрытую папку `.git`)."
        },
        {
          "name": "git status",
          "desc": "Главная команда проверки: показывает изменённые, подготовленные и неотслеживаемые файлы."
        },
        {
          "name": "git add .",
          "desc": "Добавляет изменённые файлы в зону подготовки (`Staging Area`) перед коммитом."
        },
        {
          "name": "git commit -m '...'",
          "desc": "Делает «снимок» подготовленных файлов с понятным комментарием."
        },
        {
          "name": "git log --oneline --graph",
          "desc": "Компактная история всех коммитов с их короткими хэшами (ID) и деревом веток."
        },
        {
          "name": "git diff",
          "desc": "Показывает построчно, какие строки вы изменили до `git add` (`git diff --staged` — после `git add`)."
        },
        {
          "name": "git restore file",
          "desc": "Отменяет несохранённые правки в файле и возвращает его к последнему коммиту."
        },
        {
          "name": "git stash / stash pop",
          "desc": "Временно «прячет» незаконченные правки в карман, чтобы переключить ветку, а потом возвращает их обратно."
        },
        {
          "name": "git reset --soft vs --hard",
          "desc": "`--soft HEAD~1` отменяет последний коммит, сохраняя ваш код; `--hard HEAD~1` БЕЗВОЗВРАТНО удаляет и коммит, и правки в файлах!"
        },
        {
          "name": "git revert <hash>",
          "desc": "Безопасная отмена уже опубликованного коммита: создаёт НОВЫЙ коммит с обратными изменениями, не переписывая историю."
        }
      ],
      "examples": [
        {
          "label": "1. Схема: 3 зоны Git",
          "title": "Путь файла от правки до сохранения в историю",
          "desc": "Чтобы файл попал в историю (Repository), он всегда проходит через промежуточную зону Staging (git add).",
          "svg": "<svg viewBox=\"0 0 660 190\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ag1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--svg-stroke)\" /></marker></defs><rect x=\"20\" y=\"55\" width=\"165\" height=\"75\" rx=\"8\" class=\"s-shape\" /><text x=\"102\" y=\"84\" text-anchor=\"middle\" class=\"s-title\">Working Directory</text><text x=\"102\" y=\"104\" text-anchor=\"middle\" class=\"s-small\">Ваши файлы в папке</text><line x1=\"185\" y1=\"92\" x2=\"243\" y2=\"92\" class=\"s-line\" marker-end=\"url(#ag1)\" /><text x=\"214\" y=\"82\" text-anchor=\"middle\" class=\"s-small\">git add</text><rect x=\"245\" y=\"55\" width=\"165\" height=\"75\" rx=\"8\" class=\"s-shape\" /><text x=\"327\" y=\"84\" text-anchor=\"middle\" class=\"s-title\">Staging Area</text><text x=\"327\" y=\"104\" text-anchor=\"middle\" class=\"s-small\">Зона подготовки</text><line x1=\"410\" y1=\"92\" x2=\"468\" y2=\"92\" class=\"s-line\" marker-end=\"url(#ag1)\" /><text x=\"439\" y=\"82\" text-anchor=\"middle\" class=\"s-small\">git commit</text><rect x=\"470\" y=\"55\" width=\"170\" height=\"75\" rx=\"8\" class=\"s-shape\" /><text x=\"555\" y=\"84\" text-anchor=\"middle\" class=\"s-title\">Repository (.git)</text><text x=\"555\" y=\"104\" text-anchor=\"middle\" class=\"s-small\">История коммитов</text></svg>"
        },
        {
          "label": "2. Первый запуск и коммит",
          "title": "Настройка имени и первый коммит в новом проекте",
          "desc": "Имя и email настраиваются один раз на компьютере, чтобы Git знал, кто автор правок.",
          "code": "# 1. Первичная настройка (делается 1 раз)\ngit config --global user.name \"Maxim Kalinin\"\ngit config --global user.email \"student@example.com\"\n\n# 2. Создаём репозиторий в папке проекта\ngit init\n\n# 3. Проверяем статус, добавляем файлы и делаем коммит\ngit status\ngit add .\ngit commit -m \"Создал стартовую страницу index.html\"\n\n# 4. Смотрим историю\ngit log --oneline"
        },
        {
          "label": "3. Продвинутый: откаты и stash",
          "title": "Как исправить опечатку в коммите, спрятать правки или откатиться",
          "desc": "Эти команды спасают, когда что-то пошло не по плану.",
          "code": "# Забыли добавить файл в последний локальный коммит или опечатались в сообщении:\ngit add забытый_файл.js\ngit commit --amend -m \"Исправленное сообщение коммита\"\n\n# Нужно срочно переключить ветку, а код не дописан:\ngit stash               # спрятать правки\n# ... поработали в другой ветке и вернулись ...\ngit stash pop           # вернуть правки обратно\n\n# Безопасно отменить коммит, который УЖЕ на GitHub:\ngit revert a1b2c3d"
        }
      ],
      "mistakes": [
        "Забывают выполнить `git add` перед `git commit` — в итоге Git пишет «nothing to commit».",
        "Пишут бессмысленные сообщения коммитов вроде «123», «фикс», «аааа».",
        "Запускают `git reset --hard`, не понимая, что это безвозвратно стирает незакоммиченный код.",
        "Удаляют скрытую папку `.git` — вместе с ней навсегда исчезает вся локальная история версий."
      ],
      "quiz": [
        {
          "q": "Для чего нужна команда `git add .` перед `git commit`?",
          "options": [
            "Отправляет код на GitHub",
            "Помещает изменённые файлы в зону подготовки (Staging Area)",
            "Удаляет старые коммиты"
          ],
          "answer": 1,
          "explain": "git add выбирает, какие именно изменения войдут в следующий снимок (коммит)."
        },
        {
          "q": "Чем `git revert` отличается от `git reset --hard` для уже опубликованного на GitHub коммита?",
          "options": [
            "revert безопасно создаёт новый «отменяющий» коммит, не ломая историю команды",
            "reset работает только на GitHub",
            "Разницы нет"
          ],
          "answer": 0,
          "explain": "revert сохраняет историю целостной, поэтому безопасен для общих веток."
        },
        {
          "type": "order",
          "q": "Расставьте базовые команды создания репозитория и первого коммита в правильном порядке:",
          "items": [
            "git init (создать репозиторий)",
            "git status (проверить новые файлы)",
            "git add . (добавить в Staging Area)",
            "git commit -m 'Initial commit' (зафиксировать снимок)",
            "git log --oneline (проверить историю)"
          ],
          "explain": "Это стандартный локальный цикл работы с Git."
        },
        {
          "type": "match",
          "q": "Соедините команду спасения Git с её действием:",
          "pairs": [
            {
              "left": "git restore file",
              "right": "Отменить несохранённые правки в файле"
            },
            {
              "left": "git stash",
              "right": "Временно спрятать незаконченные правки"
            },
            {
              "left": "git reset --soft HEAD~1",
              "right": "Отменить последний коммит, сохранив код"
            },
            {
              "left": "git revert <hash>",
              "right": "Создать новый коммит, отменяющий старый"
            }
          ],
          "explain": "Умение безопасно откатывать изменения — главный навык уверенной работы с Git."
        }
      ]
    },
    {
      "id": "git-branches",
      "title": {
        "ru": "Ветки, слияние (Merge), Rebase и конфликты",
        "en": "Branches, Merge, Rebase & Conflicts"
      },
      "shortTag": {
        "ru": "Ветвление",
        "en": "Branching"
      },
      "summary": {
        "ru": "Изолированная разработка в ветках: создание и переключение (`switch`), слияние (`merge`: Fast-Forward и 3-way), решение конфликтов, а также `rebase` и `cherry-pick`.",
        "en": "Isolated development in branches: switch, merge (Fast-Forward & 3-way), resolving conflicts, rebase, and cherry-pick."
      },
      "whereUsed": "В командной и одиночной разработке: главная ветка `main` всегда остаётся стабильной. Под каждую фичу или баг создают отдельную ветку, проверяют и вливают обратно.",
      "elements": [
        {
          "name": "main (master)",
          "desc": "Главная ветка проекта, в которой хранится стабильная рабочая версия."
        },
        {
          "name": "HEAD",
          "desc": "Указатель на текущую ветку и коммит, в котором вы сейчас находитесь."
        },
        {
          "name": "git branch",
          "desc": "Показывает список всех локальных веток (звёздочкой отмечена текущая)."
        },
        {
          "name": "git switch -c feat",
          "desc": "Создаёт новую ветку `feat` и сразу переключается на неё (старый аналог: `git checkout -b feat`)."
        },
        {
          "name": "git merge feat",
          "desc": "Вливает изменения из ветки `feat` в текущую ветку. Бывает Fast-Forward (просто сдвиг указателя) и 3-way (создаёт merge-коммит)."
        },
        {
          "name": "git branch -d feat",
          "desc": "Удаляет ветку после успешного слияния (`-D` — принудительное удаление)."
        },
        {
          "name": "Merge Conflict",
          "desc": "Ситуация, когда в двух ветках изменили ОДНУ И ТУ ЖЕ строку файла — Git просит выбрать правильный вариант вручную."
        },
        {
          "name": "git rebase main",
          "desc": "«Пересаживает» ваши коммиты поверх свежего `main`, делая историю линейной и красивой (НЕ используйте на общих ветках!)."
        },
        {
          "name": "git cherry-pick <hash>",
          "desc": "Точечно забирает ОДИН конкретный коммит из другой ветки в текущую."
        }
      ],
      "examples": [
        {
          "label": "1. Схема ветвления",
          "title": "Создание ветки feature и слияние обратно в main",
          "desc": "Пока в ветке feature делается новая функция, главная ветка main остаётся нетронутой.",
          "svg": "<svg viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ag2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--svg-stroke)\" /></marker></defs><line x1=\"60\" y1=\"65\" x2=\"580\" y2=\"65\" class=\"s-line\" /><text x=\"35\" y=\"70\" text-anchor=\"end\" class=\"s-title\">main</text><circle cx=\"110\" cy=\"65\" r=\"12\" class=\"s-shape\" /><text x=\"110\" y=\"42\" text-anchor=\"middle\" class=\"s-small\">C1</text><circle cx=\"230\" cy=\"65\" r=\"12\" class=\"s-shape\" /><text x=\"230\" y=\"42\" text-anchor=\"middle\" class=\"s-small\">C2</text><circle cx=\"510\" cy=\"65\" r=\"14\" class=\"s-shape\" /><text x=\"510\" y=\"40\" text-anchor=\"middle\" class=\"s-title\">Merge</text><path d=\"M 230 77 C 250 135, 270 135, 300 135 L 430 135 C 465 135, 485 135, 505 79\" class=\"s-line\" /><text x=\"215\" y=\"140\" text-anchor=\"end\" class=\"s-small\">feature</text><circle cx=\"320\" cy=\"135\" r=\"12\" class=\"s-shape\" /><text x=\"320\" y=\"164\" text-anchor=\"middle\" class=\"s-small\">F1</text><circle cx=\"420\" cy=\"135\" r=\"12\" class=\"s-shape\" /><text x=\"420\" y=\"164\" text-anchor=\"middle\" class=\"s-small\">F2</text></svg>"
        },
        {
          "label": "2. Команды работы с ветками",
          "title": "Полный цикл: создать ветку -> коммит -> влить в main",
          "desc": "Стандартный рабочий процесс разработчика.",
          "code": "# 1. Создаём и переходим в новую ветку под задачу\ngit switch -c add-dark-theme\n\n# 2. Вносим правки и делаем коммит в новой ветке\ngit add .\ngit commit -m \"Добавил тёмную тему\"\n\n# 3. Возвращаемся в main и вливаем нашу ветку\ngit switch main\ngit merge add-dark-theme\n\n# 4. Удаляем ненужную ветку\ngit branch -d add-dark-theme"
        },
        {
          "label": "3. Как решить конфликт",
          "title": "Что делать, если Git написал CONFLICT",
          "desc": "Откройте файл с конфликтом, удалите маркеры <<< === >>>, оставьте нужный код и сделайте коммит.",
          "code": "<<<<<<< HEAD (ваш код в текущей ветке)\nconst theme = \"light\";\n=======\nconst theme = \"dark\";\n>>>>>>> add-dark-theme (код из вливаемой ветки)\n\n# Оставляем нужный вариант (например, const theme = \"dark\";), сохраняем файл и:\ngit add index.html\ngit commit -m \"Решил конфликт выбора темы\"\n\n# Если передумали и хотите отменить слияние:\n# git merge --abort"
        }
      ],
      "mistakes": [
        "Пишут все эксперименты прямо в ветку `main` и ломают рабочий проект перед самой сдачей.",
        "Забывают, в какой ветке находятся, и делают коммит не туда (проверяйте через `git status`).",
        "Оставляют в коде маркеры конфликта `<<<<<<< HEAD` и `=======`, из-за чего программа перестаёт запускаться.",
        "Делают `git rebase` на уже опубликованной общей ветке — это переписывает хэши коммитов и ломает синхронизацию у коллег."
      ],
      "quiz": [
        {
          "q": "Какая команда создаёт новую ветку `login` и сразу переключает вас в неё?",
          "options": [
            "git branch login",
            "git switch -c login",
            "git merge login"
          ],
          "answer": 1,
          "explain": "git switch -c (или старый git checkout -b) создаёт ветку и сразу переходит в неё."
        },
        {
          "q": "Какая команда позволяет точечно скопировать ОДИН конкретный коммит из другой ветки в вашу текущую?",
          "options": [
            "git cherry-pick <hash>",
            "git init",
            "git clone"
          ],
          "answer": 0,
          "explain": "cherry-pick переносит ровно один выбранный коммит по его хэшу."
        },
        {
          "type": "order",
          "q": "Расставьте шаги решения Merge Conflict в правильном порядке:",
          "items": [
            "Открыть файл с маркерами <<<<<<<, =======, >>>>>>>",
            "Удалить маркеры и оставить нужный итоговый код",
            "Сохранить файл и выполнить git add <файл>",
            "Завершить слияние командой git commit"
          ],
          "explain": "После ручного редактирования конфликта всегда нужны git add и git commit."
        },
        {
          "type": "match",
          "q": "Соедините команду ветвления с её назначением:",
          "pairs": [
            {
              "left": "git switch -c feat",
              "right": "Создать ветку feat и перейти в неё"
            },
            {
              "left": "git merge feat",
              "right": "Влить ветку feat в текущую"
            },
            {
              "left": "git merge --abort",
              "right": "Отменить проблемное слияние"
            },
            {
              "left": "git branch -d feat",
              "right": "Удалить уже влитую ветку"
            }
          ],
          "explain": "Эти 4 команды покрывают 99% повседневной работы с ветками."
        }
      ]
    },
    {
      "id": "github-collab",
      "title": {
        "ru": "GitHub: Push, Pull, PR, .gitignore и GitHub Pages",
        "en": "GitHub: Push, Pull, PR, .gitignore & Pages"
      },
      "shortTag": {
        "ru": "GitHub и Деплой",
        "en": "GitHub & Deploy"
      },
      "summary": {
        "ru": "Облачная работа с репозиториями: `clone`, `push`, `pull` vs `fetch`, Pull Request и код-ревью, защита секретов через `.gitignore`, SSH-ключи и бесплатный деплой сайта на GitHub Pages.",
        "en": "Cloud collaboration: clone, push, pull vs fetch, Pull Requests & code review, .gitignore, SSH keys, and free hosting on GitHub Pages."
      },
      "whereUsed": "Хранение курсовых и пет-проектов в портфолио, командная разработка с одногруппниками и бесплатная публикация статических сайтов (вроде IS FOR US) в интернет.",
      "elements": [
        {
          "name": "git clone URL",
          "desc": "Скачивает репозиторий с GitHub к вам на компьютер со всей историей коммитов."
        },
        {
          "name": "git push",
          "desc": "Отправляет ваши локальные коммиты на сервер GitHub."
        },
        {
          "name": "git fetch vs git pull",
          "desc": "`git fetch` только скачивает информацию о новых коммитах с сервера; `git pull` = `fetch` + сразу `merge` в вашу ветку."
        },
        {
          "name": "origin",
          "desc": "Стандартное короткое имя для ссылки на ваш удалённый репозиторий на GitHub."
        },
        {
          "name": "Pull Request (PR)",
          "desc": "Запрос на GitHub: «Посмотрите мой код из ветки и влейте его в main» — основа код-ревью."
        },
        {
          "name": "Fork (Форк)",
          "desc": "Копия чужого репозитория на ваш аккаунт GitHub, чтобы вносить правки и предлагать PR."
        },
        {
          "name": ".gitignore",
          "desc": "Текстовый файл в корне проекта со списком папок и файлов, которые Git НЕ отслеживает (пароли `.env`, `node_modules`, кэш)."
        },
        {
          "name": "GitHub Pages",
          "desc": "Бесплатный хостинг от GitHub для статических сайтов (HTML/CSS/JS) прямо из ветки `main`."
        }
      ],
      "examples": [
        {
          "label": "1. Выгрузка проекта на GitHub",
          "title": "Привязываем локальную папку к новому репозиторию на GitHub",
          "desc": "Создайте пустой репозиторий на github.com, скопируйте его URL и выполните команды ниже.",
          "code": "# Привязываем удалённый репозиторий с именем origin\ngit remote add origin https://github.com/username/is-for-us.git\n\n# Переименовываем главную ветку в main (современный стандарт)\ngit branch -M main\n\n# Отправляем коммиты на GitHub (-u запоминает связку веток)\ngit push -u origin main\n\n# В дальнейшем достаточно просто:\ngit push"
        },
        {
          "label": "2. Пример .gitignore",
          "title": "Что обязательно нужно скрывать от GitHub",
          "desc": "Создайте файл с точным именем .gitignore в корне проекта, чтобы не слить пароли и лишний мусор.",
          "code": "# Секреты и пароли (НИКОГДА не пушить на GitHub!)\n.env\nsecrets.json\n\n# Тяжёлые папки с зависимостями и сборкой\nnode_modules/\n__pycache__/\ndist/\n\n# Системный мусор ОС и редакторов\n.DS_Store\n.vscode/"
        },
        {
          "label": "3. Деплой на GitHub Pages",
          "title": "Как бесплатно выложить сайт (HTML/CSS/JS) в интернет за 2 минуты",
          "desc": "Идеально подходит для проектов без бэкенда вроде IS FOR US.",
          "code": "1. Загрузите файлы проекта (index.html должен лежать в корне!) в публичный репозиторий на GitHub.\n2. Откройте репозиторий -> вкладка Settings (Настройки) -> раздел Pages слева.\n3. В пункте \"Branch\" выберите ветку `main` и папку `/ (root)`, нажмите Save.\n4. Через 1–2 минуты ваш сайт откроется по адресу:\n   https://<ваш-логин>.github.io/<имя-репозитория>/"
        }
      ],
      "mistakes": [
        "Пушат на GitHub файлы с паролями, токенами API или ключами (`.env`) — боты находят их за секунды.",
        "Забывают сделать `git pull` перед началом работы в команде, из-за чего `git push` отклоняется сервером.",
        "Путают Git (локальная программа) и GitHub (облачный сайт-хостинг).",
        "При деплое на GitHub Pages кладут `index.html` внутрь лишней подпапки вместо корня репозитория — сайт выдаёт 404."
      ],
      "quiz": [
        {
          "q": "В чём главное отличие Git от GitHub?",
          "options": [
            "Это одно и то же",
            "Git — локальная система контроля версий, а GitHub — облачный сервис для хранения и командной работы",
            "GitHub работает без Git"
          ],
          "answer": 1,
          "explain": "Git установлен на вашем ПК, а GitHub — это веб-платформа для репозиториев."
        },
        {
          "q": "Зачем в корне проекта создают файл `.gitignore`?",
          "options": [
            "Чтобы ускорить интернет",
            "Чтобы указать файлы и папки (пароли, кэш, node_modules), которые Git должен игнорировать",
            "Чтобы удалить репозиторий"
          ],
          "answer": 1,
          "explain": ".gitignore защищает репозиторий от мусора и случайной утечки секретов."
        },
        {
          "type": "order",
          "q": "Расставьте шаги командной работы через Pull Request (GitHub Flow) в правильном порядке:",
          "items": [
            "Создать новую ветку от актуального main (git switch -c feat)",
            "Сделать коммиты и отправить ветку на GitHub (git push -u origin feat)",
            "Открыть Pull Request на GitHub и пройти код-ревью",
            "Влить Pull Request в main и удалить старую ветку"
          ],
          "explain": "GitHub Flow — самый популярный и безопасный процесс командной разработки."
        },
        {
          "type": "match",
          "q": "Соедините понятие GitHub с его значением:",
          "pairs": [
            {
              "left": "git clone",
              "right": "Скачать репозиторий с GitHub целиком"
            },
            {
              "left": "git pull",
              "right": "Скачать новые коммиты и влить в текущую ветку"
            },
            {
              "left": "Pull Request (PR)",
              "right": "Запрос на проверку кода и слияние в main"
            },
            {
              "left": "GitHub Pages",
              "right": "Бесплатный хостинг статического сайта"
            }
          ],
          "explain": "Эти 4 инструмента закрывают весь путь от скачивания проекта до публикации сайта в интернете."
        }
      ]
    }
  ]
});
})();
