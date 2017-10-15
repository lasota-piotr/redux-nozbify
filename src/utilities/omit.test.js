import omit from './omit';

describe('omit', () => {
  it('should return new object without properties from array', () => {
    const objBefore = Object.freeze({ a: 1, b: '2', c: 3, d: 4 });
    const objAfter = Object.freeze({ a: 1, c: 3 });
    const paths = Object.freeze(['b', 'd']);

    expect(
      omit(objBefore, paths),
    ).toEqual(objAfter);
  });
});

describe('omit', () => {
  it('should return new object without properties from array with numbers', () => {
    const objBefore = Object.freeze({ 1: 'a', 2: 'b', 3: 'c', 4: 'd' });
    const objAfter = Object.freeze({ 1: 'a', 3: 'c' });
    const paths = Object.freeze([2, 4]);

    expect(
      omit(objBefore, paths),
    ).toEqual(objAfter);
  });
});

