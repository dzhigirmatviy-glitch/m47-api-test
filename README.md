# Translation API Test

## Overview
Automated tests for a translation API endpoint.

**Stack:**
- Playwright (HTTP requests + assertions)
- FastAPI – mock server
- Python + Node.js

## Assumptions / things worth knowing

- Real API wasn't reachable, so I mocked it with FastAPI — hardcoded translations 
  for a few words/locales, just enough to test the contract.
- Assumed success = plain text, errors = JSON with `detail` (FastAPI defaults). 
  Real API's actual format is unknown.
- Mock lowercases/trims `query` and `locale` before lookup — my decision, not 
  a confirmed behavior of the real API.
- Unknown word and unknown locale both return the same 404 right now — the mock 
  doesn't tell them apart.
- Picked Playwright since it has request client + test runner + reporting built in.
## Project Structure

-m47-api-test/
   - mock_server/
     - app.py # FastAPI mock server
   - api-test.spec.js # Playwright test
   - playwright.config.js # Playwright config
   - package.json # Node.js dependencies
   - README.md
<<<<<<< HEAD
=======
   - playwright-report/ # Test report
>>>>>>> 9df25e9d55b0e3e24834606e90582f6747f48f11

## Setup & Run

### 1. Install Node.js dependencies
  ```bash
  npm install
  npx playwright install
 ```

### 2. Install Python dependencies
  pip install fastapi uvicorn

### 3. Run the mock server
<<<<<<< HEAD
=======
  npx playwright test
>>>>>>> 9df25e9d55b0e3e24834606e90582f6747f48f11

   The mock server starts automatically before the run (configured via `webServer` in    playwright.config.js) — no need to start it manually.

   (Optional) To check the mock server on its own, e.g. in a browser:

   uvicorn mock_server.app:app --reload --port 8000

   Then open: http://127.0.0.1:8000/translate?query=apple&locale=es-ES
   Expected response: manzana

### 4. Run the test
  In a separate terminal, run:
  npx playwright test

### 5. View the report
  After the test run, open the HTML report:
  npx playwright show-report

### What's tested

  apple → manzana (es-ES), 200
   house → casa (es-ES), 200
   unknown word → 404
   missing locale → 422
   missing query → 422
<<<<<<< HEAD
=======

### Notes
   Real API (mytranslator.com) wasn't accessible, so used a mock server instead.
   Query/locale are case-insensitive, whitespace is trimmed.
   Everything runs locally, no external calls.
>>>>>>> 9df25e9d55b0e3e24834606e90582f6747f48f11

### Author
  Matvii Dzhyhyr
  GitHub: https://github.com/dzhigirmatviy-glitch/m47-api-test
  

