import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Button, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './signedOutMenu';

export default function NavBar({setFormOpen}) {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignedOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}} />
                    WE-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events'/>
                {authenticated && (
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button positive inverted content="Create Event"/> 
                    </Menu.Item>
                )}
                {authenticated ? (
                    <SignedInMenu setAuthenticated={handleSignedOut} />) 
                : (
                    <SignedOutMenu setAuthenticated={setAuthenticated} /> 
                )}
            </Container>
        </Menu>
    );
}

//replaced by above code since we are now using React Routers
// <Button onClick={()=>setFormOpen(true)} positive inverted content="Create Event" />
