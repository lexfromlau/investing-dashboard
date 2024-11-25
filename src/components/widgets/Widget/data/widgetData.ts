export const tickerTapeData = `{
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

export const setChartDataByInterval = (interval: string) => `
        {
          "autosize": true,
          "symbol": "NASDAQ:MSFT",
          "interval": "${interval}",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "hide_side_toolbar": false,
          "studies": [
            "STD;Average_True_Range",
            "STD;Bollinger_Bands"
          ],
          "support_host": "https://www.tradingview.com"
        }`;

export const tickerTapeEndpoint = `embed-widget-ticker-tape.js`;
export const advancedChartEndpoint = `embed-widget-advanced-chart.js`;
