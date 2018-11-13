var Election = artifacts.require('./Election.sol')

contract("Election smart contract", (accounts) => {
    it('should initialize with two candidates witht the correct values', async () => {
        const instance = await Election.deployed()
        const numberOfCandidate = await instance.candidatesCount()
        assert.equal(numberOfCandidate, 2)

        const firstCandidate = await instance.candidates(1)
        assert.equal(firstCandidate[0], 1, 'first candidate should contain the correct id')

        const secondCandidate = await instance.candidates(2)
        assert.equal(secondCandidate[2], 0, 'second candidate should not have any vote')
    });
})