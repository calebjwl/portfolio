import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    // {
    //   src: '/img/bella-divine.png',
    //   title: 'Bella Divine Formal & Bridal',
    //   description: 'Bella Divine is a formal bridal and gown shoppe that had all the working parts of a successful business, except for one key element: a website. With my brother and I working as a development duo, we created a website that is intiutive, clean, and simple enough to demonstrate the beauty of the products Bella Divine has to offer.',
    //   tools: 'HTML, CSS',
    //   link: 'http://belladivine.com'
    // },
    // {
    //   src: '/img/nashvegas-skin.png',
    //   title: 'NashVegas Skin',
    //   description: 'PracTip is a social application that allows musicians around the world to connect with one another via challenge exercises and community forums.  Users can create their own challenges, post videos of themselves practicing challenge exercises, and post comments and critique on other users’ video submissions.',
    //   tools: 'HTML, CSS',
    //   link: 'http://www.nashvegasskin.com/'
    // },
    {
      src: '/img/practip.png',
      gif: '/img/practip-demo.gif',
      title: 'PracTip',
      description: 'PracTip is a social application that allows musicians around the world to connect with one another via challenge exercises and community forums.  Users can create their own challenges, post videos of themselves practicing challenge exercises, and post comments and critique on other users’ video submissions.',
      tools: 'Ember | Adonis | HTML5 | CSS3',
      link: 'http://practip.surge.sh'
    },
    {
      src: '/img/wave-rider.png',
      gif: '/img/wave-rider-demo.gif',
      title: 'Wave Rider',
      description: 'Wave Rider Surf Blog serves as a mockup design template for a business website and blog, featuring a banner, article body section, and interactive footer. I wanted to create a simple and clean layout that had a consistent color palette, highlighting the sunset tones of the banner image.',
      tools: 'HTML5 | CSS',
      link: 'http://waverider.surge.sh',
    },
    {
      src: '/img/18-puppies',
      title: 'Adopt a Puppy!',
      description: 'I built this website to practice making a CRUD (Create, Read, Update, Destroy) app; I used Vue.js for functionality and Bulma as a styling framework. The app allows users to add new puppies to the existing list for other users to adopt, where they can access the info about each puppy provided by the original poster.',
      tools: 'Vue, Bulma, HTML5, CSS3'
    },
    {
      src: '/img/15-contact-manager.png',
      title: 'MyContacts',
      description: 'MyContacts is a CRUD (Create, Read, Update, Destroy) app I built using vanilla Javascript. Users can Create new contacts, Read the contacts as displayed in their contact list, as well as Update and Destroy their created contacts. Try it yourself!',
      tools: 'HTML5, CSS3, Javascript',
    },
  ]
});
