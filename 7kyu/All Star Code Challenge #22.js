/*
All Star Code Challenge #22

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note: the string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
 */

function toTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);

    return `${hour} hour(s) and ${minutes} minute(s)`
}
console.log(toTime(0))
console.log(toTime(3601))
console.log(toTime(3500))
console.log(toTime(323500))