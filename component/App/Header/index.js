import React, { Component } from "react";
import "../../../styles/style.scss";
import Head from "next/head";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <div>
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="author" content="Pattaradanai Sangton" />
            <meta  name="viewport"  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <link rel="stylesheet" type="text/css" href="/static/assets/bootstrap/css/bootstrap.min.css"></link>
            <script src="/static/assets/bootstrap/js/bootstrap.min.js"></script>
        </Head>
        <nav id="menu">
            <ul>
              <li>
                <Link href="/index">
                  <a> Home </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a> About </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a> Contact </a>
                </Link>
              </li>
            </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
