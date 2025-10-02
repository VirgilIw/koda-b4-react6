import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const { author, slug } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch("/data/articles.json")
      .then((res) => res.json())
      .then((data) => {
        const articles = Array.isArray(data) ? data : data.articles || [];
        const found = articles.find(
          (o) => o.author === author && o.slug === slug
        );
        setArticle(found || {});
      });
  }, [author, slug]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-center text-3xl font-bold mb-4">{article.title}</h1>
      {article.thumbnail && (
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full mb-4"
        />
      )}
      <p className="text-gray-600 mb-2">Penulis: {article.author}</p>
      <p className="text-gray-600 mb-4">Tanggal: {article.publishDate}</p>
      <p className="whitespace-pre-line">{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
