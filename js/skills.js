//Skills pop-up

//--- IMAGES ---
// FRONT-END
const canva_icon = document.getElementById("canva_icon");
const css_icon = document.getElementById("css_icon");
const html_icon = document.getElementById("html_icon");
const js_icon = document.getElementById("js_icon");
const liveserver_icon = document.getElementById("liveserver_icon");
const netlify_icon = document.getElementById("netlify_icon");
const sass_icon = document.getElementById("sass_icon");
const vscode_icon = document.getElementById("vscode_icon");

const canva_icon2 = document.getElementById("canva_icon2");
const css_icon2 = document.getElementById("css_icon2");
const html_icon2 = document.getElementById("html_icon2");
const js_icon2 = document.getElementById("js_icon2");
const liveserver_icon2 = document.getElementById("liveserver_icon2");
const netlify_icon2 = document.getElementById("netlify_icon2");
const sass_icon2 = document.getElementById("sass_icon2");
const vscode_icon2 = document.getElementById("vscode_icon2");

// BACK-END
const csharp_icon = document.getElementById("csharp_icon");
const cpp_icon = document.getElementById("cpp_icon");
const eclipse_icon = document.getElementById("eclipse_icon");
const intellij_icon = document.getElementById("intellij_icon");
const java_icon = document.getElementById("java_icon");
const postman_icon = document.getElementById("postman_icon");
const python_icon = document.getElementById("python_icon");
const sd_icon = document.getElementById("sd_icon");
const spring_icon = document.getElementById("spring_icon");
const springboot_icon = document.getElementById("springboot_icon");

const csharp_icon2 = document.getElementById("csharp_icon2");
const cpp_icon2 = document.getElementById("cpp_icon2");
const eclipse_icon2 = document.getElementById("eclipse_icon2");
const intellij_icon2 = document.getElementById("intellij_icon2");
const java_icon2 = document.getElementById("java_icon2");
const postman_icon2 = document.getElementById("postman_icon2");
const python_icon2 = document.getElementById("python_icon2");
const sd_icon2 = document.getElementById("sd_icon2");
const spring_icon2 = document.getElementById("spring_icon2");
const springboot_icon2 = document.getElementById("springboot_icon2");


// GAME DEV
const audacity_icon = document.getElementById("audacity_icon");
const bfxr_icon = document.getElementById("bfxr_icon");
const construct_icon = document.getElementById("construct_icon");
const game_maker_icon = document.getElementById("game_maker_icon");
const gml_icon = document.getElementById("gml_icon");
const piskel_icon = document.getElementById("piskel_icon");
const pixilart_icon = document.getElementById("pixilart_icon");
const scratch_icon = document.getElementById("scratch_icon");

const audacity_icon2 = document.getElementById("audacity_icon2");
const bfxr_icon2 = document.getElementById("bfxr_icon2");
const construct_icon2 = document.getElementById("construct_icon2");
const game_maker_icon2 = document.getElementById("game_maker_icon2");
const gml_icon2 = document.getElementById("gml_icon2");
const piskel_icon2 = document.getElementById("piskel_icon2");
const pixilart_icon2 = document.getElementById("pixilart_icon2");
const scratch_icon2 = document.getElementById("scratch_icon2");

// ESSENCIAL
const claude_icon = document.getElementById("claude_icon");
const copilot_icon = document.getElementById("copilot_icon");
const figma_icon = document.getElementById("figma_icon");
const git_icon = document.getElementById("git_icon");
const gitbash_icon = document.getElementById("gitbash_icon");
const github_icon = document.getElementById("github_icon");
const gpt_icon = document.getElementById("gpt_icon");
const notion_icon = document.getElementById("notion_icon");
const firebase_icon = document.getElementById("firebase_icon");

const claude_icon2 = document.getElementById("claude_icon2");
const copilot_icon2 = document.getElementById("copilot_icon2");
const figma_icon2 = document.getElementById("figma_icon2");
const git_icon2 = document.getElementById("git_icon2");
const gitbash_icon2 = document.getElementById("gitbash_icon2");
const github_icon2 = document.getElementById("github_icon2");
const gpt_icon2 = document.getElementById("gpt_icon2");
const notion_icon2 = document.getElementById("notion_icon2");
const firebase_icon2 = document.getElementById("firebase_icon2");

//Pop up elements
const popup_background = document.getElementById("popup_background");
const close_button = document.getElementById("close_button");
const popup_image = document.getElementById("popup_image");
const popup_title = document.getElementById("popup_title");
const popup_paragraph = document.getElementById("popup_paragraph");

// --- CLICKS EVENT LISTENERS ---

// FRONT-END
canva_icon.addEventListener("click", () => {
    openPopup("canva");
});

css_icon.addEventListener("click", () => {
    openPopup("css");
});

html_icon.addEventListener("click", () => {
    openPopup("html");
});

js_icon.addEventListener("click", () => {
    openPopup("js");
});

liveserver_icon.addEventListener("click", () => {
    openPopup("liveserver");
});

netlify_icon.addEventListener("click", () => {
    openPopup("netlify");
});

sass_icon.addEventListener("click", () => {
    openPopup("sass");
});

vscode_icon.addEventListener("click", () => {
    openPopup("vscode");
});

canva_icon2.addEventListener("click", () => {
    openPopup("canva");
});

css_icon2.addEventListener("click", () => {
    openPopup("css");
});

html_icon2.addEventListener("click", () => {
    openPopup("html");
});

js_icon2.addEventListener("click", () => {
    openPopup("js");
});

liveserver_icon2.addEventListener("click", () => {
    openPopup("liveserver");
});

netlify_icon2.addEventListener("click", () => {
    openPopup("netlify");
});

sass_icon2.addEventListener("click", () => {
    openPopup("sass");
});

vscode_icon2.addEventListener("click", () => {
    openPopup("vscode");
});


// BACK-END
csharp_icon.addEventListener("click", () => {
    openPopup("csharp");
});

cpp_icon.addEventListener("click", () => {
    openPopup("cpp");
});

eclipse_icon.addEventListener("click", () => {
    openPopup("eclipse");
});

intellij_icon.addEventListener("click", () => {
    openPopup("intellij");
});

java_icon.addEventListener("click", () => {
    openPopup("java");
});

postman_icon.addEventListener("click", () => {
    openPopup("postman");
});

python_icon.addEventListener("click", () => {
    openPopup("python");
});

sd_icon.addEventListener("click", () => {
    openPopup("sd");
});

spring_icon.addEventListener("click", () => {
    openPopup("spring");
});

springboot_icon.addEventListener("click", () => {
    openPopup("springboot");
});

csharp_icon2.addEventListener("click", () => {
    openPopup("csharp");
});

cpp_icon2.addEventListener("click", () => {
    openPopup("cpp");
});

eclipse_icon2.addEventListener("click", () => {
    openPopup("eclipse");
});

intellij_icon2.addEventListener("click", () => {
    openPopup("intellij");
});

java_icon2.addEventListener("click", () => {
    openPopup("java");
});

postman_icon2.addEventListener("click", () => {
    openPopup("postman");
});

python_icon2.addEventListener("click", () => {
    openPopup("python");
});

sd_icon2.addEventListener("click", () => {
    openPopup("sd");
});

spring_icon2.addEventListener("click", () => {
    openPopup("spring");
});

springboot_icon2.addEventListener("click", () => {
    openPopup("springboot");
});


// GAME DEV
audacity_icon.addEventListener("click", () => {
    openPopup("audacity");
});

bfxr_icon.addEventListener("click", () => {
    openPopup("bfxr");
});

construct_icon.addEventListener("click", () => {
    openPopup("construct");
});

game_maker_icon.addEventListener("click", () => {
    openPopup("game-maker");
});

gml_icon.addEventListener("click", () => {
    openPopup("gml");
});

piskel_icon.addEventListener("click", () => {
    openPopup("piskel");
});

pixilart_icon.addEventListener("click", () => {
    openPopup("pixilart");
});

scratch_icon.addEventListener("click", () => {
    openPopup("scratch");
});

audacity_icon2.addEventListener("click", () => {
    openPopup("audacity");
});

bfxr_icon2.addEventListener("click", () => {
    openPopup("bfxr");
});

construct_icon2.addEventListener("click", () => {
    openPopup("construct");
});

game_maker_icon2.addEventListener("click", () => {
    openPopup("game-maker");
});

gml_icon2.addEventListener("click", () => {
    openPopup("gml");
});

piskel_icon2.addEventListener("click", () => {
    openPopup("piskel");
});

pixilart_icon2.addEventListener("click", () => {
    openPopup("pixilart");
});

scratch_icon2.addEventListener("click", () => {
    openPopup("scratch");
});


// ESSENCIAL
claude_icon.addEventListener("click", () => {
    openPopup("claude");
});

copilot_icon.addEventListener("click", () => {
    openPopup("copilot");
});

figma_icon.addEventListener("click", () => {
    openPopup("figma");
});

git_icon.addEventListener("click", () => {
    openPopup("git");
});

gitbash_icon.addEventListener("click", () => {
    openPopup("gitbash");
});

github_icon.addEventListener("click", () => {
    openPopup("github");
});

gpt_icon.addEventListener("click", () => {
    openPopup("gpt");
});

notion_icon.addEventListener("click", () => {
    openPopup("notion");
});

firebase_icon.addEventListener("click", () => {
    openPopup("firebase");
});

claude_icon2.addEventListener("click", () => {
    openPopup("claude");
});

copilot_icon2.addEventListener("click", () => {
    openPopup("copilot");
});

figma_icon2.addEventListener("click", () => {
    openPopup("figma");
});

git_icon2.addEventListener("click", () => {
    openPopup("git");
});

gitbash_icon2.addEventListener("click", () => {
    openPopup("gitbash");
});

github_icon2.addEventListener("click", () => {
    openPopup("github");
});

gpt_icon2.addEventListener("click", () => {
    openPopup("gpt");
});

notion_icon2.addEventListener("click", () => {
    openPopup("notion");
});

firebase_icon2.addEventListener("click", () => {
    openPopup("firebase");
});


// --- OPENING and CLOSING POPUPS ---
//Closing popup
close_button.addEventListener("click", () => {
    closePopup();
});

popup_background.addEventListener("click", () => {
    closePopup();
});

function openPopup(skill) {
    switch (skill) {

        // FRONT-END
        case "canva":
            popup_image.src = "../img/skills/frontend/canva.png";
            popup_title.textContent = "Canva";
            popup_paragraph.textContent = "Ferramenta de design gráfico e criação de interfaces.";
        break;

        case "css":
            popup_image.src = "../img/skills/frontend/css.png";
            popup_title.textContent = "CSS";
            popup_paragraph.textContent = "Linguagem usada para estilizar e estruturar visualmente páginas Web.";
        break;

        case "html":
            popup_image.src = "../img/skills/frontend/html.png";
            popup_title.textContent = "HTML";
            popup_paragraph.textContent = "Linguagem de marcação usada para estruturar páginas Web.";
        break;

        case "js":
            popup_image.src = "../img/skills/frontend/js.png";
            popup_title.textContent = "JavaScript";
            popup_paragraph.textContent = "Linguagem de programação usada para criar interatividade em páginas Web.";
        break;

        case "liveserver":
            popup_image.src = "../img/skills/frontend/liveserver.png";
            popup_title.textContent = "Live Server";
            popup_paragraph.textContent = "Extensão que permite visualizar alterações no código Web em tempo real.";
        break;

        case "netlify":
            popup_image.src = "../img/skills/frontend/netlify.png";
            popup_title.textContent = "Netlify";
            popup_paragraph.textContent = "Plataforma para hospedagem e publicação de aplicações Web.";
        break;

        case "sass":
            popup_image.src = "../img/skills/frontend/sass.png";
            popup_title.textContent = "Sass";
            popup_paragraph.textContent = "Pré-processador CSS que facilita a criação e organização de estilos.";
        break;

        case "vscode":
            popup_image.src = "../img/skills/frontend/vscode.png";
            popup_title.textContent = "Visual Studio Code";
            popup_paragraph.textContent = "Editor de código-fonte usado para desenvolvimento de aplicações.";
        break;


        // BACK-END
        case "csharp":
            popup_image.src = "../img/skills/backend/csharp.png";
            popup_title.textContent = "C#";
            popup_paragraph.textContent = "Linguagem de programação utilizada no desenvolvimento de aplicações e jogos.";
        break;

        case "cpp":
            popup_image.src = "../img/skills/backend/cpp.png";
            popup_title.textContent = "C++";
            popup_paragraph.textContent = "Linguagem de programação de alto desempenho usada em diversos tipos de aplicações.";
        break;

        case "eclipse":
            popup_image.src = "../img/skills/backend/eclipse.png";
            popup_title.textContent = "Eclipse";
            popup_paragraph.textContent = "IDE utilizada principalmente para desenvolvimento em Java.";
        break;

        case "intellij":
            popup_image.src = "../img/skills/backend/intellij.png";
            popup_title.textContent = "IntelliJ IDEA";
            popup_paragraph.textContent = "IDE poderosa para desenvolvimento de aplicações, especialmente em Java.";
        break;

        case "java":
            popup_image.src = "../img/skills/backend/java.png";
            popup_title.textContent = "Java";
            popup_paragraph.textContent = "Linguagem de programação orientada a objetos usada em aplicações de diversos tipos.";
        break;

        case "postman":
            popup_image.src = "../img/skills/backend/postman.png";
            popup_title.textContent = "Postman";
            popup_paragraph.textContent = "Ferramenta utilizada para testar e desenvolver APIs.";
        break;

        case "python":
            popup_image.src = "../img/skills/backend/python.png";
            popup_title.textContent = "Python";
            popup_paragraph.textContent = "Linguagem de programação versátil usada em aplicações, automação, dados e IA.";
        break;

        case "sd":
            popup_image.src = "../img/skills/backend/sd.png";
            popup_title.textContent = "Sharp Development";
            popup_paragraph.textContent = "Ferramenta utilizada para desenvolvimento de aplicações C#.";
        break;

        case "spring":
            popup_image.src = "../img/skills/backend/spring.png";
            popup_title.textContent = "Spring";
            popup_paragraph.textContent = "Framework Java utilizado para desenvolver aplicações robustas e escaláveis.";
        break;

        case "springboot":
            popup_image.src = "../img/skills/backend/springboot.png";
            popup_title.textContent = "Spring Boot";
            popup_paragraph.textContent = "Framework que simplifica a criação de aplicações Java baseadas no Spring.";
        break;


        // GAME DEV
        case "audacity":
            popup_image.src = "../img/skills/game-dev/audacity.png";
            popup_title.textContent = "Audacity";
            popup_paragraph.textContent = "Editor de áudio utilizado para gravar, editar e manipular sons.";
        break;

        case "bfxr":
            popup_image.src = "../img/skills/game-dev/bfxr.png";
            popup_title.textContent = "Bfxr";
            popup_paragraph.textContent = "Ferramenta para criação de efeitos sonoros para jogos.";
        break;

        case "construct":
            popup_image.src = "../img/skills/game-dev/construct.png";
            popup_title.textContent = "Construct";
            popup_paragraph.textContent = "Engine para criação de jogos, com foco em desenvolvimento visual.";
        break;

        case "game-maker":
            popup_image.src = "../img/skills/game-dev/game maker.png";
            popup_title.textContent = "GameMaker";
            popup_paragraph.textContent = "Engine para desenvolvimento de jogos 2D.";
        break;

        case "gml":
            popup_image.src = "../img/skills/game-dev/gml.png";
            popup_title.textContent = "GML";
            popup_paragraph.textContent = "Linguagem de programação utilizada no desenvolvimento de jogos no GameMaker.";
        break;

        case "piskel":
            popup_image.src = "../img/skills/game-dev/piskel.png";
            popup_title.textContent = "Piskel";
            popup_paragraph.textContent = "Editor online para criação de pixel art e animações.";
        break;

        case "pixilart":
            popup_image.src = "../img/skills/game-dev/pixilart.png";
            popup_title.textContent = "Pixilart";
            popup_paragraph.textContent = "Plataforma para criação de pixel art e animações.";
        break;

        case "scratch":
            popup_image.src = "../img/skills/game-dev/scratch.png";
            popup_title.textContent = "Scratch";
            popup_paragraph.textContent = "Plataforma visual para criação de jogos, animações e projetos interativos.";
        break;


        // ESSENCIAL
        case "claude":
            popup_image.src = "../img/skills/ferramentas/claude.png";
            popup_title.textContent = "Claude";
            popup_paragraph.textContent = "Assistente de inteligência artificial para programação, escrita e resolução de problemas.";
        break;

        case "copilot":
            popup_image.src = "../img/skills/ferramentas/copilot.png";
            popup_title.textContent = "GitHub Copilot";
            popup_paragraph.textContent = "Assistente de programação baseado em inteligência artificial.";
        break;

        case "figma":
            popup_image.src = "../img/skills/ferramentas/figma.png";
            popup_title.textContent = "Figma";
            popup_paragraph.textContent = "Ferramenta colaborativa para design de interfaces e prototipagem.";
        break;

        case "git":
            popup_image.src = "../img/skills/ferramentas/git.png";
            popup_title.textContent = "Git";
            popup_paragraph.textContent = "Sistema de controle de versão utilizado para gerenciar projetos e código-fonte.";
        break;

        case "gitbash":
            popup_image.src = "../img/skills/ferramentas/gitbash.png";
            popup_title.textContent = "Git Bash";
            popup_paragraph.textContent = "Terminal que permite utilizar comandos Unix e Git no Windows.";
        break;

        case "github":
            popup_image.src = "../img/skills/ferramentas/github.png";
            popup_title.textContent = "GitHub";
            popup_paragraph.textContent = "Plataforma para hospedagem, colaboração e gerenciamento de projetos usando Git.";
        break;

        case "gpt":
            popup_image.src = "../img/skills/ferramentas/gpt.png";
            popup_title.textContent = "GPT";
            popup_paragraph.textContent = "Modelo de inteligência artificial utilizado para geração de texto, código e resolução de problemas.";
        break;

        case "notion":
            popup_image.src = "../img/skills/ferramentas/notion.png";
            popup_title.textContent = "Notion";
            popup_paragraph.textContent = "Ferramenta de organização para notas, documentação, projetos e gerenciamento de tarefas.";
        break;

        case "firebase":
            popup_image.src = "../img/skills/ferramentas/firebase.png";
            popup_title.textContent = "Firebase";
            popup_paragraph.textContent = "Plataforma do Google para desenvolvimento de aplicações Web e mobile.";
        break;
    }

    popup_background.classList.remove("closed");
}

function closePopup(){
    popup_background.classList.add("closed");
}