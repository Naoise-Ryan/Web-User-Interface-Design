$(".hamburgerMenu").on("click", function () {
    let hamburgerMenu = $(".hamburgerContainer")
    if (hamburgerMenu.css("display") === "none"){
        menuOpen(hamburgerMenu);
    }
    else {
        menuClose(hamburgerMenu);
    }
})

function menuOpen(hamburgerMenu){
    hamburgerMenu.css("display", "block");
    $(".navContainer").css("display", "flex");
    $("#navTitleAndLinks").css("display", "block");
    $(".navLastUpdated").css("display", "none")
}

function menuClose(hamburgerMenu){
    hamburgerMenu.css("display", "none");
    $("#navTitleAndLinks").css("display", "block")
    $(".navContainer").css("display", "grid");
    $(".navLastUpdated").css("display", "block")
}