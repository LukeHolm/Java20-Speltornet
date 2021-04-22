import React, { useState, useEffect } from 'react';

const Availablegamescard = () => {
    const [availablegamescard, setAvailablegamescard] = useState([]);
    useEffect(() => {
        fetch("gamesavailable.json").then(response => response.json().then(data => setAvailablegamescard(data)))
    }, [])

   /* let title;

    availablegamescard.map(availablegame => (
        title = availablegame.title
    ))
    if (title === "Pandemic") {

    }*/
    return (
        <div>
            {
                <div className="box col">

                </div>
            }
        </div>
    )
}