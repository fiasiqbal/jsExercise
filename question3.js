// swap case
function question3() {
    var str = prompt("Enter the string: ");
    var ans = document.getElementById("ans");

    // console.log(str);
    var out = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            out = out + str.charAt(i);
        } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            out = out + str.charAt(i).toLowerCase();
        } else {
            out = out + str.charAt(i).toUpperCase();
        }
        // console.log("Output: " + out[i]);
    }
    // console.log(out);
    ans.innerHTML = "Original string: " + str + "</p><p>Case swapped string: <b>" + out + "</b>";
}