

import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Promptmedia",
  description: "Discover & share AI prompts"
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang='en'>
        <head>
          <title>{metadata.title}</title>
          <meta name='description' content={metadata.description} />
          {/* Include any other metadata or stylesheets here */}
        </head>
        <body>
          <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>

          </Provider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
