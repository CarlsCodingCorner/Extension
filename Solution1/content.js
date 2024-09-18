// content.js

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const buttons = document.querySelectorAll('button'); // Adjust the selector as needed
    const requiredCheckboxes = 3; // Number of checkboxes to be selected

    function updateButtonState() {
        const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        buttons.forEach(button => {
            button.disabled = checkedCount < requiredCheckboxes;
        });
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonState);
    });

    // Initial check
    updateButtonState();
});