import React, { Component } from 'react';
import { findByLabelText } from '@testing-library/react';

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
            <div style={styles.container}>

                <span style={styles.output}>Bill: ${bill}</span>
                <span style={styles.output}>Tip: ${tip}</span>
                <span style={styles.output}>Total: ${total}</span>

                <hr style={styles.line} />

                <label for="bill">Bill: </label>
                <input
                    style={styles.input}
                    id="bill"
                    type="text"
                    value={this.state.bill}
                    onChange={(e) => {
                        this.setState({ bill: e.target.value })
                    }}
                ></input>
                <label for="tipPercent">Tip Percent: </label>
                <input
                    style={styles.input}
                    id="tipPercent"
                    type="text"
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

const fontSize = 20;
const padding = 0.33;


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        padding: `${padding}em`,
        fontSize: `${fontSize}px`,
        borderRadius: '8px',
        border: '0px'
    },
    output: {
        fontSize: '24px',
        padding: '0 0 0.5em 0'
    },
    line: {
        width: '100%'
    }
}