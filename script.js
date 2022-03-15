const containerSlider = document.querySelector(".container-slider")
const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")

const arrowDown = document.querySelector(".arrow-down")
const arrowUp = document.querySelector(".arrow-up")

const slidesLength = slideLeft.querySelectorAll("div").length
console.log(slidesLength)

const slidesDivs = slideRight.querySelectorAll("div")
console.log(slidesDivs)



let numberActiveSlide = 0

slideRight.style.top = `-${(slidesLength-1)*100}vh`

arrowDown.addEventListener("click", function(){
    changeSlide("up")
})

arrowUp.addEventListener("click", function(){
    changeSlide("down")
})

function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight

    if(direction === "up"){
        numberActiveSlide++
        if(numberActiveSlide>slidesLength-1){
            numberActiveSlide = 0
        }
    } else{
        numberActiveSlide--
        if(numberActiveSlide<0){
            numberActiveSlide = slidesLength-1
        }
    }
    
    slideLeft.style.transform = `translateY(-${numberActiveSlide*sliderHeight}px)`
    slideRight.style.transform = `translateY(${numberActiveSlide*sliderHeight}px)`
}





























