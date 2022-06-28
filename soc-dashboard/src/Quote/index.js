import React from "react";

export default function Quotes({ quote }) {
  return (
    <p className="quote">
      {quote.quote}
      <span id="author-text">{quote.author}</span>
    </p>
  );
}
