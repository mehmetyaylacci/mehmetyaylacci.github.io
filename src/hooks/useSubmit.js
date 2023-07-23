import { useState } from "react";
import axios from 'axios';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This costum hook will be used to send me Telegram messages.
 */
const useSubmit = () => {
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    try {
      await axios.post('https://5h9rrzhn98.execute-api.eu-central-1.amazonaws.com/default/portfolioMessage', { ...data }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
          setResponse({
            type: 'success',
            message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
          })
        })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    }
  };

  return { submit };
}

export default useSubmit;
