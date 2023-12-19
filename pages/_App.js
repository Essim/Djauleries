import App, { Container } from 'next/app'

import Head from 'next/head'
import React from 'react'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp