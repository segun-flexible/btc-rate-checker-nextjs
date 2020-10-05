import NavBar from "./NavBar";
import Head from "next/head";
const Layout = props => (
  <>
    <Head>
      <title>BitPrize</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    <div className="container">{props.children}</div>
  </>
);

export default Layout;
