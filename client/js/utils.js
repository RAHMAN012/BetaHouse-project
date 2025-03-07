// Function to show Toastify notifications
export function showToast(message, color) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: color,
    }).showToast();
  }
  
  // Function to validate email format
  export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
  }
  
  // Function to clear form inputs after submission
  export function clearForm(formId) {
    document.getElementById(formId).reset();
  }