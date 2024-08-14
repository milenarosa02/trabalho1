const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "gosta de animais?",
            },
            {
                texto: "Não gosta de animais?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "prefere cachorro",
            },
            {
                texto: "prefere gato",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "se ver um cachorro na rua, faz carinho?",
            },
            {
                texto: "se ver um cachorro na rua, passa reto?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "tem animal de estimação",
            },
            {
                texto: "Não tem animal de estimação",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "ja tive animal de estimação ",
            },
            {
                texto: "nunca tive nenhum animal de estimação",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "eu sei cuidar de um animal de estimação",
            },
            {
                texto: "eu não sei cuidar de nenhum animal de estimação.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "se eu pudesse,adotaria um animal de estimação.",
            },
            {
                texto: "mesmo se eu pudesse,não adotaria nenhum animal de estimação",
            }
        ]
    },

];
       


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();