import Head from 'next/head';

const linkStyle = {
    marginRight: 15,
    color: '#000',
    fontSize: 20,
}

const Nav = () => (
    <>
    <Head>
    <link rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
          crossorigin="anonymous"
    />
    </Head>
    <div>
    <ul class="nav justify-content-center">
        <li class="nav-item"><a href="/" style={linkStyle}>Home |</a></li>
        
        <li class="nav-item"><a href="/info" style={linkStyle}>Info</a></li>
    </ul>   
    </div>
    </>
)

export default Nav;