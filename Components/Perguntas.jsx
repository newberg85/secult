"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    id: "faq-1",
    question: "Como faço para participar dos editais?",
    answer:
      "Para participar dos editais, você deve acompanhar o site oficial e verificar os requisitos e prazos descritos no edital. Geralmente é necessário enviar documentação e preencher um formulário de inscrição.",
  },
  {
    id: "faq-2",
    question: "Quais documentos são exigidos para inscrição?",
    answer:
      "Os documentos variam conforme o edital, mas comumente pedem RG, CPF, comprovante de residência e portfólio (quando aplicável).",
  },
  {
    id: "faq-3",
    question: "Como enviam-se propostas?",
    answer:
      "As propostas costumam ser enviadas por formulário online ou e-mail institucional indicado no edital.",
  },
  {
    id: "faq-4",
    question: "Há taxa de inscrição?",
    answer:
      "Depende do edital. Muitos editais públicos não cobram taxa, mas verifique o item 'Taxas' no próprio edital.",
  },
  {
    id: "faq-5",
    question: "Quando saem os resultados?",
    answer:
      "Os prazos de divulgação também estão no edital; fique atento às datas e às publicações no site oficial.",
  },
  {
    id: "faq-6",
    question: "Posso recorrer se for desclassificado?",
    answer:
      "Alguns editais possuem prazo e procedimento de recurso. Consulte o item 'Recursos' no edital para mais detalhes.",
  },
];

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="max-w-7xl pt-10 pb-10 font-[Montserrat] mx-4 md:mx-0">
        {/* Título */}
        <div className="">
          <h1 className="text-2xl font-bold text-black pb-2 border-b-4 border-[#10783B] inline-block">
            Principais Perguntas
          </h1>
        </div>

        <div className="border-t pt-8 border-gray-400 w-full"></div>

        {/* Container responsivo dos accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 sm:px-0 items-start">
          {faqs.map((item, i) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                sx={{
                  display: "flex",
                  flexDirection: "row", 
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& .MuiAccordionSummary-content": {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "row",
                  },
                }}
              >
                <Typography className="font-bold text-sm sm:text-base">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-sm sm:text-base text-gray-700">
                {item.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
