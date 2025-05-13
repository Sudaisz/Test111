
let isAvailable = true;
function toggleStatus() {
    const password = document.getElementById("admin-pass").value;
    const statusMsg = document.getElementById("status-msg");

    if (password === "12beyond") {
        isAvailable = !isAvailable;
        statusMsg.textContent = "WhatsApp Numbers are now " + (isAvailable ? "AVAILABLE" : "UNAVAILABLE");
        statusMsg.style.color = "lightgreen";
    } else {
        statusMsg.textContent = "You're not the owner.";
        statusMsg.style.color = "red";
    }
}
