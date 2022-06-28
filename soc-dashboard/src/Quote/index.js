import React from "react";

export default function Quotes() {
  const quotes = [
  `"The beautiful thing about learning is nobody can take it away from you." - B.B. King`,
  `"If you don't like something, change it. If you can't change it, change your attitude." - Maya Angelou`,
  `"Learning never exhausts the mind." ― Leonardo da Vinci`,
  `"Wisdom… comes not from age, but from education and learning." ― Anton Chekhov`,
  `On Love of Learning: "I have no special talent. I am only passionately curious." - Einstein`,
  ` "The more I read, the more I acquire, the more certain I am that I know nothing." ― Voltaire`,
  `"For the things we have to learn before we can do them, we learn by doing them." ― Aristotle`,
  `"We learn from failure, not from success!" - Bram Stoker`,
  `"A man who asks is a fool for five minutes. A man who never asks is a fool for life." - Chinese Proverb`,
  `"You don't learn to walk by following rules. You learn by doing, and by falling over." - Richard Branson`,
  `"Learn continually- there's always one more thing to learn!" - Steve Jobs`,
];
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  return <p>{randomQuotes}</p>;
}
