module.exports = {
  expectToBe: (obj, value) => {
    expect(obj).toBe(value);
  },

  expectString: (obj, str) => {
    expect(obj).toEqual(expect.stringContaining(str));
  },

  expectNum: (obj) => {
    expect(obj).toEqual(expect.any(Number))
  }
};

