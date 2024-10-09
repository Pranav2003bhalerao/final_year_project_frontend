
  // Function to display error messages as small popups (tooltips)
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    
    // Create error message container (span)
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = message;

    // Positioning the error message near the input field
    field.style.position = 'relative'; // Ensure parent container allows for absolute positioning
    const fieldRect = field.getBoundingClientRect();
    
    // Remove previous error messages if they exist
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
        existingError.remove();
    }

    // Append error message as tooltip
    field.parentNode.appendChild(errorMessage);
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch all input values
    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const nationality = document.getElementById("nationality").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const createPassword = document.getElementById("createPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const terms = document.getElementById("terms").checked;

    // Clear previous error messages
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(el => el.remove());

    // Validation flag
    let valid = true;

    // Validate Full Name
    if (fullName === "") {
        showError("fullName", "Full Name is required.");
        valid = false;
    }

    // Validate Date of Birth
    if (dob === "") {
        showError("dob", "Date of Birth is required.");
        valid = false;
    }

    // Validate Gender
    if (gender === "") {
        showError("gender", "Gender is required.");
        valid = false;
    }

    // Validate Address
    if (address === "") {
        showError("address", "Residential Address is required.");
        valid = false;
    }

    // Validate City
    if (city === "") {
        showError("city", "City is required.");
        valid = false;
    }

    // Validate State
    if (state === "") {
        showError("state", "State is required.");
        valid = false;
    }

    // Validate Nationality
    if (nationality === "") {
        showError("nationality", "Nationality is required.");
        valid = false;
    }

    // Validate Mobile Number
    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
        showError("mobile", "Mobile number must be 10 digits.");
        valid = false;
    }

    // Validate Email Address
    if (email === "" || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        showError("email", "Please enter a valid email address.");
        valid = false;
    }

    // Validate Password
    if (createPassword === "") {
        showError("createPassword", "Password is required.");
        valid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(createPassword)) {
        showError("createPassword", "Password must be 8+ characters long with uppercase, lowercase, number, and special character.");
        valid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
        showError("confirmPassword", "Confirm Password is required.");
        valid = false;
    } else if (confirmPassword !== createPassword) {
        showError("confirmPassword", "Passwords do not match.");
        valid = false;
    }

    // Validate Terms and Conditions
    if (!terms) {
        showError("terms", "You must agree to the Terms and Conditions.");
        valid = false;
    }

    // If form is valid, show success message or submit the form
    if (valid) {
        // alert("Form submitted successfully!");
        window.location.href = 'patienthome.html';
        // Form submission logic here if needed
    }
}