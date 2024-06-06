import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const index = () => {
  const [hover, setHover] = useState('hidden');
  const [cardWeek, setCardWeek] = useState([
    {
      Title: 'Monday',
      qtdAula: 40,
      Time: '8:00 AM - 5:00 PM',
      Img: 'https://source.unsplash.com/random',
      Category: ['Entretenimento', 'Marketing'],
    },
    {
      Title: 'Tuesday',
      qtdAula: 40,
      Time: '9:00 AM - 6:00 PM',
      Img: 'https://source.unsplash.com/random',
      Category: ['Entretenimento', 'Marketing'],
    },
    {
      Title: 'Wednesday',
      qtdAula: 40,
      Time: '10:00 AM - 7:00 PM',
      Img: 'https://source.unsplash.com/random',
      Category: [
        'Entretenimento',
        'Marketing',
        'Marketing',
        'Marketing',
        'Marketing',
        'Marketing',
        'Marketing',
        'Marketing',
        'Marketing',
        'Marketing',
      ],
    },
    {
      Title: 'Thursday',
      qtdAula: 40,
      Time: '11:00 AM - 8:00 PM',
      Img: 'https://source.unsplash.com/random',
      Category: ['Entretenimento', 'Marketing'],
    },
    {
      Title: 'Friday',
      qtdAula: 40,
      Time: '12:00 PM - 5:00 PM',
      Img: 'https://source.unsplash.com/random',
      Category: ['Entretenimento', 'Marketing'],
    },
  ]);

  const handleMouseEnter = (index) => {
    const updatedCardWeek = [...cardWeek];
    updatedCardWeek[index].showDetails = true;
    setCardWeek(updatedCardWeek);
  };

  const handleMouseLeave = (index) => {
    const updatedCardWeek = [...cardWeek];
    updatedCardWeek[index].showDetails = false;
    setCardWeek(updatedCardWeek);
  };

  return (
    <div
      id="CardContainer"
      className="w-full h-screen flex gap-1 p-10 items-center justify-center"
    >
      {cardWeek.map((card, index) => (
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          id={card.id}
          className="hover:scale-125 cursor-pointer h-96 w-1/5 m-0 hover:m-12 transition-all duration-300"
        >
          <img className="w-full h-full  " src={card.Img} alt="" />
          <div
            className={`absolute top-0 z-10 text-white bg-gradient-to-t from-black to-black/10 w-full h-full p-5 gap-3 flex flex-col items-start transition-all duration-300 justify-end ${
              card.showDetails ? 'flex' : 'hidden'
            }`}
          >
            <div
              className={`w-full items-center justify-start gap-3 pr-5 ${
                card.showDetails ? 'flex' : 'hidden'
              }`}
            >
              <div className="rounded-full bg-neutral-300 p-2 w-auto flex items-center justify-center">
                <FaPlay className="text-xl text-black text-center" />
              </div>
              <p className="text-lg font-bold">{card.Title}</p>
            </div>
            <div
              className={`flex-col items-start justify-center gap-1 ${
                card.showDetails ? 'flex' : 'hidden'
              }`}
            >
              <p className="text-sm">{card.qtdAula}hrs</p>
              <p className="text-sm">{card.Time}</p>
            </div>
            <div
              className={`${card.showDetails ? 'flex' : 'hidden'} flex-wrap`}
            >
              {card.Category.length > 3 ? (
                <>
                  {card.Category.slice(0, 4).map((category, categoryIndex) => (
                    <span className="flex grow basis-7 " key={categoryIndex}>
                      <p className="font-semibold text-base">{category}</p>
                      {categoryIndex < 3 && <span className="mx-2">•</span>}
                    </span>
                  ))}
                  <span className="flex grow basis-7"></span>{' '}
                </>
              ) : (
                card.Category.map((category, categoryIndex) => (
                  <span className="flex grow basis-7 " key={categoryIndex}>
                    <p className="text-semibold">{category}</p>
                    {categoryIndex < card.Category.length - 1 && (
                      <span className="mx-2">•</span>
                    )}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
