import React from 'react';
import EventListItem from '../eventList/EventListItem';

export default function EventList({events, selectEvent, deleteEvent}) {
    return (
        <>
            {events.map(event => (
                <EventListItem 
                event={event} 
                key={event.id} 
                selectEvent={selectEvent}
                deleteEvent = {deleteEvent}
                />
            ))}
        </>
        
    )
}