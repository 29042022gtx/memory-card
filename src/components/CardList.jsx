import { useEffect, useState } from 'react';
import '../styles/card.css';

const items = [
  {
    id: '01',
    name: 'Pikachu',
    imgURL: 'pokemon/pikachu.png',
  },
  {
    id: '02',
    name: 'Bulbasaur',
    imgURL: 'pokemon/bulbasaur.png',
  },
  {
    id: '03',
    name: 'Charmander',
    imgURL: 'pokemon/charmander.png',
  },
  {
    id: '04',
    name: 'Squirtle',
    imgURL: 'pokemon/squirtle.png',
  },
  {
    id: '05',
    name: 'Togepi',
    imgURL: 'pokemon/togepi.png',
  },
  {
    id: '06',
    name: 'Nidoran',
    imgURL: 'pokemon/nidoran.png',
  },
  {
    id: '07',
    name: 'Sandshrew',
    imgURL: 'pokemon/sandshrew.png',
  },
  {
    id: '08',
    name: 'Psyduck',
    imgURL: 'pokemon/psyduck.png',
  },
  {
    id: '09',
    name: 'Jigglypuff',
    imgURL: 'pokemon/jigglypuff.png',
  },
  {
    id: '10',
    name: 'Cubone',
    imgURL: 'pokemon/cubone.png',
  },
  {
    id: '11',
    name: 'Cyndaquil',
    imgURL: 'pokemon/cyndaquil.png',
  },
  {
    id: '12',
    name: 'Eevee',
    imgURL: 'pokemon/eevee.png',
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
          src={imgURL || 'cards.svg'}
          alt=""
          className="card-img"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="card-title">
        <b>{title}</b>
      </div>
    </button>
  );
}

export function CardList() {
  const [shuffledItems, setShuffledItems] = useState(getShuffledItems());
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [iconType, setIconType] = useState('');

  useEffect(() => {
    (async () => {
      try {
        let url =
          'https://api.giphy.com/v1/gifs/search?api_key=RTo128Au74DrmKItBmZSRMfEhrMTMxKF&q=cute+pokemon&rating=g&limit=12';
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        items.forEach((item, index) => {
          item.imgURL = data.data[index].images.original.url;
        });
      } catch (error) {
        console.error(error.message);
      }
      setIconType('gif');
    })();
  }, []);

  return (
    <section className="content-wrapper">
      <div>
        <label
          style={{ userSelect: 'none' }}
          htmlFor="pngIcon"
        >
          PNG
        </label>
        &nbsp;
        <input
          type="checkbox"
          id="pngIcon"
          className="form-check-input"
          onChange={(e) => {
            if (!e.target.checked) {
              setIconType('');
              return;
            }
            setIconType('png');
          }}
        />
      </div>
      <div className="statistics">
        <div>Score: {clickedCardIds.length}</div>
        <div>Highest score: {highestScore}</div>
      </div>
      <div className="card-list">
        {shuffledItems.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.name}
              imgURL={
                iconType == 'png'
                  ? `pokemon/${item.name.toLowerCase()}.png`
                  : item.imgURL
              }
              handleClick={() => {
                document.activeElement.blur();
                setShuffledItems(getShuffledItems());
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
