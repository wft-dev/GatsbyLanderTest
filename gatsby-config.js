module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
	    resolve: `gatsby-plugin-s3`,
	    options: {
	    	bucketName: "testing-gatsbyjs",
	      region: "ap-south-1"
	    },
	  },
    ‘gatsby-plugin-react-helmet’,
    ‘gatsby-transformer-remark’,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `wordpress`,
        fieldName: `wordpress`,
        url: `https://wordpress-107195-1100370.cloudwaysapps.com/graphql`,
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wordpress-107195-1100370.cloudwaysapps.com/`,
        protocol: `https`,
        hostingWPCOM: false,
        acfOptionPageIds: [“acf-options-header”, “theme-footer-settings”],
        useACF: true
      }
    },
    ‘gatsby-plugin-sharp’,
    ‘gatsby-transformer-sharp’,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald:400,500,600,700`,
          `Open Sans:400,600,700,800`,
          `PT Serif:400,700`
        ],
        display: ‘swap’
      }
    }
  ]
};
