const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ageInput = document.getElementById("age");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("message").textContent = "";

    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        document.getElementById("emailError").textContent =
            "Email is required";
        valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email";
        valid = false;
    }

    // Validate password
    if (passwordInput.value === "") {
        document.getElementById("passwordError").textContent =
            "Password is required";
        valid = false;
    } else if (passwordInput.value.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters";
        valid = false;
    }

    // Validate confirm password
    if (confirmPasswordInput.value === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password";
        valid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match";
        valid = false;
    }

    // Validate age
    const age = Number(ageInput.value);

    if (ageInput.value.trim() === "") {
        document.getElementById("ageError").textContent =
            "Age is required";
        valid = false;
    } else if (!Number.isFinite(age) || age <= 0) {
        document.getElementById("ageError").textContent =
            "Please enter a valid age";
        valid = false;
    }

    // Show result
    if (valid) {
        document.getElementById("message").textContent =
            "Registration successful!";
    }
});