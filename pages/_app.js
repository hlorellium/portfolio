import Head from 'next/head';
import GlobalStyles from '../components/globalStyles';
import Layout from '../components/layout';
import { ColorProvider } from '../context/colorContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <ColorProvider>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ColorProvider>
        </>
    );
}

export default MyApp;
