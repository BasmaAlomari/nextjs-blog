import Link from "next/link"
import Head from "next/head";
import Script from "next/script";
export default function FirstPost(){
    return (
        <>
        <Head>
            <title>First Post Basma</title>
        </Head>
            <script 
            src="https://connect.facebook.net/en_US/sdk.js" 
            strategy="lazyOnload"
            onLoad={()=>console.log('script loaded correctly,window.FB has been populated') }
            />
    <h1>First Post</h1>
    <h2>
        <Link href="/">Back To Home</Link>
    </h2>
    </>
    );
}