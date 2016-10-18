module.exports = (() => {

  let name = process.env.SITE;

  if(!name) {
    console.error('Usage: SITE=yoursitename ember ...');
    process.exit(-1);
  }

  return require(`./${name}`);
})();
