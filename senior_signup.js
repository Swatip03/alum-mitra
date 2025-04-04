document.getElementById("seniorSignupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let gradYear = document.getElementById("grad-year").value.trim();
    let field = document.getElementById("field").value.trim();
    let expertise = document.getElementById("expertise").value.trim();

    if (name === "" || gradYear === "" || field === "" || expertise === "") {
        alert("Please fill in all fields.");
        return;
    }

    

    alert("Signup successful! Redirecting to mentor dashboard.");
    window.location.href = "senior_dashboard.html";
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("seniorSignupForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        // Redirect to the senior dashboard
        window.location.href = "senior_dashboard.html";
    });
});

