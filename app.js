const sliders = document.querySelectorAll(".slider");
var counter = 0;

sliders.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`;
});

const goPrevious = () => {
    if (counter === 0) {
        counter = sliders.length - 1;
    } else {
        counter--;
    }
    slideImage();
}

const goNext = () => {
    if (counter === sliders.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImage();
}

const slideImage = () => {
    sliders.forEach((slider) => {
        slider.style.transform = `translateX(-${counter * 100}%)`;
    });
}