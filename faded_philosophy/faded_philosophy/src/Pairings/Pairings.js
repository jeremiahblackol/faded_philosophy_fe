import React, { Component } from "react";
import "../App/App.css"
import { combinations } from "../data"

class Pairings extends Component{
    constructor() {
        super();
        this.state = {
            tone: {}
        }
    }

    componentDidMount() {
        this.setState({ tone: this.props.tone })
    }

        render() {
           return this.props.tone.map((checkedTone) => {
               let tonePairing = combinations[checkedTone.tone_id]
                return (
                    <section className="pairSection">
                        <section>
                            <img src={tonePairing.philosopher.img_url}></img>
                            <h2>{tonePairing.philosopher.name}</h2>
                            <p>{`"${tonePairing.philosopher.quote}"`}</p>
                        </section>
                        <section>
                            <img src={tonePairing.strain.img_url}></img>
                            <h2>{tonePairing.strain.name}</h2>
                            <h3>{tonePairing.strain.type}</h3>
                            <p>{`"${tonePairing.strain.description}"`}</p>
                        </section>
                        <section>
                            <img src={tonePairing.spirit.img_url}></img>
                            <h2>{tonePairing.spirit.type}</h2>
                            <h3>{tonePairing.spirit.effects}</h3>
                        </section>
                    </section>
                )
            })
        }
}

export default Pairings;