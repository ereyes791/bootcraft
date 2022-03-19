import React from 'react'
import App  from 'next/app'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import wrapper from '../src/store'
import theme from '../src/utils/theme'
import '../src/styles/_main.scss'

class _App extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      }
    }
  }

  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const {
      Component,
      pageProps,
    } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <title>Bootcraft - Programacion con minecraft</title>
          <link rel="apple-touch-icon" sizes="180x180" href="../public/assets/icon//apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../public/assets/icon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../public/assets/icon/favicon-16x16.png"/>
          <link rel="manifest" href="../public/assets/icon/site.webmanifest"></link>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    )
  }
}

export default wrapper.withRedux(_App)
