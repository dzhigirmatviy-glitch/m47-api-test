import {test, expect} from '@playwright/test';

test('Translation apple for spanish', async ({ request }) => {
    const response = await request.get('http://localhost:8000/translate',{
        params: {
            query: 'apple',
            locale: 'es-ES',
        }
    });

    expect(response.status()).toBe(200);

    const translation = await response.text();
    expect(translation).toBe('manzana');

    console.log('Test passed');
    });
