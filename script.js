const BASE_URL = "https://v6.exchangerate-api.com/v6/6deb555f7ed4a010a4e9875e/latest/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currencies
for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Fetch exchange rate and update message
const updateExchangeRate = async () => {
  try {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();

    // Check if data was successfully fetched
    if (data.result === "success") {
      let rate = data.conversion_rates[toCurr.value];
      if (!rate) {
        msg.innerText = "Exchange rate not available.";
        return;
      }
      let finalAmount = amtVal * rate;
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } else {
      msg.innerText = "Failed to fetch exchange rate.";
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    msg.innerText = "Failed to fetch exchange rate.";
  }
};

// Update flag when dropdown value changes
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Event listener for button click
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Update exchange rate on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});


//JS for nav bar -Dark mode

let darkMode = document.querySelector(".dark-light");
let Darkbtn=document.querySelectorAll(".DarkBtn")
let main = document.getElementsByTagName("main")[0]; // Accessing the first <main> element
let container = document.querySelector(".container");
let header = document.querySelector("header"); // Using querySelector to get the first <header> element
let navbar = document.querySelector(".navbar");
let hambergar=document.querySelector(".hambergar");
let dark = 0;


let aboutBody=document.querySelector(".aboutBody");

Darkbtn.forEach(btn=>{

  btn.addEventListener("click", () => {
    if (dark == 0) {
      dark = 1;
      console.log(dark);
      //document.body.style.backgroundColor = "black"; 
      navbar.style.backgroundColor = "rgb(40, 40, 40)";
      header.style.backgroundColor = "rgb(40, 40, 40)"; // Change the background color of the header
      header.style.color = "white";
      main.style.backgroundColor = "#37353A";
      darkMode.innerText="Light";
      container.style.backgroundColor="#2D292F";
      container.style.color="white";
      left.style.color="black";
      hambergar.classList.add("inverted");    
      
  
    } else {
      dark = 0;
      console.log(dark);
      darkMode.innerText="Dark";
      // document.body.style.backgroundColor = "white"; 
      main.style.backgroundColor = "#e7eeee";
      header.style.backgroundColor = "white";
      navbar.style.backgroundColor = "white"; 
      main.style.backgroundColor = "#e7eeee";
      header.style.color = "black";
      container.style.backgroundColor="#fff";
      container.style.color="black";
      hambergar.classList.remove("inverted");   
    }
  });
})
  
  
// Add event listionar on hambergar
let left=document.querySelector(".left");
hambergar.addEventListener("click",()=>{
  left.style.left="40px";
  left.style.display="block";
})

// addeventlistionar on cross btn
let cross=document.querySelector(".cross")
cross.addEventListener("click",()=>{
  left.style.left="-425px";
  left.style.display="none";
})