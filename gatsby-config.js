module.exports = {
  siteMetadata: {
    title: `Guitardex`,
    description: `Guitardex is a free, non-profit fingerstyle tutorial website that provides educational resources to fingerstyle guitarists.`,
    copyright: `Copyright 2022 Guitardex`,
    siteUrl: `https://guitardex.com`
  },
  plugins: ["gatsby-remark-embed-video", `gatsby-plugin-netlify`, "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guitardex`,
        short_name: `gdex`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/favicon-32x32.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fredoka\:400,500,700`,
        ],
        display: 'swap'
      }
    },
    { // You can have multiple instances of this plugin
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `t`,
        path: `${__dirname}/src/t`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              className: `anchorclass`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              tracedSVG: true,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              //height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
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