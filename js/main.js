


// =============================bars=====================


    const bars = document.getElementById("bars");
    const navList = document.querySelector(".nav__list");

    bars.addEventListener("click", () => {
        bars.classList.toggle("active");
        navList.classList.toggle("active");
    });




    const items = document.querySelectorAll(".header__list li:not(.header__item3)");
const mainCard = document.querySelector(".header__item3");
const mainTitle = mainCard.querySelector(".title");
const mainText = mainCard.querySelector(".text");
const mainImage = mainCard.querySelector(".image");

items.forEach(item => {
    item.addEventListener("click", () => {
        // Barcha kartalardan active olib tashla
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        // Fade out
        mainCard.classList.add("fade");

        setTimeout(() => {
            // Matn va rasmni o'zgartirish
            mainTitle.innerText = item.querySelector("h1, .sarlavha, .sarlavha1, .sarlavha2, .sarlavha4, .sarlavha5, .sarlavha6").innerText;
            mainText.innerText = item.querySelector("p, .matn, .matn1, .matn2, .matn4, .matn5, .matn6").innerText;
            mainImage.src = item.querySelector("img").src;

            // Fade in
            mainCard.classList.remove("fade");
        }, 300);
    });
});













 document.addEventListener('DOMContentLoaded', function() {
            const sliderTrack = document.getElementById('sliderTrack');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const sliderDots = document.getElementById('sliderDots');
            const cards = document.querySelectorAll('.aside__list');
            
            let currentIndex = 0;
            let cardsPerView = 3;
            let autoSlideInterval;
            let isAnimating = false;
            
            // Responsive cards per view
            function updateCardsPerView() {
                if (window.innerWidth <= 768) {
                    cardsPerView = 1;
                } else if (window.innerWidth <= 1024) {
                    cardsPerView = 2;
                } else {
                    cardsPerView = 3;
                }
                updateSlider();
            }
            
            // Create dots
            function createDots() {
                sliderDots.innerHTML = '';
                const totalSlides = Math.ceil(cards.length / cardsPerView);
                
                for (let i = 0; i < totalSlides; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => goToSlide(i));
                    sliderDots.appendChild(dot);
                }
            }
            
            // Update slider position
            function updateSlider() {
                if (isAnimating) return;
                
                isAnimating = true;
                const cardWidth = cards[0].offsetWidth + 30; // card width + gap
                const translateX = -currentIndex * cardWidth * cardsPerView;
                
                sliderTrack.style.transform = `translateX(${translateX}px)`;
                
                // Update dots
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
                
                // Update button states
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= Math.ceil(cards.length / cardsPerView) - 1;
                
                setTimeout(() => {
                    isAnimating = false;
                }, 500);
            }
            
            // Go to specific slide
            function goToSlide(index) {
                const totalSlides = Math.ceil(cards.length / cardsPerView);
                if (index < 0 || index >= totalSlides) return;
                
                currentIndex = index;
                updateSlider();
                resetAutoSlide();
            }
            
            // Next slide
            function nextSlide() {
                const totalSlides = Math.ceil(cards.length / cardsPerView);
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateSlider();
                } else {
                    // Loop back to start
                    currentIndex = 0;
                    updateSlider();
                }
                resetAutoSlide();
            }
            
            // Previous slide
            function prevSlide() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                } else {
                    // Loop to end
                    const totalSlides = Math.ceil(cards.length / cardsPerView);
                    currentIndex = totalSlides - 1;
                    updateSlider();
                }
                resetAutoSlide();
            }
            
            // Auto slide
            function startAutoSlide() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
            
            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }
            
            // Touch swipe support
            let touchStartX = 0;
            let touchEndX = 0;
            
            sliderTrack.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            sliderTrack.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next
                        nextSlide();
                    } else {
                        // Swipe right - previous
                        prevSlide();
                    }
                }
            }
            
            // Event listeners
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
            
            // Pause auto-slide on hover
            sliderTrack.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            sliderTrack.addEventListener('mouseleave', startAutoSlide);
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') prevSlide();
                if (e.key === 'ArrowRight') nextSlide();
            });
            
            // Initialize
            updateCardsPerView();
            createDots();
            startAutoSlide();
            
            // Window resize
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    updateCardsPerView();
                    createDots();
                    updateSlider();
                }, 250);
            });
        });