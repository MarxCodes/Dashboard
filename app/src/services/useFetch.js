import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data,setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await axios.get(baseUrl + url)
        if(response.statusText.includes('ok')){
          const json = await response.data.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading}
}