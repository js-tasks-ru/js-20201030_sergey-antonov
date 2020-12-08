/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const props = path.split('.');
    
    function getValue(obj, index = 0) {
        if (props.length == index + 1) {
            return obj[props[index]];
        }

        if (props[index] in obj) {
            return getValue(obj[props[index]], ++index);
        }

        return undefined;
    };
    
    return function (obj) {
        return getValue(obj);
    }
}
