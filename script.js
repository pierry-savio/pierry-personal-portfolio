//Script for navs, header and everything shared through every page

// ===== NAV MOBILE =====

//Mobile footer
const mobile_footer = document.getElementById("mobile_footer");
//Close nav button
const close_nav_mobile_button = document.getElementById("close_nav_mobile_button");
//Open nav button
const open_nav_mobile_button = document.getElementById("open_nav_mobile_button");

//CLOSE NAV
close_nav_mobile_button.addEventListener("click", () =>{
    mobile_footer.classList.add("closed");
    open_nav_mobile_button.classList.remove('closed');
});

//OPEN NAV
open_nav_mobile_button.addEventListener("click", () =>{
    mobile_footer.classList.remove("closed");
    open_nav_mobile_button.classList.add('closed');
});

// ===== NAV PC =====
const close_nav_pc_button = document.getElementById("close_nav_pc_button");
const nav_pc = document.getElementById("nav_pc");

close_nav_pc_button.addEventListener("click", () =>{
    nav_pc.classList.toggle("closed");
})