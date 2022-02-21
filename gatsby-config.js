module.exports = {
  siteMetadata: {
      title: `Fingerstyle Archive`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-MXYW5V2L63"
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