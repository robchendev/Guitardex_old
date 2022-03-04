import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

function TechniqueDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, prereqs } = data.markdownRemark;

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{prereqs}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query TechniquesDetails($slug: String) {
    markdownRemark (frontmatter:{slug: {eq: $slug}}){
      html
      frontmatter {
        title
        prereqs
      }
    }
  }
`;

export default TechniqueDetails;
