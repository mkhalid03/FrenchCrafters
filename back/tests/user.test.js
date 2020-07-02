const { setupStrapi } = require('./helpers/strapi');
const { loadFixtures } = require('../fixtures');

describe('User Model Test', () => {
  beforeAll(async (done) => {
    await setupStrapi()
    await loadFixtures('test', 'dev')
    done()
  });

  it('strapi is defined', async (done) => {
    expect(strapi).toBeDefined();
    done();
  });
})
