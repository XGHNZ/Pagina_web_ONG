
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const images = document.querySelectorAll(".efecto-contenido img");
    const customButton = document.querySelector(".boton");
    const informebtn = document.querySelector(".informes");
    const texto1 = document.querySelector(".texto-imagen2");
    const btnimg2 = document.querySelector(".botonimg2");
    const inscribitebtn = document.querySelector(".inscribite");
    const texto2 = document.querySelector(".texto-imagen4");
    const btnimg4 = document.querySelector(".boton4");
    const img5 = document.querySelector(".texto-imagen5");
    const btnimg5 = document.querySelector(".boton5");
    const img6 = document.querySelector(".texto-imagen6");
    const btnimg6 = document.querySelector(".boton6");
    const img7 = document.querySelector(".texto-imagen7");
    const btnimg7 = document.querySelector(".boton7");
    const img8 = document.querySelector(".texto-imagen8");
    const btnimg8 = document.querySelector(".boton8");
    const btnimg9 = document.querySelector(".boton9");
    const img10 = document.querySelector(".texto-imagen10");
    const btnimg10 = document.querySelector(".boton10");
    const img11 = document.querySelector(".texto-imagen11");
    const btnimg11 = document.querySelector(".boton11");
    
let index = 0
const intervalTime = 5000; // Intervalo de tiempo en milisegundos (5 segundos)

function startCarousel() {
    setInterval(nextImage, intervalTime);
}

startCarousel();

    function showImage(n) {
        customButton.style.display = "none";
        informebtn.style.display = "none";
        texto1.style.display = "none";
        btnimg2.style.display = "none";
        inscribitebtn.style.display = "none";
        texto2.style.display = "none";
        btnimg4.style.display = "none";
        img5.style.display= "none";
        btnimg5.style.display = "none";
        img6.style.display= "none";
        btnimg6.style.display = "none";
        img7.style.display= "none";
        btnimg7.style.display = "none";
        img8.style.display= "none";
        btnimg8.style.display = "none";
        btnimg9.style.display = "none";
        img10.style.display= "none";
        btnimg10.style.display = "none";
        img11.style.display= "none";
        btnimg11.style.display = "none";

        images.forEach(image => image.style.display = "none");
        images[index].style.display = "block";
        if (index === 0) {
            customButton.style.display = "block";
            informebtn.style.display = "block";
        }else if(index === 1) {
            texto1.style.display = "block";
            btnimg2.style.display = "block";
            inscribitebtn.style.display = "block";
        }else if(index === 3) {
            texto2.style.display = "block";
            btnimg4.style.display = "block";
        }else if(index === 4){
            img5.style.display= "block";
            btnimg5.style.display = "block";
        }else if(index === 5){
            img6.style.display= "block";
            btnimg6.style.display = "block";
        }else if(index === 6){
            img7.style.display= "block";
            btnimg7.style.display = "block";
        }else if(index === 7){
            img8.style.display= "block";
            btnimg8.style.display = "block";
        }else if(index === 8){
            btnimg9.style.display = "block";
        }else if(index === 9){
            img10.style.display= "block";
            btnimg10.style.display = "block";
        }else if(index === 10){
            img11.style.display= "block";
            btnimg11.style.display = "block";
        }
    }

    function nextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage(index);
    }

    function prevImage() {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        showImage(index);
    }
    

    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
showImage(index);
