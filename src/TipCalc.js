import React, { Component } from 'react';

class TipCalc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bill: 36,
            tipPercent: 15
        }

    }

    render() {

        const bill = parseFloat(this.state.bill);
        const tipPercent = parseInt(this.state.tipPercent);
        const tip = (bill * tipPercent) / 100;
        const total = bill + tip;

        return(
            <div>

                <h1>Bill: {bill}</h1>
                <h1>Tip: {tip}</h1>
                <h1>Total: {total}</h1>

                <input type="text"
                value={this.state.bill}
                onChange={(e) => {
                    this.setState({ bill: e.target.value })
                }}
                ></input>
                <input type="text"
                value={this.state.tipPercent}
                onChange={(e) => {
                    this.setState({ tipPercent: e.target.value })
                }}
                ></input>
            </div>
        )
    }
}

export default TipCalc