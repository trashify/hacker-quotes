/* eslint-env mocha */
'use strict'

const q = require('./index')
const assert = require('assert')

console.log(q)

describe('hacker quotes', () => {
  it('should be an array', () => {
    assert(Array.isArray(q))
  })
})
