/**
 * @jest-environment jsdom
 */

import  stringLength  from "./index.js";

test(" 'Seth' equal to 4", () => {
    expect(stringLength('seth')).toBe(4);
});

test("empty string to throw error", () => {
    expect(stringLength('')).toBe('invalid string');
});