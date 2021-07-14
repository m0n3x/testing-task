const timeout = 50000;
jest.setTimeout(70000);


describe(
  "/ (Home Page)", () => {
    beforeAll(async () => {
      await page.goto('https://react-redux.realworld.io/#/?_k=kwfs2r');
    }, timeout);
    it("should load without error", async () => {
      await expect(page.title()).resolves.toMatch('Conduit');
    });
  }
);
const SECRET_USERNAME = 'as43hj4h23f';
const SECRET_EMAIL = 'az1254h3abvbp@mail.ru';
const SECRET_PASSWORD = '2133asdd3';

describe(
  "/ (register)", () => {
    beforeAll(async () => {
      await page.waitForSelector('[href="#register"]');
      await page.click('[href="#register"]');
      await page.type('input[type=text]', SECRET_USERNAME);
      await page.type('input[type=email]', SECRET_EMAIL);
      await page.type('input[type=password]', SECRET_PASSWORD);
      await page.waitForSelector('button[type=submit]');
      await page.click('button[type=submit]');
      await page.waitForNavigation({
        waitUntil: 'networkidle0',
      });
    }, timeout);
    it("sign up is done", async () => {
      const hrefs1 = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('a[href]'),
          a => a.getAttribute('href')
        )
      );
      console.log(hrefs1);
      expect(hrefs1).toContain(`#@${SECRET_USERNAME}`);
    });
  }
);

describe(
  "/ (logout)", () => {
    beforeAll(async () => {
      await page.waitForSelector('[href="#settings"]');
      await page.click('[href="#settings"]');
      await page.waitForSelector('.btn-outline-danger');
      await page.click('.btn-outline-danger');
    }, timeout);
    it("logout is done", async () => {
      const hrefs1 = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('a[href]'),
          a => a.getAttribute('href')
        )
      );
      console.log(hrefs1);
      expect(hrefs1).toContain('#login');
    });
  }
);

describe(
  "/ (login)", () => {
    beforeAll(async () => {
      await page.click('[href="#login"]');
      await page.type('input[type=email]', SECRET_EMAIL);
      await page.type('input[type=password]', SECRET_PASSWORD);
      await page.click('button[type=submit]');
      await page.waitForNavigation({
        waitUntil: 'networkidle0',
      });
    }, timeout);
    it("sign in is done", async () => {
      const hrefs1 = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('a[href]'),
          a => a.getAttribute('href')
        )
      );
      console.log(hrefs1);
      expect(hrefs1).toContain(`#@${SECRET_USERNAME}`);
    });
  }
);


