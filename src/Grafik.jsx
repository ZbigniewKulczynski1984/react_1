import React, { Component} from "react";

import "./Grafik.css";
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";

class Grafik extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id:0, name: "śniadanie", time: "07:00"},
                { id:1, name: "obiad", time: "15:00"},
                { id:2, name: "kolacja", time: "19:00"}
            ]
        };
    }
    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id}name={el.name} time={el.time} />;
        });
        return <div className="grafik">
            {events}
            <EditEvent onSave={() => alert("A")}/>
            </div>;
        
    }
}



export default Grafik;