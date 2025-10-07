"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "./Calendario.css";

function Calendario() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const calendarId = "sousaarimateia4567@gmail.com";
  const apiKey = "AIzaSyB2W9k8EyV2nCiXahS66qdEKIXROy07ce8";

  // Função para buscar eventos do Google Calendar
  const fetchEvents = async (selectedDate) => {
    try {
      const timeMin = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        0,
        0,
        0
      ).toISOString();

      const timeMax = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        23,
        59,
        59
      ).toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;

      const res = await axios.get(url, {
        params: {
          key: apiKey,
          timeMin,
          timeMax,
          singleEvents: true,
          orderBy: "startTime",
        },
      });

      setEvents(res.data.items || []);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    }
  };

  useEffect(() => {
    fetchEvents(date);
  }, [date]);

  return (
    <div className="flex flex-col w-full p-10 font-[Montserrat] bg-gray-50 min-h-screen">
      {/* Título */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#10783b] border-b-4 border-[#10783b] inline-block pb-1">
          Calendário
        </h1>
        <div className="border-t-1 pt-10 border-gray-400 w-full"></div>
      </div>

  
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        {/* Calendário */}
        <div className="w-full lg:w-1/2 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex justify-center items-center">
          <Calendar
            onChange={setDate}
            value={date}
            locale="pt-BR"
            calendarType="gregory"
            formatShortWeekday={(locale, date) =>
              ["D", "S", "T", "Q", "Q", "S", "S"][date.getDay()]
            }
          />
        </div>

        {/* Eventos */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-xl font-bold text-[#10783b] mb-6 uppercase">
            EVENTOS PARA{" "}
            {date.toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
            })}
          </h2>

          {events.length === 0 ? (
            <p className="text-gray-500">Nenhum evento encontrado.</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="flex items-start gap-4 bg-gray-50 rounded-lg p-4 shadow-sm"
                >
                  <div>
                    <p className="font-semibold">
                      {event.summary || "Evento sem título"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {event.start.dateTime
                        ? new Date(event.start.dateTime).toLocaleTimeString(
                            "pt-BR",
                            { hour: "2-digit", minute: "2-digit" }
                          )
                        : "Dia inteiro"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendario;
