import { useState } from 'react';
import quotes from './assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

/**
 * Returns a random quote from the quotes.json file.
 *
 * @returns {Quote} A random quote object with `quote` and `author` properties.
 */
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  return `hsl(${Math.floor(Math.random() * 360)}, 60%, 80%)`;
};

const transition = 'all 0.5s';

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote);
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className='background'
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id='quote-box'>
        <div className='quote-text' style={{ color: randomColor, transition }}>
          <h2 id='text'>
            <FaQuoteLeft size='20' style={{ marginRight: '10px' }} />
            {quote.quote + ' '}
            <FaQuoteRight size='20' style={{ marginRight: '10px' }} />
          </h2>
          <h4 id='author'>-- {quote.author}</h4>
        </div>

        <div className='buttons'>
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id='tweet-quote'
            style={{
              backgroundColor: randomColor,
              transition,
              marginRight: '12px',
            }}
          >
            <FaTwitter color='white' />
          </a>
          <button
            id='new-quote'
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
