const chai = require('chai')
const expect = chai.expect
const Mapper = require('./mapper')

describe('Unit Test Mapper Convert Helper', function () {
    it('should return correct mapped object', () => {
        const data = [{
            firstname: 'Hello',
            lastname: 'Js Community',
            position: 'DevOps',
            independant: 'yes'
        }]

        const expected = [{
            name: 'Hello Js Community',
            job: 'DevOps',
            freelance: true
        }]

        const mapped = Mapper.convert(data)

        expect(mapped).to.be.eql(expected)
    })
})
