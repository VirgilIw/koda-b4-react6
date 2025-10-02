// pages/SearchPage.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [hasil, setHasil] = useState([]);

  const fetchUrl = async () => {
    const query = searchParams.get("q");
    if (query) {
      const res = await fetch("/data/articles.json");
      const data = await res.json();
      const arr = data.articles || data; // support both { articles: [...] } or [...]
      const found = arr.filter((o) =>
        o.title?.toLowerCase().includes(query.toLowerCase())
      );
      setHasil(found);
    } else {
      setHasil([]);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-2xl font-semibold mb-6">Search results</h2>

      {hasil.length === 0 ? (
        <div className="text-slate-500">No results found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasil.map((item) => (
            <Card
              key={item.id}
              onClick={() =>
                window.location.assign(`/article/${item.author}/${item.slug}`)
              }
              title={item.title}
              description={item.description || item.excerpt}
              image={item.thumbnail}
              imageAlt={item.title}
              author={item.author}
              dateTime={item.publishDate || item.date || item.dateTime}
              readTime={item.readTime}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
