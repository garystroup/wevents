import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import { useSelector } from 'react-redux';

export default function EventDashboard() {
    const{events} = useSelector(state => state.event)
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
               <h2>Event Filters</h2>
            </Grid.Column>
        </Grid> 
    )
}

// {formOpen && 
/* <EventForm 
setFormOpen={setFormOpen} 
setEvents={setEvents}
createEvent={handleCreateEvent} 
selectedEvent={selectedEvent}
updateEvent={handleUpdateEvent}
key={selectedEvent ? selectedEvent.id:null}   
/>} */

//const [events, setEvents] = useState(sampleData);
    // these functions were used to handle the state of the events and passed down as props to the different components
    // function handleCreateEvent(event) {
    //     setEvents([...events, event])
    // }

    // function handleUpdateEvent(updatedEvent) {
    //     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    //     selectEvent(null);
    // }
    //function handleDeleteEvent(eventId) {
        // setEvents(events.filter(evt => evt.id !== eventId));
    //}