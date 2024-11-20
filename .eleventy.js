module.exports = function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_src/sass/");
     eleventyConfig.addWatchTarget("./_src/images/");
     eleventyConfig.addPassthroughCopy("./_src/images/");
     return {
          dir: {
               input: "_src"
          }
     }
}