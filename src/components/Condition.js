import React from 'react'

const Condition = ({ condition, missingParts }) => {

    if (condition == "Nyskick") {

        return (
            <div>
                <p className="good">{condition}</p>                
            </div>
        )
    } else if (condition == "Lite slitet") {
        return (
            <div>
                <p className="worn">{condition}</p>
            </div>
        )
    } else if (condition == "Mycket slitet"){
        return (
            <div>
                <p className="bad">{condition}</p>
            </div>
        )
    }

}

export default Condition;