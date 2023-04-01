const getDomainName = path => {
  const regexName = /([A-Z][\w]+)\.js/
  return path.match(regexName)[1]
}

const registerModules = requireContext => {
  return Object.keys(requireContext).reduce((modules, path) => {
    modules[getDomainName(path)] = requireContext[path].default
      return modules

  }, {})
}

const register = () => {
    /** Load route data from all route files inside domains */
    return registerModules(import.meta.glob('./../../app/**/store/*.js', {eager: true}));
}

export default register
