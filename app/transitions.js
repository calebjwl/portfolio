export default function(){
  this.transition(
    // this.fromRoute('home'),
    this.toRoute('about'),
    this.use('fade'),
    this.reverse('toRight')
  )
  this.transition(
    // this.fromRoute('home'),
    this.toRoute('home'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
