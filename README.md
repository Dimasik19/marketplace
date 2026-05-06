# Marketplace Landing

Одностраничный B2B-сайт по ТЗ: вкладки "Покупателям / Поставщикам", мультиязычность RU/EN/ZH/AR (RTL для AR), формы и backend-точки для Telegram и Google Sheets.

## Файлы

- `index.html` — SPA-страница.
- `styles.css` — адаптивные стили.
- `app.js` — логика табов, языков, карточек, форм, модального окна.
- `api/buyers.js` — отправка заявок покупателей в Telegram.
- `api/suppliers.js` — отправка КП поставщиков в Google Apps Script Web App.
- `robots.txt`, `sitemap.xml` — базовые SEO-файлы.

## Быстрый старт

Можно открыть `index.html` напрямую в браузере (UI-часть работает без сервера).

Для работы API лучше запускать на Vercel/Netlify с serverless-функциями.

## Переменные окружения

Для `api/buyers.js`:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Для `api/suppliers.js`:

- `GOOGLE_SCRIPT_WEBAPP_URL`

## Что заменить перед продом

1. В `app.js` подставить финальные характеристики продуктов, страны и сорта.
2. Подключить реальную reCAPTCHA v3 в формах и проверку токена на backend.
3. В `robots.txt` и `sitemap.xml` заменить `https://example.com` на ваш домен.
4. Добавить реальные фото фруктов/продукции и финальные контакты в шапке.
