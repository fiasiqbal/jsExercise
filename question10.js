// pattern
function question10() {
    var ans = document.getElementById("ans");
    ans.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= i; j++) {
            ans.innerHTML += "<b>*</b> ";
        }
        ans.innerHTML += "<br>";
    }
}
