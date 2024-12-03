import { useEffect, useState } from 'react';
import '../styles/card.css';

const items = [
  {
    id: '01',
    name: 'Pikachu',
    imgURL: 'cards.svg',
  },
  {
    id: '02',
    name: 'Bulbasaur',
    imgURL: 'cards.svg',
  },
  {
    id: '03',
    name: 'Charmander',
    imgURL: 'cards.svg',
  },
  {
    id: '04',
    name: 'Squitle',
    imgURL: 'cards.svg',
  },
  {
    id: '05',
    name: 'Togepi',
    imgURL: 'cards.svg',
  },
  {
    id: '06',
    name: 'Emolga',
    imgURL: 'cards.svg',
  },
  {
    id: '07',
    name: 'Sandshrew',
    imgURL: 'cards.svg',
  },
  {
    id: '08',
    name: 'Snivy',
    imgURL: 'cards.svg',
  },
  {
    id: '09',
    name: 'Jigglypuff',
    imgURL: 'cards.svg',
  },
  {
    id: '10',
    name: 'Cubone',
    imgURL: 'cards.svg',
  },
  {
    id: '11',
    name: 'Cyndaquil',
    imgURL: 'cards.svg',
  },
  {
    id: '12',
    name: 'Eevee',
    imgURL: 'cards.svg',
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
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [isFetchedImage, setIsFetchedImage] = useState(false);

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
        const urls = [
          'https://media2.giphy.com/media/o3ZZFsfNFzMA0jUxve/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media2.giphy.com/media/wxz1jH90w7alW/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media2.giphy.com/media/PolhGubb9tpbP2Y3mg/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media0.giphy.com/media/yeVsOxv8w1JrPeGbQ3/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media1.giphy.com/media/N7UQCEtGgRMRi/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media2.giphy.com/media/oxVmNOyumnOKMFOyAu/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media1.giphy.com/media/6YdUXFezUIlaYRHsYk/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media3.giphy.com/media/tDJfaLVF0gHV90lxZj/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media2.giphy.com/media/8a0pNHvZ9Wij48VWA1/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media1.giphy.com/media/UAVLJelfV2lTKEcbg8/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media4.giphy.com/media/JUEYUdlHLNxF4NMKyR/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media4.giphy.com/media/WRMUcksbxdWziK0T08/giphy.gif?cid=4a9de34adha38k58vp5rn1p43ols8rk777i1q6jb69qiqw4n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        ];
        items.forEach((item, index) => {
          item.imgURL = urls[index % urls.length];
        });
        console.error(error.message);
      }
      setIsFetchedImage(true);
    })();
  }, []);

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
