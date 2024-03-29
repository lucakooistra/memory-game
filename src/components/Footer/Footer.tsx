import "./footer.scss";
import { useEffect, useState } from "react";

type footerProps = {
  counter: number;
};

export function Footer({ counter }: footerProps) {
  const [seconds, setSeconds] = useState(0);
  const isActive = true;

  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
  
    if (isActive) {
      id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isActive]);

  function Timer(time: number) {
    const timerMinutes = Math.floor(time / 60);
    const timerSeconds = time % 60;
    return `${timerMinutes < 10 ? "0" : ""}${timerMinutes}:${
      timerSeconds < 10 ? "0" : ""
    }${timerSeconds}`;
  }

  return (
    <footer className="footer footer-one-player">
      <div className="footer__card footer__timer">
        <span className="footer__card-title">Time</span>
        <span className="footer__card-attribute">{Timer(seconds)}</span>
      </div>
      <div className="footer__card footer__status">
        <span className="footer__card-title">Moves</span>
        <span className="footer__card-attribute">{counter}</span>
      </div>
    </footer>
  );
}
