import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailedPage() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}

//COntains detail of an event. a page where a user can sign up to an event or cancel their place. A button to allow host to manage the event.
//contain location details and a map of location and chat functionality
//break up into several new components