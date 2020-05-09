// check odd or even 0 to 15
function question5() {
    var ans = document.getElementById("ans");

    ans.innerHTML = "";
    for (let index = 0; index < 16; index++) {
        if (index%2 == 0){
            ans.innerHTML = ans.innerHTML + index + ": Even<br>";
        } else{
            ans.innerHTML = ans.innerHTML + index + ": Odd<br>";
        }   
    }
}