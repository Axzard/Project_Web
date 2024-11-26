function editKRSSchedule() {
    window.location.href = "belanjakrs.html";
}
function submitKRS() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let selectedMatkul = [];
    checkboxes.forEach(checkbox => {
        selectedMatkul.push(checkbox.value);
    });
}
