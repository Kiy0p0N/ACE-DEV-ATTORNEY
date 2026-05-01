import courtroomBg from "../assets/backgrounds/courtroom-1.png";
import judgeBg from "../assets/backgrounds/judge-1.png";
import prosecutorBg from "../assets/backgrounds/prosecutor.png";
import defenseBg from "../assets/backgrounds/defense.png";
import defendantBg from "../assets/backgrounds/bg-2.jpg";
import witnessBg from "../assets/backgrounds/bg-2.jpg";

import evidence1 from "../assets/evidence/evidence-1.png";
import objection from "../assets/backgrounds/objection.png";

const charactersName = {
  juiz: "Juiz",
  advogado: "Advogado",
  reu: "Réu",
  promotor: "Promotor",
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

  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "ORDEM NO TRIBUNAL!",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "O caso de hoje é uma acusação de plágio contra um desenvolvedor.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "O réu está sendo acusado de copiar código da internet sem originalidade.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "A turma presente nesta sala será o júri responsável pelo veredito final.",
  },

  // Apresentação do réu
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Réu, por favor, se apresente.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Meu nome é Developer X... e eu não sou um plagiador.",
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Veremos sobre isso...",
  },

  // Interação turma
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Antes de começarmos, uma pergunta ao júri: alguém aqui já pesquisou código ou solução na internet?",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Se sim, levantem a mão.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Obrigado.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Então... eu não sou o único...",
  },

  // Acusação
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Excelência, apresento as provas!",
  },
  {
    background: prosecutorBg,
    evidence: evidence1,
    autoNext: false,
    continueDelay: 2500,
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Encontramos trechos de código idênticos aos disponíveis online.",
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "O réu simplesmente copiou e chamou de seu.",
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Isso não é criatividade. Isso é plágio.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Réu, como se declara?",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Eu... eu usei referências, sim. Mas eu não só copiei!",
  },

  // Defesa
  {
    background: defendantBg,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "A acusação ignora um princípio fundamental do capítulo 1 de Roube como um Artista.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Nada é original.",
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Isso é um absurdo!",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Toda criação vem de referências anteriores.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Programadores aprendem observando códigos, estudando documentação e reutilizando ideias.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Réu, você confirma isso?",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Sim! Eu aprendi vendo outros códigos... mas eu adaptei para o meu projeto.",
  },

  // Conceito
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Existe diferença entre copiar como ladrão e roubar como artista.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Copiar como ladrão é copiar sem entender.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Roubar como artista é estudar, adaptar, melhorar e transformar.",
  },
  {
    background: defenseBg,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Então qualquer cópia pode ser justificada?",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Não.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Se não há entendimento ou transformação, então é plágio.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Réu, você entendeu o código que usou?",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Sim. Eu modifiquei partes, corrigi erros e adaptei para o que eu precisava.",
  },

  // Perguntas ao júri
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Pergunta ao júri: usar código da internet automaticamente significa plágio?",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "O júri pode responder.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Agora outra pergunta: se tudo vem de referências... onde começa a criatividade?",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Eu acho que começa quando você transforma aquilo em algo seu.",
  },

  // Empreendedorismo
  {
    background: witnessBg,
    speaker: charactersName.testemunha,
    text: "Empresas inovadoras raramente criam algo do zero.",
  },
  {
    background: witnessBg,
    speaker: charactersName.testemunha,
    text: "Elas observam soluções existentes e recombinam ideias.",
  },
  {
    background: witnessBg,
    speaker: charactersName.testemunha,
    text: "Uber combinou transporte com aplicativo.",
  },
  {
    background: witnessBg,
    speaker: charactersName.testemunha,
    text: "Airbnb combinou hospedagem com marketplace.",
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Inovação não é inventar do nada. É gerar valor novo a partir de referências.",
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Hm... isso é difícil de contestar.",
  },

  // Final
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Réu... responda diretamente: você copiou código da internet?",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Sim.",
  },
  {
    background: prosecutorBg,
    speaker: charactersName.promotor,
    text: "Então admite!",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Mas eu estudei, entendi e adaptei.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Eu não só copiei... eu aprendi.",
  },
  {
    background: defendantBg,
    objection: true,
    autoNext: true,
    delay: 2500,
  },
  {
    background: defenseBg,
    speaker: charactersName.advogado,
    text: "Isso não é plágio. Isso é aprendizado.",
  },

  // Veredito
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Chegou o momento da decisão.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Júri, o réu é culpado de plágio... ou inocente por aprender com referências?",
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
    text: "Após votação do júri...",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Veredito final:",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Inocente de plágio.",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Culpado apenas de aprender como todo desenvolvedor.",
  },
  {
    background: defendantBg,
    speaker: charactersName.reu,
    text: "Obrigado...",
  },
  {
    background: judgeBg,
    speaker: charactersName.juiz,
    text: "Caso encerrado!",
  },
];

export default script;