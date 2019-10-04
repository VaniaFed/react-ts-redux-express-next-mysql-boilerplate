import 'regenerator-runtime/runtime';

import puppeteer from 'puppeteer';

test('Quantity of movies should be is more than zero', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/movies?id=353616');
    const movieTitleSelector = '[data-text="movie-page__movie-title"]';
    await page.waitForSelector(movieTitleSelector);

    const movieTitle = await page.evaluate(
        movieTitleSelector => document.querySelector(movieTitleSelector).innerText,
        movieTitleSelector
    );

    browser.close();
    expect(movieTitle).toBe('Pitch Perfect 3');
});
