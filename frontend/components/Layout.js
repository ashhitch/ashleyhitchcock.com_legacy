import Footer from "./Footer";
import Header from "./Header";

const layoutStyle = {
    margin: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: '20px'
};

const Layout = props => (
    <main style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
    </main>
);

export default Layout;
