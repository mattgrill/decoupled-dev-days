import React from 'react';

const speakerData = [
  {
    name: 'Stephen Fluin',
    photo: 'http://via.placeholder.com/150x150',
  },
  {
    name: 'Sally Young',
    photo: 'http://via.placeholder.com/150x150',
  },
  {
    name: 'Sebastian Siemssen',
    photo: 'http://www.zensations.at/sites/www.zensations.at/files/styles/user/public/pictures/picture-53-1457347824.jpg?itok=08syPKCc',
  },
  {
    name: 'Ed Faulkner',
    photo: 'https://s3.amazonaws.com/static.eaf4.com/headshot-square-2016-11-02+14.53.17.png',
  },
  {
    name: 'Daniel Wehner',
    photo: 'http://chapterthree.com/sites/default/files/pictures/picture-648-1445464786.png',
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
