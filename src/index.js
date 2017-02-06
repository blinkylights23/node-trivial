const trivia = require('./trivia');


module.exports = {
  all: trivia,
  random: () => trivia[Math.floor(Math.random() * trivia.length)],
  categories: new Set(trivia.map(i => i.category.title))
}
