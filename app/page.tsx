"use client"

import { useEffect, useState } from 'react';
import { fetchRSSFeed } from '../utils/rss';

export default function ArticleList() {
  const [rssData, setRssData] = useState(null);

  useEffect(() => {
    const rssFeedUrl = 'https://medium.com/feed/tag/freelancing'; // Remplacez par l'URL du flux RSS que vous souhaitez utiliser

    fetchRSSFeed(rssFeedUrl)
      .then(data => {
        // Traitez les données du flux RSS ici
        setRssData(data);
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  console.log(rssData)

  return (
    <div>
      {/* Affichez les articles en utilisant les données du flux RSS (rssData) */}
    </div>
  );
}