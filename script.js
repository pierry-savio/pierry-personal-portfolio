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
const projects_container = document.getElementById("projects_container");
const arrow_left         = document.getElementById("arrow_left");
const arrow_right        = document.getElementById("arrow_right");
const projects = Array.from(projects_container.children);
let current_project = 0;

//Clean project classes
function removeClasses(project){
    project.classList.remove
    (
        "closed-left",
        "closed-right",
        "hide-left",
        "hide-right"
    );
}

arrow_right.addEventListener("click", () =>{

    const previous = projects[current_project - 1];
    const current  = projects[current_project    ];
    const next     = projects[current_project + 1];
    const upNext   = projects[current_project + 2];

    if (current_project < projects.length-1){

        if (current_project > 0){
            removeClasses(previous);
            previous.classList.add("hide-left");
        }
        removeClasses(current);

        if (current_project < projects.length-1){
            removeClasses(next);
        }

        if (current_project < projects.length-2){
            removeClasses(upNext);
            upNext.classList.add("closed-right");
        }

        current.classList.add("closed-left");

        current_project++;
    }
    else{
        projects.forEach((e) =>{
            removeClasses(e);
            e.classList.add("hide-right");
        })

        removeClasses(projects[0]);
        removeClasses(projects[1]);
        projects[1].classList.add("closed-right");
        current_project = 0;
    }
});