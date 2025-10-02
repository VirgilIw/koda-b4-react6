import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Fazztrack from "../components/Fazztrack";
import { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const fetchJson = async () => {
    const res = await fetch("/data/articles.json");
    const data = await res.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div>
      <Fazztrack />
      <img
        src="src/assets/coding.png"
        alt="coding"
        className="w-full h-20 md:h-40 object-cover"
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {articles.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 h-64 overflow-hidden rounded-2xl">
                  <img
                    src={articles[0].thumbnail}
                    alt={articles[0].author}
                    className="w-full h-full object-center"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {articles[0].title}
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {articles[0].description}
                </p>

                <div className="flex flex-col gap-2 text-sm text-gray-500 pt-4">
                  <div>
                    <span>{articles[0].excerpt}</span>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 overflow-hidden rounded-full">
                        <img
                          src={articles[0].thumbnail}
                          alt={articles[0].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium">{articles[0].author}</span>
                      <span>•</span>
                      <span>Feb 11</span>
                      <span>•</span>
                      <span>4 min read</span>
                      <span>{articles.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Card
              onClick={() =>
                navigate(`/article/${article.author}/${article.slug}`)
              }
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.thumbnail}
              imageAlt={article.title}
              name={article.name}
              author={article.author}
              dateTime={article.dateTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
