import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/img/bella-divine.png',
      title: 'Bella Divine Formal & Bridal',
      description: 'Bella Divine is a formal dress and gown boutique that had all the working parts of a successful business, except for their own official website. I worked closely with their management team to create a website that would encompass their image while communicating their core beliefs and company philosophy.',
      tools: 'Ember | HTML | CSS',
      link: 'http://belladivinedress.com',
    },
    // {
    //   src: '/img/nashvegas-skin.png',
    //   title: 'NashVegas Skin',
    //   description: 'PracTip is a social application that allows musicians around the world to connect with one another via challenge exercises and community forums.  Users can create their own challenges, post videos of themselves practicing challenge exercises, and post comments and critique on other users’ video submissions.',
    //   tools: 'HTML, CSS',
    //   link: 'http://www.nashvegasskin.com/'
    // },
    {
      src: '/img/practip.png',
      title: 'PracTip',
      description: 'My final project at the Iron Yard - a social application that allows musicians around the world to connect with one another via challenge exercises and community forums.  Users can create their own challenges, post videos of themselves practicing challenge exercises, and post comments and critique on other users’ video submissions.',
      tools: 'Ember | Adonis | HTML | CSS',
      link: 'http://practip.surge.sh',
      github: 'https://github.com/practip'
    },
    {
      src: '/img/wave-rider.png',
      title: 'Wave Rider',
      description: 'Wave Rider Surf Blog serves as a mockup design template for a business website and blog, featuring a banner, article body section, and interactive footer. I wanted to create a simple and clean layout that had a consistent color palette, highlighting the sunset tones of the banner image.',
      tools: 'HTML | CSS',
      link: 'http://waverider.surge.sh',
      github: 'https://github.com/calebjwl/06-surf-and-paddle'
    },
    {
      src: '/img/spotify-searcher.png',
      title: 'Spotify Searcher',
      description: 'Spotify Searcher is the first app I built that is able to load results from a database (Spotify API) based on what a user inputs in the search bar. I also had some fun experimenting with Bulma as a styling framework, as well as the Model-View-Controller functionality of Vue.js.',
      tools: 'Vue | Bulma | HTML | CSS',
      link: 'http://spotify-searcher.surge.sh/',
      github: 'https://github.com/calebjwl/16-spotify-collection'
    },
    {
      src: '/img/my-contacts.png',
      title: 'MyContacts',
      description: 'MyContacts is a CRUD (Create, Read, Update, Destroy) app I built using vanilla Javascript. Users can Create new contacts, Read the contacts as displayed in their contact list, as well as Update and Destroy their created contacts. Try it yourself!',
      tools: 'HTML | CSS | Javascript',
      link: 'http://my-contacts.surge.sh/',
      github: 'https://github.com/calebjwl/15-contact-manager'
    },
  ]
});
