import TWEEN from 'tween'

export default class EasyTween {
  
  constructor(data) {
    this.tween = new TWEEN.Tween(data)
  }
  
  animate() {
    window.requestAnimationFrame(()=> {this.animate()})
    TWEEN.update()
  }
  
  to(obj,duration = 300) {
    this.tween.to(obj,duration).start()
    this.animate()
  }
}
