import App from 'next/app';
import Page from '../components/Page';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    return (
      <Page>
          <Component {...pageProps} />
      </Page>
    )
  }

export default MyApp;