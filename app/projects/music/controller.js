import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/img/good-intent.jpg',
      title: 'Laughing at the Funeral',
      description: 'A recently released single from my current band, The Good Intentions.',
      tools: 'Drums | Bass | Guitar | Producer | Mixing Engineer',
      link: 'https://open.spotify.com/track/7mWnxcnp12bW6YT1qTx2A0?si=G2CreS7bQYe57WMzHdKlNw',
    },
    {
      src: '/img/chl.png',
      title: 'Cherry Hill Lane Demo',
      description: 'Southern Rock and Roll band with a sound heavily influenced by Audioslave, Lynyrd Skynyrd, and Stone Temple Pilots.',
      tools: 'Drums | Producer | Mixing Engineer',
      link: 'https://soundcloud.com/cherryhilllane/sets/cherry-hill-lane-demo',
    },
    {
      src: '/img/take-it-slow.png',
      title: 'Take It Slow',
      description: 'A funk-rock song I made my first semester of college with the help of my fellow students from Belmont University.',
      tools: 'Writer | Vocals | Drums | Rhythm Guitar | Producer | Mixing & Mastering Engineer',
      link: 'https://open.spotify.com/album/7MRZa1LNivJMJIqStsGhnq',
    },
    {
      src: '/img/the-final-song.png',
      title: 'The Final Song',
      description: 'My first public release of original music. This project opened my eyes to the world of audio engineering and producing songs.',
      tools: 'Writer | Vocals | Drums | Guitar | Bass | Producer | Mixing Engineer',
      link: 'https://open.spotify.com/album/0KOVQsc8pVDFPnb3VHlwjp',
    },
  ]
});
