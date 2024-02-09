
let clicked = false
document.querySelector("Header").addEventListener("click", function () {
    if (!clicked) {
        changeStyle(true, "500%", "Yellow")
    }
    else {
        changeStyle(false, "200%", "Black")
    }
});

function changeStyle(clickedStatus, t_size, t_color) {
    clicked = clickedStatus;
    //Stores the path to the first h1 on the page
    let h1PathStyle = document.querySelector("h1").style;
    h1PathStyle.fontSize = t_size;
    h1PathStyle.color = t_color;
}

function receiveForm() {
    let newData = document.getElementById("moneyId").value;
    var regExPattern = /^[0-9]*$/;
    if (!newData.match(regExPattern)) {
        alert("Nums only")
    }
    else {
        if (newData === "") {
            alert("Form cannot be empty")
        }
        else {
            document.getElementById("moneyTableId").rows[1].cells[2].innerHTML = newData + "$";
        }
    }
}

function openPage(){
    window.open("https://www.google.ie/search?sca_esv=884448dcb0ad80d4&q=prize&tbm=isch&source=lnms&sa=X&ved", "newwindow", "width=800", "height=800")
}

function redirectHome(){
    window.location.href = "index.html";
}

function redirectProduct(){
    window.location.href = "products.html";
}

//Stops page reload on form submit
var homeForm = document.getElementById("homeFormId")

function submitForm(event) {
    event.preventDefault();
}

homeForm.addEventListener("submit", submitForm);

window.onload = function () {
    alert("Welcome to the page")
}