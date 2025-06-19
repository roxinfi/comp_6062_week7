// Get the input element
const numberInput = document.querySelector("#numberInput");

// Fruit object
const fruit = {
    fruitName: "Apple",
    fruitColor: "Red",
    fruitTaste: "Sweet"
};

// Get display elements
const nameEl = document.querySelector("#Name");
const colorEl = document.querySelector("#Color");
const tasteEl = document.querySelector("#Taste");

// Display fruit properties using template literals
nameEl.innerHTML = `Name: ${fruit.fruitName}`;
colorEl.innerHTML = `Color: ${fruit.fruitColor}`;
tasteEl.innerHTML = `Taste: ${fruit.fruitTaste}`;

// Listen for input change
numberInput.addEventListener("input", () => {
    const range = numberInput.value;

    if (range <= -10) 
    {
        alert("The number should be between -10 and 10");
        numberInput.value = -10;
    }    
    if(range >= 10)
    {
        alert("The number should be between -10 and 10");
        numberInput.value = 10;
    }
    
});
