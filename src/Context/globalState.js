import React,{useState } from 'react'
import { ArticleContext } from './context';


const ArticleProvider = ({ children}) => {
    

    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(1);
    const happyBirthday = () => setAge(age + 1);
    return (
      <ArticleContext.Provider value={{ name, age, happyBirthday }}>
        {children}
      </ArticleContext.Provider>
    );
  };

  export default ArticleProvider