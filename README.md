````markdown
# Front-end Entrance Exam – CV Web Page

## Описание

Это проект, выполненный в рамках вступительного экзамена для Front-end разработчика. Представляет собой веб-страницу с резюме, сверстанную по предоставленному [макету в Figma](https://www.figma.com/design/0lCK90FekbMPNJOOUuiIV8/exam-cv?node-id=0-3&t=51CUbfwKNoVYLV1V-1).

Страница позволяет редактировать содержимое элементов, применять анимации при взаимодействии, а также сохранять резюме в PDF формате.

## ✨ Реализовано

- Адаптивная HTML/CSS-верстка
- Возможность редактировать текст элементов прямо на странице (`contenteditable`)
- Кнопка "Скачать" — сохраняет резюме в PDF
- Анимации при вводе текста
- Реализация ripple-эффекта (Material Wave) при клике на кнопку скачивания
- Сохранение состояния после перезагрузки страницы с помощью `localStorage`

## 🚀 Как запустить

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/KobilyanskyS/front-end-entrance-exam.git
````

2. Перейти в директорию проекта:

   ```bash
   cd front-end-entrance-exam
   ```
3. Установить зависимости:

   ```bash
   npm install
   ```
4. Запустить локальный сервер разработки с помощью Vite:

   ```bash
   npm run dev
   ```
5. Открыть в браузере адрес, который покажет Vite (обычно [http://localhost:5173](http://localhost:5173))

> **Важно:** Нельзя просто открыть `index.html` двойным кликом, т.к. проект требует сервера (Vite) для корректной работы.

## 🌐 Демо

Страница доступна на GitHub Pages:

🔗 [https://kobilyanskys.github.io/front-end-entrance-exam/](https://kobilyanskys.github.io/front-end-entrance-exam/)

## Структура проекта

project-root/
├── public/
│ ├── cv-pdf/ # PDF-файл резюме для скачивания
│ │ └── CV.pdf
│ └── img/ # Статичные изображения (аватар, иконки)
├── src/
│ ├── assets/ # Стили
│ │ └── style.css
│ ├── scripts/ # Все JavaScript-скрипты
│ │ ├── downloadCV.js # Скачивает CV
│ │ ├── editable-animate.js # Добавляет анимацию ввода
│ │ ├── editable-storage.js # Сохраняет измененные текстовые поля
│ │ └── ripple.js
│ └── main.js # Точка входа (импортирует CSS и скрипты)
├── index.html # Главная HTML-страница (в корне проекта)
├── vite.config.js # Конфигурация сборщика Vite
├── package.json
└── README.md # Описание проекта

## 🛠️ Используемые технологии

* HTML5
* CSS3 (Grid, Flexbox, Анимации)
* Vanilla JavaScript
* Vite (для сборки и локального сервера)

## ✅ Проверка кода

* Вёрстка валидирована с помощью [W3C Validator](https://validator.w3.org)
* JavaScript проверен через [ESLint](https://eslint.org) и [JSHint](https://jshint.com)

## 📌 Особенности реализации

* Все элементы с текстом сделаны редактируемыми через `contenteditable`.
* Ripple-эффект реализован вручную без сторонних библиотек.
* Кнопка "Скачать" скачивает заранее подготовленный PDF из публичной папки.
* Изменения в тексте сохраняются в `localStorage` и восстанавливаются при загрузке страницы.

## 📧 Автор

**Станислав Кобилянский**
GitHub: [@KobilyanskyS](https://github.com/KobilyanskyS)
Telegram: [@s_kobilyanskiy](https://t.me/s_kobilyanskiy)

---

Спасибо за проверку и уделённое время!