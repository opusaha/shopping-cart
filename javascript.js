// for plus function
let minus = document.getElementById("minus-button1");
let plus = document.getElementById("plus-button1");
let value = document.getElementById("value1");
let newValue= parseInt((value).value);
plus.addEventListener("click", ()=>{
    let finalValue = newValue + 1;
    newValue=finalValue;
    value.value=newValue;
})
minus.addEventListener("click", ()=>{
    let finalValue = newValue - 1;
    newValue=finalValue;
    if (newValue>=0) {
        value.value=newValue;
    } else {
        value.value=0;
    }
})

// for minus function
let minus2 = document.getElementById("minus-button2");
let plus2 = document.getElementById("plus-button2");
let value2 = document.getElementById("value2");
let newValue2= parseInt((value2).value);
plus2.addEventListener("click", ()=>{
    let finalValue2 = newValue2 + 1;
    newValue2=finalValue2;
    value2.value=newValue2;
})
minus2.addEventListener("click", ()=>{
    let finalValue2 = newValue2 - 1;
    newValue2=finalValue2;
    if (newValue2>=0) {
        value2.value=newValue2;
    } else {
        value2.value=0;
    }
})