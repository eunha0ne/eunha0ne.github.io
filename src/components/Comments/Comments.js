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



    const params = new URLSearchParams(window.location.search)

    // If the 'commenting' URL param is present then scroll to the comments
    if (params.has('commenting')) {
      const commentsScroll = container.current.getBoundingClientRect().top
      const scroll = commentsScroll + window.innerHeight
      window.scroll(0, scroll)
    }

    // Briefly set the 'commenting' URL param while the utterances script is created
    // This ensures the script is initialized with the correct redirect_uri for GitHub OAuth
    params.set('commenting', true)
    const redirectUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', redirectUrl)

    // Append the Utterances script to the container
    while (container.current.firstChild) container.current.firstChild.remove()
    container.current.appendChild(script)

    // <기존>
    // const previousNode = container.current.getElementsByClassName('utterances')[0];
    // if (previousNode) container.current.removeChild(previousNode);
    // container.current.appendChild(script);

    // Once the script has loaded remove the 'commenting' URL param again
    script.onload = () => {
      params.delete('commenting')
      const search = params.toString()
      const originalUrl = window.location.pathname + (search && `?${search}`)
      window.history.replaceState(null, '', originalUrl)
    }
  }, [container.current]);

  return <div className="post-comments" ref={container} />
}

export default connect(state => ({
  isNightMode: state.app.isNightMode
}), null)(Comments);
