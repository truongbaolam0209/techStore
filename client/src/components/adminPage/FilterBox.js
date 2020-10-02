import React, { useContext, useRef } from 'react';
import GuestContext from '../../context/guestContext/guestContext';

const FilterBox = props => {

    const { toggleFilter, searchGuest, clearSearchGuest } = useContext(GuestContext);
    const searchValue = useRef('');
    const handleChange = (e) => {
        if (searchValue.current.value !== '') {
            searchGuest(e.target.value);
        } else {
            clearSearchGuest();
        }
    }

    return (
        <div>
            <h4>
                <input type="checkbox" onChange={toggleFilter}/>FILTER GUEST
                <br/>
                <input 
                    type="text" 
                    placeholder="Search guest by name ..." 
                    ref={searchValue}
                    onChange={handleChange}
                />SEARCH BOX
            </h4>
        </div>
    );
};
export default FilterBox;