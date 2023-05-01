'use strict';
const { faker } = require('@faker-js/faker');

const boilerManufactures = [
  'Ariston',
  'Worcester Bosch',
  'Viessmann',
  'Vaillant',
  'Navien',
  'Rheem',
  'Burnham',
];

const partsManufactures = [
  'Burner',
  'Aquastat',
  'Thermostat',
  'Thermostat',
  'Salmon',
  'Montana',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => {
        return {
          boiler_manufacturer:
            boilerManufactures[
              Math.floor(Math.random() * boilerManufactures.length)
            ],
          parts_manufacturer:
            partsManufactures[
              Math.floor(Math.random() * partsManufactures.length)
            ],
          price: faker.random.numeric(4),
          name: faker.lorem.sentence(2),
          description: faker.lorem.sentence(10),
          images: JSON.stringify(
            [...Array(7)].map(
              () =>
                `${faker.image.technics()}?random=${faker.random.numeric(30)}`,
            ),
          ),

          vendor_code: faker.internet.password(),
          in_stock: faker.random.numeric(1),
          bestseller: faker.datatype.boolean(),
          new: faker.datatype.boolean(),
          popularity: faker.random.numeric(3),
          compatibility: faker.lorem.sentence(10),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
