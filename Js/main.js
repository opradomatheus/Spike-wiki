(function headerMuda() {
    var menu = document.getElementById("menu")
    var text = document.getElementById("text")
  
    window.addEventListener("scroll", function () {
        if (scrollY > 0)
        menu.classList.add("menuFixo"),
        text.classList.add("textFixo")
        else
        menu.classList.remove("menuFixo"),
        text.classList.remove("textFixo")
    })
  })()
  