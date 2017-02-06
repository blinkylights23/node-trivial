var trivial = require('../src');

var expect = require('chai').expect;


describe('Trivia module tests', () => {
  describe('all method', () => {
    it('should return a collection', () => {
      expect(trivial.all).to.be.an('array');
      expect(trivial.all[0]).to.be.an('object');
    });
  });

  describe('random method', () => {
    it('should return a random question when no arg passed', () => {
      expect(trivial.random()).to.be.an('object');
    })
    it('should return a random question from the given category', () => {
      expect(trivial.random('australia')).to.be.an('object')
        .and.to.have.property('category_id', 5);
      expect(trivial.random(4)).to.be.an('object')
        .and.to.have.deep.property('category.title', 'movies');
    })
  });


  describe('categories method', () => {
    it('should return a Set of objects', () => {
      expect(trivial.categories).to.be.a('set');
      expect(trivial.categories.values().next()).to.be.an('object');
    })
  });

});