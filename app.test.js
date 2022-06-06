const sumOfTwoLowestNumbers = require('./app');

describe('Function should return:', () => {
    test('sum of the two lowest numbers', () => {
        expect(sumOfTwoLowestNumbers([4, 0, 3, 19, 492, -10, 1])).toBe(-10);
        expect(sumOfTwoLowestNumbers([3, 6, -2, -5, 7, 100, 0])).toBe(-7);
        expect(sumOfTwoLowestNumbers([2, 1, 2, 1, 2, 1])).toBe(2);
        expect(sumOfTwoLowestNumbers([1, 1, 1, -1, 1])).toBe(0);
        expect(sumOfTwoLowestNumbers([3, 3, 3, 1, 1])).toBe(2);
    });

    test('one added number', () => {
        expect(sumOfTwoLowestNumbers([2])).toBe(2);
        expect(sumOfTwoLowestNumbers([16738])).toBe(16738);
    });

    test('0', () => {
        expect(sumOfTwoLowestNumbers([])).toBe(0);
    });

    test(`string 'Проверьте введенные данные'`, () => {
        expect(sumOfTwoLowestNumbers(['gghsjs'])).toBe('Проверьте введенные данные');
        expect(sumOfTwoLowestNumbers([2, 'gd', 'aa'])).toBe('Проверьте введенные данные');
    });
});
