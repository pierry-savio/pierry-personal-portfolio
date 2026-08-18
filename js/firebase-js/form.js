import { saveContact } from "./contact-service.js";

const contact_form = document.getElementById("contact_form");
const name_input = document.getElementById("name_input");
const message_input = document.getElementById("message_input");
const btn_send = document.getElementById("btn_send");

contact_form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        btn_send.textContent = "Enviando...";
        await saveContact(name_input.value, message_input.value);
        btn_send.textContent = "Enviado!";
        contact_form.reset();
    } catch (error) {
        console.log("Erro ao enviar: " + error);
        btn_send.textContent = "Erro: tente novamente.";
    }
});
