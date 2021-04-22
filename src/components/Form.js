import React, { Component } from 'react';
import Topfooter from '../components/Topfooter';
import Footer from '../components/Footer';

/*{One of the key concepts in React Hook Form is to register your uncontrolled component 
    into the hook. This will make its value available for both the form validation and submission.}*/

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            boardgame: '',
            newcondition: '',
            littleworn: '',
            muchworn: ''

        }
    }

    handleBoardgameChange = (event) => {
        this.setState({
            boardgame: event.target.value,
            newcondition: event.target.value,
            littleworn: event.target.value,
            muchworn: event.target.value

        })

    }

    render() {
        return (
            <form>
                <div>
                    <h1 classname="form-h1">Bytesförfrågan</h1>
                    <h2 className="form-h2">Vilket spel vill du byta bort?</h2>
                    <label>Spelets namn</label><br></br>
                    <input
                        type="text"
                        value={this.state.boardgame}
                        onChange={this.handleBoardgameChange}
                        placeholder="Skriv här" />
                </div>
                <div>
                    <h3>Skick på ditt spel</h3>
                    <h3>Slitage</h3>
                    <label>Nyskick</label>
                    <radio>

                    </radio>
                    <input type="radio" name="gameCondition" value={this.state.newcondition} />
                    <label>Lite slitet</label>
                    <input type="radio" name="gameCondition" value="littleworn" />
                    <label>Mycket slitet</label>
                    <input type="radio" name="gameCondition" value="muchworn" />


                </div>
                <>
                    <Topfooter />
                    <Footer />
                </>
            </form>
        )
    }
}

export default Form