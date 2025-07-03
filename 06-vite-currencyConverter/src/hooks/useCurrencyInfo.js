import { useEffect, useState } from "react";

export function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://open.er-api.com/v6/latest/${baseCurrency}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.result === "success") {
          setData(res.rates);
        } else {
          setData({});
        }
      })
      .catch(() => setData({}));
  }, [baseCurrency]);

  return data;
}
