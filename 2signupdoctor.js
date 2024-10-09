// Validate the form and show error messages if necessary
function validateForm(event) {
  event.preventDefault(); // Prevent form submission for validation

  // Collect input fields
  const fullName = document.getElementById("fullName");
  const dob = document.getElementById("dob");
  const gender = document.getElementById("gender");
  const qualification = document.getElementById("qualification");
  const licenseNumber = document.getElementById("licenseNumber");
  const hospital = document.getElementById("hospital");
  const experience = document.getElementById("experience");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const nationality = document.getElementById("nationality");
  const mobile = document.getElementById("mobile");
  const email = document.getElementById("email");
  const createPassword = document.getElementById("createPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");

  clearErrors(); // Call function to clear previous error messages
  let isValid = true; // Flag to track form validity

  // Add error message function
  function showError(input, message) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.innerText = message;
    input.parentElement.appendChild(errorMessage);
    isValid = false;
  }

  // Clear previous error messages
  function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((error) => error.remove());
  }

  // Check for empty fields and add specific validation
  if (!fullName.value.trim()) showError(fullName, "Full Name is required.");
  if (!dob.value.trim()) showError(dob, "Date of Birth is required.");
  if (!gender.value) showError(gender, "Gender selection is required.");
  if (!qualification.value.trim())
    showError(qualification, "Qualification is required.");
  if (!licenseNumber.value.trim())
    showError(licenseNumber, "License Number is required.");
  if (!hospital.value.trim()) showError(hospital, "Hospital Name is required.");
  if (!experience.value.trim() || experience.value < 0)
    showError(experience, "Valid experience is required.");
  if (!address.value.trim()) showError(address, "Address is required.");
  if (!city.value.trim()) showError(city, "City is required.");
  if (!state.value) showError(state, "State selection is required.");
  if (!nationality.value.trim())
    showError(nationality, "Nationality is required.");

  // Mobile number validation
  const mobileRegex = /^\d{10}$/;
  if (!mobile.value.trim()) {
    showError(mobile, "Mobile number is required.");
  } else if (!mobileRegex.test(mobile.value)) {
    showError(mobile, "Mobile number must be 10 digits.");
  }

  // Email validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!email.value.trim()) {
    showError(email, "Email is required.");
  } else if (!emailRegex.test(email.value)) {
    showError(email, "Invalid email address.");
  }

  // Password validation
  const passwordRegex =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
  if (!createPassword.value.trim()) {
    showError(createPassword, "Password is required.");
  } else if (!passwordRegex.test(createPassword.value)) {
    showError(
      createPassword,
      "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character."
    );
  }

  // Confirm password validation
  if (!confirmPassword.value.trim()) {
    showError(confirmPassword, "Confirm Password is required.");
  } else if (confirmPassword.value !== createPassword.value) {
    showError(confirmPassword, "Passwords do not match.");
  }

  // Check if terms are accepted
  if (!terms.checked) {
    showError(terms, "You must agree to the Terms and Conditions.");
  }

  // If form is valid, redirect to another page (e.g., '4doctordashboard.html')
  if (isValid) {
    window.location.href = "4doctordashboard.html"; // Redirect after successful validation
  }
}

// Attach the validation function to the form submit event
const form = document.querySelector("form"); // Assuming form element is already present
form.addEventListener("submit", validateForm);
