const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

// pagination
const cardContainer = document.getElementById("container");
const pagination = document.getElementById("pageNumbers");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // card data
  const cards =[
    { image: "images/b-11.jpg.png", title: "Real House Luxury Villa", address:"Victoria Island,Lagos", price: "₦ 3,340,000,000", bedrooms: 6, bathrooms: 3 },
    { image: "images/b-11.jpg (1).png", title: "Exquisite Haven Villa", address:"Festac,Lagos", price: "₦ 4,000,000/1 Year", bedrooms: 5, bathrooms: 3 },
    { image: "images/b-11.jpg (2).png", title: "Luxe Palatial Villa", address:"Gbagada,Lagos", price: "₦ 5,350,000,000", bedrooms: 7, bathrooms: 3 },
    { image: "images/b-11.jpg (3).png", title: "Harmony  Luxury Villa", address:"Magodo Phase 1,Lagos", price: "₦ 1,240,000,000", bedrooms: 4, bathrooms: 5 },
    { image: "images/b-11.jpg (4).png", title: "Solstice Estate Villa", address:"Ikoyi,Lagos", price: "₦ 6,000,000,000", bedrooms: 5, bathrooms: 6 },
    { image: "images/b-11.jpg (5).png", title: "Veridian Hall Villa", address:"Banana Island,Lagos", price: "₦ 10,500,000,000", bedrooms: 4, bathrooms:6 },
    { image: "images/b-11.jpg (6).png", title: "Sapphire Crest Villa", address:"NICON town,Lagos", price: "₦ 850,000,000", bedrooms: 7, bathrooms:9 },
    { image: "images/b-11.jpg (7).png", title: "Ravenwood Manor Villa", address:"VGC,Lagos", price: "₦ 970,000,000", bedrooms: 6, bathrooms: 8 },
    { image: "images/b-11.jpg (8).png", title: "Elysian Heights Villa", address:"Ikeja G.R.A,Lagos", price: "₦ 540,000,000", bedrooms: 5, bathrooms: 6 },
  ]
  const cardsPerPage = 3; // 3 per page (Adjust as needed)
        const totalPages = Math.ceil(cards.length / cardsPerPage);
        let currentPage = 1;

 //  generate card
 function generateCard(card) {
  return `
      <div class="w-[21.75rem] bg-white h-[32rem] lg:h-[35rem] border-[lightgray] border card-container">
               <div class="relative">
                               
                <img class="h-[18rem] w-full mb-[1rem]" src="${card.image}" alt="house-image">
                <!-- image buttons -->  
                <div class="flex justify-between items-center gap-[6rem] px-[1.5rem] py-[1.5rem] absolute top-0">
                  <button class="btn bg-[#3d9970] text-white px-[1.5rem] py-[.5rem] text-center text-[0.8rem] font-medium hover:scale-110 transition-transform duration-300">Featured</button>
                  <button class="btn img-btn text-white px-[1.5rem] py-[.5rem] text-center text-[0.8rem] font-medium hover:scale-110 transition-transform duration-300 ">For Sale</button>
                </div>
                <!-- batch b image buttons -->
                 <div class="flex items-center gap-[1rem] absolute top-[15rem] left-[13rem]">
                  <div class="bg-[#878787] p-[.35rem] rounded-md cursor-pointer hover:scale-110 transition-transform duration-300">
                    <img src="images/chain.png" alt="chain">
                  </div>
                  <div class="bg-[#878787] p-[.35rem]  rounded-md cursor-pointer hover:scale-110 transition-transform duration-300">
                    <img src="images/camera.png" alt="camera">
                  </div>
                  <div class="bg-[#878787] p-[.35rem]  rounded-md cursor-pointer hover:scale-110 transition-transform duration-300">
                    <img src="images/gallery.png" alt="gallery">
                  </div>
                 </div>
               </div>
               <div class="px-[2rem]">
                <p class="mb-[1rem] font-bold text-[1.25rem]">${card.title}</p>
                <!--  -->
                <div class="flex items-center mb-[1rem] gap-[1rem]">
                  <i class="fa-solid fa-location-dot text-[#666666]"></i>
                  <p class="text-[0.8rem] font-normal">${card.address}</p>
                </div>
                <!-- bedroom and bathroom -->
                 <div class="flex items-center gap-[3rem] mb-[1.5rem]">
                  <div class="flex items-center gap-2">
                    <img src="images/bedroom.png" alt="">
                    <p class="text-[0.8rem] font-normal">${card.bedrooms} bedrooms</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <img src="images/bathroom.png" alt="">
                    <p class="text-[0.8rem] font-normal">${card.bathrooms} bathrooms</p>
                  </div>
                 </div>
                 <!-- border line -->
                  <div class="bg-[lightgray] w-[18.5rem] h-[0.5px] mb-[1rem]" ></div>
                  <!-- pricing -->
                   <div class="flex items-center justify-around">
                    <p class="text-[1.25rem] font-bold">${card.price} </p>
                    <img class="cursor-pointer hover:scale-110 transition-transform duration-300" src="images/Icon (4).png" alt="">
                    <img class="cursor-pointer hover:scale-110 transition-transform duration-300" src="images/Icon (3).png" alt="">
                    <p class="cursor-pointer hover:scale-110 transition-transform duration-300"><i class="fa-regular fa-heart "></i></p>
                   </div>
               </div>
          </div>
  `
 }
 
 function renderCards() {
  cardContainer.innerHTML = "";
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const visibleCards = cards.slice(start, end);

  visibleCards.forEach(card => {
      cardContainer.innerHTML += generateCard(card);
  });

  renderPagination();
}

function renderPagination() {
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.add(
          "px-4", "py-2", "rounded-md", "font-medium", "text-black", "transition-transform", "duration-300",
          currentPage === i ? "bg-[#3d9970]" : "bg-transparent", 
          "hover:scale-110"
      );

      button.onclick = () => {
          currentPage = i;
          renderCards();
      };

      pagination.appendChild(button);
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.onclick = () => {
  if (currentPage > 1) {
      currentPage--;
      renderCards();
  }
};

nextBtn.onclick = () => {
  if (currentPage < totalPages) {
      currentPage++;
      renderCards();
  }
};

renderCards();

// counter

let count = 0
const countElement = document.getElementById("count")

document.getElementById("plus").addEventListener("click", ()=>{
  count ++
  countElement.textContent = count
})
document.getElementById("minus").addEventListener("click", ()=>{
  count --
  countElement.textContent = count
})

/

document.addEventListener("DOMContentLoaded", function () {
  const hamburger1 = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn2 = document.getElementById("close-btn");

  if (hamburger1 && sidebar && closeBtn2) { // Ensure elements exist
      // Open Sidebar
      hamburger1.addEventListener("click", () => {
          sidebar.classList.remove("-translate-x-full");
      });

      // Close Sidebar
      closeBtn2.addEventListener("click", () => {
          sidebar.classList.add("-translate-x-full");
      });
  } else {
      console.error("One or more elements not found");
  }
  // Close Sidebar When Clicking Outside
  document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.add("-translate-x-full");
    }
});
});