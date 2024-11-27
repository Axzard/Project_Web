// Elemen yang dibutuhkan
const billingText = document.getElementById("billingText");
const editButton = document.getElementById("editButton");
const saveButton = document.getElementById("saveButton");
const showDashboard = document.getElementById("dashboardButton");

// Event untuk mengedit
editButton.onclick = () => {
  billingText.contentEditable = "true";
  billingText.focus();
  toggleButtons();
};

// Event untuk menyimpan
saveButton.onclick = () => {
  billingText.contentEditable = "false";
  toggleButtons();
};
// Fungsi untuk mengubah tampilan tombol
function toggleButtons() {
  const isEditing = billingText.contentEditable === "true";
  editButton.style.display = isEditing ? "none" : "inline-block";
  saveButton.style.display = isEditing ? "inline-block" : "none";
}
