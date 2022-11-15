import React, {Component} from "react"
import toxico from "./assets/DzToxico.jpg"
import style from "./App.css"
import Chrono from "./StopMatch/Chrono"
import Chrono2 from "./StopMatch/Chrono2/Chrono2"

class App extends Component {
state ={
  imgSrc: toxico,
  profession:"Dz-Astronaut",
  fullName:"Kadour Arebi",
  bio:"He is a person who is known for these many space trips whenever he consumes a certain substance it is always found in space or on the moon. He's very dangerous when he doesn't have that substance next to him, so be careful when you see him!",
  miliSec:0,
  timer:null,
  show:false,
}
  toggle() {
      this.setState({show: !this.state.show})
  }
    componentDidMount () {
    this.setState({timer: setInterval(this.incrementer.bind(this), 10)})
  }

  incrementer () {
    if (this.state.show) {
      this.setState({miliSec: this.state.miliSec + 1}) 
    } else {
      this.setState({miliSec: 0})
    }
  }
  
  
  render() {
    return (
      <>
      <section className="container">
        {this.state.show &&
          <div>
            
            <div className="div01">

                <div className="div1" >
                  <img className="img" src={this.state.imgSrc} width={250} height={200}/>
                </div>

                <div className="div1">
                  <h3>{this.state.profession}</h3>
                </div>

            </div>

            <div className="div002">

              <div className="div02">
                <h2 className="div">His name is: {this.state.fullName}</h2>
                <p className="div2">The bio : {this.state.bio}</p>
              </div>
              
            </div>

        </div>
        }
          <div className="div-button">
            <button onClick={() => this.toggle()} className="button">{this.state.show ? "Reset" : "Reveal And Start couting"}</button>
          
          <span className="Big-span">

            <span className="S-span">
                {("0" + Math.floor((this.state.miliSec / 6000) % 60)).slice(-2)}:
            </span>

            <span className="S-span">
                {("0" + Math.floor((this.state.miliSec / 100) % 60)).slice(-2)}.
            </span>

            <span className="S-span">
                {("00" + ((this.state.miliSec  ) % 100)).slice(-2)}
            </span>

          </span>
          
        </div>
      </section> 


      
        {/* just test this two components : 
        <Chrono/>
        <Chrono2 /> */}
      </>
    )
  }
}
export default App;


