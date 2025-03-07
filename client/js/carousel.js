document.addEventListener("DOMContentLoaded", () => {
const swiperWrapper = document.getElementById( 'swiper-wrapper' );


if (!swiperWrapper) {
    console.error("Swiper container not found.");
    return;
  }
const slides = [
    { image: "images/discover1.jpeg", title: "Luxury Villa", description: "6 Bedrooms, 3 Bathrooms", price: "₦ 1,340,000,000", address: "Banana Island,Lagos",bed:6 , bath:5, ft:920 },
    { image: "images/discover2.jpeg", title: "Modern Apartment", description: "3 Bedrooms, 2 Bathrooms", price: "₦ 670,000,000", address: "Victoria Island,Lagos",bed:6 , bath:5, ft:860 },
    { image: "images/discover3.jpeg", title: "Beach House", description: "4 Bedrooms, 3 Bathrooms", price: "₦340,000,000", address: "Magodo Phase 1,Lagos",bed:6 , bath:5, ft:780 },
    { image: "images/discover4.jpeg", title: "City Loft", description: "2 Bedrooms, 1 Bathroom", price: "₦290,000,000", address: "Ikeja G.R.A,Lagos",bed:4 , bath:5, ft:620 },
    { image: "images/b-11.jpg (2).png", title: "Lake Side Villa", description: "5 Bedrooms, 4 Bathrooms", price: "₦280,000,000", address: "Ikoyi,Lagos",bed:6 , bath:5, ft:820 },
    { image: "images/b-11.jpg (5).png", title: "Countryside Home", description: "5 Bedrooms, 4 Bathrooms", price: "₦ 865,000,000", address: "Maitama,Abuja",bed:6 , bath:5, ft:890},


];


swiperWrapper.innerHTML = slides.map( slide => `
      <div class="swiper-slide flex bg-no-repeat bg-cover bg-center text-white relative" style="background-image: url('${ slide.image }');">
                 <div class="absolute w-[100%] bottom-0 h-[120px] px-[1.5rem] pt-[.75rem] pb-[1rem] bg-black bg-opacity-60 ">
                    <h1 class="text-[1.2rem] font-semibold mb-[.85rem]">${slide.title}</h1>
                    <p class="text-[1.2rem] font-semibold mb-[.75rem]">${slide.price}</p>
                    <div class="flex items-center gap-[1.5rem] mb-[.85rem]">
                    <p class="text-[0.85rem] font-normal">${slide.bed} bed</p>
                    <div class="bg-white w-[0.4px] h-[1rem]"></div>
                    <p class="text-[0.85rem] font-normal">${slide.bath} bath</p>
                    <div class="bg-white w-[0.4px] h-[1rem]"></div>
                    <p class="text-[0.85rem] font-normal">${slide.ft} sq ft</p>        
                    </div>
                    <div class="flex items-center gap-[1rem]">
                    <p><i class="fa-solid fa-location-dot"></i></p>
                    <p class="text-[0.85rem] font-normal">${slide.address}</p>
                </div>
    </div>
            </div>
    `).join( '' );


const swiper = new Swiper( '.swiper', {
    slidesPerView: 1, // Show 3 slides at a time
    spaceBetween: 10, // Space between slides
    loop: true, // Enable infinite scrolling
    navigation: {
        nextEl: '#custom-next',
        prevEl: '#custom-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,  // Enables hand cursor when hovering
    simulateTouch: true, // Enables mouse drag
    touchRatio: 1, // Adjusts swipe sensitivity
    touchAngle: 45, // Controls the swipe angle
    breakpoints: {
        420:{slidesPerView:1,
            spaceBetween:20,
        },
        768: { slidesPerView: 2 }, // Show 2 slides on tablets
        480: { slidesPerView: 1 },  // Show 1 slide on small screens
        1024: { slidesPerView: 4 } // Show 4 slides on large screens
    }
} )
})