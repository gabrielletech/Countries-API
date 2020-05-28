import Layout from './../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const colorStyle = {
    color: 'black'
};

const Index = (props) => {
    return (
    <>
        <Head>
            <title>Home</title>
            <link rel="stylesheet" 
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
                  crossorigin="anonymous">
            </link>
        </Head>
    <Layout>
        <h1 style={colorStyle}>African Union Countries </h1>
        <ul style={colorStyle} class="list-group list-group-flush">
            {props.regions.map((region) => (
                <li class="list-group-item" style={colorStyle} key={region.numericCode}>
                    <Link style={colorStyle} as={`/info/${region.name}`} href={`/info?name=${region.name}`}>
                        <a style={colorStyle}>{region.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
  </>
)   
}

Index.getInitialProps = async function() {
    const res = await fetch('https://restcountries.eu/rest/v2/regionalbloc/au');
    const data = await res.json();
    
    return {
        regions: data
    }
}

export default Index; 