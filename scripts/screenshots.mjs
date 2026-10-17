import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function capture() {
  console.log('Launching Chromium...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2, // High resolution crisp retina shots
  });

  const page = await context.newPage();
  console.log('Navigating to http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // 1. Wait 3 seconds for intro animation to complete
  console.log('Waiting 3s for intro animations...');
  await page.waitForTimeout(3500);

  // 2. Scroll slowly through the entire page once so every scroll animation / intersection observer triggers
  console.log('Scrolling slowly through page...');
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = 400;
  for (let y = 0; y < totalHeight; y += step) {
    await page.evaluate((scrollPos) => window.scrollTo({ top: scrollPos, behavior: 'instant' }), y);
    await page.waitForTimeout(100);
  }
  // Scroll to bottom
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await page.waitForTimeout(1000);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(1500);

  // Helper to scroll to section and capture
  async function captureSection(selector, filename) {
    console.log(`Capturing ${filename} at ${selector}...`);
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }, selector);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(screenshotsDir, filename) });
    console.log(`Saved: ${filename}`);
  }

  // 3. Desktop screenshots (1440x900)
  // hero.png
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(screenshotsDir, 'hero.png') });
  console.log('Saved: hero.png');

  // about.png
  await captureSection('#about', 'about.png');

  // skills.png
  await captureSection('#skills', 'skills.png');

  // projects.png
  await captureSection('#projects', 'projects.png');

  // certifications.png
  await captureSection('#certifications', 'certifications.png');

  // resume.png
  await captureSection('#resume', 'resume.png');

  // contact.png
  await captureSection('#contact', 'contact.png');

  // full-page.png
  console.log('Capturing full-page.png...');
  await page.screenshot({ path: path.join(screenshotsDir, 'full-page.png'), fullPage: true });
  console.log('Saved: full-page.png');

  // light-mode.png
  console.log('Clicking theme toggle button for light-mode.png...');
  await page.click('button[aria-label="Toggle color theme"]');
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotsDir, 'light-mode.png') });
  console.log('Saved: light-mode.png');

  // Toggle back to dark theme
  await page.click('button[aria-label="Toggle color theme"]');
  await page.waitForTimeout(1000);

  // 4. Mobile screenshots (390x844)
  console.log('Creating mobile context (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(3000);

  // Scroll through mobile page once
  const mobileHeight = await mobilePage.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < mobileHeight; y += 400) {
    await mobilePage.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'instant' }), y);
    await mobilePage.waitForTimeout(80);
  }
  await mobilePage.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await mobilePage.waitForTimeout(1500);

  // mobile-home.png
  await mobilePage.screenshot({ path: path.join(screenshotsDir, 'mobile-home.png') });
  console.log('Saved: mobile-home.png');

  // mobile-contact.png
  await mobilePage.evaluate(() => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await mobilePage.waitForTimeout(1500);
  await mobilePage.screenshot({ path: path.join(screenshotsDir, 'mobile-contact.png') });
  console.log('Saved: mobile-contact.png');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
