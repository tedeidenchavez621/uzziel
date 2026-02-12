import './card.css';
import React, { ReactNode } from 'react';

export default function Card({ image, date, description }:  {
    image : React.ReactNode;
    date : React.ReactNode;
    description : React.ReactNode;
    }) {
    return (
        <div className="card">
            <div className="image-container">
                {image}
            </div>
            <div className="date-container">
                {date}
            </div>
            <div className="description-container">
                {description}
            </div>
        </div>
    );
}