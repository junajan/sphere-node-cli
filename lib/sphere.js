import _debug from 'debug'
import pkg from '../package.json'
import { isTest } from './utils/env'
import help from './utils/help'

const debug = _debug('sphere')

export default class SphereCommand {

  constructor () {
    this.program = require('commander')
  }

  run (argv) {
    debug('parsing args: %s', argv)

    this.program
      .version(pkg.version)
      .command('fetch', 'Fetch resources')
      .command('export', 'Export resources')
      .command('import', 'Import resources')
      .on('--help', help)
      .parse(argv)

    if (!isTest && !this.program.args.length)
      this.program.help()
  }
}