// button function and costing
function memoryAcceccories(buttonId) {
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

// memory accessories button
document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    memoryAcceccories('8gb-unified-memory');
});
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    memoryAcceccories('16gb-unified-memory');
});
// storage accessories button
document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    memoryAcceccories('256gb-ssd-storage');
});
document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    memoryAcceccories('512gb-ssd-storage');
});
document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    memoryAcceccories('1tb-ssd-storage');
});
// delivery cost
document.getElementById('free-delivery-cost').addEventListener('click', function () {
    memoryAcceccories('free-delivery-cost')
});
document.getElementById('paid-delivery-cost').addEventListener('click', function () {
    memoryAcceccories('paid-delivery-cost')
});