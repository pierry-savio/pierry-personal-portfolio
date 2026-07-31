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
const projects_carousel = document.getElementById('projects_carousel');
const projects = Array.from(projects_carousel.children); // HTMLCollection

//Project index
let currentProject = 0;

//Remove project classes
function removeProjectClasses(project){
    project.classList.remove
    (
        "closed-left",
        "closed-right",
        "invisible-left",
        "invisible-right"
    );
}

removeProjectClasses(projects[0]);
removeProjectClasses(projects[1]);
projects[1].classList.add("closed-right");

projects.forEach( (e) => {
    if (projects.indexOf(e) > 1){
        removeProjectClasses(e);
        e.classList.add("invisible-right");
    }
});

currentProject = 0;

project_arrow_right.addEventListener("click", () =>{
    if (currentProject < projects.length-3){
        currentProject+=1;
        pPreviusProject = projects[currentProject-2];
        previousProject = projects[currentProject-1];
        nextProject = projects[currentProject];
        NNextProject = projects[currentProject+1];
        
        removeProjectClasses(nextProject);
        
        removeProjectClasses(previousProject);
        previousProject.classList.add("closed-left");

        if (currentProject > 1){
            removeProjectClasses(pPreviusProject);
            pPreviusProject.classList.add("invisible-left");
        }

        removeProjectClasses(NNextProject);
        NNextProject.classList.add("closed-right");
    }
    else{
        removeProjectClasses(projects[0]);
        removeProjectClasses(projects[1]);
        projects[1].classList.add("closed-right");

        projects.forEach( (e) => {
            if (projects.indexOf(e) > 1){
                removeProjectClasses(e);
                e.classList.add("invisible-right");
            }
        });
        currentProject = 0;
    }
});

project_arrow_left.addEventListener("click", () =>{
    if (currentProject > 0){
        currentProject-=1;
        pPreviusProject = projects[currentProject+2];
        previousProject = projects[currentProject+1];
        nextProject = projects[currentProject];
        NnextProject = projects[currentProject-1];

        removeProjectClasses(pPreviusProject);
        pPreviusProject.classList.add("invisible-right");

        removeProjectClasses(previousProject);
        previousProject.classList.add("closed-right");

        removeProjectClasses(nextProject);

        if (currentProject > 0){
            removeProjectClasses(NnextProject);
            NnextProject.classList.add("closed-left");
        }
    }
    else{

        removeProjectClasses(projects[projects.length-3]);
        removeProjectClasses(projects[projects.length-4]);
        projects[projects.length-4].classList.add("closed-left");

        projects.forEach( (e) =>{
            if (projects.indexOf(e) < projects.length-4){
                removeProjectClasses(e);
                e.classList.add("invisible-left");
            }
        });
        currentProject = projects.length-3;
    }
});