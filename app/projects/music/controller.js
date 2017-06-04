import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/img/sin.png',
      title: 'Sin EP - Talia Stewart',
      description: 'Talia Stewart is a singer/songwriter whose jazz-influenced vocals bring a distinctive style to her alternative pop sound.',
      tools: 'Drums | Producer | Mixing Engineer',
      link: 'https://open.spotify.com/album/6RldaeCfTWOd1eqxIF0dOR',
    },
    {
      src: '/img/chl.png',
      title: 'Cherry Hill Lane Demo',
      description: 'Southern Rock and Roll band with a sound influenced heavily by Audioslave, Lynyrd Skynyrd, and Stone Temple Pilots',
      tools: 'Drums | Producer | Mixing Engineer',
      link: 'https://soundcloud.com/cherryhilllane/sets/cherry-hill-lane-demo',
    },
    {
      src: '/img/take-it-slow.png',
      title: 'Take It Slow',
      description: 'A high-energy funk-rock song I made my first semester of college with the help of my fellow students from Belmont University.',
      tools: 'Writer | Vocals | Drums | Rhythm Guitar | Producer | Mixing & Mastering Engineer',
      link: 'https://open.spotify.com/album/7MRZa1LNivJMJIqStsGhnq',
    },
    {
      src: '/img/the-final-song.png',
      title: 'The Final Song',
      description: 'Contrary to the title, this was my first public release of original work. This opened my eyes to the world of producing and engineering music, as well as the joys of learning new instruments outside of drums and guitar.',
      tools: 'Writer | Vocals | Drums | Guitar | Bass | Producer | Mixing Engineer',
      link: 'https://open.spotify.com/album/0KOVQsc8pVDFPnb3VHlwjp',
    },
  ]
});
