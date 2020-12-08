/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    
    if (arr === undefined) return [];

    const result = new Set();
    for (let item of arr) {
        result.add(item);
    }

    return Array.from(result);
}
