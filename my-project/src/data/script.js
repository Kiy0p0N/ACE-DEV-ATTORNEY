import courtroomBg from "../assets/backgrounds/courtroom.png";
import judgeBg from "../assets/backgrounds/judge.png";

/* PROMOTOR */
/* BACKGROUND */
import promotorBg1 from "../assets/backgrounds/promotor/promotor-1.png";
import promotorBg2 from "../assets/backgrounds/promotor/promotor-2.png";
import promotorBg3 from "../assets/backgrounds/promotor/promotor-3.png";
import promotorBg4 from "../assets/backgrounds/promotor/promotor-4.png";
import promotorBg5 from "../assets/backgrounds/promotor/promotor-5.png";
import promotorBg6 from "../assets/backgrounds/promotor/promotor-6.png";
import promotorBg7 from "../assets/backgrounds/promotor/promotor-7.png";
import promotorBg8 from "../assets/backgrounds/promotor/promotor-8.png";
import promotorBg9 from "../assets/backgrounds/promotor/promotor-9.png";
import promotorBg10 from "../assets/backgrounds/promotor/promotor-10.png";
import promotorBg11 from "../assets/backgrounds/promotor/promotor-11.png";
/* AUDIO */
import promotorA1 from "../assets/sounds/audios/promotor/promotor-1.ogg";
import promotorA2 from "../assets/sounds/audios/promotor/promotor-2.ogg";
import promotorA3 from "../assets/sounds/audios/promotor/promotor-3.ogg";
import promotorA4 from "../assets/sounds/audios/promotor/promotor-4.ogg";
import promotorA5 from "../assets/sounds/audios/promotor/promotor-5.ogg";
import promotorA6 from "../assets/sounds/audios/promotor/promotor-6.ogg";
import promotorA7 from "../assets/sounds/audios/promotor/promotor-7.ogg";
import promotorA8 from "../assets/sounds/audios/promotor/promotor-8.ogg";
import promotorA9 from "../assets/sounds/audios/promotor/promotor-9.ogg";
import promotorA10 from "../assets/sounds/audios/promotor/promotor-10.ogg";
import promotorA11 from "../assets/sounds/audios/promotor/promotor-11.ogg";
import promotorA12 from "../assets/sounds/audios/promotor/promotor-12.ogg";
import promotorA13 from "../assets/sounds/audios/promotor/promotor-13.ogg";


/* ADVOGADO */
/* BACKGROUND */
import advogadoBg1 from "../assets/backgrounds/advogado/advogado-1.png";
import advogadoBg2 from "../assets/backgrounds/advogado/advogado-2.png";
import advogadoBg3 from "../assets/backgrounds/advogado/advogado-3.png";
import advogadoBg4 from "../assets/backgrounds/advogado/advogado-4.png";
import advogadoBg5 from "../assets/backgrounds/advogado/advogado-5.png";
import advogadoBg6 from "../assets/backgrounds/advogado/advogado-6.png";
import advogadoBg7 from "../assets/backgrounds/advogado/advogado-7.png";
import advogadoBg8 from "../assets/backgrounds/advogado/advogado-8.png";

/* AUDIO */
import advogadoA1 from "../assets/sounds/audios/advogado/advogado-1.mp4";
import advogadoA2 from "../assets/sounds/audios/advogado/advogado-2.mp4";
import advogadoA3 from "../assets/sounds/audios/advogado/advogado-3.mp4";
import advogadoA4 from "../assets/sounds/audios/advogado/advogado-4.mp4";
import advogadoA5 from "../assets/sounds/audios/advogado/advogado-5.mp4";
import advogadoA6 from "../assets/sounds/audios/advogado/advogado-6.mp4";
import advogadoA7 from "../assets/sounds/audios/advogado/advogado-7.mp4";
import advogadoA8 from "../assets/sounds/audios/advogado/advogado-8.mp4";
import advogadoA9 from "../assets/sounds/audios/advogado/advogado-9.mp4";
import advogadoA10 from "../assets/sounds/audios/advogado/advogado-10.mp4";
import advogadoA11 from "../assets/sounds/audios/advogado/advogado-11.mp4";
import advogadoA12 from "../assets/sounds/audios/advogado/advogado-12.mp4";
import advogadoA13 from "../assets/sounds/audios/advogado/advogado-13.mp4";
import advogadoA14 from "../assets/sounds/audios/advogado/advogado-14.mp4";
import advogadoA15 from "../assets/sounds/audios/advogado/advogado-15.mp4";
import advogadoA16 from "../assets/sounds/audios/advogado/advogado-16.mp4";
import advogadoA17 from "../assets/sounds/audios/advogado/advogado-17.mp4";


import defendantBg from "../assets/backgrounds/bg-2.jpg";
import witnessBg from "../assets/backgrounds/bg-2.jpg";

import objection from "../assets/backgrounds/objection.png";
import evidence from "../assets/evidence/evidence-1.png";

const charactersName = {
  juiz: "Juiz",
  advogado: "Advogado de advogado: Ariel",
  reu: "Réu",
  promotor: "Promotor: Felipe de Oliveira",
  juri: "Júri",
  testemunha: "Testemunha",
};

const script = [
  // Intro
  {
    background: courtroomBg,
    text: "",
    autoNext: true,
    delay: 2500,
  },

  // 1. Abertura do caso
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "ORDEM NO TRIBUNAL!",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Estamos reunidos para julgar o caso: Estado vs. Developer X.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "O réu é acusado de plagiar código da internet e apresentar como criação própria.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Esta sala será também nosso júri.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Que todos levem esta decisão com responsabilidade.",
  },

  // 2. Apresentação da acusação
  {
    background: promotorBg1,
    speaker: charactersName.promotor,
    audio: promotorA1,
    text: "Excelência, sejamos francos, este caso é simples.",
  },
  {
    background: promotorBg2,
    speaker: charactersName.promotor,
    audio: promotorA2,
    text: "O réu não criou. Ele copiou.",
  },
  {
    background: promotorBg3,
    speaker: charactersName.promotor,
    audio: promotorA3,
    text: "Linhas inteiras foram encontradas em fóruns, documentações e repositórios públicos.",
  },
  {
    background: promotorBg4,
    speaker: charactersName.promotor,
    audio: promotorA4,
    text: "Ele chama isso de aprendizado.",
  },
  {
    background: promotorBg4,
    speaker: charactersName.promotor,
    audio: promotorA5,
    text: "Já eu chamo isso de fraude intelectual.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Isso não é verdade!",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Eu consultei referências, sim...",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Mas eu adaptei, estudei e modifiquei o código.",
  },
  {
    background: promotorBg5,
    speaker: charactersName.promotor,
    audio: promotorA6,
    text: "Ah, claro. A velha desculpa de todo programador.",
  },

  // 3. Primeira interação com o júri
  {
    background: advogadoBg1,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: advogadoBg1,
    speaker: charactersName.advogado,
    audio: advogadoA1,
    text: "Antes de prosseguirmos, uma pergunta ao júri.",
  },
  {
    background: advogadoBg1,
    speaker: charactersName.advogado,
    audio: advogadoA2,
    text: "Quantos aqui já pesquisaram solução ou código na internet?",
  },
  {
    background: advogadoBg1,
    speaker: charactersName.advogado,
    audio: advogadoA3,
    text: "Levantem a mão.",
  },
  {
    background: advogadoBg1,
    speaker: charactersName.advogado,
    audio: advogadoA4,
    text: "Obrigado.",
  },
  {
    background: promotorBg5,
    speaker: charactersName.promotor,
    audio: promotorA7,
    text: "Ah, que interessante...",
  },
  {
    background: promotorBg5,
    speaker: charactersName.promotor,
    audio: promotorA8,
    text: "Parece que temos uma sala cheia de suspeitos.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Controle-se, promotor.",
  },

  // 4. Chamada da testemunha
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "A promotoria pode chamar sua testemunha.",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "Eu fui quem denunciou o réu.",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "Encontrei um trecho extremamente semelhante a um código disponível online.",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "Quando vi, pensei: isso não pode ser coincidência.",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "Era praticamente idêntico.",
  },
  {
    background: promotorBg6,
    speaker: charactersName.promotor,
    audio: promotorA9,
    text: "Vejam só, temos uma denúncia concreta.",
  },

  // 5. Interrogatório da testemunha
  {
    background: advogadoBg2,
    speaker: charactersName.advogado,
    audio: advogadoA5,
    text: "Permissão para interrogar a testemunha?",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Concedida.",
  },
  {
    background: advogadoBg3,
    speaker: charactersName.advogado,
    audio: advogadoA6,
    text: "Testemunha, o código estava idêntico ou apenas similar?",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "Bem... havia alterações.",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "Algumas funções estavam diferentes.",
  },
  {
    background: defendantBg,
    speaker: charactersName.testemunha,
    text: "A lógica foi reorganizada.",
  },
  {
    background: advogadoBg4,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: advogadoBg4,
    speaker: charactersName.advogado,
    audio: advogadoA7,
    text: "Então não era uma simples cópia.",
  },
  {
    background: advogadoBg4,
    speaker: charactersName.advogado,
    audio: advogadoA8,
    text: "Houve compreensão, adaptação e transformação.",
  },

  // 6. Explicação do conceito central
  {
    background: advogadoBg5,
    speaker: charactersName.advogado,
    audio: advogadoA9,
    text: "Excelência, apresento a principal tese da advogado.",
  },
  {
    background: advogadoBg5,
    speaker: charactersName.advogado,
    audio: advogadoA10,
    text: "Nada é original.",
  },
  {
    background: advogadoBg5,
    speaker: charactersName.advogado,
    audio: advogadoA11,
    text: "Toda criação nasce de referências anteriores.",
  },
  {
    background: advogadoBg5,
    speaker: charactersName.advogado,
    audio: advogadoA12,
    text: "Programadores aprendem lendo documentação, estudando códigos e observando soluções.",
  },
  {
    background: promotorBg7,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: promotorBg7,
    speaker: charactersName.promotor,
    audio: promotorA10,
    text: "Então quer dizer que agora copiar virou arte?",
  },
  {
    background: advogadoBg6,
    speaker: charactersName.advogado,
    audio: advogadoA13,
    text: "Não.",
  },
  {
    background: advogadoBg6,
    speaker: charactersName.advogado,
    audio: advogadoA14,
    text: "Existe uma diferença.",
  },
  {
    background: advogadoBg6,
    speaker: charactersName.advogado,
    audio: advogadoA15,
    text: "Copiar como ladrão é repetir sem entender.",
  },
  {
    background: advogadoBg6,
    speaker: charactersName.advogado,
    audio: advogadoA16,
    text: "Roubar como artista é estudar, adaptar, transformar e gerar algo novo.",
  },

  // 7. Participação forte do júri
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Pergunta ao júri.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Se alguém aprende observando soluções existentes, isso automaticamente significa plágio?",
  },
  {
    background: promotorBg8,
    speaker: charactersName.promotor,
    audio: promotorA11,
    text: "Pergunta objetiva ao júri.",
  },
  {
    background: promotorBg9,
    speaker: charactersName.promotor,
    audio: promotorA12,
    text: "Se duas soluções parecem muito parecidas, isso significa plágio?",
  },
  {
    background: promotorBg10,
    speaker: charactersName.promotor,
    audio: promotorA13,
    text: "Respondam apenas: sim ou não.",
  },
  {
    background: advogadoBg7,
    speaker: charactersName.advogado,
    audio: advogadoA17,
    text: "Existe criatividade sem referência?",
  },

  // 8. Depoimento do réu
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Réu, faça sua declaração final.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Eu não tentei enganar ninguém.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Busquei referências porque ainda estou aprendendo.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Entendi o código.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Modifiquei.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Testei.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Errei várias vezes até funcionar.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Aprender não deveria ser crime.",
  },

  // 9. Veredito
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "O tribunal chegou ao momento final.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Júri...",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "O réu é culpado de plágio ou inocente por aprender com referências?",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Após ouvir o júri...",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Declaro o réu...",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "INOCENTE!",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Caso encerrado!",
  },
];

export default script;