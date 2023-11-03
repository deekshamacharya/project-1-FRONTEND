const buttons = document.querySelectorAll(".seat1");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (button.classList.contains("clicked")) {
            button.style.backgroundColor = "white"; 
            button.classList.remove("clicked");
        } else {
            button.style.backgroundColor = "#8E0D3C"; 
            button.classList.add("clicked");
        }
    });
});
const buttonss = document.querySelectorAll(".seats");

buttonss.forEach(button => {
    button.addEventListener("click", function() {
        if (button.classList.contains("clicked")) {
            button.style.backgroundColor = "white"; 
            button.classList.remove("clicked");
        } else {
            button.style.backgroundColor = "#8E0D3C"; 
            button.classList.add("clicked");
        }
    });
});


var buttonss1 = document.querySelectorAll(".seat1");
var count = 0;
var charges=0;

buttonss1.forEach(button => {
    button.addEventListener("click", function() {
        if (button.style.backgroundColor === "white") {
            count--;
            if (button.classList.contains ("seat1-a") )
        {
            charges-=260;
        }
        else if(button.classList.contains("seat1-b") )
        {
            charges-=150;
        }
        else if(button.classList.contains("seat1-c" )){
            charges-=100;
        }
        } else {
            count++;
            if (button.classList.contains ("seat1-a") )
        {
            charges+=260;
        }
        else if(button.classList.contains("seat1-b") )
        {
            charges+=150;
        }
        else if(button.classList.contains("seat1-c" )){
            charges+=100;
        }
        }
        document.getElementById("count").textContent = count;
        
    });
});

var alertButton = document.querySelector("#OK");

alertButton.addEventListener("click", function() {
    if(count===1){
    alert("YOU SELECTED "+count+" SEAT AND YOU HAVE TO PAY "+charges+"/-");
    }
    else if(count===0){
        alert("YOU HAVE NOT SELECTED ANY SEAT ");
    }
    else{
        alert("YOU SELECTED "+count+" SEATS AND YOU HAVE TO PAY "+charges+"/-");
    }
});


var alertButton = document.querySelector(".PAY");

alertButton.addEventListener("click", function() {
    if(count===0){
    alert("YOU HAVE NOT SELECTED ANY SEAT");
    }
    else{
        window.location.href = "billing.html";
    }
});