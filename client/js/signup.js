document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // const profilePicture = document.getElementById('profilePicture').files[0];
  
    // Create FormData object for file upload
    
    // if (profilePicture) {
    //   formData.append('profilePicture', profilePicture);
    // }
  
    //Get error message containers
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((el) => (el.textContent = "")); // Clear previous errors

    let isValid = true

    //Validate first name
  // Basic validation
  if (!firstName) {
    showError("firstName", "First name is required");
    isValid = false
  }
 //validate last name
 if (!lastName) {
  showError("lastName", "Last name is required");
  isValid = false
} 

  // Validate email format
  if (!validateEmail(email)) {
    showError("email", "Invalid email format. Use a valid domain (e.g., .com, .net, .org)");
    isValid = false;
  }

  // Validate password strength
  if (password.length < 6) {
    showError("password", "Passwords must be at least 6 characters");
    isValid = false
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    showError("confirm-password", "Passwords do not match");
    isValid = false
  }

  if(!isValid) return;  //stop if validation fails
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        showToast("Signup Successful! REdirecting...", "green");    
          setTimeout(() => {
            window.location.href = "login.html";
          }, 3000);
        
      } else {
       showError("email",data.error || "Signup Failed");
      }
    } catch (error) {
      console.error('Error:', error);
      showError("email","An error occurred during signup");
    }
  });
  // Function to validate email
function validateEmail(email) {
return  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
}


// Function to display error messages
function showError(inputId, message) {
  const inputField = document.getElementById(inputId);
  const errorMessage = inputField.parentElement.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.textContent = message;
  }
}
// Function to show Toastify notifications
function showToast(message, color) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: color,
  }).showToast();
}