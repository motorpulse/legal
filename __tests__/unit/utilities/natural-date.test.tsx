import { describe, expect, test } from 'vitest';

import { naturalDate } from '@/utils/misc';

describe('naturalDate tests', () => {
  test('It calculates proper date', () => {
    const date: Date = naturalDate(12, 8, 2025);
    const str: string = date.toUTCString();
    const regex: RegExp = /\d+ \w+ \d+ \d{0,2}:\d{0,2}:\d{0,2}/;

    expect(str).toMatch(regex);
  });
});
