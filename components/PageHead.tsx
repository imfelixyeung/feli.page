import Head from "next/head";

interface Props {
    title?: string;
}

const PageHead = ({ title }: Props) => {
    const displayTitle = title ? `${title} | Feli Page` : "Feli Page";
    return (
        <Head>
            <script
                data-ad-client="ca-pub-6956339669378024"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <meta name="twitter:title" content={displayTitle} />
            <meta
                name="twitter:image"
                content="/assets/images/im.feli.page.png"
            />
            <meta property="og:title" content={displayTitle} />
            <meta
                property="og:image"
                content="/assets/images/im.feli.page.png"
            />

            <title>{displayTitle}</title>
            <link rel="icon" href="/favicon.png" />
            <link rel="manifest" href="/manifest.json" />
            <link
                rel="apple-touch-icon"
                href="/assets/images/im.feli.page.png"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="description" content="Feli Page" />
            <meta name="theme-color" content="#f9a825" />
        </Head>
    );
};

export default PageHead;
