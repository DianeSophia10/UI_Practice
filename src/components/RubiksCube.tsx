import React from 'react';
import "@/assets/Styles/RubiksCube.scss";

const RubiksCube: React.FC = () => {
    return (
        <div className="rubiks-cube">
            <div className="face front">
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
                <div className="cell red"></div>
            </div>
            <div className="face back">
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
                <div className="cell orange"></div>
            </div>
            <div className="face left">
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
                <div className="cell green"></div>
            </div>
            <div className="face right">
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
                <div className="cell blue"></div>
            </div>
            <div className="face top">
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
                <div className="cell yellow"></div>
            </div>
            <div className="face bottom">
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
                <div className="cell white"></div>
            </div>
        </div>
    );
};

export default RubiksCube;


