
export default function Card({
  onClick,
  title,
  description,
  image,
  imageAlt,
  author,
  dateTime,
  readTime,
  className = "",
}) {
  const formattedDate = dateTime
    ? new Date(dateTime).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`group bg-white/80 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer ${className}`}
    >
      <div className="w-full h-44 md:h-40 lg:h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-500">
            No image
          </div>
        )}
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm text-slate-600">
              {author ? author.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-slate-800 dark:text-slate-100 text-sm">
                {author || "Unknown"}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {formattedDate || "—"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {readTime && <span className="text-xs">{readTime}</span>}
            <svg
              className="w-4 h-4 text-slate-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9H7V9h4v2z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
