let manuelSlider = document.querySelector(".manuelSlider");
let sliders = document.querySelectorAll(".sliders");
let autoSlider = document.querySelector(".autoSlider");

addEventListener('click', (event) => { isCurrenBtn(event.target.id) });
if (autoSlider != null) setInterval(() => {
    timeSliderControl();
}, 5000);

timeSliderControl = () => {
    let isFront = document.querySelector(".isFront");
    let id = parseInt(isFront.id[isFront.id.length - 1]);
    if (sliders.length - 1 == id) id = 0;
    nextSlider(id);
}

isCurrenBtn = (controlId) => {
    let isFront = document.querySelector(".isFront");
    let id = parseInt(isFront.id[isFront.id.length - 1]);
    if (controlId == "next" && id < sliders.length - 1) {
        nextSlider(id);
    }
    else if (controlId == "previous" && id > 1) {
        previousSlider(id);
    }
}

previousSlider = (id) => {
    document.querySelector(".manuelSlider .isFront").classList.remove("isFront");
    id--;
    document.querySelector(".manuelSlider #sliders" + id.toString()).classList.add("isFront");
}

nextSlider = (id) => {
    document.querySelector(".isFront").classList.remove("isFront");
    id++;
    document.querySelector("#sliders" + id.toString()).classList.add("isFront");
}





