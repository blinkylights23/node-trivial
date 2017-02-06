const trivia = require('./trivia');


module.exports = {
  all: trivia,
  random: cat => {
    let items = trivia.slice(0);
    if (typeof(cat) === 'number') {
      items = trivia.filter(i => i.category_id === cat);
    }
    if (typeof(cat) === 'string') {
      items = trivia.filter(i => i.category.title === cat);
    }
    return items[Math.floor(Math.random() * items.length)];
  },
  categories: new Set(trivia.map(i => { return { id: i.category_id, title: i.category.title } }))
}

function whatevs() {
  return ':shruggie:';
}