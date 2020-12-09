import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import ControlButton from './ControlButton';

const Header = ({ title, isRootPath }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const shouldSetDarkTheme =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDarkTheme(shouldSetDarkTheme);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document
        .querySelector('html')
        .classList.add('dark', 'mode-dark', 'text-white', 'bg-gray-900');
      document.querySelector('html').classList.remove('light');

      localStorage.theme = 'dark';
    } else {
      document.querySelector('html').classList.add('light');
      document
        .querySelector('html')
        .classList.remove('dark', 'mode-dark', 'text-white', 'bg-gray-900');

      localStorage.theme = 'light';
    }
  }, [isDarkTheme]);

  return (
    <header className="flex items-center justify-between">
      <div>
        {isRootPath ? (
          <Link to="/">
            <h1 className="text-2xl font-bold leading-tight">
              <span role="img" aria-label="0">
                0️⃣
              </span>
              <div className="w-1 inline-block"></div>
              <span role="img" aria-label="2">
                2️⃣
              </span>
              <div className="w-1 inline-block"></div>
              <span role="img" aria-label="cat">
                {isDarkTheme ? `🐈` : `🐈‍⬛`}
              </span>
            </h1>
          </Link>
        ) : (
          <ControlButton renderAs={Link} to="/" hasDefaultBg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            {title}
          </ControlButton>
        )}
      </div>
      <div>
        {/* <ControlButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </ControlButton>
        <ControlButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
            />
          </svg>
        </ControlButton> */}
        <ControlButton onClick={(_) => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </ControlButton>
      </div>
    </header>
  );
};

export default Header;
