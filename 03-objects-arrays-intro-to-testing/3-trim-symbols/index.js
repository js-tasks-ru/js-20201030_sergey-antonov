/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === undefined) return string;

    if (string === '' || size === 0) return '';

    let result = '';
    let numberRepeatedSymbols = 1;
    let symbol = string[0];

    for (let i = 1; i <= string.length; i++) {
        if (string[i] == symbol) {
            numberRepeatedSymbols++;
            if (i != string.length) {
                continue;
            }
        }

        result += symbol.repeat(Math.min(numberRepeatedSymbols, size));
        numberRepeatedSymbols = 1;
        symbol = string[i];
    }

    return result;
}
