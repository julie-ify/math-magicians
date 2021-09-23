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

  return (
    <div className="quoteWrap">
      <div className="newQuote">{state.quote.quote ? `${state.quote.quote} - ${state.quote.author}` : 'loading...'}</div>
      <button type="button" onClick={() => getQuote()} className="getQuote">
        New QUote
      </button>
    </div>
  );
};

export default Quote;
