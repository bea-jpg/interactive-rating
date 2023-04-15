const numbers = document.querySelectorAll(".number");
const btn = document.querySelector(".btn");
const ratingSection = document.querySelector(".rating");
const thankSection = document.querySelector(".thank");
const score = document.querySelector(".score");

var scoreNum = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        var active = document.getElementsByClassName("active");

        if(active.length>0){
            active[0].className = active[0].className.replace(" active", "");
        }

        numbers[i].className += " active";
        scoreNum = i+1;
        console.log(scoreNum);
    })
}

btn.addEventListener("click", () => {
    if(scoreNum === 0) {
        alert("Please choose a number")
    }
    else {
        score.innerHTML = `You selected ${scoreNum} out of 5`;
        ratingSection.className += " invisible";
        thankSection.classList.remove("invisible");
    }

})