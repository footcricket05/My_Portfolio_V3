function readPackage(pkg, context) {
  // Allow build scripts for packages
  if (pkg.name === 'esbuild') {
    // Set the allowBuild property to true
    delete pkg.pnpm;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
}


