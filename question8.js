// arrange in alphabetical order
function question8() {
    var n = prompt("Enter the number of elements in the array: "); // Length of the array
    var ans = document.getElementById("ans");

    var arr = [];

    for (let index = 0; index < n; index++) {
        arr[index] = prompt("Enter element " + (index+1) + ": "); // Populating the array
    }

    ans.innerHTML = "Original array: [" + arr + "]</p><p>Sorted array: <b>[" + arr.sort() + "]</b>";
}