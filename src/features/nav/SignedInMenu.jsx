import React from 'react';
import { Link } from 'react-router-dom';
import {  Dropdown, Image, Menu } from 'semantic-ui-react';

export default function SignedInMenu({setAuthenticated}) {
    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown pointing='top left' text='Gary'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='createEvent' text='Create Event' icon='plus' />
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item onClick={setAuthenticated} text='Sign Out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
    
}

//if not passing parameters to the function props then no need to set a void function in the onClick event