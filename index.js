const puppeteer = require('puppeteer');
const SECRET_USERNAME = 'example112233';
const SECRET_EMAIL = 'super_frontend_developer123@gmail.com';
const SECRET_PASSWORD = '11223344';
const userDelay = {delay: 100};

(async function() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://react-redux.realworld.io/#/?_k=kwfs2r');
  await page.waitForSelector('[href="#register"]');
  await page.click('[href="#register"]');
  await page.type('input[type=text]', SECRET_USERNAME, userDelay);
  await page.type('input[type=email]', SECRET_EMAIL, userDelay);
  await page.type('input[type=password]', SECRET_PASSWORD, userDelay);
  await page.waitForSelector('button[type=submit]');
  await page.click('button[type=submit]');

  await page.waitForSelector('[href="#settings"]');
  await page.click('[href="#settings"]');
  await page.click('.btn-outline-danger');

  await page.click('[href="#login"]');
  await page.type('input[type=email]', SECRET_EMAIL, userDelay);
  await page.type('input[type=password]', SECRET_PASSWORD, userDelay);
  await page.click('button[type=submit]');

  await page.waitForSelector('[href="#editor"]');
  await page.click('[href="#editor"]');
  const form = await page.$$('input[type=text]');
  await form[0].click();
  await page.keyboard.type('test Article', userDelay);
  await form[1].click();
  await page.keyboard.type('test', userDelay);
  await page.type('textarea', 'hello world!', userDelay);
  await form[2].click();
  await page.keyboard.type('test', userDelay);
  await page.click('button[type=button]');
  
  await browser.close();
})()

//await page.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user