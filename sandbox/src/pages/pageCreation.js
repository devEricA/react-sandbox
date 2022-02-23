/*
    This page is responsible for the page responsible for generating new pages. 
*/

import React from 'react';
import styled from "styled-components";

//Defines colors for the buttons depending on whether or not the cursor is over them. 
const theme = {
    black: {
        default: "#000000",
        hover: "#666666"
    }
};

//Defines the apperance and behavior of the button to be used in this page.
const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    transition: ease background-color 100ms;
    &:hover{
        background-color: ${(props) => theme[props.theme].hover};
    }
`;

//Setting the background color of the button to the colors in Line 07
Button.defaultProps = {
    theme: "black"
};

//Function that runs whenever the button is clicked. 
//For now, it generates an alert window.
function buttonTrigger(){
    alert("Shucks, creating a new page via this button is quite tricky.\nResearch for the ability to create is underway.\nIf you have an idea on how to approach this,\nopen an issue in this project's github.");
};

//Builds the page.
const PageCreation = () => {
    return (
        <>
        <div>
            <p>
                <br />Create a new page here!
                <br />METHOD IN PROGRESS
            </p>
        </div>
        <div>
            <Button onClick={buttonTrigger}>Create new page</Button>
        </div>
        </>
    );
};

export default PageCreation;