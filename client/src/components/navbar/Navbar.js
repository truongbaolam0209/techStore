import React from 'react';
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';
// import CarouselSlider from './CarouselSlider';



const Navbar = props => {
   return (
      <div>
         <NavbarTop />
         <NavbarBottom />
         {/* <CarouselSlider /> */}
      </div>
   );
};
export default Navbar;