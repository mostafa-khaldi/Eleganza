window.location.replace("./index.html#home");

window.addEventListener("resize", function(event){
    console.log(window.innerWidth);
})

function uselessFunc(){
    alert("This email form is useless!");
}

function changeSideLinkColor(id){
    console.log(id);
    var mainPage = document.getElementById("main-page");
    var sideBar = document.getElementById("side-bar");
    if(id=="side-home"){
        document.getElementById(id).style.backgroundColor = '#fcda05';
        document.getElementById(id).style.color = 'rgb(29, 29, 29)';
        document.getElementById("side-about").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-about").style.color = 'white';
        document.getElementById("side-collection").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-collection").style.color = 'white';
        document.getElementById("side-contact").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-contact").style.color = 'white';
    } else if (id=="side-about") {
        document.getElementById(id).style.backgroundColor = '#fcda05';
        document.getElementById(id).style.color = 'rgb(29, 29, 29)';
        document.getElementById("side-home").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-home").style.color = 'white';
        document.getElementById("side-collection").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-collection").style.color = 'white';
        document.getElementById("side-contact").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-contact").style.color = 'white';
    } else if (id=="side-collection"){
        document.getElementById(id).style.backgroundColor = '#fcda05';
        document.getElementById(id).style.color = 'rgb(29, 29, 29)';
        document.getElementById("side-about").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-about").style.color = 'white';
        document.getElementById("side-home").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-home").style.color = 'white';
        document.getElementById("side-contact").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-contact").style.color = 'white';
    } else if (id=="side-contact"){
        document.getElementById(id).style.backgroundColor = '#fcda05';
        document.getElementById(id).style.color = 'rgb(29, 29, 29)';
        document.getElementById("side-about").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-about").style.color = 'white';
        document.getElementById("side-home").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-home").style.color = 'white';
        document.getElementById("side-collection").style.backgroundColor = 'rgb(29, 29, 29)';
        document.getElementById("side-collection").style.color = 'white';
    }

    if(mainPage.style.transform == "translateX(-30vh)"){
        mainPage.style.transform = "translateX(0vh)";
        sideBar.style.transform = "translateX(0vh)";
        document.querySelector("body").style.overflow = "scroll";
    }
}

function changeLinkColor(id){
    if(id==document.getElementById("home")){
        id.style.color = '#fcda05';
        document.getElementById("about").style.color = 'white';
        document.getElementById("collection").style.color = 'white';
    } else if (id==document.getElementById("about")) {
        id.style.color = '#fcda05';
        document.getElementById("home").style.color = 'white';
        document.getElementById("collection").style.color = 'white';
    } else if (id==document.getElementById("collection")){
        id.style.color = '#fcda05';
        document.getElementById("about").style.color = 'white';
        document.getElementById("home").style.color = 'white';
    }
}

window.addEventListener('scroll', function(event){
    var windowYAxe = this.scrollY;
    if(windowYAxe>=0 && windowYAxe<860){
        document.getElementById("home").style.color = '#fcda05';
        document.getElementById("about").style.color = 'white';
        document.getElementById("collection").style.color = 'white';
    } else if(windowYAxe>=860 && windowYAxe<1600){
        document.getElementById("home").style.color = 'white';
        document.getElementById("about").style.color = '#fcda05';
        document.getElementById("collection").style.color = 'white';
    } else if(windowYAxe>=1600 && windowYAxe<2350) {
        document.getElementById("home").style.color = 'white';
        document.getElementById("about").style.color = 'white';
        document.getElementById("collection").style.color = '#fcda05';
    } else {
        document.getElementById("home").style.color = 'white';
        document.getElementById("about").style.color = 'white';
        document.getElementById("collection").style.color = 'white';
    }
})

function switchToSideBar(){
    var mainPage = document.getElementById("main-page");
    var sideBar = document.getElementById("side-bar");

    if(mainPage.style.transform == "translateX(-30vh)"){
        mainPage.style.transform = "translateX(0vh)";
        sideBar.style.transform = "translateX(0vh)";
        document.querySelector("body").style.overflow = "scroll";
    } else {
        mainPage.style.transform = "translateX(-30vh)";
        sideBar.style.transform = "translateX(-30vh)";
        document.querySelector("body").style.overflow = "hidden";
    }
}

function switchToMainPage(){
    var mainPage = document.getElementById("main-page");
    var sideBar = document.getElementById("side-bar");

    if(mainPage.style.transform == "translateX(-30vh)"){
        mainPage.style.transform = "translateX(0vh)";
        sideBar.style.transform = "translateX(0vh)";
        document.querySelector("body").style.overflow = "scroll";
    }
}