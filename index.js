const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    //Navigates to Whatsapp
    await page.goto("https://web.whatsapp.com/");

    // //Searches person by title
    await page.waitForSelector("._2_1wd");
    await delay(5000);

    //Change to contact you want to send messages to
    const contactName = "Madhav Madhusoodanan CSE BPPC";
    await page.click(`span[title='${contactName}']`);
    await page.waitForSelector(".TbtXF");

    //Finds the message bar and focuses on it
    const editor = await page.$("div[data-tab='6']");
    await editor.focus();

    //Amount of messages you want to send
    const amountOfMessages = 50;

    //Loops through cycle of sending message
    for (var i = 0; i < amountOfMessages; i++) {
      await page.evaluate(() => {
        const message = "Spam Bot 69";
        document.execCommand("insertText", false, message);
      });
      await page.click("span[data-testid='send']");
      await delay(500);
    }
  } catch (error) {
    console.log(error);
  }
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
