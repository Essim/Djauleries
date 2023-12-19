import App, { Container } from 'next/app'

import Head from 'next/head'
import React from 'react'
import '/static/styles.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <link href="/static/styles.css" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp