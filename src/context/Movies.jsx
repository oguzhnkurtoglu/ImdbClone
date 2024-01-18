import  { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// Bir context oluşturuluyor
export const ApiDataContext = createContext();

// ApiDataProvider bileşeni, context içine veriyi atar
const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // API'den veri çekme işlemi
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US&sort_by=popularity.desc&page=2&per_page=20' ,{
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc'            
      }});
        setApiData(response.data);
      } catch (error) {
        console.error('API verisi alınamadı.', error);
      }
    };

    fetchData(); // useEffect içinde API'den veri çekme işlemini başlat

  }, []); // Boş dependency array, sadece bir kere çalışmasını sağlar

  return (
    <ApiDataContext.Provider value={apiData}>
      {children}
    </ApiDataContext.Provider>
  )


}
export { ApiDataProvider };
