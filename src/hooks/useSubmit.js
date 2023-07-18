import { useState } from "react";
import axios from 'axios';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This costum hook will be used to send me Telegram messages.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    console.log(data)
    try {
      await axios.post('https://5h9rrzhn98.execute-api.eu-central-1.amazonaws.com/default/portfolioMessage', { ...data }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
          // handle success
        })
        .catch(error => {
          // handle error
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        });
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
