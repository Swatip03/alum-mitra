document.addEventListener("DOMContentLoaded", function () {
    // Handle Logout Button Click
    let logoutButton = document.getElementById("logout-btn");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            // Redirect to Home Page
            window.location.href = "index.html";
        });
    }
});
