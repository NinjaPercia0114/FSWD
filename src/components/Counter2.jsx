// import React from 'react';
// import Counter from './Counter';

// class Counter2 extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             no1: '',
//             no2: '',
//             msg: '',
//             temperr: {}
//         };
//     }

//     doValidation(){
//         const { no1, no2 } = this.state;
//         var temperr = {}
//         var isvalid = true
//         if(!no1){
//             temperr.no1 = "Please enter No1";
//             isvalid = false;   
//         }
//         if(isNaN(no1)){
//             temperr.no1 = "Please enter valid No1";
//             isvalid = false;
//         }

//         if(!no2){
//             temperr.no2 = "Please enter No2";
//             isvalid = false;   
//         }   
//         this.setState({msg: temperr});
//         return isvalid;

//     }

//     doSum() {

//         if (!this.doValidation()) {
//             return;
//         }
//         else{
//             var c = this.state.no1 + this.state.no2;
//             this.setState({msg: c});
//         }
//     }

//     render(){
//         return(
//             <>
//             <h1>Sum of Two Element</h1>
//             No1 <input type="text" onChange={(e) => {this.setState({no1: e.target.value})}}/>
//             {this.state.temperr.no1}
//             <br />
//             No2 <input type="text" onChange={(e) => {this.setState({no2: e.target.value})}}/>
//             <br />
//             {this.state.temperr.no1}
//             <input type="button" value="Sum" onClick={this.doSum.bind(this)} />

//             </>
//         )
//     }
// }

// export default Counter2;


import React from 'react';
import Counter from './Counter';

class Counter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            no1: '',
            no2: '',
            msg: '',
            temperr: {}
        };
    }

    doValidation() {
        const { no1, no2 } = this.state;
        var temperr = {};
        var isvalid = true;

        if (!no1) {
            temperr.no1 = "Please enter No1";
            isvalid = false;
        } else if (isNaN(no1)) {
            temperr.no1 = "Please enter valid No1";
            isvalid = false;
        }

        if (!no2) {
            temperr.no2 = "Please enter No2";
            isvalid = false;
        } else if (isNaN(no2)) {
            temperr.no2 = "Please enter valid No2";
            isvalid = false;
        }

        this.setState({ temperr });
        return isvalid;
    }

    doSum() {
        if (!this.doValidation()) {
            this.setState({ msg: '' }); // Clear msg if validation fails
            return;
        }

        const c = parseFloat(this.state.no1) + parseFloat(this.state.no2);
        this.setState({
            msg: `Sum is ${c}`,
            temperr: {}  // Clear old errors
        });
    }

    render() {
        return (
            <>
                <h1>Sum of Two Elements</h1>

                No1: <input
                    type="text"
                    onChange={(e) => { this.setState({ no1: e.target.value }) }}
                />
                <br />
                {this.state.temperr.no1 && (
                    <span style={{ color: 'red' }}>{this.state.temperr.no1}</span>
                )}
                <br />

                No2: <input
                    type="text"
                    onChange={(e) => { this.setState({ no2: e.target.value }) }}
                />
                <br />
                {this.state.temperr.no2 && (
                    <span style={{ color: 'red' }}>{this.state.temperr.no2}</span>
                )}
                <br />

                <input
                    type="button"
                    value="Sum"
                    onClick={this.doSum.bind(this)}
                />
                <br /><br />

                {this.state.msg && (
                    <h2>{this.state.msg}</h2>
                )}
            </>
        );
    }
}

export default Counter2;
