import { colorsHex, colorsRgb, colorNames } from '../../src';
import { describe, expect, it } from 'vitest';

describe('public API', () => {
  it('should export colorsHex, colorsRgb, colorNames', () => {
    expect(colorsHex.red).toBe('#ff0000');
    expect(colorsRgb.red).toEqual([255, 0, 0]);
    expect(colorNames).toContain('red');
  });
});