let array = [1, 34, 56, 77, 98, 121, 454, 676, 87, 33];
function palindromeNum(array) {
    let palindrome = [], notPalindrome = [];
    for (let i = 0; i < array.length; i++) {
        let number = array[i], check = array[i], sum = 0, rem;
        while (number > 0) {
            rem = number % 10;
            number = parseInt(number / 10);
            sum = sum * 10 + rem;
        } if (sum == check) {
            palindrome.push(check);
            console.log(palindrome);
            document.write("Palindrome Numbers:" + palindrome);
            document.write("<br>");
        } else {
            notPalindrome.push(check);
            //console.log(notPalindrome);
        }
    }
    return array;
}
palindromeNum(array);
