import React from 'react';
import Helmet from 'react-helmet';

function MetaTags(props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title + `| eunha's dev` },
        { name: 'description', content: '은하의 개발 블로그입니다.' }, //props.description },
        {
          property: 'og:title',
          content: props.title
        },
        {
          property: 'og:url',
          content: props.pathname ? props.url + props.pathname : props.url
        },
        {
          property: 'og:image',
          content: props.thumbnail && props.thumbnail
        },
        {
          property: 'og:image:secure_url',
          content: props.thumbnail && props.thumbnail
        },
        {
          property: 'og:description',
          content: '은하의 개발 블로그입니다.' //props.description,
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '630'
        },
        {
          property: 'og:locale',
          content: 'en'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: props.title },
        {
          name: 'twitter:description',
          content: '은하의 개발 블로그입니다.' // props.description,
        },
        {
          name: 'twitter:image',
          content: props.thumbnail && props.thumbnail
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },

        { name: 'twitter:creator', content: '~/eunha0ne' },
        { property: 'og:site_name', content: `eunha's dev` }
      ]}
    >
      <html lang="ko" />
    </Helmet>
  );
}

export default MetaTags;
