import React, {Component} from "react"
import toxico from "./assets/DzToxico.jpg"
import Fati from "./assets/Fati.jpg"
import hacker from "./assets/chut.webp"
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
  
  componentDidUpdate() {
    if (this.state.miliSec == 500) {
      alert('OHHH what ARE YOU DOING!')
      alert('you really wasting your time for a toxico men!!!!')
      alert(`                            Okey look just wait 1 min dude \n 
                                      you won't regret it ;) `      )
    }
    if (this.state.miliSec == 6000) {
      this.state.imgSrc =Fati
      this.state.profession ="Stylist for stars and Model"
      this.state.fullName ="Fati la blonde"
      this.state.bio = `her nickname is her "El Zela", she is known for her beauty her class but also her kindness and tenderness this woman is simply perfect.
      all women are jealous of her for her beauty and also because she attracts all men to her.`
  }
  if (this.state.miliSec == 6200) {
    alert(`you see i told dude, now wait until "1min 30s" you will see her naked  `)
  }
  if (this.state.miliSec == 9000) {
    this.state.imgSrc = hacker
    this.state.profession ="perv data thief"
    this.state.fullName ="H4(x3/2"
    this.state.bio = `basically, friend, you were literally fooled and in the end you won the title of pervert, it's cool, isn't it? XDDDDDDDDDD byebye`
}
if (this.state.miliSec == 9200) {
  alert('poor pervet guy, i stole all your Data XDD')
  }
}

  componentWillUnmount () {
    if (this.state.miliSec == 10000) {
      console.log("finish")
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
                {("00" + ((this.state.miliSec) % 100)).slice(-2)}
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


