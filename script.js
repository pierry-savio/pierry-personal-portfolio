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

/* --- PROJECTS --- */

//Arrows
const project_arrow_right = document.getElementById("project_arrow_right");
const project_arrow_left = document.getElementById("project_arrow_left");

//Cards
const card1 = document.getElementById("project1");
const card2 = document.getElementById("project2");
const card3 = document.getElementById("project3");

//Project index
let currentProject = 1;

project_arrow_right.addEventListener("click", () =>{
    
    if (currentProject < 3) {
        currentProject+=1;

        switch (currentProject){
            case 1:
                card3.classList.add("closed-left");
                card1.classList.remove("closed-right");
                card1.classList.remove("closed-left");
            break;

            case 2:
                card1.classList.add("closed-left");
                card2.classList.remove("closed-right");
                card2.classList.remove("closed-left");
            break;

            case 3:
                card2.classList.add("closed-left");
                card3.classList.remove("closed-right");
                card3.classList.remove("closed-left");
            break;
        }
    }
    else{
        currentProject = 1;
        card1.classList.remove("closed-right");
        card1.classList.remove("closed-left");
        card2.classList.add("closed-right");
        card3.classList.add("closed-right");
    }
});

project_arrow_left.addEventListener("click", () =>{
    if (currentProject > 1) {
        currentProject-=1;

        switch (currentProject){
            case 1:
                card2.classList.add("closed-right");
                card1.classList.remove("closed-left");
                card1.classList.remove("closed-right");
            break;

            case 2:
                card3.classList.add("closed-right");
                card2.classList.remove("closed-left");
                card2.classList.remove("closed-right");
            break;

            case 3:
                card1.classList.add("closed-right");
                card3.classList.remove("closed-left");
                card3.classList.remove("closed-right");
            break;
        }
    }
    else{
        currentProject = 3;
        card1.classList.remove("closed-right");
        card1.classList.add("closed-left");

        card2.classList.remove("closed-right")
        card2.classList.add("closed-left");

        card3.classList.remove("closed-right");
        card3.classList.remove("closed-left");
    }

    
});