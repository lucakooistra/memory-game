import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer footer-one-player">
        <div className="timer">
          <span>Time</span>
          <span>0</span>
        </div>
        <div className="status">
          <span>Moves</span>
          <span>0</span>
        </div>
    </footer>
  );
}
