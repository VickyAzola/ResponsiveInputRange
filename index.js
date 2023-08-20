const inputRange = document.getElementById("range");
const output = document.getElementById("gbLeft"); 
const usedGB = document.getElementById("usedGB");

inputRange.addEventListener("input", (e) => {
    if (e.target.value >= 1000) {
        output.textContent = 0;
    } else {
        output.textContent = 1000 - (e.target.value % 1000);
    }
    usedGB.textContent = e.target.value + " GB";
})

usedGB.textContent = inputRange.value + " GB";
output.textContent = inputRange.value;

