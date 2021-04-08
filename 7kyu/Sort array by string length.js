function sortByLength(array) {
    array.sort((a, b) => a.length - b.length);
    return array;
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
