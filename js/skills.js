//Skills pop-up

//Icons in the carousel
const css_icon = document.getElementById("css_icon");
const figma_icon = document.getElementById("figma_icon");
const game_maker_icon = document.getElementById("game_maker_icon");
const git_icon = document.getElementById("git_icon");
const github_icon = document.getElementById("github_icon");
const html_icon = document.getElementById("html_icon");
const java_icon = document.getElementById("java_icon");
const js_icon = document.getElementById("js_icon");
const sass_icon = document.getElementById("sass_icon");

const css_icon2 = document.getElementById("css_icon2");
const figma_icon2 = document.getElementById("figma_icon2");
const game_maker_icon2 = document.getElementById("game_maker_icon2");
const git_icon2 = document.getElementById("git_icon2");
const github_icon2 = document.getElementById("github_icon2");
const html_icon2 = document.getElementById("html_icon2");
const java_icon2 = document.getElementById("java_icon2");
const js_icon2 = document.getElementById("js_icon2");
const sass_icon2 = document.getElementById("sass_icon2");

//Pop up elements
const popup_background = document.getElementById("popup_background");
const close_button = document.getElementById("close_button");
const popup_image = document.getElementById("popup_image");
const popup_title = document.getElementById("popup_title");
const popup_paragraph = document.getElementById("popup_paragraph");

//Checking clicks

//CSS
css_icon.addEventListener("click", () => {
    openPopup("css");
});

//Figma Icon
figma_icon.addEventListener("click", () => {
    openPopup("figma");
});

//Game Maker
game_maker_icon.addEventListener("click", () => {
    openPopup("game_maker");
});

//Git
git_icon.addEventListener("click", () => {
    openPopup("git");
});

//Github
github_icon.addEventListener("click", () => {
    openPopup("github");
});

//HTML
html_icon.addEventListener("click", () => {
    openPopup("html");
});

//Java
java_icon.addEventListener("click", () => {
    openPopup("java");
});

//Javascript
js_icon.addEventListener("click", () => {
    openPopup("js");
});

//Sass
sass_icon.addEventListener("click", () => {
    openPopup("sass");
});

//Closing popup
close_button.addEventListener("click", () => {
    closePopup();
});

//#2
//CSS
css_icon2.addEventListener("click", () => {
    openPopup("css");
});

//Figma Icon
figma_icon2.addEventListener("click", () => {
    openPopup("figma");
});

//Game Maker
game_maker_icon2.addEventListener("click", () => {
    openPopup("game_maker");
});

//Git
git_icon2.addEventListener("click", () => {
    openPopup("git");
});

//Github
github_icon2.addEventListener("click", () => {
    openPopup("github");
});

//HTML
html_icon2.addEventListener("click", () => {
    openPopup("html");
});

//Java
java_icon2.addEventListener("click", () => {
    openPopup("java");
});

//Javascript
js_icon2.addEventListener("click", () => {
    openPopup("js");
});

//Sass
sass_icon2.addEventListener("click", () => {
    openPopup("sass");
});

//Closing popup
close_button.addEventListener("click", () => {
    closePopup();
});

popup_background.addEventListener("click", () => {
    closePopup();
});

function openPopup(skill){
    switch (skill){
        case "css":
            popup_image.src = "../img/skills/css.png";
            popup_title.textContent = "CSS";
            popup_paragraph.textContent = "Ferramenta de estilização Web.";
        break;

        case "figma":
            popup_image.src = "../img/skills/figma.png";
            popup_title.textContent = "Figma";
            popup_paragraph.textContent = "Software de design, UI e prototipagem.";
        break;

        case "game_maker":
            popup_image.src = "../img/skills/game maker.png";
            popup_title.textContent = "Game Maker";
            popup_paragraph.textContent = "Game engine de jogos 2D.";
        break;

        case "git":
            popup_image.src = "../img/skills/git.png";
            popup_title.textContent = "Git";
            popup_paragraph.textContent = "Recurso de versionamento de código.";
        break;

        case "github":
            popup_image.src = "../img/skills/github.png";
            popup_title.textContent = "Github";
            popup_paragraph.textContent = "Plataforma para repositórios, colaboração e versionamento de código.";
        break;

        case "html":
            popup_image.src = "../img/skills/html.png";
            popup_title.textContent = "HTML";
            popup_paragraph.textContent = "Linguagem de marcação para estruturação de páginas web.";
        break;

        case "java":
            popup_image.src = "../img/skills/java.png";
            popup_title.textContent = "Java";
            popup_paragraph.textContent = "Linguagem de programação backend orientada a objetos.";
        break;

        case "js":
            popup_image.src = "../img/skills/js.png";
            popup_title.textContent = "Javascript";
            popup_paragraph.textContent = "Linguagem de programação responsável pela interatividade de aplicações web.";
        break;

        case "sass":
            popup_image.src = "../img/skills/sass.png";
            popup_title.textContent = "SASS";
            popup_paragraph.textContent = "Ferramenta facilitadora para desenvolvimento com CSS.";
        break;
    }
    popup_background.classList.remove("closed");
}

function closePopup(){
    popup_background.classList.add("closed");
}