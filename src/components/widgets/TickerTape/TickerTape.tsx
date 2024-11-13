import React from "react";

const TickerTape = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInitialized = React.useRef(false);

  React.useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `{
        "symbols": [
        {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
        },
        {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
        },
        {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
        },
        {
            "proName": "NASDAQ:MSFT",
            "title": "Microsoft"
        }
         ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en"
        }`;

      container.current.appendChild(script);
    }
  }, []);

  return <div ref={container} />;
};

export default React.memo(TickerTape);
