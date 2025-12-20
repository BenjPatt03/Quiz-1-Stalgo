# Philippine Paint Manufacturers Inc. – Fullstack (Quiz 1 + Quiz 2)

This repository contains:

- A **React frontend** for Philippine Paint Manufacturers Inc. (PhilPaint), showcasing industrial paint solutions for contractors, dealers, and industrial projects across Metro Manila.
- A **Django REST Framework backend** that exposes API endpoints used by the frontend via Axios.

The business concept from Quiz 1 is unchanged; Quiz 2 adds a dedicated backend and API integration.

---

## Repository Structure

- `src/`, `public/`, `package.json` – React frontend (Quiz 1)
- `backend/` – Django REST API (Quiz 2)

---

## Submission Notes (Important)

This downloaded project may appear as **two nested folders**:

- Outer folder: `...\Quiz-1-Stalgo-main\`
- Inner project folder (this is the actual project root): `...\Quiz-1-Stalgo-main\Quiz-1-Stalgo-main\`

Run **frontend** commands (`npm install`, `npm start`) from the **inner** folder where `package.json` is located.

Run **backend** commands from `backend/` inside the inner folder (where `manage.py` is located).

---

## Environment Variables

### Frontend (.env)

Copy `.env.example` to `.env` in the project root (next to `package.json`):

```bash
# from the project root
cp .env.example .env
```

Set the API base URL:

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

### Backend (backend/.env)

In the `backend/` folder, copy `.env.example` to `.env` and adjust values if needed:

```env
DJANGO_SECRET_KEY=change-this-to-a-long-random-string
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
DJANGO_CORS_ALLOWED_ORIGINS=http://localhost:3000
DJANGO_DB_NAME=db.sqlite3
```

Both frontend and backend read configuration from environment variables and do **not** hardcode secrets or URLs in source code.

---

## Backend Setup (Django REST Framework)

### Prerequisites

- Python 3.10+ (recommended)
- pip

### Install dependencies

From the project root:

```bash
cd backend
pip install -r requirements.txt
```

### Database and migrations

The file `backend/db.sqlite3` should be tracked in the repository for this quiz.
If it does not exist yet, create it by running:

```bash
cd backend
python manage.py migrate
```

### Run backend server

```bash
cd backend
python manage.py runserver
```

The backend will be available at `http://localhost:8000/`.

### (Optional) Seed sample content

If you want to populate the database with sample content (companies, features, benefits, etc.):

```bash
cd backend
python manage.py seed_content
```

---

## Backend API

### Models

The backend models represent the existing Quiz 1 business objects:

- `Company` – main PhilPaint company information (name, tagline, address, contact, hours)
- `MessagingChannel` – supported messaging platforms (e.g., WhatsApp, Line, Telegram)
- `Feature` – features shown in the Features section
- `Benefit` – benefits shown in the Benefits section
- `Testimonial` – customer testimonials
- `TeamMember` – about page team members

All data is serialized using Django REST Framework serializers (`api/serializers.py`).

### API Endpoints

All API endpoints are under `/api/`:

- **API Routes View** – list of available endpoints
  - `GET /api/`
- **List View** – all company objects with nested related data
  - `GET /api/companies/`
- **Detail View** – a specific company by id
  - `GET /api/companies/<id>/`

### CORS Configuration

The backend uses `django-cors-headers` and is configured to **not** use `CORS_ALLOW_ALL_ORIGINS`.

Instead, allowed origins are read from an environment variable in `backend/settings.py`:

```python
CORS_ALLOWED_ORIGINS = env('DJANGO_CORS_ALLOWED_ORIGINS', default='http://localhost:3000').split(',')
```

This allows the React frontend at `http://localhost:3000` to call the API.

---

## Frontend Setup (React)

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)

### Installation

From the project root (where `package.json` lives):

```bash
npm install
```

### Run frontend

```bash
npm start
```

The frontend runs at `http://localhost:3000` and uses Axios to talk to the backend API.

---

## Axios Integration

The frontend uses Axios with environment-based configuration.

Example client (`src/apiClient.js`):

```js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
});

export default apiClient;
```

Example usage in `Home` page (`src/pages/Home.jsx`):

- Fetches company data from `GET /api/companies/`
- Displays loading and error states
- Passes the loaded data down to page sections as props.

---

## Running Both Frontend and Backend

1. **Start backend (Django)**

   ```bash
   cd backend
   python manage.py runserver
   ```

2. **Start frontend (React)** in another terminal:

   ```bash
   npm start
   ```

3. Open `http://localhost:3000` to view the app. The frontend will call the backend at `http://localhost:8000/api` using Axios.

---

This setup satisfies the Quiz 2 requirements: environment variables for both frontend and backend, three API views (list, detail, routes), correct CORS configuration using `CORS_ALLOWED_ORIGINS`, appropriate models/serialization, tracked `db.sqlite3`, and a combined repository structure for frontend and backend.
