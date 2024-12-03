import { useEffect, useState } from 'react';
import '../styles/card.css';

const items = [
  {
    id: '01',
    name: 'Pikachu',
  },
  {
    id: '02',
    name: 'Bulbasaur',
  },
  {
    id: '03',
    name: 'Charmander',
  },
  {
    id: '04',
    name: 'Squitle',
  },
  {
    id: '05',
    name: 'Togepi',
  },
  {
    id: '06',
    name: 'Emolga',
  },
  {
    id: '07',
    name: 'Sandshrew',
  },
  {
    id: '08',
    name: 'Snivy',
  },
  {
    id: '09',
    name: 'Jigglypuff',
  },
  {
    id: '10',
    name: 'Cubone',
  },
  {
    id: '11',
    name: 'Cyndaquil',
  },
  {
    id: '12',
    name: 'Eevee',
  },
];

function getShuffledItems() {
  const shuffledIndexs = [];
  for (let i = 0; i < items.length; i += 1) {
    let randomOrder = Math.round(Math.random() * items.length);
    shuffledIndexs.push({
      index: i,
      randomOrder,
    });
  }
  shuffledIndexs.sort((a, b) => {
    return b.randomOrder - a.randomOrder;
  });
  return shuffledIndexs.map((obj) => {
    return items[obj.index];
  });
}

function Card({ title, imgURL, handleClick }) {
  return (
    <button
      className="card"
      onClick={handleClick}
    >
      <div className="img-wrapper">
        <img
          src={imgURL}
          alt=""
          className="card-img"
        />
      </div>
      <div className="card-title">
        <b>{title}</b>
      </div>
    </button>
  );
}

export function CardList() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <section className="content-wrapper">
      <div className="statistics">
        <div>Score: {clickedCardIds.length}</div>
        <div>Highest score: {highestScore}</div>
      </div>
      <div className="card-list">
        {getShuffledItems().map((item) => {
          return (
            <Card
              key={item.id}
              title={item.name}
              imgURL={item.imgURL}
              handleClick={() => {
                document.activeElement.blur();
                if (clickedCardIds.includes(item.id)) {
                  setClickedCardIds([]);
                  return;
                }
                setClickedCardIds([...clickedCardIds, item.id]);
                if (clickedCardIds.length + 1 >= highestScore) {
                  setHighestScore(clickedCardIds.length + 1);
                }
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
