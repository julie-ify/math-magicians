import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [state, setState] = useState({
    quote: [],
  });

  const getQuote = () => {
    const fetchData = async () => {
      const response = await fetch(
        'https://random-math-quote-api.herokuapp.com/',
      );
      const data = await response.json();
      setState({
        ...state,
        quote: data,
      });
    };
    fetchData();
  };

  useEffect(() => {
    getQuote();
  }, []);

  const { author, quote } = state.quote;

  return (
    <div className="quoteWrap">
      <div className="newQuote">{quote ? `${quote} - ${author}` : 'loading...'}</div>
      <button type="button" onClick={() => getQuote()} className="getQuote">
        New QUote
      </button>
    </div>
  );
};

export default Quote;
