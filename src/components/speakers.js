import React from 'react';

const speakerData = [
  {
    name: 'Stephen Fluin',
    photo: 'http://via.placeholder.com/350x350',
  },
  {
    name: 'Sally Young',
    photo: 'http://via.placeholder.com/350x350',
  },
  {
    name: 'Sebastian Siemssen',
    photo: 'http://via.placeholder.com/350x350',
  },
  {
    name: 'Ed Faulkner',
    photo: 'http://via.placeholder.com/350x350',
  },
];

const Speakers = () => (
  <section className="speakers">
    {speakerData.map(speaker => (
      <section key={speaker.name} className="speaker">
        <p>{speaker.name}</p>
        <img src={speaker.photo} alt={speaker.name} />
      </section>
    ))}
  </section>
);

export default Speakers;
