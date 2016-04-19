/// <reference path="../bundle/main.d.ts" />

import envobj = require('envobj')
import assert = require('assert')

interface Env {
  PORT: number
  FOOBAR: string
}

const env = envobj<Env>({
  PORT: 3000,
  FOOBAR: String
})

assert.equal(env.PORT, 3000)
assert.equal(env.FOOBAR, 'test')
