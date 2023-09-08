import React from 'react';
import ReactDOM from 'react-dom';
import MyAlert from "./MyAlert";

const element = (
    <div>
        <MyAlert show={true} color="red" text="Error Text" />
        <MyAlert show={true} text="Alert Message Text" />
        <MyAlert show={false} color="green" text="Alert Message Text" />
        <MyAlert text="Alert Message Text" />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));