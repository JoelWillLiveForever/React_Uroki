import React from "react"
import Header from "./components/Header"

import Image from "./components/Image"
import car from "./img/orig.webp"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            helpText: "Help text, Pidor!",
            userData: "",
        }

        this.inputClick = this.inputClick.bind(this)
        // this.mouseOver = this.mouseOver.bind(this)
    }

    helpText = "Help text, Pidor!"

    render() {
        return (
            <div>
                <Header title="Шапка сайта" />
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <input placeholder={this.state.helpText}
                    onChange={event => this.setState({userData: event.target.value})}
                    onClick={this.inputClick} onMouseEnter={this.mouseOver} />
                <p>{this.state.helpText === "Help Text, Pidor!" ? "Yes" : "No"}</p>
                <Image image={car} />
                <img src={car} />
            </div>
        )
    }

    inputClick() {
        this.setState({helpText: "Changed!"})
        console.log("Clicked!")
    }
    mouseOver() {console.log("Mouse Over!")}
}

export default App