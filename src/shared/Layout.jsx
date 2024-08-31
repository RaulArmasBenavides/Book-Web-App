import  { useState } from 'react';
import Navbar from '../books/components/Navbar';
export const Layout = ({ children }) => {
  
  
  const [mobileOpen, setMobileOpen] = useState(false);
 
  return (
    <div>
			<Navbar />
      <div>
      {children}
      </div>
    </div>
  );
};

 