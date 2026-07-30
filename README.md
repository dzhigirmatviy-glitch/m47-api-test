# Translation API Test

## Overview
Automated tests for a translation API endpoint.

**Stack:**
- Playwright (HTTP requests + assertions)
- FastAPI – mock server
- Python + Node.js

## Project Structure

-m47-api-test/
   - mock_server/
     - app.py # FastAPI mock server
   - api-test.spec.js # Playwright test
   - playwright.config.js # Playwright config
   - package.json # Node.js dependencies
   - README.md
   - playwright-report/ # Test report

## Setup & Run

### 1. Install Node.js dependencies
  ``bash
  npm install
  npx playwright install

### 2. Install Python dependencies
  pip install fastapi uvicorn

### 3. Run the mock server
  npx playwright test

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

### Notes
   Real API (mytranslator.com) wasn't accessible, so used a mock server instead.
   Query/locale are case-insensitive, whitespace is trimmed.
   Everything runs locally, no external calls.

### Author
  Matvii Dzhyhyr
  GitHub: https://github.com/dzhigirmatviy-glitch/m47-api-test
  

