function readPackage(pkg, context) {
  // For esbuild, we want to use prebuilt binaries or skip build validation
  if (pkg.name === 'esbuild') {
    // Remove the build script validation to allow prebuilt binaries
    if (pkg.scripts && pkg.scripts.postinstall) {
      delete pkg.scripts.postinstall;
    }
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
}



