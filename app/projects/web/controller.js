import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/img/bella-divine.png',
      title: 'Bella Divine Formal & Bridal',
      description: 'A formal dress and gown boutique based in Huntsville, Alabama that needed an online presence with style. I worked closely with Bella Divine\'s management team to create a user-friendly website that encompasses their image and story.',
      tools: 'Ember | HTML | CSS | Photoshop',
      link: 'http://belladivinedress.com',
      github: 'https://github.com/calebjwl/belladivine',
    },
    {
      src: '/img/tnt.png',
      title: 'Tennessee Network Technologies',
      description: 'I was hired to redesign the outdated website and logo for TNT. The company wanted a modern, sleek design with a more marketable visual representation of their company. This particular project helped me grow further in logo design, branding, and content development.',
      tools: 'Ember | HTML | CSS | Photoshop',
      link: 'http://tnnettech.com',
      github: 'https://github.com/calebjwl/tnt-site',
    },
    {
      src: '/img/practip.png',
      title: 'PracTip',
      description: 'PracTip is an application I built with a partner in three weeks for our final project at the Iron Yard bootcamp. In the app, musicians can create an account, create forums and video posts, and challenge other users to complete their challenges and give feedback on posted videos. The app promotes a community of musicians helping one another get better at their instruments.',
      tools: 'Ember | Adonis | HTML | CSS',
      link: 'http://practip.surge.sh',
      github: 'https://github.com/practip'
    },
    {
      src: '/img/drumkit.png',
      title: 'JS Drum Machine',
      description: 'Use your keyboard to play my personalized drum machine, complete with 808 drum sounds and custom backing tracks! I built this without any frameworks in an effort to better solidify my vanilla Javascript fluency with Wes Bos\' Javascript 30 series.',
      tools: 'Javascript | HTML | CSS',
      link: 'http://calebsdrumkit.surge.sh/',
      github: 'https://github.com/calebjwl/01---JavaScript-Drum-Kit'
    },
    // {
    //   src: '/img/spotify-searcher.png',
    //   title: 'Spotify Searcher',
    //   description: 'Spotify Searcher is the first app I built that is able to load results from a database (Spotify API) based on what a user inputs in the search bar. I also had some fun experimenting with Bulma as a styling framework, as well as the Model-View-Controller functionality of Vue.js.',
    //   tools: 'Vue | Bulma | HTML | CSS',
    //   link: 'http://spotify-searcher.surge.sh/',
    //   github: 'https://github.com/calebjwl/16-spotify-collection'
    // },
    {
      src: '/img/my-contacts.png',
      title: 'MyContacts',
      description: 'MyContacts is a CRUD (Create, Read, Update, Destroy) app I built using vanilla Javascript. Users can Create new contacts, Read the contacts as displayed in their contact list, as well as Update and Destroy their created contacts. Try it yourself!',
      tools: 'Javascript | HTML | CSS',
      link: 'http://my-contacts.surge.sh/',
      github: 'https://github.com/calebjwl/15-contact-manager'
    },
    {
      src: '/img/wave-rider.png',
      title: 'Wave Rider',
      description: 'Wave Rider Surf Blog serves as a mockup design template for a business website and blog, featuring a banner, article body section, and interactive footer. I wanted to create a simple and clean layout that had a consistent color palette, highlighting the sunset tones of the banner image.',
      tools: 'HTML | CSS',
      link: 'http://waverider.surge.sh',
      github: 'https://github.com/calebjwl/06-surf-and-paddle'
    },
  ]
});
