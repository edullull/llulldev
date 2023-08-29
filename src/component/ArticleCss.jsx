import React, { useEffect, useState } from 'react';
import ArticleList from './ArticleList';
const ArticleCss = ({ articles }) => {
    const [articleCss, setArticleCss] = useState([]);

    useEffect(() => {
        const filteredArticles = articles.filter(article => article.category === 'css');
        setArticleCss(filteredArticles);
    }, [articles]);

    return (
        <div>
            <h2>Aqui van los articulos de CSS</h2>
            <ArticleList articles={articleCss}/>
        </div>
    );
};

export default ArticleCss;
