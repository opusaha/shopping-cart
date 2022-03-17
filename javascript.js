// for iphone function
let minus = document.getElementById("minus-button1");
let plus = document.getElementById("plus-button1");
let value = document.getElementById("value1");
let newValue= parseInt((value).value);
let iphonePrice = document.getElementById("iphone-price");
let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let total = document.getElementById("total");

plus.addEventListener("click", ()=>{
    let finalValue = newValue + 1;
    newValue=finalValue;
    value.value=newValue;
    let iphoneValue =newValue*1500;
    iphonePrice.innerText= iphoneValue;
    let subTotal = subtotal.innerText = iphoneValue;
    let totalTax = tax.innerText = iphoneValue*.15;
    total.innerText = subTotal+totalTax;
    return iphoneValue;
})
minus.addEventListener("click", ()=>{
    let finalValue = newValue - 1;
    newValue=finalValue;
    if (newValue>=0) {
        value.value=newValue;
        let iphoneValue =newValue*1500;
        iphonePrice.innerText= iphoneValue;
        let subTotal = subtotal.innerText = iphoneValue;
        let totalTax = tax.innerText = iphoneValue*.15;
        total.innerText = subTotal+totalTax;
    } else {
        value.value=0;
        let iphoneValue =newValue*1500;
        iphonePrice.innerText= iphoneValue;
        let subTotal = subtotal.innerText = iphoneValue;
        let totalTax = tax.innerText = iphoneValue*.15;
        total.innerText = subTotal+totalTax
    }
})

// for case function
let minus2 = document.getElementById("minus-button2");
let plus2 = document.getElementById("plus-button2");
let value2 = document.getElementById("value2");
let newValue2= parseInt((value2).value);
let casePrice = document.getElementById("case-price");
plus2.addEventListener("click", ()=>{
    let finalValue2 = newValue2 + 1;
    newValue2=finalValue2;
    value2.value=newValue2;
    let caseValue =newValue2*50
    casePrice.innerText=caseValue;
    let subTotal = subtotal.innerText = caseValue;
    let totalTax = tax.innerText = caseValue*.15;
    total.innerText = subTotal+totalTax;
   
})
minus2.addEventListener("click", ()=>{
    let finalValue2 = newValue2 - 1;
    newValue2=finalValue2;
    if (newValue2>=0) {
        value2.value=newValue2;
        let caseValue =newValue2*50
        casePrice.innerText=caseValue;
        let subTotal = subtotal.innerText = caseValue;
        let totalTax = tax.innerText = caseValue*.15;
        total.innerText = subTotal+totalTax;
    } else {
        value2.value=0;
        let caseValue =newValue2*50
        casePrice.innerText=caseValue;
        let subTotal = subtotal.innerText = caseValue;
        let totalTax = tax.innerText = caseValue*.15;
        total.innerText = subTotal+totalTax;
    }
})