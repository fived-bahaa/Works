let mainSearch = document.querySelector("header .rigth-icon input")
let searchIcon = document.querySelector("header .rigth-icon .fa-magnifying-glass")
let boxSearch = document.querySelector("header .rigth-icon .box-search")
mainSearch.addEventListener("focus", function () {
  boxSearch.style.display = "block"
  boxSearch.style.right = "-10px"
  searchIcon.style.display = "none"
  mainSearch.style.paddingRight = "25px"
  mainSearch.style.width = "247px"
  mainSearch.style.marginRight = "10px"
  mainSearch.style.borderRadius = "20px"
  document.querySelector("header .rigth-icon").style.boxShadow = "-1px 0px 1px 0px var(--background-left-icon)"
  document.querySelector("header .rigth-icon .fa-facebook").style.color = "var(--secondary-icon)"
  document.querySelector("header .rigth-icon .fa-facebook").className = "fa-solid fa-arrow-right"
  searchIcon.addEventListener("click", function () {
    mainSearch.focus()
  })
})
mainSearch.addEventListener("blur", function () {
  boxSearch.style.display = "none"
  mainSearch.style.marginRight = "0"
  searchIcon.style.display = "block"
  mainSearch.style.paddingRight = "0"
  mainSearch.style.width = "171px"
  mainSearch.style.borderRadius = "20px 0 0 20px"
  document.querySelector("header .rigth-icon").style.boxShadow = "none"
  document.querySelector("header .rigth-icon .fa-arrow-right").style.color = "var(--facebook-icon-background)"
  document.querySelector("header .rigth-icon .fa-arrow-right").className = "fa-brands fa-facebook"
})
let facebook = document.querySelector(".rigth-icon li:last-of-type")
let home = document.querySelector(".center-icon li:last-of-type")
let freinds = document.querySelector(".center-icon li:nth-of-type(4)")
facebook.onclick = function () {
  open("index.html", "_self")
}
home.onclick = function () {
  open("index.html", "_self")
}
freinds.onclick = function () {
  open("freinds.html", "_self")
}
