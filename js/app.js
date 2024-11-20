let darkModeBtn = document.querySelector(".darkmode-icons");
let body = document.querySelector("body");
function darkMode(){
    body.classList.toggle('darkmode')
}

darkModeBtn.addEventListener('click',darkMode)

let menuSideBarBtn =document.querySelector(".menu-sidebar")
let sidebarCtn =document.querySelector(".sidebar .sidebar-content")


function sideBarShow(){
      sidebarCtn.classList.toggle('active')
 
}

menuSideBarBtn.addEventListener('click',sideBarShow)




let subMenu = document.querySelector(".sub-menu")
let dropdownSubMenu = document.querySelector(".dropdown-sub-menu")
let dropul = document.querySelector(".sub-menu ul")
let submenuIconi = document.querySelector(".sub-menu a i")


function subMenuShow(){
    dropul.classList.toggle("hidden-submenu")
    submenuIconi.classList.toggle("fa-angle-down")
}   

subMenu.addEventListener('click',subMenuShow)

let subMenu2 = document.querySelector(".sub-menu2")
let dropdownSubMenu2 = document.querySelector(".dropdown-sub-menu2")
let dropul2 = document.querySelector(".sub-menu2 ul")
let submenuIconi2 = document.querySelector(".sub-menu2 a i")


function subMenuShow2(){
    dropul2.classList.toggle("hidden-submenu2")
    submenuIconi2.classList.toggle("fa-angle-down")
}   

subMenu2.addEventListener('click',subMenuShow2)

let subMenu3 = document.querySelector(".sub-menu3")
let dropdownSubMenu3 = document.querySelector(".dropdown-sub-menu3")
let dropul3 = document.querySelector(".sub-menu3 ul")
let submenuIconi3 = document.querySelector(".sub-menu3 a i")


function subMenuShow3(){
    dropul3.classList.toggle("hidden-submenu3")
    submenuIconi3.classList.toggle("fa-angle-down")
}   

subMenu3.addEventListener('click',subMenuShow3)

let subMenu4 = document.querySelector(".sub-menu4")
let dropdownSubMenu4 = document.querySelector(".dropdown-sub-menu4")
let dropul4 = document.querySelector(".sub-menu4 ul")
let submenuIconi4 = document.querySelector(".sub-menu4 a .right")


function subMenuShow4(){
    dropul4.classList.toggle("hidden-submenu4")
    submenuIconi4.classList.toggle("fa-angle-down")
}   

subMenu4.addEventListener('click',subMenuShow4)