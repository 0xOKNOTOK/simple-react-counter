import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad }) => {
    const title = 'Statistics';
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>{title}</h1>
                <p>No reviews on record.</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Statistics</h1>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
            </div>
        );
    }
};

export default Statistics;
