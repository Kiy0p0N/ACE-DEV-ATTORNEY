import courtroomBg from "../assets/backgrounds/courtroom.png";
import judgeBg from "../assets/backgrounds/judge.png";
import prosecutorBg from "../assets/backgrounds/prosecutor.png";
import defenseBg from "../assets/backgrounds/defense.png";
import defendantBg from "../assets/backgrounds/bg-2.jpg";
import witnessBg from "../assets/backgrounds/bg-2.jpg";

import evidence1 from "../assets/evidence/evidence-1.png";
import objection from "../assets/backgrounds/objection.png";

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
    speaker: "Juiz",
    text: "ORDEM NO TRIBUNAL!",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "O caso de hoje é uma acusação de plágio contra um desenvolvedor.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "O réu está sendo acusado de copiar código da internet sem originalidade.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "A turma presente nesta sala será o júri responsável pelo veredito final.",
  },

  // Apresentação do réu
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Réu, por favor, se apresente.",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Meu nome é Developer X... e eu não sou um plagiador.",
  },
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "Veremos sobre isso...",
  },

  // Interação turma
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Antes de começarmos, uma pergunta ao júri: alguém aqui já pesquisou código ou solução na internet?",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Se sim, levantem a mão.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Obrigado.",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Então... eu não sou o único...",
  },

  // Acusação
  {
    background: prosecutorBg,
    speaker: "Promotor",
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
    speaker: "Promotor",
    text: "Encontramos trechos de código idênticos aos disponíveis online.",
  },
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "O réu simplesmente copiou e chamou de seu.",
  },
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "Isso não é criatividade. Isso é plágio.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Réu, como se declara?",
  },
  {
    background: defendantBg,
    speaker: "Réu",
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
    speaker: "Advogado de Defesa",
    text: "A acusação ignora um princípio fundamental do capítulo 1 de Roube como um Artista.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Nada é original.",
  },
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "Isso é um absurdo!",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Toda criação vem de referências anteriores.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Programadores aprendem observando códigos, estudando documentação e reutilizando ideias.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Réu, você confirma isso?",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Sim! Eu aprendi vendo outros códigos... mas eu adaptei para o meu projeto.",
  },

  // Conceito
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Existe diferença entre copiar como ladrão e roubar como artista.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Copiar como ladrão é copiar sem entender.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
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
    speaker: "Promotor",
    text: "Então qualquer cópia pode ser justificada?",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Não.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Se não há entendimento ou transformação, então é plágio.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Réu, você entendeu o código que usou?",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Sim. Eu modifiquei partes, corrigi erros e adaptei para o que eu precisava.",
  },

  // Perguntas ao júri
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Pergunta ao júri: usar código da internet automaticamente significa plágio?",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "O júri pode responder.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Agora outra pergunta: se tudo vem de referências... onde começa a criatividade?",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Eu acho que começa quando você transforma aquilo em algo seu.",
  },

  // Empreendedorismo
  {
    background: witnessBg,
    speaker: "Testemunha",
    text: "Empresas inovadoras raramente criam algo do zero.",
  },
  {
    background: witnessBg,
    speaker: "Testemunha",
    text: "Elas observam soluções existentes e recombinam ideias.",
  },
  {
    background: witnessBg,
    speaker: "Testemunha",
    text: "Uber combinou transporte com aplicativo.",
  },
  {
    background: witnessBg,
    speaker: "Testemunha",
    text: "Airbnb combinou hospedagem com marketplace.",
  },
  {
    background: defenseBg,
    speaker: "Advogado de Defesa",
    text: "Inovação não é inventar do nada. É gerar valor novo a partir de referências.",
  },
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "Hm... isso é difícil de contestar.",
  },

  // Final
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "Réu... responda diretamente: você copiou código da internet?",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Sim.",
  },
  {
    background: prosecutorBg,
    speaker: "Promotor",
    text: "Então admite!",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Mas eu estudei, entendi e adaptei.",
  },
  {
    background: defendantBg,
    speaker: "Réu",
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
    speaker: "Advogado de Defesa",
    text: "Isso não é plágio. Isso é aprendizado.",
  },

  // Veredito
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Chegou o momento da decisão.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
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
    speaker: "Juiz",
    text: "Após votação do júri...",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Veredito final:",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Inocente de plágio.",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Culpado apenas de aprender como todo desenvolvedor.",
  },
  {
    background: defendantBg,
    speaker: "Réu",
    text: "Obrigado...",
  },
  {
    background: judgeBg,
    speaker: "Juiz",
    text: "Caso encerrado!",
  },
];

export default script;