document.getElementById("findMentor").addEventListener("click", function() {
    alert("Redirecting to the mentor search page...");
    window.location.href = "find_mentor.html";
});

document.getElementById("messages").addEventListener("click", function() {
    alert("Opening messages...");
    window.location.href = "messages.html";
});


document.addEventListener("DOMContentLoaded", function () {
    

    // Handle Logout Button Click
    let logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            // Redirect to Home Page
            window.location.href = "index.html";
        });
    }
});
