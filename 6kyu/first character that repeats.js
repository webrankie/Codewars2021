/*
Find the first character that repeats in a String and return that character.


firstDup('tweet') => 't'
firstDup('like') => undefined


 */

function firstDup (s) {
    s = s.split('');
    return s.filter((el) => s.indexOf(el) !== s.lastIndexOf(el))[0];
}

console.log(firstDup('Ode to Joy')  // => ' '