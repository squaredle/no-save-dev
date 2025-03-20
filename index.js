exports.run = function(...args) {
  const re = /\b(--)?no-save-dev\b/i;
  console.log('Using --no-save-dev:', args.some(arg => re.test(arg)));
}
