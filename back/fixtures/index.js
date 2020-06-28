const Fixtures = require('node-mongodb-fixtures');

const loadFixtures = async (dbName, folder) => {
  const fixtures = new Fixtures({
    dir: `${__dirname}/${folder}`,
    mute: false,
  });

  await fixtures.connect(`mongodb://localhost:27017/${dbName}`)
    .then(() => fixtures.unload())
    .then(() => fixtures.load())
    .catch(e => console.error(e))
    .finally(() => fixtures.disconnect());
}

module.exports = {
  loadFixtures,
}
