"use client"

import { useEffect, useState } from 'react';
import { fetchArticlesFromRSS } from '../utils/rss'; // Assurez-vous que le chemin est correct

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Remplacez cette URL par l'URL du flux RSS que vous souhaitez utiliser
    const rssFeedUrl = 'https://medium.com/feed/tag/freelancing';

    // Récupérez les articles lorsque le composant est monté
    fetchArticlesFromRSS(rssFeedUrl)
      .then((articles) => setArticles(articles))
      .catch((error) => console.error('Erreur:', error));
  }, []);
console.log(articles)
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
            <p>Publié le : {article.pubDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}
