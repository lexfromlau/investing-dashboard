import * as Styled from "./App.style";
import {
  advancedChartEndpoint,
  setChartDataByInterval,
  tickerTapeData,
  tickerTapeEndpoint,
} from "./components/widgets/Widget/data/widgetData";
import Widget from "./components/widgets/Widget/Widget";

function App() {
  return (
    <>
      <Widget
        id="ticker-tape"
        data={tickerTapeData}
        endpoint={tickerTapeEndpoint}
      />
      <Styled.DailyChart>
        <Widget
          id="advanced-chart-daily"
          data={setChartDataByInterval("D")}
          endpoint={advancedChartEndpoint}
        />
      </Styled.DailyChart>

      <Styled.FlexWrap>
        <div style={{ height: "300px", width: "50%" }}>
          <Widget
            id="advanced-chart-weekly"
            data={setChartDataByInterval("W")}
            endpoint={advancedChartEndpoint}
          />
        </div>
        <div style={{ height: "300px", width: "50%" }}>
          <Widget
            id="advanced-chart-monthly"
            data={setChartDataByInterval("M")}
            endpoint={advancedChartEndpoint}
          />
        </div>
      </Styled.FlexWrap>
    </>
  );
}

export default App;
