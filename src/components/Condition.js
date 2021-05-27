import React from 'react'
import Checkmark from '../img/green-checkmark.svg'

const Condition = ({ condition, missingParts }) => {

    const MissingParts = () => {
        if (missingParts == true) {
            return (
                <p>Delar saknas</p>
            )
        } else {
            return (
                <p className="tagg-bold">Inga delar saknas <img className="no-missing-check" src={Checkmark} alt="good" /></p>
            )
        }
    }

    if (condition == "Nyskick") {

        return (
            <div>
                <p className="good">{condition}</p>
                <MissingParts />
            </div>
        )
    } else if (condition == "Lite slitet") {
        return (
            <div>
                <p className="worn">{condition}</p>
                <MissingParts />
            </div>
        )
    } else if (condition == "Mycket slitet") {
        return (
            <div>
                <p className="bad">{condition}</p>
                <MissingParts />
            </div>
        )
    } else {
        return (
            <p></p>
        )
    }

}

export default Condition;