# Quiz Project (Important: nested folder)

This download contains a nested folder. The **real project root** is:

- `Quiz-1-Stalgo-main/`

That inner folder contains the actual React app (`package.json`) and the Django backend (`backend/`).

## Quick start

### Frontend (React)

You can run from the **outer folder** (this folder) because it includes a small wrapper `package.json`:

```bash
npm install
npm start
```

Or run directly from the inner folder:

```bash
cd Quiz-1-Stalgo-main
npm install
npm start
```

### Backend (Django)

```bash
cd Quiz-1-Stalgo-main\backend
pip install -r requirements.txt
python manage.py runserver
```

## Full documentation

See the detailed instructions and quiz requirement notes in:

- `Quiz-1-Stalgo-main/README.md`
