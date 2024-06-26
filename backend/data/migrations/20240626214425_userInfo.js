/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_info", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("email").notNullable();
    table.string("message").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_info");
};
