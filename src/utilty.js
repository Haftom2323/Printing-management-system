export function partition(array, n) {
    let copy = array.slice();
    return copy.length ? [copy.splice(0, n)].concat(partition(copy, n)) : [];
}