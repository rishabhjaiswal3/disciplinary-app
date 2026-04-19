# DisciplineOS

A discipline & self-improvement tracking system with a **Node.js/Express/MongoDB** backend and a **React Native (Expo)** frontend — all in one monorepo.

## Project Structure

```
disciplineos-project/
├── backend/         → Node.js + Express + MongoDB
├── frontend/        → React Native (Expo)
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Expo CLI** (`npm install -g expo-cli`)

### Backend

```bash
cd backend
npm install
cp .env.example .env   # Fill in your values
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npx expo start
```

## Environment Variables

Copy the `.env.example` files in each sub-project and fill in your values. **Never commit `.env` files.**

## License

This project is licensed under the [Apache License 2.0](LICENSE).
