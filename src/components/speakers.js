import React from 'react';

const speakerData = [
  {
    name: 'Ed Faulkner',
    role: 'Ember Team',
    photo: 'assets/speakers/ed.jpg',
  },
  {
    name: 'Stephen Fluin',
    role: 'Angular Team',
    photo: 'assets/speakers/stephen.jpg',
  },
  {
    name: 'Sally Young',
    role: 'Contenta Team',
    photo: 'assets/speakers/sally.jpg',
  },
  {
    name: 'Ted Bowman',
    role: 'Reservoir Team',
    photo: 'assets/speakers/ted.jpg',
  },
];

const Speakers = () => (
  <section className="speakers">
    <h2>Featured Speakers</h2>
    {speakerData.map(speaker => (
      <section key={speaker.name} className="speaker">
        <img src={speaker.photo} alt={speaker.name} />
        <p>{speaker.name}</p>
        <p>{speaker.role}</p>
      </section>
    ))}
  </section>
);

export default Speakers;