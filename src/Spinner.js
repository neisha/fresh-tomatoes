import React from 'react';
import './Spinner.css';

export default function Spinner(props) {
    return (
        <div>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
}