import { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = () => {
    const [language,setLanguage] = useState("en");
}