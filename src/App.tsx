import './App.css'

const App = () => {
  class pt {
    constructor(x:number, y:number) {
      this.x = x;
      this.y = y;
    }
    return(){
      return this.x +" "+ this.y;
    }
  }
  let vt = new pt(12,21);
  return(
    <div>
      wow {vt.return()}
    </div>
  )
}
  export default App
