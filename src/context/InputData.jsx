import { useState, createContext } from 'react';

export const InputDataContext = createContext();

// Context'in sağlayıcısını oluştur
const InputData = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <InputDataContext.Provider value={{ input, setInput }}>
      {children}
    </InputDataContext.Provider>
  );
};

export { InputData };