import { test, expect } from '@playwright/test';

test.describe('Translation API tests', () => {

  test('Positive: apple → manzana for es-ES', async ({ request }) => {
    const response = await request.get('/translate', {
      params: { query: 'apple', locale: 'es-ES' },
    });
    expect(response.status()).toBe(200);
    const translation = await response.text();
    expect(translation).toBe('manzana');
  });

  test('Positive: house → casa for es-ES', async ({ request }) => {
    const response = await request.get('/translate', {
      params: { query: 'house', locale: 'es-ES' },
    });
    expect(response.status()).toBe(200);
    const translation = await response.text();
    expect(translation).toBe('casa');
  });

  test('Negative: returns 404 for unsupported word', async ({ request }) => {
    const response = await request.get('/translate', {
      params: { query: 'banana', locale: 'es-ES' },
    });
    expect(response.status()).toBe(404);
    const error = await response.json();
    expect(error.detail).toContain('banana');
  });

  test('Negative: missing locale parameter', async ({ request }) => {
    const response = await request.get('/translate', {
      params: { query: 'apple' },
    });
    expect(response.status()).toBe(422);
  });

  test('Negative: missing query parameter', async ({ request }) => {
    const response = await request.get('/translate', {
      params: { locale: 'es-ES' },
    });
    expect(response.status()).toBe(422);
  });

});