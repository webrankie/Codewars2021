//Count the number of Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    text = text.toLowerCase().split('');
    return text.filter((el, i) => text.indexOf(el) !== text.lastIndexOf(el) &&  text.indexOf(el) === i).length;
}