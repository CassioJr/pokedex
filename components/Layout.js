import NavBar from "./NavBar";
import Head from 'next/head'
import Footer from "./Footer";
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}