(function () {
  window.ISFORUS_SUBJECTS = window.ISFORUS_SUBJECTS || [];

  window.ISFORUS_SUBJECTS.push({
  "id": "networks",
  "title": {
    "ru": "Компьютеры и сети",
    "en": "Computers & Networks"
  },
  "desc": {
    "ru": "Полный курс по сетям: модель OSI и TCP/IP, IPv4 и разбиение подсетей (CIDR/VLSM), коммутация и VLAN, маршрутизация (Static/OSPF) и большой практикум в Cisco Packet Tracer.",
    "en": "Complete networking guide: OSI & TCP/IP, IPv4 & CIDR/VLSM subnetting, L2 switching & VLANs, L3 routing (Static/OSPF), and Cisco Packet Tracer labs."
  },
  "topics": [
    {
      "id": "osi-tcpip",
      "title": {
        "ru": "Модель OSI, TCP/IP, инкапсуляция и порты",
        "en": "OSI Model, TCP/IP, Encapsulation & Ports"
      },
      "shortTag": {
        "ru": "Модель OSI",
        "en": "OSI Model"
      },
      "summary": {
        "ru": "Как данные проходят 7 уровней от приложения до сигнала в проводе: инкапсуляция и декапсуляция, тройное рукопожатие TCP, сравнение TCP и UDP, ключевые порты и утилиты диагностики.",
        "en": "How data travels through 7 layers: encapsulation, TCP 3-way handshake, TCP vs UDP, well-known ports, and CLI diagnostics."
      },
      "whereUsed": "Фундамент сетевой инженерии и системного администрирования. При любой проблеме с сетью инженер проверяет уровни снизу вверх: кабель/Wi-Fi (L1) → коммутатор/MAC (L2) → IP/роутер (L3) → порт/файрвол (L4) → приложение (L7).",
      "elements": [
        {
          "name": "L7–L5 (Прикл. / Предст. / Сеанс.)",
          "desc": "В модели TCP/IP объединены в один Прикладной уровень. Протоколы: HTTP/HTTPS, DNS, SSH, FTP, SMTP, DHCP, шифрование TLS."
        },
        {
          "name": "L4 Транспортный (Сегмент)",
          "desc": "Доставка данных конкретной программе по номеру порта (0–65535). Главные протоколы: надёжный TCP и быстрый UDP."
        },
        {
          "name": "L3 Сетевой (Пакет)",
          "desc": "Логическая адресация (IPv4/IPv6) и маршрутизация между разными сетями. Устройства: маршрутизатор (Router), L3-коммутатор. Протокол ICMP (ping)."
        },
        {
          "name": "L2 Канальный (Кадр / Frame)",
          "desc": "Доставка внутри локальной сети по физическим MAC-адресам (48 бит). Устройства: коммутатор (Switch), сетевая карта (NIC). Протокол ARP."
        },
        {
          "name": "L1 Физический (Биты)",
          "desc": "Электрические импульсы, свет в оптоволокне, радиоволны Wi-Fi. Кабели (витая пара Cat5e/Cat6, оптика), разъёмы RJ-45, хабы."
        },
        {
          "name": "TCP 3-Way Handshake",
          "desc": "Установка надёжного соединения в 3 шага: Клиент шлёт `SYN` → Сервер отвечает `SYN-ACK` → Клиент подтверждает `ACK`."
        },
        {
          "name": "TCP vs UDP",
          "desc": "TCP гарантирует доставку, порядок и контроль перегрузки (сайты, файлы, SSH). UDP шлёт без подтверждения ради минимальной задержки (игры, VoIP, DNS)."
        },
        {
          "name": "Порты (Well-Known 0–1023)",
          "desc": "20/21 — FTP, 22 — SSH, 23 — Telnet, 25 — SMTP, 53 — DNS, 67/68 — DHCP, 80 — HTTP, 443 — HTTPS, 3389 — RDP."
        }
      ],
      "examples": [
        {
          "label": "1. Схема 7 уровней OSI",
          "title": "Инкапсуляция данных сверху вниз (L7 → L1)",
          "desc": "Каждый уровень оборачивает данные в свой заголовок: Данные → Сегмент → Пакет → Кадр → Биты.",
          "svg": "<svg viewBox=\"0 0 660 295\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"an2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--svg-stroke)\" /></marker></defs>\n  <text x=\"210\" y=\"20\" text-anchor=\"middle\" class=\"s-title\">7 уровней модели OSI</text>\n  <text x=\"515\" y=\"20\" text-anchor=\"middle\" class=\"s-title\">PDU / Протоколы и устройства</text>\n  <rect x=\"40\" y=\"32\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"51\" class=\"s-title\">7. Прикладной (Application)</text>\n  <text x=\"410\" y=\"51\" class=\"s-text\">Данные · HTTP/S, DNS, SSH, SMTP</text>\n  <rect x=\"40\" y=\"68\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"87\" class=\"s-title\">6. Представления (Presentation)</text>\n  <text x=\"410\" y=\"87\" class=\"s-text\">Данные · TLS/SSL, UTF-8, JSON</text>\n  <rect x=\"40\" y=\"104\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"123\" class=\"s-title\">5. Сеансовый (Session)</text>\n  <text x=\"410\" y=\"123\" class=\"s-text\">Данные · RPC, управление сессией</text>\n  <rect x=\"40\" y=\"140\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"159\" class=\"s-title\">4. Транспортный (Transport)</text>\n  <text x=\"410\" y=\"159\" class=\"s-text\">Сегмент · TCP, UDP, порты</text>\n  <rect x=\"40\" y=\"176\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"195\" class=\"s-title\">3. Сетевой (Network)</text>\n  <text x=\"410\" y=\"195\" class=\"s-text\">Пакет · IP, ICMP, Router</text>\n  <rect x=\"40\" y=\"212\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"231\" class=\"s-title\">2. Канальный (Data Link)</text>\n  <text x=\"410\" y=\"231\" class=\"s-text\">Кадр · MAC, Ethernet, Switch</text>\n  <rect x=\"40\" y=\"248\" width=\"340\" height=\"30\" rx=\"5\" class=\"s-shape\" />\n  <text x=\"55\" y=\"267\" class=\"s-title\">1. Физический (Physical)</text>\n  <text x=\"410\" y=\"267\" class=\"s-text\">Биты · Витая пара, оптика, Wi-Fi</text>\n  <line x1=\"20\" y1=\"42\" x2=\"20\" y2=\"270\" class=\"s-line\" marker-end=\"url(#an2)\" />\n</svg>"
        },
        {
          "label": "2. TCP Handshake и ARP",
          "title": "Что происходит под капотом, когда вы открываете сайт",
          "desc": "Пошаговый разбор взаимодействия DNS, ARP, TCP и HTTP.",
          "code": "1. DNS (UDP порт 53): браузер спрашивает IP для example.com -> получает 93.184.216.34.\n2. ARP (L2): ПК узнаёт MAC-адрес своего шлюза (роутера), чтобы отправить кадр.\n3. TCP Handshake (L4):\n   Клиент  ---[ SYN (seq=100) ]----------------> Сервер (порт 443)\n   Клиент  <--[ SYN-ACK (seq=300, ack=101) ]---- Сервер\n   Клиент  ---[ ACK (ack=301) ]----------------> Сервер\n4. TLS Handshake (L6): согласование ключей шифрования.\n5. HTTP GET / (L7): передача зашифрованного веб-запроса и получение HTML."
        },
        {
          "label": "3. Утилиты диагностики (CLI)",
          "title": "Команды проверки сети на всех уровнях OSI",
          "desc": "Работают в реальной Windows/Linux и в консоли ПК внутри Cisco Packet Tracer.",
          "code": "# Проверка IP, маски, шлюза и DNS\nipconfig /all             # Windows (в Linux: ip a && ip route)\n\n# Проверка доступности на уровне L3 (ICMP)\nping 192.168.10.1\nping -t 8.8.8.8           # Непрерывный пинг (остановка: Ctrl+C)\n\n# Трассировка маршрута через все промежуточные роутеры\ntracert 8.8.8.8           # Windows (в Linux: traceroute 8.8.8.8)\n\n# Проверка DNS (L7) и таблицы ARP (L2)\nnslookup ya.ru\narp -a\n\n# Список открытых портов и активных TCP/UDP соединений (L4)\nnetstat -ano              # Windows (в Linux: ss -tulnp)"
        }
      ],
      "mistakes": [
        "Путают коммутатор (Switch — L2, MAC-адреса) и маршрутизатор (Router — L3, IP-адреса).",
        "Считают, что UDP «устарел» — на самом деле он незаменим в видеозвонках, играх, DNS и современном протоколе HTTP/3 (QUIC).",
        "Забывают, что `ping` использует протокол ICMP (уровень L3), а не TCP/UDP, и у него нет номера порта."
      ],
      "quiz": [
        {
          "q": "На каком уровне модели OSI работает маршрутизатор (Router) и протокол IP?",
          "options": [
            "L2 — Канальный",
            "L3 — Сетевой",
            "L4 — Транспортный"
          ],
          "answer": 1,
          "explain": "Маршрутизаторы пересылают пакеты между сетями по IP-адресам на 3-м уровне."
        },
        {
          "q": "Какой стандартный порт использует протокол SSH для защищённого удалённого управления сервером?",
          "options": [
            "21",
            "22",
            "80"
          ],
          "answer": 1,
          "explain": "SSH работает на порту 22, FTP — 21, HTTP — 80, HTTPS — 443."
        },
        {
          "type": "order",
          "q": "Расставьте шаги инкапсуляции данных при отправке сверху вниз (от приложения к кабелю):",
          "items": [
            "Данные приложения (L7: HTTP-запрос)",
            "Сегмент (L4: добавляются порты TCP/UDP)",
            "Пакет (L3: добавляются IP отправителя и получателя)",
            "Кадр / Frame (L2: добавляются MAC-адреса и FCS)",
            "Биты (L1: передача сигнала в кабель/Wi-Fi)"
          ],
          "explain": "При отправке данные инкапсулируются сверху вниз: Данные → Сегмент → Пакет → Кадр → Биты."
        },
        {
          "type": "match",
          "q": "Соедините протокол с его стандартным портом:",
          "pairs": [
            {
              "left": "HTTP",
              "right": "Порт 80"
            },
            {
              "left": "HTTPS",
              "right": "Порт 443"
            },
            {
              "left": "DNS",
              "right": "Порт 53"
            },
            {
              "left": "SSH",
              "right": "Порт 22"
            }
          ],
          "explain": "Эти 4 порта обязан знать наизусть каждый IT-специалист."
        }
      ]
    },
    {
      "id": "ip-subnetting",
      "title": {
        "ru": "IPv4, маски подсетей (CIDR / VLSM), NAT и DHCP",
        "en": "IPv4, Subnetting (CIDR / VLSM), NAT & DHCP"
      },
      "shortTag": {
        "ru": "IP и Подсети",
        "en": "IP & Subnets"
      },
      "summary": {
        "ru": "Полный разбор IPv4-адресации: двоичная структура, быстрый расчёт подсетей по CIDR и VLSM, приватные («серые») и публичные («белые») адреса, работа NAT/PAT и процесс DHCP DORA.",
        "en": "Complete IPv4 addressing: binary masks, CIDR/VLSM subnetting, private vs public IPs, NAT/PAT, and DHCP DORA."
      },
      "whereUsed": "При проектировании корпоративных сетей, настройке роутеров в Cisco Packet Tracer и сдаче экзаменов CCNA / сетевых зачётов.",
      "elements": [
        {
          "name": "IPv4 (32 бита = 4 октета)",
          "desc": "4 числа от 0 до 255 через точку. Каждое число — 8 бит (1 байт), например `192.168.10.1`."
        },
        {
          "name": "Маска подсети (CIDR)",
          "desc": "Число единиц слева: `/24` = `255.255.255.0`. Формула рабочих хостов: `2^(32 - префикс) - 2`."
        },
        {
          "name": "Network ID и Broadcast",
          "desc": "Самый первый адрес подсети — адрес самой сети; самый последний — широковещательный (всем). Их НЕЛЬЗЯ назначать устройствам!"
        },
        {
          "name": "VLSM (Маска переменной длины)",
          "desc": "Разбиение сети на подсети РАЗНОГО размера под реальные нужды отделов (например, `/25` на 100 ПК, `/27` на 20 ПК, `/30` на связь роутеров)."
        },
        {
          "name": "Частные IP (RFC 1918)",
          "desc": "Только для локальных сетей: `10.0.0.0/8`, `172.16.0.0/12` (172.16–172.31), `192.168.0.0/16`. Также `127.0.0.0/8` — localhost, `169.254.0.0/16` — APIPA (нет DHCP)."
        },
        {
          "name": "NAT / PAT (Overload)",
          "desc": "Трансляция адресов на роутере: переводит локальные «серые» IP всех ПК офиса в один «белый» IP провайдера, различая сессии по номерам портов (PAT)."
        },
        {
          "name": "DHCP (Процесс DORA)",
          "desc": "Автовыдача IP, маски, шлюза и DNS в 4 шага: Discover (клиент ищет) → Offer (сервер предлагает) → Request (клиент просит) → Ack (сервер подтверждает)."
        }
      ],
      "examples": [
        {
          "label": "1. Таблица масок CIDR",
          "title": "Шпаргалка по самым частым маскам подсетей",
          "desc": "Запомните «шаг блока» (256 минус последний октет маски) — это позволяет считать подсети в уме за 5 секунд.",
          "code": "Префикс | Маска             | Всего адресов | Хостов (ПК) | Где применяется\n--------+-------------------+---------------+-------------+---------------------------\n/24     | 255.255.255.0     | 256           | 254         | Стандартная LAN\n/25     | 255.255.255.128   | 128           | 126         | Половина /24 (крупный отдел)\n/26     | 255.255.255.192   | 64            | 62          | Средний отдел (4 подсети)\n/27     | 255.255.255.224   | 32            | 30          | Небольшой офис / класс\n/28     | 255.255.255.240   | 16            | 14          | Серверная подсеть\n/30     | 255.255.255.252   | 4             | 2           | Канал Роутер <-> Роутер"
        },
        {
          "label": "2. Пример VLSM-разбиения",
          "title": "Делим сеть 192.168.10.0/24 на 3 отдела разного размера",
          "desc": "Золотое правило VLSM: ВСЕГДА начинайте выделять адреса с самого БОЛЬШОГО отдела!",
          "code": "Дано: 192.168.10.0/24. Нужно: Отдел А (100 ПК), Отдел Б (25 ПК), Линк R1-R2 (2 IP).\n\n1. Отдел А (100 ПК -> берём блок 128 = /25):\n   Сеть: 192.168.10.0/25 | Хосты: .1 — .126 | Broadcast: .127\n\n2. Отдел Б (25 ПК -> берём блок 32 = /27, начинаем сразу после .127):\n   Сеть: 192.168.10.128/27 | Хосты: .129 — .158 | Broadcast: .159\n\n3. Линк R1-R2 (2 IP -> берём блок 4 = /30, начинаем сразу после .159):\n   Сеть: 192.168.10.160/30 | Хосты: .161 — .162 | Broadcast: .163"
        }
      ],
      "mistakes": [
        "Назначают компьютеру адрес сети (например, `.128` в `/27`) или Broadcast (`.159`).",
        "При VLSM начинают делить с самой маленькой подсети вместо самой большой — адреса перекрываются.",
        "Видят на ПК адрес `169.254.x.x` (APIPA) и не понимают, что это значит — это сигнал, что компьютер не смог достучаться до DHCP-сервера."
      ],
      "quiz": [
        {
          "q": "Сколько рабочих хостов (ПК) поместится в подсети с маской `/26` (`255.255.255.192`)?",
          "options": [
            "64",
            "62",
            "30"
          ],
          "answer": 1,
          "explain": "2^(32-26) - 2 = 64 - 2 = 62 хоста."
        },
        {
          "q": "На компьютере в офисе появился IP-адрес `169.254.45.12`. Что это означает?",
          "options": [
            "Компьютер получил «белый» IP",
            "Компьютер не смог получить адрес от DHCP-сервера и назначил себе APIPA",
            "В сети включён IPv6"
          ],
          "answer": 1,
          "explain": "Диапазон 169.254.0.0/16 (APIPA) назначается ОС автоматически при недоступности DHCP."
        },
        {
          "type": "order",
          "q": "Расставьте 4 шага получения IP-адреса по протоколу DHCP (процесс DORA) в правильном порядке:",
          "items": [
            "DHCP Discover (клиент рассылает широковещательный поиск сервера)",
            "DHCP Offer (сервер предлагает свободный IP-адрес)",
            "DHCP Request (клиент запрашивает предложенный IP)",
            "DHCP Acknowledge / ACK (сервер подтверждает выдачу адреса)"
          ],
          "explain": "Легко запомнить по аббревиатуре D-O-R-A: Discover, Offer, Request, Ack."
        },
        {
          "type": "match",
          "q": "Соедините маску CIDR с количеством доступных хостов:",
          "pairs": [
            {
              "left": "/24 (255.255.255.0)",
              "right": "254 хоста"
            },
            {
              "left": "/25 (255.255.255.128)",
              "right": "126 хостов"
            },
            {
              "left": "/27 (255.255.255.224)",
              "right": "30 хостов"
            },
            {
              "left": "/30 (255.255.255.252)",
              "right": "2 хоста (линк между роутерами)"
            }
          ],
          "explain": "Формула всегда одна: 2^(32 - маска) - 2."
        }
      ]
    },
    {
      "id": "switching-vlans",
      "title": {
        "ru": "Коммутация (L2), VLAN, Trunk (802.1Q) и STP",
        "en": "L2 Switching, VLANs, Trunking (802.1Q) & STP"
      },
      "shortTag": {
        "ru": "Коммутация и VLAN",
        "en": "Switching & VLAN"
      },
      "summary": {
        "ru": "Как коммутатор (Switch) изучает MAC-адреса, зачем дробить сеть на виртуальные локальные сети (VLAN), чем Access-порт отличается от Trunk и как протокол STP спасает от петель.",
        "en": "How switches learn MAC addresses, segmenting LANs with VLANs, Access vs Trunk (802.1Q), and preventing loops with STP."
      },
      "whereUsed": "В любой офисной и университетской сети, где на одном физическом коммутаторе нужно изолировать трафик студентов, бухгалтерии, Wi-Fi и серверов.",
      "elements": [
        {
          "name": "MAC-таблица (CAM)",
          "desc": "Таблица в памяти коммутатора: «Порт Fa0/1 → MAC-адрес AA:BB:...». Заполняется автоматически по адресу ОТПРАВИТЕЛЯ."
        },
        {
          "name": "Flooding (Рассылка)",
          "desc": "Если MAC получателя ещё неизвестен коммутатору, он отправляет кадр на ВСЕ порты, кроме того, откуда кадр пришёл."
        },
        {
          "name": "VLAN (Virtual LAN)",
          "desc": "Логическое разделение одного физического свитча на несколько изолированных сетей (отдельные широковещательные домены)."
        },
        {
          "name": "Access-порт",
          "desc": "Порт для конечного устройства (ПК, принтер). Принадлежит строго ОДНОМУ VLAN и передаёт нетегированный трафик."
        },
        {
          "name": "Trunk-порт (IEEE 802.1Q)",
          "desc": "Магистральный порт между свитчами или к роутеру. Передаёт трафик СРАЗУ НЕСКОЛЬКИХ VLAN, добавляя 4-байтный тег с номером VLAN."
        },
        {
          "name": "Router-on-a-Stick",
          "desc": "Схема маршрутизации между VLAN через один физический порт роутера, разбитый на логические подинтерфейсы (`G0/0.10`, `G0/0.20`)."
        },
        {
          "name": "STP (Spanning Tree Protocol)",
          "desc": "Защищает сеть от «широковещательного шторма» (петель), автоматически блокируя избыточный резервный линк между свитчами."
        }
      ],
      "examples": [
        {
          "label": "1. Access и Trunk на Switch",
          "title": "Настройка VLAN 10 (Студенты), VLAN 20 (Преподаватели) и Trunk",
          "desc": "Порты к ПК делаем Access, а порт к роутеру или соседнему свитчу — Trunk.",
          "code": "Switch> enable\nSwitch# configure terminal\n\n! Создаём два VLAN\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name STUDENTS\nSwitch(config-vlan)# vlan 20\nSwitch(config-vlan)# name TEACHERS\nSwitch(config-vlan)# exit\n\n! Порты Fa0/1–Fa0/10 отдаём студентам (Access)\nSwitch(config)# interface range fa0/1 - 10\nSwitch(config-if-range)# switchport mode access\nSwitch(config-if-range)# switchport access vlan 10\nSwitch(config-if-range)# exit\n\n! Порт G0/1 к роутеру делаем магистральным (Trunk)\nSwitch(config)# interface g0/1\nSwitch(config-if)# switchport mode trunk\nSwitch(config-if)# end\nSwitch# show vlan brief"
        },
        {
          "label": "2. Router-on-a-Stick",
          "title": "Маршрутизация между VLAN 10 и VLAN 20 на одном порту роутера",
          "desc": "На физическом порту G0/0 IP не задаётся — его просто включают (`no shutdown`), а IP задают на подинтерфейсах.",
          "code": "Router(config)# interface g0/0\nRouter(config-if)# no shutdown\nRouter(config-if)# exit\n\n! Подинтерфейс для VLAN 10\nRouter(config)# interface g0/0.10\nRouter(config-subif)# encapsulation dot1Q 10\nRouter(config-subif)# ip address 192.168.10.1 255.255.255.0\n\n! Подинтерфейс для VLAN 20\nRouter(config)# interface g0/0.20\nRouter(config-subif)# encapsulation dot1Q 20\nRouter(config-subif)# ip address 192.168.20.1 255.255.255.0"
        }
      ],
      "mistakes": [
        "Забывают перевести порт свитча, идущий к роутеру, в режим `switchport mode trunk` — тогда работает только VLAN 1.",
        "В Router-on-a-Stick пытаются задать IP на подинтерфейсе ДО команды `encapsulation dot1Q <id>` — Cisco IOS выдаст ошибку.",
        "Соединяют два свитча двумя кабелями при выключенном STP — сеть мгновенно «ложится» от широковещательного шторма."
      ],
      "quiz": [
        {
          "q": "Какой режим порта коммутатора нужно настроить для линии между двумя коммутаторами, по которой ходит трафик сразу от VLAN 10, 20 и 30?",
          "options": [
            "Access",
            "Trunk (802.1Q)",
            "Shutdown"
          ],
          "answer": 1,
          "explain": "Trunk-порт передаёт тегированный трафик нескольких VLAN по одному кабелю."
        },
        {
          "q": "От какой критической проблемы защищает протокол STP (Spanning Tree Protocol)?",
          "options": [
            "От подбора паролей",
            "От коммутационных петель и широковещательного шторма",
            "От нехватки IP-адресов"
          ],
          "answer": 1,
          "explain": "STP логически блокирует избыточные связи, чтобы кадры не зацикливались бесконечно."
        },
        {
          "type": "match",
          "q": "Соедините понятие L2-коммутации с его описанием:",
          "pairs": [
            {
              "left": "Access-порт",
              "right": "Порт для ПК, строго один VLAN"
            },
            {
              "left": "Trunk-порт (802.1Q)",
              "right": "Передаёт несколько VLAN с тегами"
            },
            {
              "left": "MAC-таблица",
              "right": "Связка «номер порта ↔ MAC-адрес»"
            },
            {
              "left": "STP",
              "right": "Защита от петель между свитчами"
            }
          ],
          "explain": "Это четыре кита настройки коммутаторов уровня доступа."
        },
        {
          "type": "order",
          "q": "Расставьте шаги настройки подинтерфейса Router-on-a-Stick для VLAN 10:",
          "items": [
            "Включить физический порт (interface g0/0 -> no shutdown)",
            "Создать подинтерфейс (interface g0/0.10)",
            "Включить тегирование (encapsulation dot1Q 10)",
            "Назначить IP-адрес шлюза (ip address 192.168.10.1 255.255.255.0)"
          ],
          "explain": "Сначала поднимается физический порт, затем на подинтерфейсе обязательно включается dot1Q и только после этого задаётся IP."
        }
      ]
    },
    {
      "id": "routing-protocols",
      "title": {
        "ru": "Маршрутизация (L3): Static, Default Route и OSPF",
        "en": "L3 Routing: Static, Default Route & OSPF"
      },
      "shortTag": {
        "ru": "Маршрутизация",
        "en": "Routing"
      },
      "summary": {
        "ru": "Как маршрутизатор выбирает путь для пакета: таблица маршрутизации, правило Longest Prefix Match, статические маршруты, маршрут по умолчанию (`0.0.0.0/0`), динамическая маршрутизация OSPF и административная дистанция.",
        "en": "How routers forward packets: routing table, Longest Prefix Match, static & default routes, OSPF, and Administrative Distance."
      },
      "whereUsed": "В сетях с двумя и более маршрутизаторами, филиальных сетях и при выходе локальной сети в интернет.",
      "elements": [
        {
          "name": "Connected (C) и Local (L)",
          "desc": "Сети, подключённые напрямую к активным портам роутера — появляются в таблице маршрутизации автоматически."
        },
        {
          "name": "Static Route (S)",
          "desc": "Маршрут, прописанный вручную: `ip route <сеть> <маска> <next-hop IP>`. Надёжно для малых сетей."
        },
        {
          "name": "Default Route (0.0.0.0/0)",
          "desc": "«Шлюз последней надежды» (Gateway of Last Resort): куда слать пакеты, если точной сети нет в таблице (обычно — к провайдеру)."
        },
        {
          "name": "Longest Prefix Match",
          "desc": "Если пакет подходит под два маршрута (например, `/24` и `/16`), роутер ВСЕГДА выбирает более точный (с большей маской `/24`)."
        },
        {
          "name": "OSPF (Link-State)",
          "desc": "Популярный протокол динамической маршрутизации внутри компании: строит карту всей сети и ищет кратчайший путь по алгоритму Дейкстры (метрика — скорость канала Cost)."
        },
        {
          "name": "BGP",
          "desc": "Протокол внешней маршрутизации — «клей всего интернета», соединяющий автономные системы разных провайдеров."
        },
        {
          "name": "Administrative Distance (AD)",
          "desc": "Степень доверия источнику маршрута (чем МЕНЬШЕ, тем главнее): Connected = 0, Static = 1, OSPF = 110, RIP = 120."
        }
      ],
      "examples": [
        {
          "label": "1. Статика и Default Route",
          "title": "Настройка статических маршрутов на роутере R1",
          "desc": "Указываем путь к удалённой подсети филиала и маршрут по умолчанию в интернет.",
          "code": "! Статический маршрут к сети 192.168.30.0/24 через соседа 10.0.0.2\nR1(config)# ip route 192.168.30.0 255.255.255.0 10.0.0.2\n\n! Маршрут по умолчанию (всё остальное -> провайдеру 203.0.113.1)\nR1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1\n\n! Проверка таблицы маршрутизации\nR1# show ip route"
        },
        {
          "label": "2. Динамика: OSPF",
          "title": "Включение OSPF Area 0 на роутере Cisco",
          "desc": "В OSPF используется обратная маска (Wildcard Mask): для `/24` это `0.0.0.255`.",
          "code": "R1(config)# router ospf 1\nR1(config-router)# router-id 1.1.1.1\nR1(config-router)# network 192.168.10.0 0.0.0.255 area 0\nR1(config-router)# network 10.0.0.0 0.0.0.3 area 0\nR1(config-router)# passive-interface g0/0\nR1(config-router)# end\n\n! Проверка соседей OSPF\nR1# show ip ospf neighbor"
        }
      ],
      "mistakes": [
        "Прописывают статический маршрут только в одну сторону (от R1 к R2), забывая про обратный маршрут от R2 к R1 — пакет уходит, а ответ не возвращается!",
        "В команде `network` для OSPF пишут обычную маску `255.255.255.0` вместо обратной маски `0.0.0.255`."
      ],
      "quiz": [
        {
          "q": "В таблице маршрутизации есть два подходящих маршрута: `10.1.0.0/16` и `10.1.5.0/24`. Какой выберет роутер для пакета на `10.1.5.20`?",
          "options": [
            "10.1.0.0/16",
            "10.1.5.0/24 (правило Longest Prefix Match)",
            "Случайный"
          ],
          "answer": 1,
          "explain": "Роутер всегда выбирает маршрут с наиболее длинным совпадением префикса (/24 точнее, чем /16)."
        },
        {
          "q": "Какой маршрут используется как «маршрут по умолчанию» (для выхода в интернет)?",
          "options": [
            "127.0.0.1/8",
            "0.0.0.0/0 (0.0.0.0 0.0.0.0)",
            "255.255.255.255"
          ],
          "answer": 1,
          "explain": "0.0.0.0/0 совпадает с любым IPv4-адресом, если не нашлось более точного маршрута."
        },
        {
          "type": "match",
          "q": "Соедините источник маршрута с его Administrative Distance (AD) в Cisco IOS:",
          "pairs": [
            {
              "left": "Directly Connected",
              "right": "AD = 0"
            },
            {
              "left": "Static Route",
              "right": "AD = 1"
            },
            {
              "left": "OSPF",
              "right": "AD = 110"
            },
            {
              "left": "RIP",
              "right": "AD = 120"
            }
          ],
          "explain": "Чем меньше число AD, тем выше доверие маршрутизатора к этому маршруту."
        },
        {
          "type": "order",
          "q": "Расставьте шаги поиска маршрута внутри роутера при получении IP-пакета:",
          "items": [
            "Принять кадр на порту и снять L2-заголовок (декапсуляция)",
            "Прочитать IP-адрес назначения в L3-заголовке",
            "Найти наилучшее совпадение в таблице маршрутизации (Longest Prefix Match)",
            "Упаковать пакет в новый L2-кадр и отправить через выходной интерфейс"
          ],
          "explain": "На каждом хопе L2-заголовок (MAC) переписывается заново, а L3-адреса (IP) остаются прежними."
        }
      ]
    },
    {
      "id": "cisco-packet-tracer",
      "title": {
        "ru": "Большой практикум в Cisco Packet Tracer (CLI)",
        "en": "Cisco Packet Tracer Full Lab Guide (CLI)"
      },
      "shortTag": {
        "ru": "Packet Tracer",
        "en": "Packet Tracer"
      },
      "summary": {
        "ru": "Пошаговое руководство по выполнению лабораторных работ в Cisco Packet Tracer: выбор кабелей, режимы консоли IOS, настройка интерфейсов, DHCP, базовая безопасность и чек-лист отладки.",
        "en": "Hands-on Cisco Packet Tracer lab guide: cabling, IOS modes, interface setup, DHCP, basic hardening, and troubleshooting checklist."
      },
      "whereUsed": "На лабораторных работах и экзаменах по компьютерным сетям. Команды Cisco IOS работают идентично и в симуляторе, и на настоящем железе Cisco.",
      "elements": [
        {
          "name": "Прямой кабель (Straight-Through)",
          "desc": "Соединяет РАЗНЫЕ устройства: PC ↔ Switch, Switch ↔ Router."
        },
        {
          "name": "Кроссовер (Cross-Over)",
          "desc": "Соединяет ОДИНАКОВЫЕ устройства: Switch ↔ Switch, Router ↔ Router, PC ↔ PC, PC ↔ Router."
        },
        {
          "name": "Router> / Router# / (config)#",
          "desc": "3 режима IOS: пользовательский (`>`), привилегированный (`#` через `enable`), глобальной настройки (`(config)#` через `conf t`)."
        },
        {
          "name": "no shutdown",
          "desc": "КРИТИЧЕСКАЯ команда: на роутерах Cisco все порты выключены по умолчанию (красные треугольники)."
        },
        {
          "name": "do show ip int brief",
          "desc": "Показывает статус всех портов (`up/up`) и их IP-адреса из любого режима настройки."
        },
        {
          "name": "write memory (wr)",
          "desc": "Сохраняет текущую конфигурацию (`running-config`) в постоянную память (`startup-config`)."
        },
        {
          "name": "enable secret PASS",
          "desc": "Устанавливает зашифрованный пароль на вход в привилегированный режим."
        }
      ],
      "examples": [
        {
          "label": "1. Топология лабораторной",
          "title": "Классическая схема: 2 подсети через 1 маршрутизатор",
          "desc": "Слева подсеть 192.168.10.0/24 (порт G0/0), справа 192.168.20.0/24 (порт G0/1).",
          "svg": "<svg viewBox=\"0 0 680 265\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"an3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--svg-stroke)\" /></marker></defs>\n  <rect x=\"14\" y=\"18\" width=\"235\" height=\"225\" rx=\"8\" class=\"s-dash\" />\n  <text x=\"131\" y=\"38\" text-anchor=\"middle\" class=\"s-small\">Подсеть A: 192.168.10.0/24</text>\n  <rect x=\"30\" y=\"58\" width=\"110\" height=\"52\" rx=\"6\" class=\"s-shape\" />\n  <text x=\"85\" y=\"80\" text-anchor=\"middle\" class=\"s-title\">PC0 (VLAN 10)</text>\n  <text x=\"85\" y=\"98\" text-anchor=\"middle\" class=\"s-small\">192.168.10.10</text>\n  <rect x=\"30\" y=\"168\" width=\"110\" height=\"52\" rx=\"6\" class=\"s-shape\" />\n  <text x=\"85\" y=\"190\" text-anchor=\"middle\" class=\"s-title\">PC1 (VLAN 10)</text>\n  <text x=\"85\" y=\"208\" text-anchor=\"middle\" class=\"s-small\">192.168.10.11</text>\n  <rect x=\"165\" y=\"113\" width=\"72\" height=\"50\" rx=\"6\" class=\"s-shape\" />\n  <text x=\"201\" y=\"135\" text-anchor=\"middle\" class=\"s-title\">Switch0</text>\n  <text x=\"201\" y=\"152\" text-anchor=\"middle\" class=\"s-small\">2960</text>\n  <line x1=\"140\" y1=\"84\" x2=\"165\" y2=\"128\" class=\"s-line\" />\n  <line x1=\"140\" y1=\"194\" x2=\"165\" y2=\"148\" class=\"s-line\" />\n  <circle cx=\"340\" cy=\"138\" r=\"36\" class=\"s-shape\" />\n  <text x=\"340\" y=\"134\" text-anchor=\"middle\" class=\"s-title\">Router0</text>\n  <text x=\"340\" y=\"150\" text-anchor=\"middle\" class=\"s-small\">2911</text>\n  <line x1=\"237\" y1=\"138\" x2=\"304\" y2=\"138\" class=\"s-line\" />\n  <text x=\"270\" y=\"128\" text-anchor=\"middle\" class=\"s-small\">G0/0</text>\n  <text x=\"270\" y=\"156\" text-anchor=\"middle\" class=\"s-small\">.10.1</text>\n  <rect x=\"430\" y=\"18\" width=\"235\" height=\"225\" rx=\"8\" class=\"s-dash\" />\n  <text x=\"547\" y=\"38\" text-anchor=\"middle\" class=\"s-small\">Подсеть B: 192.168.20.0/24</text>\n  <rect x=\"444\" y=\"113\" width=\"72\" height=\"50\" rx=\"6\" class=\"s-shape\" />\n  <text x=\"480\" y=\"135\" text-anchor=\"middle\" class=\"s-title\">Switch1</text>\n  <text x=\"480\" y=\"152\" text-anchor=\"middle\" class=\"s-small\">2960</text>\n  <line x1=\"376\" y1=\"138\" x2=\"444\" y2=\"138\" class=\"s-line\" />\n  <text x=\"410\" y=\"128\" text-anchor=\"middle\" class=\"s-small\">G0/1</text>\n  <text x=\"410\" y=\"156\" text-anchor=\"middle\" class=\"s-small\">.20.1</text>\n  <rect x=\"542\" y=\"110\" width=\"110\" height=\"56\" rx=\"6\" class=\"s-shape\" />\n  <text x=\"597\" y=\"134\" text-anchor=\"middle\" class=\"s-title\">Web Server</text>\n  <text x=\"597\" y=\"152\" text-anchor=\"middle\" class=\"s-small\">192.168.20.10</text>\n  <line x1=\"516\" y1=\"138\" x2=\"542\" y2=\"138\" class=\"s-line\" />\n</svg>"
        },
        {
          "label": "2. Полный конфиг роутера",
          "title": "Порты + DHCP + защита паролем + сохранение",
          "desc": "Готовый шаблон, который можно адаптировать под любую типовую лабораторную.",
          "code": "Router> enable\nRouter# configure terminal\nRouter(config)# hostname R1\nRouter(config)# enable secret cisco123\n\n! Левый порт G0/0 (шлюз Подсети A)\nR1(config)# interface g0/0\nR1(config-if)# ip address 192.168.10.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# exit\n\n! Правый порт G0/1 (шлюз Подсети B)\nR1(config)# interface g0/1\nR1(config-if)# ip address 192.168.20.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# exit\n\n! DHCP для Подсети A\nR1(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.10\nR1(config)# ip dhcp pool LAN_A\nR1(dhcp-config)# network 192.168.10.0 255.255.255.0\nR1(dhcp-config)# default-router 192.168.10.1\nR1(dhcp-config)# dns-server 8.8.8.8\nR1(dhcp-config)# end\nR1# write memory"
        },
        {
          "label": "3. Чек-лист: не идёт Ping",
          "title": "5 команд диагностики в Cisco IOS",
          "desc": "Если пакеты не доходят — проверьте эти 5 пунктов по порядку.",
          "code": "1. show ip interface brief   -> Все нужные порты должны быть \"up / up\"\n2. show ip route             -> Знает ли роутер про обе подсети?\n3. show running-config       -> Нет ли опечатки в IP или маске?\n4. На PC0 и Server           -> Прописан ли Default Gateway?\n5. Первый ping               -> Первый пакет может пропасть из-за ARP (повторите ping!)"
        }
      ],
      "mistakes": [
        "Забывают ввести `no shutdown` на интерфейсе роутера — порт остаётся красным.",
        "Забывают прописать Default Gateway на конечных ПК — ping до шлюза идёт, а в соседнюю подсеть нет.",
        "Не сохраняют настройки командой `write memory` — после перезагрузки устройства в симуляторе всё сбрасывается."
      ],
      "quiz": [
        {
          "q": "Вы задали IP-адрес на порту `GigabitEthernet0/0` роутера, но треугольник на линии горит красным. Какую команду вы забыли?",
          "options": [
            "enable",
            "no shutdown",
            "ip route"
          ],
          "answer": 1,
          "explain": "Команда no shutdown включает административно выключенный порт роутера."
        },
        {
          "q": "Какая команда сохраняет текущую конфигурацию Cisco IOS в энергонезависимую память NVRAM?",
          "options": [
            "write memory (или copy run start)",
            "save all",
            "reload"
          ],
          "answer": 0,
          "explain": "write memory записывает running-config в startup-config."
        },
        {
          "type": "order",
          "q": "Расставьте последовательность команд для настройки IP-адреса на порту G0/0 с самого начала:",
          "items": [
            "enable (переход в привилегированный режим)",
            "configure terminal (вход в режим конфигурации)",
            "interface g0/0 (выбор интерфейса)",
            "ip address 192.168.10.1 255.255.255.0",
            "no shutdown (включение порта)"
          ],
          "explain": "Это базовая цепочка входа и настройки любого интерфейса в Cisco IOS."
        },
        {
          "type": "match",
          "q": "Соедините команду Cisco IOS с её действием:",
          "pairs": [
            {
              "left": "show ip interface brief",
              "right": "Показать статус и IP всех портов"
            },
            {
              "left": "show ip route",
              "right": "Показать таблицу маршрутизации"
            },
            {
              "left": "no shutdown",
              "right": "Включить интерфейс роутера"
            },
            {
              "left": "write memory",
              "right": "Сохранить настройки в NVRAM"
            }
          ],
          "explain": "Эти 4 команды используются на каждой лабораторной работе в Cisco Packet Tracer."
        }
      ]
    }
  ]
});
})();
