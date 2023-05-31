// button function and costing
function acceccoriesCost(buttonId) {
    if (buttonId == '8gb-unified-memory') {
        document.getElementById('extra-memory-cost').innerText = 0;
    }
    else if (buttonId == '16gb-unified-memory') {
        document.getElementById('extra-memory-cost').innerText = 180;
    }
    else if (buttonId == '256gb-ssd-storage') {
        document.getElementById('extra-storage-cost').innerText = 0;
    }
    else if (buttonId == '512gb-ssd-storage') {
        document.getElementById('extra-storage-cost').innerText = 100;
    }
    else if (buttonId == '1tb-ssd-storage') {
        document.getElementById('extra-storage-cost').innerText = 180;
    }
    else if (buttonId == 'free-delivery-cost') {
        document.getElementById('delivery-charge-cost').innerText = 0;
    }
    else if (buttonId == 'paid-delivery-cost') {
        document.getElementById('delivery-charge-cost').innerText = 20;
    }

}

// total cost
function totalCost() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    const extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    const delivaryCost = document.getElementById('delivery-charge-cost').innerText;
    const totalCost = parseInt(bestPrice) + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(delivaryCost);
    document.getElementById('total-Cost').innerText = totalCost;
    document.getElementById('final-total-price').innerText = totalCost;
}
// function promoCodeInput(e) {
//     const promoCodeInput = document.getElementById('promo-code-input');
//     console.log(promoCodeInput.value);
// }
// promo code stevekaku 
function promoCode() {
    const promoCodeInput = document.getElementById('promo-code-input');
    const totalCost = document.getElementById('total-Cost').innerText;
    console.log(totalCost);
    const promoCodeText = promoCodeInput.value;
    if (promoCodeText == 'stevekaku') {
        const afterApplypromoCode = parseInt(totalCost) * (20 / 100);
        document.getElementById('total-Cost').innerText = afterApplypromoCode;
        document.getElementById('final-total-price').innerText = afterApplypromoCode;
        document.getElementById('promo-code-apply-success').style.display = 'inline';
        document.getElementById('promo-code-apply-fail').style.display = 'none';
    }
    else {
        document.getElementById('promo-code-apply-success').style.display = 'none';
        document.getElementById('promo-code-apply-fail').style.display = 'inline';
    }
    promoCodeInput.value = '';
}

//accessories buttons
document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    acceccoriesCost('8gb-unified-memory');
    totalCost();
});
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    acceccoriesCost('16gb-unified-memory');
    totalCost();
});
// storage accessories button
document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    acceccoriesCost('256gb-ssd-storage');
    totalCost();
});
document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    acceccoriesCost('512gb-ssd-storage');
    totalCost();
});
document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    acceccoriesCost('1tb-ssd-storage');
    totalCost();
});
// delivery cost
document.getElementById('free-delivery-cost').addEventListener('click', function () {
    acceccoriesCost('free-delivery-cost');
    totalCost();
});
document.getElementById('paid-delivery-cost').addEventListener('click', function () {
    acceccoriesCost('paid-delivery-cost');
    totalCost();
});
// promo code apply
document.getElementById('promo-code-apply').addEventListener('click', function () {
    promoCode();
});