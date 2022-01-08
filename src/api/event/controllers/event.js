const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = slugify(data.name, {lower: true});
      }
    },
    beforeCreate: async (params, data) => {
      if (data.name) {
        data.slug = slugify(data.name, {lower: true});
      }
    }
  }
}