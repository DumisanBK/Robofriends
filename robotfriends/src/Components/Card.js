import React from 'react';


const Card = () =>{
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img alt="robots" src="https://robohash.org/tester?200*200"></img>
            <div>
                <h2>John Doe</h2>
                <p>john.doe@gmail.com</p>
            </div>
        </div>
    );

}

export default Card;