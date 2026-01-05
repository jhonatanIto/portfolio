import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(true);
  const [currSelect, setCurrSelect] = useState(() => {
    return localStorage.getItem("tabs") || "/";
  });

  return (
    <LanguageContext.Provider
      value={{ english, setEnglish, currSelect, setCurrSelect }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
