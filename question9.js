// 'Javascript' as a pattern
function question9() {
    var str = "Javascript";
    var newstr = "";
    var ans = document.getElementById("ans");
    ans.innerHTML = "";

    for (var x of str) {
        newstr = newstr + x;
        ans.innerHTML += "<b>" + newstr + "</b><br>";
    }
}