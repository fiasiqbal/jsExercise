// sum of squares of numbers in an array
function question4() {
    var n = prompt("Enter the number of elements in the array: "); // Length of the array
    var ans = document.getElementById("ans");

    var arr = [];
    var sqr = 0;

    for (let index = 0; index < n; index++) {
        arr[index] = prompt("Enter element " + (index+1) + ": "); // Populating the array
    }

    for (let i = 0; i < n; i++) {
        sqr = sqr + (arr[i]*arr[i]);   
    }

    ans.innerHTML = "The array is [" + arr + "]</p><p>Sum of the squares of the numbers: <b>" + sqr + "</b>";
}