let modal, modal_title, modal_content;

document.addEventListener("DOMContentLoaded", function () {
    modal = document.getElementById("modal")
    modal_title = document.getElementById("modal-title")
    modal_content = document.getElementById("modal-content")
})

projetos = {
    "ConstruAI": "<h3>Meu primeiro projeto desenvolvido para a Rede Construai.</h3><p>Um site com diversos prompts prontos, onde o usuário insere informações e tem uma resposta rápida do ChatGPT. Também nesse site, há um aba de 'chat' onde você pode conversar com o ChatGPT com uma Persona.<br>Fui o principal desenvolvedor atuando como full-stack, nesse projeto foi utilizado: Python, Firebase Realtime Database, OpenAI API, JavaScript, HTML, CSS.</p>",
    "UaiTask": "<p>Atuei como desenvolvedor back-end, onde desenvolvi todo o sistema de gerenciamento de tarefas.</p>",
    "Prestação de Contas": "<p>Este é um site de prestação de contas para os parceiros de marketing da Rede Construai. Foi desenvolvido em 2024, com foco para o ano de 2025. Atuei como Full-Stack, nesse projeto foi utilizado: Python, Firebase Realtime Database, Google Drive API, JavaScript, HTML, CSS</p>",
    "Assinatura de Contratos": "<p>Atuei como full-stack, onde criei um sistema válido judicialmente para assinatura de contratos.</p>",
    "Bot Ticket": "Criei um sistema de tickets inovador para Discord, onde o ticket é feito por privado.",
    "Suporte com IA": "Criei um bot de Discord que utiliza IA para responder perguntas frequentes, o bot pode responder sempre em um canal específico ou em canais somente quando a mensagem fizer sentido com alguma pergunta que ele sabe responder.",
    "IoT": "<p>Atuei como Full-Stack, onde criei um ecossistema para um evento; com 40 controles zigbee de 6 botões e 2 antenas sonoff zigbee, Python, JavaScript, HTML e CSS.<br>Neste projeto foi utilizado 1 máquina virtual para rodar o Home Assistant OS, uma máquina para rodar o site e API e uma máquina para realizar a apresentação via powerpoint (conectado ao site)</p>"
}

function openModal(projeto) {
    modal.style.display = 'flex'
    modal.style.opacity = '1'
    modal_title.innerText = projeto
    if (projetos[projeto] == undefined) {
        modal_content.innerHTML = "Sem informações."
        return
    } 
    modal_content.innerHTML = projetos[projeto]
}

function closeModal() {
    document.getElementById("modal").style.opacity = 0;
    setTimeout(function () {
        document.getElementById("modal").style.display = 'none';
    }, 500)
}