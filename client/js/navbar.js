document.addEventListener("DOMContentLoaded", () => {
  const authLinks = document.getElementById("auth-links");
  const sidebarAuthLinks = document.getElementById("sidebar-auth-links");

  function updateNavbarAndSidebar() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      // Show full name with dropdown in Navbar
      authLinks.innerHTML = `
        <div class="relative">
          <div class="flex items-center gap-2 cursor-pointer" id="user-menu-toggle">
            <img src="${user.profilePic || 'default-avatar.png'}" class="w-10 h-10 rounded-full">
            <span>${user.firstName} ${user.lastName}</span>
            <i class="fas fa-chevron-down"></i>
          </div>

          <div id="user-dropdown" class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden">
            <button id="logout-btn" class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      `;

      // Show full name with logout button in Sidebar
      sidebarAuthLinks.innerHTML = `
        <div class="flex flex-col gap-2 px-6">
          <div class="flex items-center gap-2">
            <img src="${user.profilePic || 'default-avatar.png'}" class="w-10 h-10 rounded-full">
            <span>${user.firstName} ${user.lastName}</span>
          </div>
          <button id="sidebar-logout-btn" class="bg-red-500 px-4 py-2 text-white rounded-sm w-full mt-2">
            Logout
          </button>
        </div>
      `;

      // Dropdown menu for logout
      const userMenuToggle = document.getElementById("user-menu-toggle");
      const userDropdown = document.getElementById("user-dropdown");

      userMenuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        userDropdown.classList.toggle("hidden");
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (event) => {
        if (!userDropdown.contains(event.target) && !userMenuToggle.contains(event.target)) {
          userDropdown.classList.add("hidden");
        }
      });

      // Handle Logout for Navbar
      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        updateNavbarAndSidebar();
      });

      // Handle Logout for Sidebar
      document.getElementById("sidebar-logout-btn").addEventListener("click", () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        updateNavbarAndSidebar();
      });

    } else {
      // Show login and signup buttons in Navbar
      authLinks.innerHTML = `
        <a href="login.html" class="bg-[#3d9970] px-4 py-2 rounded-md text-white font-bold">Login</a>
        <a href="signup.html" class="bg-white text-[#3d9970] px-4 py-2 rounded-md font-bold">Sign Up</a>
      `;

      // Show login and signup buttons in Sidebar
      sidebarAuthLinks.innerHTML = `
        <a href="login.html" class="bg-[#3d9970] px-4 py-2 rounded-sm text-white mr-[2rem]">Login</a>
        <a href="signup.html" class="bg-white text-[#3d9970] px-4 py-2 rounded-sm">Sign Up</a>
      `;
    }
  }

  // Call function to update navbar & sidebar on page load
  updateNavbarAndSidebar();
});
