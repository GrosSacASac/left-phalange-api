import test from 'ava'

import {parse, load, stringify} from '../src/index.js'
import loadFromString from './helpers/load-from-string.js'
import loadFileFromStringExtensionLess from './helpers/load-from-stringExtensionLess.js'

test('parse(data)', (t) => {
  t.deepEqual(
    parse('left = phalange'),
    parse('left = phalange', {type: 'yaml'})
  )
})

test("load('data.xml')", (t) => {
  t.throws(() => {
    loadFromString('left: [phalange', 'data.xml')
  })

  t.deepEqual(
    loadFromString('left = phalange', 'data.yml'),
    parse('left = phalange')
  )
})

test('load without specifiying extension', (t) => {
  const jsonString = '{"a": "b"}'
  t.deepEqual(
    loadFileFromStringExtensionLess(jsonString, 'data.yml'),
    parse(jsonString, 'json')
  )
})
