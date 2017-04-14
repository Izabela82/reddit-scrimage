
exports.up = function(knex, Promise) {
rteturn.knex.schema.createTable('link', (table)=>{
  table.increments()
  table.integer('votes')
  table.string('url')
  table.string('title')
})
};

exports.down = function(knex, Promise) {

};
