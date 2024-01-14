import React from 'react';

export default function TimeCard({
    time,
    duration
}) {
    return (
        <div>
            <p>
                You went outside at {time} for {duration}
            </p>
        </div>
    )
}