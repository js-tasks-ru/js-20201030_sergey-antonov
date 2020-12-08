/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    if (param != 'asc' && param != 'desc') return arr;

    const result = [...arr].sort((firstElem, SecondElem) => {
        return firstElem.localeCompare(SecondElem, ["Ru", "En"], {caseFirst: "upper"});
    });

    if (param == 'desc') {
        result.reverse();
    }

    return result;
}
