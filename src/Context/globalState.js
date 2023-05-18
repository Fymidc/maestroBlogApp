import React, { useEffect, useState } from 'react'
import { ArticleContext } from './context';

 const ArticleProvider = ({ children }) => {


  const [isDark, setisDark] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1)
  const [refreshing, setRefreshing,] = React.useState(false);


  const toggleSwitch = () => setisDark(previousState => !previousState);


  const getMore = () => {
    setpage(page + 1)
    console.log(page)
  }

  const getArticles = () => {
   
    fetch(`https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=10`)
      .then((res) => res.json())
      .then((json) => {
        if (page ===1 ) {
          setLoading(false)
          setArticles(json.result)

        } else {
          setLoading(false)
          setArticles([...articles,...json.result])

        }
      }
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }


  //refresh control

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true)
    setTimeout(() => {

      setRefreshing(false);
    }, 2000);
  }, []);



  useEffect(() => {

    getArticles()
  }, [refreshing, page])




  return (
    <ArticleContext.Provider value={{ getMore, isDark, toggleSwitch, refreshing, articles, loading, onRefresh }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider