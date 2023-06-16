import { useState, useEffect } from "react";

export const useDateTime = () => {
  const currentDate = new Date();
  const formaterDate = new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" });
  const formaterTime = new Intl.DateTimeFormat("pt-BR", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  const [dateTime, setDateTime] = useState(
    `${formaterDate.format(currentDate)} | Horário atual: ${formaterTime.format(
      currentDate
    )}`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const date = formaterDate.format(currentDate);
      const time = formaterTime.format(currentDate);

      setDateTime(`${date} | Horário atual: ${time}`);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return dateTime;
};
