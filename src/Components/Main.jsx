import  { useState, useEffect } from 'react';
import News from './News';
import Header from './Header';
import links from '../randomArray';


function Main() {
  const [articles, setArticles] = useState([]);

  const handleChange = (e) => {
    switch (e.target.value) {
      case "business":
        fetchNews("https://newsapi.org/v2/top-headlines?country=us&category=business");
        break;
      case "world":
        fetchNews('https://newsapi.org/v2/everything?domains=wsj.com');
        break;
      case "tech":
        fetchNews('https://newsapi.org/v2/top-headlines?sources=techcrunch');
        break;
      case "tesla":
        fetchNews('https://newsapi.org/v2/everything?q=tesla&from=2024-07-09&sortBy=publishedAt');
        break;
      default:
        fetchNews('https://newsapi.org/v2/top-headlines?country=us&category=business');
        break;
    }
  }

  useEffect(() => {
    fetchNews('https://newsapi.org/v2/everything?domains=wsj.com');
  }, []);

  const fetchNews = async (link) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      let response = await fetch(`${link}&apiKey=${apiKey}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      let data = await response.json();
      if (data.articles) {
        setArticles(data.articles);
      } else {
        setArticles([]); // Set an empty array if articles are not present
      }
    } catch (error) {
      console.error(`Fetch error: ${error}`);
      setArticles([]); // Set an empty array on error
    }
  };
  

  const refresh = () => {
    const randomNumber = Math.floor(Math.random() * links.length);
    const randomLink = links[randomNumber];
    fetchNews(randomLink);
  }

  return (
    <div className="main-container">
      <Header handleChange={handleChange} />
      <div id='news-container'>
        {articles.map((article, index) => (
          <News
            key={index}
            author={article.author}
            description={article.description}
            title={article.title}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
      <article className='button-holder'>
        <button id='refresh' onClick={refresh}>Refresh</button>
      </article>
    </div>
  );
}

export default Main;
