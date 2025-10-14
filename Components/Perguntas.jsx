"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div className="w-full px-4 sm:px-10 pt-10 pb-10 font-[Montserrat]">
      {/* Título */}
      <div className="pl-2 sm:pl-8 md:pl-12">
        <h1 className="text-2xl font-bold text-black pb-2 border-b-4 border-[#10783B] inline-block">
          Principais Perguntas
        </h1>
      </div>

      <div className="border-t pt-8 border-gray-400 w-full"></div>

      {/* Container responsivo dos accordions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 sm:px-0">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
                sx={{
                  display: "flex",
                  flexDirection: "row", // ícone sempre ao lado
                  alignItems: "center",
                  justifyContent: "space-between",
                  "& .MuiAccordionSummary-content": {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  },
                  "@media (max-width: 640px)": {
                    flexDirection: "row", // mantém ícone ao lado no mobile
                  },
                }}
              >
                <Typography className="font-bold text-sm sm:text-base">
                  Como faço para participar dos editais?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-sm sm:text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  );
}
