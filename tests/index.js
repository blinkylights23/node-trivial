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
    it('should return a random question', () => {
      expect(trivial.random()).to.be.an('object');
    })
  });


  describe('categories method', () => {
    it('should return a Set of objects', () => {
      expect(trivial.categories).to.be.a('set');
      expect(trivial.categories.values().next()).to.be.an('object');
    })
  });

});