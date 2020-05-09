// find larger of 2 numbers
function question7() {
    var a = prompt("Enter the first number: ");
    var b = prompt("Enter the second number: ");
    var ans = document.getElementById("ans");

    findLarge(a,b);

    function findLarge(x,y) {
        if (x > y) {
            ans.innerHTML = "Numbers: " + x + ", " + y + "</p><p>Larger number: <b>" + x + "</b>";
        } else {
            ans.innerHTML = "Numbers: " + x + ", " + y + "</p><p>Larger number: <b>" + y + "</b>";
        }
    }
}