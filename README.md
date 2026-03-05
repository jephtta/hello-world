# Hello World

A minimal Next.js application that displays centered "Hello World" text. Built with TypeScript, Tailwind CSS, and deployed to Google Cloud Run. Uses Firebase Firestore as the database layer (configured, rules deny all access by default).

## Live URL

<https://hello-world-443521829717.us-central1.run.app>

## Prerequisites

- Node.js 20+ (22 recommended — matches the Docker image)
- npm 10+
- A Firebase project (for Firestore configuration)
- Google Cloud account with Cloud Run enabled (for deployment)

## Local Setup

```bash
# Clone the repo
git clone https://github.com/jephtta/hello-world.git
cd hello-world

# Install dependencies
npm install

# Create .env.local with your Firebase config (see Environment Variables below)

# Start the dev server
npm run dev
```

Open <http://localhost:3000> to see the app.

## Environment Variables

Create a `.env.local` file with these values. All are prefixed `NEXT_PUBLIC_` for client-side availability.

| Variable | Description | Where to find it |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Web API key | Firebase Console → Project Settings → General |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain | Same page, under "Your apps" |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID | Same page |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Cloud Storage bucket | Same page |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Cloud Messaging sender ID | Same page |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID | Same page |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build (standalone output) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Running Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all e2e tests
npx playwright test

# Run with UI
npx playwright test --ui
```

Tests are in `e2e/` and include:
- **hello-world.spec.ts** — 8 tests covering rendering, centering, title, error-free loading, lang attribute, meta description, 404 handling, and mobile viewport
- **smoke.spec.ts** — 4 tests covering HTTP 200, JS error-free rendering, heading visibility, and valid HTML structure

## Deployment

The app is containerized with a multi-stage Dockerfile and deployed to Google Cloud Run.

```bash
gcloud run deploy hello-world --source .
```

## Tech Stack

- **Framework**: Next.js 15 (App Router, standalone output)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: Firebase Firestore
- **Testing**: Playwright
- **Hosting**: Google Cloud Run
