import React from "react";
import * as Styled from "./AdvancedChart.style";

interface AdvancedChartProps {
  data: string;
}

const AdvancedChart: React.FC<AdvancedChartProps> = ({ data }) => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInitialized = React.useRef(false);

  React.useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = data;

      container.current.appendChild(script);
    }
  }, [data]);

  return <Styled.Container ref={container} />;
};

export default React.memo(AdvancedChart);
