document.addEventListener("DOMContentLoaded", function(event) {
    var actual_theme = localStorage.getItem("theme");
    if (actual_theme == "dark"){
        change_theme(actual_theme)
    }

    night_mode.addEventListener("click", function() {
        change_theme("dark")
    })

    day_mode.addEventListener("click", function() {
        change_theme("light")
    })
})

function change_theme(theme){
    var body = document.body
    var day_mode = document.getElementById("day_mode")
    var github_card = document.getElementById("github_card")
    var header = document.getElementsByClassName("tab")
    var profile_pic = document.getElementById("profile_pic")
    var night_mode = document.getElementById("night_mode")
    body.classList.toggle("dark-mode");
    if (theme == "light"){
        localStorage.setItem('theme', 'light')
        night_mode.style.display = "flex"
        day_mode.style.display = "none"
        if(github_card){
                github_card.src = "../../media/imgs/github.png"
        }
        else if(profile_pic){
            profile_pic.src = "./media/imgs/jodagito.gif"
        }
        for (let tab = 0; tab < header.length; tab++) {
            header[tab].style.color = "#000000"
        }
    }
    else{
        localStorage.setItem('theme', 'dark')
        night_mode.style.display = "none"
        day_mode.style.display = "flex"
        if(github_card){
            github_card.src = "../../media/imgs/dark-github.png"
        }
        else if(profile_pic){
            profile_pic.src = "./media/imgs/dark-jodagito.gif"
        }
        for (let tab = 0; tab < header.length; tab++) {
            header[tab].style.color = "#CCCCCC"
        }
    }
}