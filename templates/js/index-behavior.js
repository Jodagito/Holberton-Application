document.addEventListener("DOMContentLoaded", function(event) {
    var profile_pic = document.getElementById("profile_pic")

    profile_pic.addEventListener("mouseover", function() {
        profile_pic.className = "big"
    })

    profile_pic.addEventListener("mouseleave", function() {
        profile_pic.className = "small"
    })
})