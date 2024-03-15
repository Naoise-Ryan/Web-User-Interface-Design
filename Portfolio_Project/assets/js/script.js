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
    /*hamburgerMenu.css("display", "block");*/
    hamburgerMenu.slideDown();
    $("#navTitleAndLinks").css("display", "block");
}

function menuClose(hamburgerMenu){
    hamburgerMenu.slideUp();
    $("#navTitleAndLinks").css("display", "block")
    $(".navContainer").css("display", "grid");
}