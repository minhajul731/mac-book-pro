function memoryAcceccories(buttonId) {
    document.getElementById('extra-memory-cost').innerText = buttonId;
}

// memory accessories button
document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    memoryAcceccories(0);
});
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    memoryAcceccories(180);
});
// storage accessories button
document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    memoryAcceccories(0);
});
document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    memoryAcceccories(100);
});
});
document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    memoryAcceccories(180);
});