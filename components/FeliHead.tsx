import Head from "next/head";

export default function FeliHead({ title = "Feli Page" }: { title?: string }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />{" "}
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="apple-touch-icon"
                    href="/assets/images/im.feli.page.png"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="description" content="Feli Page" />
                <meta name="theme-color" content="#f9a825" />
            </Head>
        </>
    );
}
