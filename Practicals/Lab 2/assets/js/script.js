window.onload = function() {
    alert("Welcome to the page")
}

let clicked = false 
document.querySelector("Header").addEventListener("click", function() {
    if (!clicked) {
        changeStyle(true, "500%", "Yellow")
    }
    else {
        changeStyle(false, "200%", "Black")
    }
});

function changeStyle(clickedStatus, t_size, t_color){
    clicked = clickedStatus;
    //Stores the path to the first h1 on the page
    let h1PathStyle = document.querySelector("h1").style;
    h1PathStyle.fontSize = t_size;
    h1PathStyle.color = t_color;
}

function receiveForm(){
    let newData = document.getElementById("moneyId").value;
    alert("Input received")
}

