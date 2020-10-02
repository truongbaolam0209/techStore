import React, { useContext } from 'react';
import GuestContext from '../../context/guestContext/guestContext';
import UserPanel from './UserPanel';
import FilterBox from './FilterBox';
import ProductForm from './ProductForm';


const AdminPage = props => {

    const { guests, filterGuest, search } = useContext(GuestContext);
    
    return (
        <div>
            ADMIN PAGE
            <FilterBox />
            {
                search !== null ?
                search.map(guest => <UserPanel key={guest.id} guest={guest}/>) :
                guests.filter(guest => !filterGuest || guest.confirm).map(guest => (<UserPanel key={guest.id} guest={guest}/>))
            }
            <ProductForm />
        </div>
    );
};
export default AdminPage;