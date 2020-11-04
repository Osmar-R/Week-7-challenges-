// taking user input and saving it to a variable, input 
const input = prompt("Write a sentence");

console.log()

// .toUpperCase allow you to detect if the input is Uppercase 


if (input == input.toUpperCase()) {
    console.log("This is upper case");
} else if (input == input.toLowerCase()) {
    console.log("This is lower case");
} else {
    console.log("This is Neither");
}

