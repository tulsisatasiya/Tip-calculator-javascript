const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function(slider){
    slider.addEventListener("input",calculatertip);
});

const billinput = document.getElementById("bill");
billinput.addEventListener("change",calculatertip);
// console.log(billinput);

function calculatertip(){
    let bill = parseFloat(billinput.value);
    let tipercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    billinput.value = bill.toFixed(2);

    let totaltip = parseFloat((bill * (tipercent/100)).toFixed(2));
    let total = parseFloat((bill + totaltip).toFixed(2));

    let tipperperson = (totaltip / noOfPeople).toFixed(2);
    let totalperson = (total / noOfPeople).toFixed(2);

    // console.log(noOfPeople);
    // console.log(totaltip);
    // console.log(total);
    // console.log(tipperperson);
    // console.log(totalperson);
    
    document.getElementById("tip-amount").textContent = `\₹ ${totaltip}`;
    document.getElementById("total-amount").textContent = `\₹ ${total}`;
    
    document.getElementById("tip-percent").textContent = `\₹ ${tipercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;
    
    document.getElementById("tip-per-person").textContent = `\₹ ${tipperperson}`;
    document.getElementById("total-per-person").textContent = `\₹ ${totalperson}`;

}

calculatertip();

function clearInputValue() {
    document.getElementById('bill').value = '';
}
