for (let i=1; i<=25; i++) {
    ele = document.getElementById(i);
    ele.setAttribute('contenteditable', 'true');
    ele.addEventListener('input', () => {userInput(i);}, false);
    ele.addEventListener('keydown', () => {keydownHandler(i);}, false);
    ele.addEventListener('click', () => {clickHandler(i);}, false);
}
document.getElementById("submitButton").addEventListener('click', function() {getWords();}, false);
var oneCol = document.getElementById("one-col-checkbox");
oneCol.addEventListener('click', () => {setOneCol();}, false);

//display about modal onclick
document.getElementById("About").addEventListener('click', function() {
    document.getElementById("about-modal").style.display = "block";
}, false);

function setOneCol(){
    if (document.getElementById("one-col-checkbox").checked == true) {
        document.getElementById("words").style.width = "100px";
    } else {
        document.getElementById("words").style.width = "auto";
    }
}

function clickHandler(i) {
    ele = document.getElementById(i);
    if (letters[i%5 == 0 ? 4 : i%5 - 1] == ele.innerText) {
        ele.style.backgroundColor = "rgb(83, 141, 79)"; //green
        return 0;
    } 
    //prevent changes if value in lettersIn or letters
    if (window.getComputedStyle(ele).backgroundColor == "rgb(0, 0, 0)") {
        ele.style.backgroundColor = "rgb(58, 58, 60)"; //off black
    } else if (window.getComputedStyle(ele).backgroundColor == "rgb(58, 58, 60)") {
            ele.style.backgroundColor = "rgb(83, 141, 79)"; //green
    } else if (window.getComputedStyle(ele).backgroundColor == "rgb(83, 141, 79)") {
        ele.style.backgroundColor = "rgb(181, 159, 58)"; //yellow
    } else if (window.getComputedStyle(ele).backgroundColor == "rgb(181, 159, 58)") {
        getInput();
        if (yellowLetterCheck(ele.innerText)) {
            ele.style.backgroundColor = "rgb(83, 141, 79)"//green
        } else {
            ele.style.backgroundColor = "rgb(58, 58, 60)"; //off black
        }
    }   
}

function userInput(id) {
    ele = document.getElementById(id);
    getInput();
    if (letters[id%5 == 0 ? 4 : id%5 - 1] == ele.innerText) {
        ele.style.backgroundColor = "rgb(83, 141, 79)"; //green
    } else if(lettersIn.some(x => x == ele.innerText)) {
        ele.style.backgroundColor = "rgb(181, 159, 58)"; //yellow
    }
    if (id % 5 != 0) { 
        document.getElementById(id.toString()).setAttribute('contenteditable', 'false');
        id += 1;
        document.getElementById(id.toString()).focus();
    } else {
        if (ele.innerText.length >= 2) {
            ele.innerText = ele.innerText.charAt(0);
        }
    } 
    if (ele.innerText.length > 0 && window.getComputedStyle(ele).backgroundColor == "rgb(0, 0, 0)") {
        ele.style.backgroundColor = "rgb(58, 58, 60)";
    } else if (ele.innerText.length == 0) {
        ele.style.backgroundColor = "rgb(0, 0, 0)";
    }
}

function keydownHandler(id) {
    e = document.getElementById(id);
    //green letter check 
    if (letters[id%5 == 0 ? 4 : id%5 - 1] == String.fromCharCode(event.keyCode)) {
        ele.style.backgroundColor = "rgb(83, 141, 79)"; //green
    } 

    if (event.keyCode == 13) {
        event.preventDefault();
        getWords();
        if(id%5 == 0) {
            id += 1
            document.getElementById(id.toString()).focus();
        }
    }
    if(event.keyCode == 8) {
        event.preventDefault();
        if (e.innerText.charCodeAt(0) == 10 || e.innerText == "") {
            if(id > 0) {
                e.style.backgroundColor = "rgb(0, 0, 0)";
                id -= 1;
                var ele = document.getElementById(id.toString());
                ele.setAttribute("contenteditable", "true");
                ele.innerText = "";
                ele.focus();
                ele.style.backgroundColor = "rgb(0, 0, 0)";
            }
        } else {
            e.innerText = "";
        }
    }
}

let submitImage = document.getElementById("submitImage");
let submit = document.getElementById("submitButton");
submit.addEventListener('mouseover', function() {submitImage.setAttribute("src", "play-button-black-white.png");}, false);
submit.addEventListener('mouseleave', function() {submitImage.setAttribute("src", "play-button-grey-outline.png");}, false);
submit.addEventListener('mousedown', function() {submitImage.setAttribute("src", "play-button-white-green.png");}, false);
submit.addEventListener('mouseup', function() {submitImage.setAttribute("src", "play-button-black-white.png");}, false);