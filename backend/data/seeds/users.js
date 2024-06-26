/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_info").del();
  await knex("user_info").insert([
    {
      id: 1,
      name: "Belmo",
      email: "4vG5z@example.com",
      message: "I am a programmer and I love coding.",
    },
  ]);
};
