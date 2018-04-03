const {expect} = require('chai');

describe('Test Runner', () => {
  context('1 + 1 should equal 2?', () => {
    it('should return 2 for 1 + 1', () => {

      //Arrange
      const first = 1;
      const second = 1;

      //Act
      const total = first + second;

      //Assert
      expect(total).to.equal(2);
    });
  });
});
