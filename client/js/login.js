import {BASE_URL} from "./config.js"
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Get error message containers
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((el) => (el.textContent = "")); // Clear previous errors

  let isValid = true

  if (!email) {
    showError("email","Email and password are required");
    isValid = false
  }

  if (!password) {
    showError("password","Password is required");
    isValid = false
  }

  if(!isValid) return; //stop if validation fails

    try {

      const response = await fetch(`${BASE_URL}/api/auth/login`, {  // Use template string with BASE_URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json()
      
      
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        showToast("Login Successful Redirecting....", "green")
         
         setTimeout(() => {
            window.location.href = "index.html";
          }, 3000);
        
      } else {
        
        if (data.error.includes("User not found")) {
          showError("email","Incorrect Email");
        } else if (data.error.includes("Invalid credentials")) {
          showError("password","Incorrect Password");
        } else {
          showError("email","Login Failed");
        }
      }
    } catch (error) {
      console.error('Error:', error);
      showError("email","An error occurred during login")
    }
  });

  // Function to display error messages
function showError(inputId, message) {
  const inputField = document.getElementById(inputId);
  const errorMessage = inputField.parentElement.querySelector(".error-message")
  if (errorMessage && errorMessage.classList.contains("error-message")) {
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

// // Logout Function
// export function logoutUser() {
//   signOut(auth).then(() => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     updateNavbarAndSidebar();
//   }).catch((error) => {
//     console.error("Logout Error:", error);
//     showToast("Logout Failed", "red");
//   });
// }