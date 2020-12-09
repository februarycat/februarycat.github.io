import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import cx from 'classnames';

const Bio = ({ isHomeStyle }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div
      className={cx('flex', 'items-center', {
        'flex-col text-center mt-3': isHomeStyle,
      })}
    >
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className={cx(
            'rounded-full flex-shrink-0',
            'ring ring-purple-500 dark:ring-purple-500',
            'ring-offset-4 ring-offset-white dark:ring-offset-gray-900',
            {
              'mb-4': isHomeStyle,
              'mr-4': !isHomeStyle,
            }
          )}
          style={
            !isHomeStyle && {
              width: 50,
              height: 50,
            }
          }
        />
      )}
      {author?.name && (
        <p>
          Personal blog by{' '}
          <a
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple-600 dark:text-purple-500"
          >
            {author.name}
          </a>
        </p>
      )}
    </div>
  );
};

export default Bio;
