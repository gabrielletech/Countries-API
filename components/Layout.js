import Nav from './Nav';

const layoutStyle = {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    color: 'black'
}

const Layout = (props) => {
    return (
    <div style={layoutStyle}>
        <Nav />
        {props.children}
    </div>
    )
}

export default Layout;