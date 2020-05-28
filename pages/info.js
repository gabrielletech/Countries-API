import fetch from 'isomorphic-unfetch';
import Layout from './../components/Layout';

const colorStyle = {
    color: 'black',
    textAlign: 'center'
}

const imgStyle = {
    display: 'block',
    margin: 'auto',
    width: 300,
    height: 250
}

const Info = ({ region }) => (
    
    <Layout>
    <h1 style={colorStyle}>{region[0].name}</h1>
    <img style={imgStyle} src={region[0].flag} />
    <p style={colorStyle}>Langauges: {region[0].languages[0].name}</p>
    <p style={colorStyle}>Population: {region[0].population}</p>
    <p style={colorStyle}>Currencies: {region[0].currencies[0].name}</p>
    </Layout>
)

Info.getInitialProps = async function (context) {
    const { name } = context.query
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const region = await res.json()

    return { region }
}

export default Info;