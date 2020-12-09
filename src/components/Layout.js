import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, title, children }) => {
  const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;

  return (
    <div
      className="max-w-xl mx-auto px-4 pt-5 pb-8"
      data-is-root-path={isRootPath}
    >
      <Header title={title} isRootPath={isRootPath} />
      <main className="my-7">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
