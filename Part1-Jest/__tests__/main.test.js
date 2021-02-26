describe('test formatVolumeIconPath function', () => {
    const format = require('../assets/scripts/main');
    test('level for 0 volume is 0', () => {
        expect(format(0)).toContain('level-0');
    });
    test('level for 1 volume is 1', () => {
        expect(format(1)).toContain('level-1');
    });
    test('level for 66 volume is 2', () => {
        expect(format(66)).toContain('level-2');
    });
    test('level for 67 volume is 3', () => {
        expect(format(67)).toContain('level-3');
    });
})