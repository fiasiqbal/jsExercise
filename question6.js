// truncate string
function question6() {
    var ans = document.getElementById("ans");

    var str = prompt("Enter the string: ");
    var n = prompt("Enter the maximum number of characters allowed: ");
    var newstr = "";

    if (str.length > n) {
        newstr = str.substring(0,n);
    } else {
        newstr = str;
    }

    ans.innerHTML = "Original string: " + str + "</p><p>Truncated string: <b>" + newstr + "</b>";
}