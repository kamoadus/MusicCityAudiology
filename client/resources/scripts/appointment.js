function toggleOtherLocationInput(selectElement){
    var otherLocationInput = document.getElementById('otherLocationInput');
    otherLocationInput.style.display = selectElement.value === 'other' ? 'block' : 'none';
}
   
function toggleOtherPaymentInput(selectElement){
    var otherPaymentInput = document.getElementById('otherPaymentInput');
    otherPaymentInput.style.display = selectElement.value === 'other' ? 'block' : 'none';
}