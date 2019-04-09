import { homedir } from 'os'

const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/

const homeDir = homedir()

/**
 * Remove internal Node.JS lines from the error stack traces.
 * @param {string} stack The error stack to update.
 * @param {!_cleanStack.Config} [options] Options for the program.
 * @param {boolean} [options.pretty=false] Replace the absolute path to the home directory with the `~`. Default `false`.
 * @param {!Array<string>} [options.ignoredModules="［'pirates'］"] Which modules to ignore in the path. Default `［'pirates'］`.
 */
const cleanStack = (stack, options) => {
  const {
    pretty = false, ignoredModules = ['pirates'],
  } = options || {}
  const j = ignoredModules.join('|')
  const re = new RegExp(pathRegex.source.replace('IGNORED_MODULES', j))

  return stack.replace(/\\/g, '/')
    .split('\n')
    .filter(x => {
      const pathMatches = x.match(extractPathRegex)
      if (pathMatches === null || !pathMatches[1]) {
        return true
      }

      const match = pathMatches[1]

      // Electron
      if (match.includes('.app/Contents/Resources/electron.asar') ||
        match.includes('.app/Contents/Resources/default_app.asar')) {
        return false
      }

      return !re.test(match)
    })
    .filter(x => x.trim())
    .map(x => {
      if (pretty) {
        return x.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')))
      }

      return x
    })
    .join('\n')
}

export default cleanStack

/* documentary types/index.xml */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_cleanStack.Config} Config Options for the program.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _cleanStack.Config Options for the program.
 * @prop {boolean} [pretty=false] Replace the absolute path to the home directory with the `~`. Default `false`.
 * @prop {!Array<string>} [ignoredModules="［'pirates'］"] Which modules to ignore in the path. Default `［'pirates'］`.
 */
