const numberInput = document.querySelector("#numberInput");


const fruit = {
    fruitName: "Apple",
    fruitColor: "Red",
    fruitTaste: "Sweet"
};

const nameEl = document.querySelector("#Name");
const colorEl = document.querySelector("#Color");
const tasteEl = document.querySelector("#Taste");

nameEl.innerHTML = `Name: ${fruit.fruitName}`;
colorEl.innerHTML = `Color: ${fruit.fruitColor}`;
tasteEl.innerHTML = `Taste: ${fruit.fruitTaste}`;

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
