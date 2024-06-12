let slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slider-img");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showEmotes() {
    console.log("Emotes button clicked");
}

function showPrices() {
    console.log("Prices button clicked");
}

function showContact() {
    console.log("Contact button clicked");
}
