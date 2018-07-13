import Footer from "./Footer";
import Hamburger from "./Hamburger";
import Header from "./Header";
import {LayoutContext} from './../context/layout-context';
import Menu from "./Menu.js";

const layoutStyle = {
    margin: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: '20px'
};

const Layout = props => (
    <main style={layoutStyle}>
        <Header />
        <LayoutContext.Consumer>
            {({menuItems, menuActive, toggleMenu}) => (
            <div>
                <Hamburger active={menuActive} toggle={toggleMenu} />
                <Menu menu={menuItems} active={menuActive} />
            </div>
            )}
         </LayoutContext.Consumer>
            {props.children}
        <Footer />
    </main>
);

export default Layout;
