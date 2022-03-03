module.exports = {
  siteMetadata: {
      title: `Fingerstyle Central`,
    siteUrl: `https://www.fingerstylecentral.com`
  },
  plugins: [`gatsby-plugin-netlify`, "gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-1H3X77R5H1"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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