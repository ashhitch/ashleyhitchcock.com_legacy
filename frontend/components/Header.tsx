import React, { Component } from "react";

import { Config } from "../config.js";
import Head from "next/head";
import Link from "next/link";
import Menu from "./Menu.js";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <React.Fragment>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        Ashley Hitchcock | Frontend Development Director
                    </title>
                </Head>
            </React.Fragment>
        );
    }
}

export default Header;
