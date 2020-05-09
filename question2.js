// Find the most frequent item of an array
function question2() {
    var n = prompt("Enter the number of elements in the array: "); // Length of the array

    var ans = document.getElementById("ans");

    var arr = [];
    var numb = [];

    for (let index = 0; index < n; index++) {
        arr[index] = prompt("Enter element " + (index+1) + ": "); // Populating the array
    }

    for (let i = 0; i < n; i++) { // selecting each array element
        // console.log(arr[i]);
        numb[i] = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {  // checks if selected array element matches with other elements 
                numb[i] += 1;   // counts number of matches
            }
        }
        // console.log(numb[i]+" times");
    }

    var f = 0; // max freq
    var p = 0; // index of max freq
    for (let x = 0; x < n; x++) {
        if (numb[x] > f) {
            f = numb[x];
            p = x;
        }
    }

    // console.log(arr);
    // console.log(arr[p]);

    ans.innerHTML = "The array is [" + arr + "]</p><p>Most frequent element: <b>" + arr[p] + "</b>";
}