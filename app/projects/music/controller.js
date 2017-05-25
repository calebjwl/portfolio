import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      src: '/img/blueberry-caddy.jpeg',
      title: 'Blueberry Cadillac Cover Art',
      description: 'I had the fortunate opportunity to help my friend and upcoming artist Landon Sears, for a popular single release name Blueberry Cadillac.',
      tools: 'Ember | Adonis | HTML | CSS',
      link: 'http://practip.surge.sh',
      github: 'https://github.com/practip'
    },
    {
      src: '/img/wave-rider.png',
      gif: '/img/wave-rider-demo.gif',
      title: 'Wave Rider',
      description: 'Wave Rider Surf Blog serves as a mockup design template for a business website and blog, featuring a banner, article body section, and interactive footer. I wanted to create a simple and clean layout that had a consistent color palette, highlighting the sunset tones of the banner image.',
      tools: 'HTML | CSS',
      link: 'http://waverider.surge.sh',
      github: 'https://github.com/calebjwl/06-surf-and-paddle'
    },
    {
      src: '/img/spotify-searcher.png',
      gif: '/img/spotify-searcher-demo.gif',
      title: 'Spotify Searcher',
      description: 'Spotify Searcher is the first app I built that is able to load results from a database (Spotify API) based on what a user inputs in the search bar. I also had some fun experimenting with Bulma as a styling framework, as well as the Model-View-Controller functionality of Vue.js.',
      tools: 'Vue | Bulma | HTML | CSS',
      link: 'http://spotify-searcher.surge.sh/',
      github: 'https://github.com/calebjwl/16-spotify-collection'
    },
    {
      src: '/img/my-contacts.png',
      gif: '/img/my-contacts-demo.gif',
      title: 'MyContacts',
      description: 'MyContacts is a CRUD (Create, Read, Update, Destroy) app I built using vanilla Javascript. Users can Create new contacts, Read the contacts as displayed in their contact list, as well as Update and Destroy their created contacts. Try it yourself!',
      tools: 'HTML | CSS | Javascript',
      link: 'http://my-contacts.surge.sh/',
      github: 'https://github.com/calebjwl/15-contact-manager'
    },
  ]
});
