export default function(){
  this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
