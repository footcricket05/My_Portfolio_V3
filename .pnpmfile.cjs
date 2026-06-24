function readPackage(pkg, context) {
  // Allow esbuild to run its build scripts
  if (pkg.name === 'esbuild') {
    pkg.pnpm = pkg.pnpm || {};
    pkg.pnpm.allowBuild = true;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
}
