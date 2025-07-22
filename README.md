# Cocktails App

Приложение для отображения коктейлей по категориям, реализованное как тестовое задание.

## 📚 Описание

Приложение отображает список коктейлей, полученных по API:  
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>

Поддерживаются коды коктейлей: `margarita`, `mojito`, `a1`, `kir`.

---

## 🚀 Стек технологий

- **React + TypeScript**
- **Zustand** — менеджер состояния
- **Vite** — сборка
- **React Router** — маршрутизация
- **SCSS** — стили + резиновая верстка (min 360px, max 1024px)
- **ESLint + Prettier** — линтинг и форматирование
- **Jest + React Testing Library** — unit-тестирование

---

## 📦 Установка

````bash
npm install

## 🚀 Запуск
```bash
npm run dev

## 🔨 Сборка
```bash
npm run build

## 🧪 Запуск тестов
```bash
npm run test

---

## ⚙️ Особенности реализации
- Кэширование данных в Zustand (без повторных запросов)
- Обработка ошибок API
- Роутинг с поддержкой:
- активного пункта меню
- редиректа с / на первый cocktail_code
- страницы 404
- Lazy loading изображений
- Масштабируемая архитектура проекта
- Quality Gates:
1) ESLint
2) Prettier
3) Jest
4) TypeScript strict режим
5) Husky + lint-staged (pre-commit проверка)

---

## 🧱 Структура проекта
src/
├── app/         # Инициализация приложения
├── entities/    # Сущности (Drink)
├── features/    # Меню, карточки и т.д.
├── pages/       # Страницы (CocktailPage, NotFoundPage)
├── shared/      # Конфиги, хелперы, UI
├── widgets/     # Основная раскладка
````
