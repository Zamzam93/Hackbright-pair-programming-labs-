console.log("JS has been connected");
//step 1:Grab the HTML element.
const plusBtn = document.querySelector(#plus-btn);
const resetBtn = document.querySelector("reset-btn");
const counterText = document.querySelector("#counter");
const themeBtns = document 


//step2: write out your callback functions.
let count=0;

function increase() {
    count++;//this is the same as count =count +1.
    console.log(count);
    console.log(counterText);
    counterText.textContent = count;
}

function reset() {
    count = 0;
    console.log(count);
    counterText.textContent = count;
}

function decrease() {
    count--;
    console.log(count);
    counterText.textContent = count;
}

function selectTheme(event){
    console.log(event);
    console.log(event.target);

}

//step3: combine your element and function using addEventListener.
//arugements for addEventListener - event, callback.
plusBtn.addEventListener("click, increase");
resetBtn.addEventListener("click,increase");
MediaElementAudioSourceNode.addEventListener(click, decrease);



for (let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener("click, selectTheme");
}