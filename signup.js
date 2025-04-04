document.addEventListener("DOMContentLoaded", function () {
    // Handle Signup Form Submission
    let signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Ensure all required fields are filled before redirecting
            let name = document.getElementById("name").value.trim();
            let year = document.getElementById("year").value;
            let major = document.getElementById("major").value.trim();
            let interests = document.getElementById("interests").value.trim();

            if (name && year && major && interests) {
                // Redirect to Junior Dashboard
                window.location.href = "junior_dashboard.html";
            } else {
                alert("Please fill out all fields before continuing.");
            }
        });
    }

    
});
