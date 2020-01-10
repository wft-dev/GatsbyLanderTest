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
  ]
};
