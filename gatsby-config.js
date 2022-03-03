module.exports = {
  siteMetadata: {
    title: `Fingerstyle Central`,
    description: `Fingerstyle Information`,
    copyright: `Copyright 2022 Fingerstyle Central`,
    siteUrl: `https://www.fingerstylecentral.com`

  },
  plugins: [`gatsby-plugin-netlify`, "gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-1H3X77R5H1"
    }
  }, `gatsby-transformer-remark`, 
  { // You can have multiple instances of this plugin
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `techniques`,
      path: `${__dirname}/src/techniques`,
    },
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
          },
        },
      ],
    },
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-remark-images", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};