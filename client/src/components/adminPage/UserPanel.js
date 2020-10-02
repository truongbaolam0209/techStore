import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import GuestContext from '../../context/guestContext/guestContext';

const UserPanel = ({ guest }) => {
    const { toggleGuestConfirm, removeUser } = useContext(GuestContext);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{guest.username}</Card.Title>
                <Card.Text>{guest.email}</Card.Text>
                <div>{guest.confirm ? 'Confirmed' : 'Not yet'}</div>
                <input type="checkbox" onChange={toggleGuestConfirm} />
                <button onClick={() => removeUser(guest.id)}>EDIT</button>
                <button onClick={() => removeUser(guest.id)}>DELETE</button>
            </Card.Body>
        </Card>
    );
};
export default UserPanel;