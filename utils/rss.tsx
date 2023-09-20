// Importez le module rss-parser
import Parser from 'rss-parser';

// Créez une fonction asynchrone pour récupérer des articles depuis un flux RSS
export  async function fetchArticlesFromRSS(url: string) {
  try {
    const parser = new Parser();
    // Analysez le flux RSS
    const feed = await parser.parseURL(url);

    // Extrayez les articles du flux
    const articles = feed.items.map((item) => ({
      title: item.title || '',
      link: item.link || '',
      description: item.content || item.description || '',
      pubDate: item.pubDate || '',
    }));

    return articles;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles depuis le flux RSS:', error);
    return [];
  }
}
