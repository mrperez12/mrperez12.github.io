let menuVisible = false;

function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function effect(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let progress = document.getElementsByClassName("progress");
        console.log(progress)
        progress[0].classList.add("javascript");
        progress[1].classList.add("python");
        progress[2].classList.add("html");
        progress[3].classList.add("css");
        progress[4].classList.add("django");
        progress[5].classList.add("communication");
        progress[6].classList.add("dedication");
        progress[7].classList.add("motivation");
        progress[8].classList.add("teamwork");
        progress[9].classList.add("proyectManagment");
    }
}

window.onscroll = function(){
    effect();
}