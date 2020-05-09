// get array, check if first element is prime
function question1() {
    var n = prompt("Enter the number of elements in the array: "); // Length of the array

    var arr = [];

    for (let index = 0; index < n; index++) {
        arr[index] = prompt("Enter element " + (index+1) + ": "); // Populating the array
    }

    var x = Number(arr[0]); // Selecting first element of array

    // console.log(arr);
    // console.log(x);

    var factors = [];

    for (let i = 1; i <= x; i++) {
        if (x%i == 0) {
            factors.push(i); // Listing all factors
        };
    }

    var ans = document.getElementById("ans");
    // console.log(factors);

    if (factors.length == 2) {
        ans.innerHTML = "The array is [" + arr + "]</p><p><b>" + x + " is a prime number</b>";
    } else {
        ans.innerHTML = "The array is [" + arr + "]</p><p><b>" + x + " is not a prime number</b>";
    } 
}