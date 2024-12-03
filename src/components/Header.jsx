import '../styles/header.css';

export function Header() {
  return (
    <header className="content-wrapper">
      <div className="header-title">
        <img
          src="cards.svg"
          alt=""
          style={{ height: '1em', verticalAlign: '-0.25em' }}
        />
        <b>Memory card</b>
      </div>
    </header>
  );
}
