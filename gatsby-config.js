module.exports = {
  siteMetadata: {
    title: `GM Aesop's Fables`,
    siteUrl: `https://www.gmaesopsfables.org`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    "gatsby-plugin-mdx"
  ]
};