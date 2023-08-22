import React, { useState } from 'react';
import data from '../data/data';


const ArticleList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showArticles, setShowArticles] = useState(false);

  const handleButtonClick = (category) => {
    if (selectedCategory === category) {
      // Si la misma categoría ya está seleccionada, oculta los artículos
      setSelectedCategory(null);
      setShowArticles(false);
    } else {
      // Si se selecciona una nueva categoría, muestra los artículos filtrados
      setSelectedCategory(category);
      setShowArticles(true);
    }
};
  const filteredArticles = selectedCategory
    ? data.filter((article) => article.category === selectedCategory)
    : data;

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('sobre')}>Sobre mí</button>
        <button onClick={() => handleButtonClick('css')}> Artículos de CSS</button>
        <button onClick={() => setSelectedCategory(null)}>Todos los Artículos</button>
      </div>
      <div>
        {showArticles &&(filteredArticles.map((article) => (
          <div className='post' key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.date}</p>
            <p>{article.ReadingTime}</p>
          </div>
        ))
        )}
      </div>
    </div>
  );
};

export default ArticleList;
