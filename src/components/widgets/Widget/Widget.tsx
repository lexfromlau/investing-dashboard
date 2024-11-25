import React from "react";

interface WidgetProps {
  id: string;
  endpoint: string;
  data: string;
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({ id, endpoint, data, className }) => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInitialized = React.useRef(false);

  React.useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    if (container.current) {
      const script = document.createElement("script");
      script.src = `https://s3.tradingview.com/external-embedding/${endpoint}`;
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = data;
      container.current.appendChild(script);
    }
  }, [data, endpoint]);

  return <div ref={container} id={id} className={className} />;
};

export default React.memo(Widget);
