import React from 'react';

function NavbarItem({texto}) {
 
  return (
    <li className="header-li"> 
     {texto}
    </li>
  );
}

export default NavbarItem;
