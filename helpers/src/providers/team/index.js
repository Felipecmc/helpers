import { createContext } from "react";
export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const team =  [
    {
      name: "André Silveira",
      title: "Product Owner",
      img: "https://i.imgur.com/EPQV2iv.jpg",
      LinkedIn: "https://www.linkedin.com/in/andrrms/",
      GitHub: "https://github.com/andrrms",
    },
    {
      name: "Felipe Cavalcante",
      title: "Quality assurance",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQE1IGsa-RdeMw/profile-displayphoto-shrink_400_400/0/1644366678568?e=1668643200&v=beta&t=TgE3r2I88tnvk6y_WIRCZU6cXZetAcT28mUYaoGiVsw",
      LinkedIn: "https://www.linkedin.com/in/felipe-cavalcante-42971b203/",
      GitHub: "https://github.com/Felipecmc",
    },
    {
      name: "Fábio Casanova",
      title: "Tech Lead",
      img: "https://i.imgur.com/ZCKn6l7.jpg",
      LinkedIn: "https://www.linkedin.com/in/f%C3%A1bio-casanova-baa818237/",
      GitHub: "https://github.com/fabiojcp",
    },
    {
      name: "Felipe Calori",
      title: "Scrum Master",
      img: "https://i.imgur.com/tvz8kjO.jpg",
      LinkedIn: "https://www.linkedin.com/in/felipe-calori-81a817214/",
      GitHub: "https://github.com/felipecalori",
    },
  ];

  return (
    <TeamContext.Provider value={{ team }}>{children}</TeamContext.Provider>
  );
};
