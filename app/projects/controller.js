import Ember from 'ember';

const ember = '/img/ember.png';
const vue = '/img/vue.png';
const html = '/img/html.png';
const css = '/img/css.png';
const javascript = '/img/javascript.png';
const adonis = '/img/adonis.png';

export default Ember.Controller.extend({
  items: [
    {
      src: '/img/practip.png',
      w: 1280,
      h: 800,
      title: 'PracTip',
      description: 'PracTip is a social application that allows musicians around the world to connect with one another via challenge exercises and community forums.  Users can create their own challenges, post videos of themselves practicing challenge exercises, and leave comments and critique on other users’ video submissions.',
      roles: 'Creator, User Experience Designer, User Interface Designer, Backend Engineer, Frontend Engineer',
      tools: 'EmberJS',
    },
    {
      src: '/img/06-surf-paddle.png',
      w: 1280,
      h: 800,
      title: 'Surf & Paddle',
      description: 'Surf & Paddle serves as a design template for a business website and blog, featuring a banner, article body section, and interactive footer.',
      roles: 'Design, Frontend Engineer',
      tools: '',
    },
    {
      src: '/img/07-tshirts.png',
      w: 1280,
      h: 800,
      title: 'T-Shirts',
      description: '',
      roles: '',
      tools: '',
    },
  ]
});
