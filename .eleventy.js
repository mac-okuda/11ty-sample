const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
  }))
  return {
    dir: {
      input: "src",
    }
  };
};
