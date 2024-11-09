const colorSelect = document.getElementById('colorSelect');
const selectedColor = document.getElementById('selectedColor');

colorSelect.addEventListener('change', function() {
    selectedColor.textContent = `You selected: ${colorSelect.value}`;
});
