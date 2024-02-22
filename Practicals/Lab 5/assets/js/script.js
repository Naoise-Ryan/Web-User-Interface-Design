
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

function receiveMailForm() {
    let nameData = document.getElementById("mailNameId").value;
    let emailData = document.getElementById("mailEmailId").value;
    let phoneData = document.getElementById("mailPhoneId").value;
    let checkboxData = document.getElementById("mailCheckboxId").checked;
    console.log(nameData, emailData, phoneData, checkboxData)
    var regExPattern = /^[0-9]*$/;

    if (nameData === "" || emailData === "" || phoneData === "") {
        alert("You did not fill out a data field")
    }
    else if (nameData.match(regExPattern)) {
        alert("Name cannot contain numbers")
    }
    else {
        document.getElementById("nameTextId").innerHTML = nameData;
        document.getElementById("emailTextId").innerHTML = emailData;
        document.getElementById("phoneTextId").innerHTML = phoneData;
        document.getElementById("checkboxTextId").innerHTML = checkboxData;
    }
}

function openPage() {
    window.open("https://www.google.ie/search?sca_esv=884448dcb0ad80d4&q=prize&tbm=isch&source=lnms&sa=X&ved", "newwindow", "width=800", "height=800")
}

function redirectThankYou() {
    window.location.href = "thankYouForPurchasing.html";
}

//Stops page reload on form submit
var homeForm = document.getElementById("homeFormId")

function submitForm(event) {
    event.preventDefault();
}

homeForm.addEventListener("submit", submitForm);


function appendProduct() {
    let appendSpot = document.getElementById("appendLocation")
    let newDiv = document.createElement("div");
    newDiv.classList.add("centerDiv")
    let newPara = document.createElement("p");
    newPara.innerHTML = "I am appended text";
    newDiv.append(newPara)
    appendSpot.append(newDiv)
}





window.onload = function () {
    alert("Welcome to the page")
}