import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "src/components/header/PageHeader";
import "./layout.css";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <PageHeader siteTitle={data.site.siteMetadata.title}/>
      {children}
      <footer>
        <p>© {new Date().getFullYear()} <span>eunha0ne</span> All rights reserved.</p>
        <p>Built with {`Gatsby, React, GraphQL`} </p>

      </footer>
    </React.Fragment>
  );

}

/*
return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}

    render={(data) => {
      return (
        <React.Fragment>
          <PageHeader siteTitle={data.site.siteMetadata.title}/>
          {children}
          <footer>
            <p>© {new Date().getFullYear()} <span>eunha0ne</span> All rights reserved.</p>
            <p>Built with {`Gatsby, React, GraphQL`} </p>

          </footer>
        </React.Fragment>
      );
    }}

  />
);
}
*/

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
/*
StaticQuery.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
*/

export default Layout;
