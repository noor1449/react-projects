import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Failed to fetch currency info:", err));
    }, [currency]);

    return data;
}

export default useCurrencyinfo;