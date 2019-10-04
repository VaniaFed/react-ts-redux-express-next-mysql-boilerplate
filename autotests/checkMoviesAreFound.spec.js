import 'regenerator-runtime/runtime';

import puppeteer from 'puppeteer';

const createSelector = block => ({ type, element }) => `[data-${type}="${block}__${element}"]`;

const headerBlock = page => {
    const localCreateSelector = createSelector('search-input');

    const findButtom = '[data-button="search-page__button-search"]';
    const searchInput = localCreateSelector({
        type: 'input',
        element: 'input'
    });

    return {
        find: async ({ text }) => {
            await page.waitForSelector(searchInput);
            await page.click(searchInput);
            await page.keyboard.type(text);
            await page.waitForSelector(findButtom);
            await page.click(findButtom);
        }
    };
};

const inBrowser = url => async fn => {
    const browser = await puppeteer.launch({ headless: false });
    try {
        const page = await browser.newPage();
        await page.goto(url);
        await fn({ browser, page });
    } finally {
        browser.close();
    }
};

describe('movies', () => {
    it('Quantity of movies should be is more than zero', async () => {
        await inBrowser('http://localhost:3000/search')(async ({ page }) => {
            const header = headerBlock(page);
            header.find({ text: 'harry potter' });

            const moviesSelector = '.movie-card';
            await page.waitForSelector(moviesSelector);

            const moviesLength = await page.evaluate(selector => {
                return document.querySelectorAll(selector).length;
            }, moviesSelector);
            expect(moviesLength).toBeGreaterThan(0);
        });
    });
});
