module.exports = (() => {

  let name = process.env.SITE || 'default';

  if(!name) {
    console.error('Usage: SITE=yoursitename ember ...');
    process.exit(-1);
  }

  console.log(`Site: ${name}`);

  return require(`./${name}`);
})();
