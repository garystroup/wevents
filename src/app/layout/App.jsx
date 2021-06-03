import React from 'react';
import { Container } from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../home/HomePage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {
  // const [formOpen, setFormOpen] = useState(false);
  // const [selectedEvent, setSelectedEvent] = useState(null);

  // function handleSelectEvent(event) {
  //   setSelectedEvent(event);
  //   setFormOpen(true);
  // }

  // function handleCreateFormOpen() {
  //   setSelectedEvent(null);
  //   setFormOpen(true);
  // }

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route 
        path={'/(.+)'} 
        render={() => (
          <>
            <NavBar  />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent',`/manage/:id`]} component={EventForm} />
            </Container>
          </>
        )} 
      />
    </>
  );
}

export default App;

/* <EventDashboard 
        formOpen = {formOpen}
        setFormOpen={setFormOpen} 
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
        /> */

        //the app handles all routes in the SPA