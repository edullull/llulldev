import data from './data/data';
import perfil1 from './component/Perfil.png';
import { useState } from 'react';
import './App.css';
import ArticleCss from './component/ArticleCss';
import ArticleList from './component/ArticleList';
import Footer from './component/footer';




function App() {
  const allCategories = [...new Set(data.map((article) => article.category))];

  const [categories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  

  return (
      <div>
        <img src={perfil1} alt="my photo" />
        <h2>Llull Developer Front-End.</h2>

              
            <ArticleList articles={articles} />
            <Footer/>
      </div>
  );
}

export default App;
