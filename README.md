# Translation API Test

## Overview
Automated test for a translation API endpoint.

**Stack:**
- Playwright – HTTP requests & assertions
- FastAPI – mock server
- Python + Node.js

## Project Structure

-m47-api-test/
   - mock-server/
     - app.py # FastAPI mock server
   - api-test.spec.js # Playwright test
   - playwright.config.js # Playwright config
   - package.json # Node.js dependencies
   - README.md # This file
   - playwright-report/ # Test report (generated)

## Setup & Run

### 1. Install Node.js dependencies
  ``bash
  npm install
  npx playwright install

### 2. Install Python dependencies
  pip install fastapi uvicorn

### 3. Run the mock server
  Start the mock API locally:
  uvicorn mock-server.app:app --reload --port 8000

  Test the endpoint manually:
  http://127.0.0.1:8000/translate?query=apple&locale=es-ES
  Expected response: manzana

### 4. Run the test
  In a separate terminal, run:
  npx playwright test

### 5. View the report
  After the test run, open the HTML report:
  npx playwright show-report

### Test logic

  Sends a GET request to /translate
  Query parameters: query=apple, locale=es-ES
  Asserts:
    HTTP status is 200

  Response body equals "manzana"

### Notes
  The original API endpoint used in the task (api.mytranslator.com) is not accessible.

  A local mock server is used instead to simulate the expected behavior.

  The test is designed to be run locally without external dependencies.

### Author
  Matvii Dzhyhyr
  GitHub: https://github.com/dzhigirmatviy-glitch/m47-api-test
  

