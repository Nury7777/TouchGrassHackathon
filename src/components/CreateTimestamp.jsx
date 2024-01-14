import React, { useState, useEffect } from 'react';
import TimeCard from './TimeCard';
import { getCollectionDocs } from '../firebaseHelper';

export default function CreateTimestamp(){
    const [timestamp, setTimestamp] = useState([]);

	useEffect(() => {
		getCollectionDocs(setTimestamp);
	}, []);

    return (
        <div className='create-timestamp'>
            {timestamp.map((times,idx) => (
                <TimeCard 
                    time={times.time}
                    duration= {times.duration}
                    key={idx}
                    />
            ))}
        </div>
    );
}