import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(true);

  return (
    <LanguageContext.Provider value={{ english, setEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
