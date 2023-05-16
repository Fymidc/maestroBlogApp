import React,{useEffect, useState } from 'react'
import { ArticleContext } from './context';


const ArticleProvider = ({ children}) => {
    

    const [name, setName] = useState("John Doe");
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const happyBirthday = (e) => setName(e);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setLoading(true)
      setTimeout(() => {
        setRefreshing(false);
        setLoading(false)
      }, 2000);
    }, [refreshing]);

    useEffect(() => {
      fetch('https://www.lenasoftware.com/api/v1/en/maestro/1')
      .then((res)=>res.json())
      .then((json)=> setArticles(json))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
    }, [])
    

    return (
      <ArticleContext.Provider value={{ refreshing, articles,loading ,onRefresh}}>
        {children}
      </ArticleContext.Provider>
    );
  };

  export default ArticleProvider