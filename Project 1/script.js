// let ChipsVal = 0;
// let sodaVal = 0;
// let CookiesVal = 0;


// // State value
// const ChipsDisplay = document.getElementById('ChipsState');
// const SodaDispaly = document.getElementById('SodaState');
// const CookiesDispaly = document.getElementById('CookiesState');

// // Buttons

// const ChipsButton = document.getElementById("AddChips");
// const SodaButton = document.getElementById("AddSoda");
// const CookiesButton = document.getElementById("AddCookies");

// ChipsButton.addEventListener('click', function(){
//     ChipsVal++;
//     ChipsDisplay.textContent = ChipsVal;
// })


// SodaButton.addEventListener('click', function(){
//     sodaVal++;
//     SodaDispaly.textContent = sodaVal;
// })

// CookiesButton.addEventListener('click', function(){
//     CookiesVal++;
//     CookiesDispaly.textContent = CookiesVal;
// })

// Initial state values
let cartState = {
    Chips: 0,
    Soda: 0,
    Cookies: 0
};

// Mapping buttons and display elements
const items = ['Chips', 'Soda', 'Cookies'];

// General function to update cart state
function addItemToCart(item) {
    cartState[item]++;
    document.getElementById(`${item}State`).textContent = cartState[item];
}

// Add event listeners to all buttons
items.forEach(item => {
    document.getElementById(`Add${item}`).addEventListener('click', function() {
        addItemToCart(item);
    });
});
