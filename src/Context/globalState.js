import React,{useEffect, useState } from 'react'
import { ArticleContext } from './context';


const ArticleProvider = ({ children}) => {
    

    const [isDark, setisDark] = useState(false);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const happyBirthday = (e) => setName(e);


    const toggleSwitch = () => setisDark(previousState => !previousState);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setLoading(true)
      setTimeout(() => {
       
        setRefreshing(false);
      }, 2000);
    }, []);

    useEffect(() => {
      fetch('https://www.lenasoftware.com/api/v1/en/maestro/1')
      .then((res)=>res.json())
      .then((json)=> setArticles(json))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
    }, [refreshing])
    

    return (
      <ArticleContext.Provider value={{ isDark,toggleSwitch, refreshing, articles,loading ,onRefresh}}>
        {children}
      </ArticleContext.Provider>
    );
  };

  export default ArticleProvider