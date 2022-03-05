module.exports = {
  siteMetadata: {
    title: `Fingerstyle Central`,
    description: `Fingerstyle Information`,
    copyright: `Copyright 2022 Fingerstyle Central`,
    siteUrl: `https://www.fingerstylecentral.com`

  },
  plugins: ["gatsby-remark-embed-video", `gatsby-plugin-netlify`, "gatsby-plugin-emotion", 
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-1H3X77R5H1"
    }
  },
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
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
          },
        },
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            //ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            //height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
            urlOverrides: [
              {
                id: "youtube",
                embedURL: videoId =>
                  `https://www.youtube-nocookie.com/embed/${videoId}`,
              },
            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
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
  },]
};