import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const Feedback = () => {
    const [clicks, setClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });
    const handleGoodClick = () => {
        setClicks({ ...clicks, good: clicks.good + 1 });
    };

    const handleNeutralClick = () => {
        setClicks({ ...clicks, neutral: clicks.neutral + 1 });
    };

    const handleBadClick = () => {
        setClicks({ ...clicks, bad: clicks.bad + 1 });
    };

    const title = 'Give Feedback';
    return (
        <div>
            <h1>{title}</h1>
            <Button onClick={handleGoodClick} btnText="Good" />
            <Button onClick={handleNeutralClick} btnText="Neutral" />
            <Button onClick={handleBadClick} btnText="Bad" />
            <Statistics
                good={clicks.good}
                neutral={clicks.neutral}
                bad={clicks.bad}
            />
        </div>
    );
};

export default Feedback;
