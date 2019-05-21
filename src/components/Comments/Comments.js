import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const Comments = (props) => {
  let container = useRef();

  useEffect(() => {
    if (!container.current) return;

    const themeType = props.isNightMode ? 'github-dark' : 'github-light';
    const config = {
      src: 'https://utteranc.es/client.js',
      repo: 'eunha0ne/blog-comments',
      'issue-term': 'pathname',
      theme: themeType,
      async: true,
      crossorigin: 'anonymous',
    };

    const script = document.createElement('script');
    Object.keys(config).forEach(key => {
      script.setAttribute(key, config[key]);
    });

    const previousNode = container.current.getElementsByClassName('utterances')[0];
    if (previousNode) container.current.removeChild(previousNode);
    container.current.appendChild(script);
  });

  return <div className="post-comments" ref={container} />
}

export default connect(state => ({
  isNightMode: state.app.isNightMode
}), null)(Comments);
