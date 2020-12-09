import React from 'react';
import { Link } from 'gatsby';

import Bio from './Bio';

import formatReadingTime from '../utils/formatReadingTime';

const BlogPost = ({ isFullPost, post }) => (
  <article itemScope itemType="http://schema.org/Article">
    <header className="mb-2">
      {/* <div className="mb-2">
        {post.frontmatter.categories?.map(category => (
          <small
            key={`${post.fields?.slug || post.id}-${category}`}
            className="inline-block bg-gray-100 rounded-full mr-1 px-2 bg-purple-100 dark:bg-purple-800 text-purple-500 dark:text-purple-300"
          >
            <Link to="/">{category}</Link>
          </small>
        ))}
      </div> */}
      {isFullPost ? (
        <h1 className="text-3xl font-bold" itemProp="headline">
          {post.frontmatter.title}
        </h1>
      ) : (
        <h2 className="text-2xl font-bold">
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">
              {post.frontmatter.title || post.fields.slug}
            </span>
          </Link>
        </h2>
      )}
      <small className="text-xs text-gray-400">
        {post.frontmatter.date}
        {' • '}
        {formatReadingTime(post.timeToRead)}
      </small>
    </header>
    <section className="mb-2">
      <p
        dangerouslySetInnerHTML={{
          __html: isFullPost
            ? post.html
            : post.frontmatter.description || post.excerpt,
        }}
        itemProp={isFullPost ? 'articleBody' : 'description'}
        className="prose prose-purple dark:prose-dark"
      />
    </section>
    {isFullPost && (
      <hr className="mt-7 mb-6 border-gray-200 dark:border-gray-700" />
    )}
    <footer>
      {isFullPost ? (
        <Bio />
      ) : (
        <Link
          to={post.fields.slug}
          itemProp="url"
          className="text-sm font-bold text-purple-600 dark:text-purple-500"
        >
          Continue reading
        </Link>
      )}
    </footer>
  </article>
);

export default BlogPost;
