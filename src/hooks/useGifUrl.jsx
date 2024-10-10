import { useEffect, useState } from 'react';

const url =
  'https://api.giphy.com/v1/gifs/translate?api_key=vUx19Tz5ty6fixtvbm6FQyWpDiWACsTU&s=VALORANT';

const useGifUrl = () => {
  const [gifUrl, setGifUrl] = useState(null);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('server error');
        }
        return res.json();
      })
      .then((res) => {
        setGifUrl(res.data.images.original.url);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (counter > 0) {
      const key = setInterval(() => {
        setCounter((counter) => counter - 1);
        console.log(counter);
      }, 1000);

      return () => {
        clearInterval(key);
      };
    }
  }, [counter]);

  return { gifUrl, error, counter };
};

export default useGifUrl;
