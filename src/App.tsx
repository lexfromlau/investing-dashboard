import * as Styled from "./App.style";
import AdvancedChart from "./components/widgets/AdvancedChart/AdvancedChart";
import TickerTape from "./components/widgets/TickerTape/TickerTape";

function App() {
  const setChartInterval = (interval: string) => `
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

  return (
    <>
      <TickerTape />
      <AdvancedChart data={setChartInterval("D")} />
      <Styled.FlexWrap>
        <div style={{ height: "300px", width: "50%" }}>
          <AdvancedChart data={setChartInterval("W")} />
        </div>
        <div style={{ height: "300px", width: "50%" }}>
          <AdvancedChart data={setChartInterval("M")} />
        </div>
      </Styled.FlexWrap>
    </>
  );
}

export default App;
