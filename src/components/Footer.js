import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            github
            indiehackers
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <footer className="flex justify-between text-gray-500">
      <small>
        <p>
          © {new Date().getFullYear()} {author.name}. All rights reserved.
        </p>
        <p>
          Built with{' '}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Gatsby
          </a>
          . Source on{' '}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub Repository
          </a>
        </p>
      </small>
      <small>
        {social.twitter && (
          <>
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              twitter
            </a>
            {` • `}
          </>
        )}
        {social.github && (
          <>
            <a
              href={`https://github.com/${social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github
            </a>
            {` • `}
          </>
        )}
        {social.indiehackers && (
          <a
            href={`https://www.indiehackers.com/${social.indiehackers}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            indiehackers
          </a>
        )}
      </small>
    </footer>
  );
};

export default Footer;
