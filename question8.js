// arrange in alphabetical order
function question8() {
    var n = prompt("Enter the number of elements in the array: "); // Length of the array
    var ans = document.getElementById("ans");

    var arr = [];
    var lower = [];
    var sorted = [];

    for (let index = 0; index < n; index++) {
        arr[index] = prompt("Enter element " + (index+1) + ": "); // Populating the array
    }

    for (var x in arr) {
        lower.push(arr[x].toLowerCase());
    }
    
    lower.sort();
    
    for (var a in lower) {
        for (var b in arr) {
            if (lower[a] === arr[b].toLowerCase()) {
                sorted.push(arr[b]);
            }
        }
    }

    ans.innerHTML = "Original array: [" + arr + "]</p><p>Sorted array: <b>[" + sorted + "]</b>";
}