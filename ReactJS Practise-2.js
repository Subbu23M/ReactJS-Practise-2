// We know about HTML5 Attributes.For Example,
// <img src='./......' alt='text'></img>
// In ReactJS We call it as Properties(props)

// Props and Styling Exercise

// Path
// src -> index.js -> components -> joke.js -> jokeContent.js

// 1)index.js
import React from 'react';
import ReactDOM from 'react-dom';

import Joke from '../src/components/Joke'

ReactDOM.render(<Joke/>,document.getElementById('root'))


// 2)Joke.js
import React from 'react'

import JokeContent from '../components/JokeContent'

// Function Component called Joke
function Joke()
{
    return(
        <div>
            {/* Data dynamically entered by the user */}

            <JokeContent answer = 'Just 23 years old' />

            <JokeContent question =  'How,old are you?'
                answer = 'Just 23 years old' />

            <JokeContent question  = 'How,old are you?'
            answer =  'Just 23 years old' />

            <JokeContent question =  'How,old are you?'
            answer = 'Just 23 years old' />

            <JokeContent question =  'How,old are you?'
            answer = 'Just 23 years old' />
        </div>
    );
}
export default Joke

// 3)JokeContent.js
import React from 'react'

// Function Component called JokeContent
function JokeContent(props){
return(
    <div>
        <h2 style = {
            {
                display : props.question ? 'block' : 'none'
            }
        }> Question:{props.question}  </h2>
        <h2 style = {
            {
            // Ternary Operator
            // color : props.answer ? 'red' : 'blue'
            // color : !props.question && 'red'
            color : props.question ? 'green' : 'indigo'
            }
        }
        > Answer:{props.answer}  </h2>
        <br/>
    </div>
    );
}
export default JokeContent

// Mapping Component:
// Path
// src -> index.js -> components -> joke.js -> jokeContent.js
                                  //  |   
// Generally we receive data from API (JSON Objects)-At that time we use Map function and returns an array
// 1)index.js

import React from 'react';
import ReactDOM from 'react-dom';

import Joke from '../src/components/Joke'

ReactDOM.render(<Joke/>,document.getElementById('root'))


// 2)Joke.js
import React from 'react'

import JokeContent from '../components/JokeContent'

import jokeData from '../src/jokeData'

// Function Component called Joke
function Joke()
const jokeComponent = jokeData.map(function(joke){
    return(
        <JokeContent key = {joke.id} question = {joke.question} answer = {joke.answer}/>
    );
});

{
    return(
        <div>
            {jokeComponent}
        </div>
    );
}
export default Joke

// jokeData.js

const jokeData = [

    // Array of objects
    // JSON-JavaScript Object Notation

    {
        id : '1',
        answer : 'Just 23 years old' 
    },

    {
        id:'2',
        question :  'How,old are you?',
        answer : 'Just 23 years old'
    },

    {
        id:'3',
        question :  'How,old are you?',
        answer :'Just 23 years old'
    },

    {
        id:'4',
        question :  'How,old are you?',
        answer : 'Just 23 years old'
    },

    {
        id:'5',
        question :  'How,old are you?',
        answer : 'Just 23 years old'
    }
];

// console.log(jokeData);

// 3)JokeContent.js
import React from 'react'

// Function Component called JokeContent
function JokeContent(props){
return(
    <div>
        <h2 style = {
            {
                display : props.question ? 'block' : 'none'
            }
        }> Question:{props.question}  </h2>
        <h2 style = {
            {
            // Ternary Operator
            // color : props.answer ? 'red' : 'blue'
            // color : !props.question && 'red'
            color : props.question ? 'green' : 'indigo'
            }
        }
        > Answer:{props.answer}  </h2>
        <br/>
    </div>
    );
}
export default JokeContent

// Class Based Components

// Path: index.js -> Class.js -> Header.js -> Greeting.js
// 1)index.js
import React from 'react';
import ReactDOM from 'react-dom';

import Class from '../src/components/Class'

ReactDOM.render(<Class />,document.getElementById('root'))

// 2) Class.js
// Converting Functional Components into Class Component

import React from 'react'
import Header from './Header'
// import Greeting from './Greeting'

class Class extends React.Component{
    render()
    {
        return(
            <div>
                <Header username = 'Subramanyam!'/>
                {/* <Greeting/> */}
            </div>   
        )
    }
}
export default Class 

// 3) Header.js
import React from 'react'

import Greeting from '../components/Greeting'

class Header extends React.Component{
    render()
    {
        // const result = 'Subramanyam'
        return(
            <div>
                {/* <p> Welcome! {`${result}`} </p> */}
                <p style = {
                    {
                        color:'hotpink'
                    }
                }>
                    Welcome,{this.props.username}
                </p>

                <Greeting/>
            </div>
        )    
    }
}
export default Header

// 4) Greeting.js
import React from 'react'

class Greeting extends React.Component{
    render()
    
    {
        const date = new Date();
        const hours = date.getHours();
        let greetMessage;
        
        if(hours < 12){
            greetMessage = 'Morning';
            
        }else if(hours >= 12 && hours < 17){
            greetMessage = 'Afternoon';
            
        }else{
            greetMessage = 'Night';
            
        }
        return <h2>
            Good {`${greetMessage}`}
        </h2>
        
    }
}

export default Greeting