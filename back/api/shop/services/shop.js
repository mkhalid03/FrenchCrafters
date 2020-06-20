'use strict';

const initializeShopWithOwner = async owner => {
  return await strapi.services['shop'].create({
    name: "New Shop",
    description: "Description of my new shop.",
    owner: owner.id,
  })
}

module.exports = {
  initializeShopWithOwner
};
