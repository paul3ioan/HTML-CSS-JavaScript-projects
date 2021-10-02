const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let activeSlide = 0;

console.log(slides)
console.log(leftBtn)
console.log(rightBtn)
leftBtn.addEventListener('click',() =>{
    activeSlide--;
    if(activeSlide < 0)
        activeSlide = slides.length - 1;
        console.log(activeSlide)
        setBgToBody()
        setActiveSlide()
})
rightBtn.addEventListener('click', () =>{
    activeSlide++;
    if(activeSlide > slides.length - 1)
    activeSlide = 0;
    setBgToBody()
    setActiveSlide()
    console.log(activeSlide)
})
setBgToBody()
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
    console.log(body);
}
function setActiveSlide()
{
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}

