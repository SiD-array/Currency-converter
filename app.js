const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Function to update exchange rate display
const updateExchangeRate = async () => {
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        msg.innerText = `1 ${fromCurr.value} = ${rate.toFixed(4)} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error getting exchange rate";
        console.error(error);
    }
};

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        if(select.name === "to" && currCode == "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
        updateExchangeRate(); // Update rate when currency changes
    });
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue === "" || amtValue < 0){
        amtValue = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        let finalAmt = (amtValue * rate).toFixed(2);
        msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error in conversion";
        console.error(error);
    }
});

// Update exchange rate when page loads
updateExchangeRate();