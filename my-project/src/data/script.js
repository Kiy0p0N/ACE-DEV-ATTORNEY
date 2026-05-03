import courtroomBg from "../assets/backgrounds/courtroom.png";
import judgeBg from "../assets/backgrounds/judge.png";

// Promotor bg
import prosecutorBg1 from "../assets/backgrounds/promotor/promotor-1.png";
import prosecutorBg2 from "../assets/backgrounds/promotor/promotor-2.png";
import prosecutorBg3 from "../assets/backgrounds/promotor/promotor-3.png";
import prosecutorBg4 from "../assets/backgrounds/promotor/promotor-4.png";
import prosecutorBg5 from "../assets/backgrounds/promotor/promotor-5.png";
import prosecutorBg6 from "../assets/backgrounds/promotor/promotor-6.png";
import prosecutorBg7 from "../assets/backgrounds/promotor/promotor-7.png";
import prosecutorBg8 from "../assets/backgrounds/promotor/promotor-8.png";
import prosecutorBg9 from "../assets/backgrounds/promotor/promotor-9.png";
import prosecutorBg10 from "../assets/backgrounds/promotor/promotor-10.png";
import prosecutorBg11 from "../assets/backgrounds/promotor/promotor-11.png";



import defenseBg from "../assets/backgrounds/defense.png";
import defendantBg from "../assets/backgrounds/bg-2.jpg";
import witnessBg from "../assets/backgrounds/bg-2.jpg";

import objection from "../assets/backgrounds/objection.png";

const charactersName = {
  juiz: "Juiz",
  advogado: "Advogado",
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
    background: prosecutorBg1,
    speaker: charactersName.promotor,
    text: "Excelência, sejamos francos, este caso é simples.",
  },
  {
    background: prosecutorBg2,
    speaker: charactersName.promotor,
    text: "O réu não criou. Ele copiou.",
  },
  {
    background: prosecutorBg3,
    speaker: charactersName.promotor,
    text: "Linhas inteiras foram encontradas em fóruns, documentações e repositórios públicos.",
  },
  {
    background: prosecutorBg4,
    speaker: charactersName.promotor,
    text: "Ele chama isso de aprendizado.",
  },
  {
    background: prosecutorBg4,
    speaker: charactersName.promotor,
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
    background: prosecutorBg5,
    speaker: charactersName.promotor,
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
    background: prosecutorBg5,
    speaker: charactersName.promotor,
    text: "Ah, que interessante...",
  },
  {
    background: prosecutorBg5,
    speaker: charactersName.promotor,
    text: "Parece que temos uma sala cheia de suspeitos.",
  },
  // {
  //   background: prosecutorBg,
  //   evidence: evidence1,
  //   autoNext: false,
  //   continueDelay: 2500,
  // },
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
    background: prosecutorBg6,
    speaker: charactersName.promotor,
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
    background: prosecutorBg7,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: prosecutorBg7,
    speaker: charactersName.promotor,
    text: "Então agora copiar virou arte?",
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
    background: prosecutorBg8,
    speaker: charactersName.promotor,
    text: "Pergunta objetiva ao júri.",
  },
  {
    background: prosecutorBg9,
    speaker: charactersName.promotor,
    text: "Se duas soluções parecem muito parecidas, isso significa plágio?",
  },
  {
    background: prosecutorBg10,
    speaker: charactersName.promotor,
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
    text: "",
    autoNext: true,
    delay: 4000,
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