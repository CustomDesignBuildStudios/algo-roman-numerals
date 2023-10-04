const { toRomanLazy, toRoman } = require("./romanNumerals.js");


describe("tests toRomanLazy", () => {
  test("toRomanLazy(4) === 'IIII'", () => {
    expect(toRomanLazy(4)).toBe("IIII");
  });
  test("toRomanLazy(1) === 'I'", () => {
    expect(toRomanLazy(1)).toBe("I");
  });
  test("toRomanLazy(5) === 'V'", () => {
    expect(toRomanLazy(5)).toBe("V");
  });
  test("toRomanLazy(150) === 'CL'", () => {
    expect(toRomanLazy(150)).toBe("CL");
  });
  test("toRomanLazy(944) === 'DCCCCXXXXIIII'", () => {
    expect(toRomanLazy(944)).toBe("DCCCCXXXXIIII");
  });
});

describe("tests toRoman", () => {
    test("toRoman(4) === 'IV'", () => {
        expect(toRoman(4)).toBe("IV");
      });

      test("toRoman(150) === 'CL'", () => {
        expect(toRoman(150)).toBe("CL");
      });

      test("toRoman(944) === 'CMXLIV'", () => {
        expect(toRoman(944)).toBe("CMXLIV");
      });
});
