import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div children className="main-content min-h-screen"  >
            {children}
        </div>
        <Footer/>
    </div>
  );
}

export default Layout;