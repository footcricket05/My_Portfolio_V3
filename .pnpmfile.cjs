function readPackage(pkg, context) {
  // Allow build scripts for esbuild
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

