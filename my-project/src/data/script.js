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



import defenseBg from "../assets/backgrounds/defense.png";
import defendantBg from "../assets/backgrounds/bg-2.jpg";
import witnessBg from "../assets/backgrounds/bg-2.jpg";

import objection from "../assets/backgrounds/objection.png";
import evidence from "../assets/evidence/evidence-1.png";

const charactersName = {
  juiz: "Juiz",
  advogado: "Advogado de Defesa: Ariel",
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
    background: defenseBg,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Antes de prosseguirmos, uma pergunta ao júri.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Quantos aqui já pesquisaram solução ou código na internet?",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Levantem a mão.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
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
    background: evidence,
    evidence: evidence-1,
    autoNext: false,
    continueDelay: 2500,
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
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Permissão para interrogar a testemunha.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Concedida.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
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
    background: defenseBg,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Então não era uma simples cópia.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Houve compreensão, adaptação e transformação.",
  },

  // 6. Explicação do conceito central
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Excelência, apresento a principal tese da defesa.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Nada é original.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Toda criação nasce de referências anteriores.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
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
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Não.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Existe uma diferença.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Copiar como ladrão é repetir sem entender.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
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
    background: defenseBg,
    speaker: charactersName.advogado,
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