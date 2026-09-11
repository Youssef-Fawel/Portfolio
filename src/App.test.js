import projectsData from './assets/data/projectsData';
import { internshipsData } from './assets/data/internshipsData';

test('keeps the three flagship projects first with public deployment links', () => {
  expect(projectsData.slice(0, 3).map((project) => project.id)).toEqual([
    'talentry',
    'ahkili',
    'saba'
  ]);
  expect(projectsData[0].liveUrl).toBe('https://talentryplatforme.tech');
  expect(projectsData[1].liveUrl).toBe('https://ahkilitn.netlify.app/');
  expect(projectsData[2].arabicBrand).toBe('صابة');
});

test('preserves the exact RASHFORD-IT final-year internship dates', () => {
  const rashford = internshipsData[0];

  expect(rashford.company).toBe('RASHFORD-IT');
  expect(rashford.date.start).toBe('2026-02-19');
  expect(rashford.date.end).toBe('2026-08-31');
  expect(rashford.numericPeriod).toBe('19/02/2026 → 31/08/2026');
});

test('keeps Twini second with the corrected stack and period', () => {
  const twini = internshipsData[1];

  expect(twini.id).toBe('twini');
  expect(twini.date.start).toBe('2025-09');
  expect(twini.date.end).toBe('2026-01');
  expect(twini.technologies).toEqual(expect.arrayContaining([
    'Next.js',
    'TypeScript',
    'TiDB',
    'Drizzle ORM',
    'pnpm',
    'Netlify'
  ]));
  expect(twini.technologies).not.toContain('MongoDB');
});
