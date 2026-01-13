const form = document.querySelector("form");
const LiveCounter = document.querySelector(".counter");
const LiveRemain = document.querySelector(".remain");
const LiveWord = document.querySelector(".word");
const myTextArea = document.querySelector("#textarea");
const resetBtn = document.querySelector(".reset");
const limitValue  = 280;

form.addEventListener("input",(e)=> {
    // e.preventDefault();

    const myLength = myTextArea.value;

    if(myLength.length >= limitValue){
        LiveCounter.style.color = "red";
        LiveCounter.innerText=  "You reached the limit"; 
    }else{
    LiveCounter.innerText = "Live counter " + myLength.length + "/ 280";
    LiveRemain.innerText = limitValue - myLength.length + " character remaining";
    LiveWord.innerText = "Word Counter : " + myLength.split(" ").length;
    }
});
resetBtn.addEventListener("click", () => {
    LiveCounter.innerText = "Live counter 0/280";
    LiveCounter.style.color = "black";
    myTextArea.value = "";
    LiveRemain.innerText = "280 characters remaining";
    LiveWord.innerText = "Word Counter "
});
