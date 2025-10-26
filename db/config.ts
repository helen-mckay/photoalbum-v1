import { defineDb, defineTable, column } from 'astro:db';

// configuration file for Astro DB
// creates a table with schema that matches what we need in the Turso database
  // id: autocreated
  // post_uuid: the uuid created by Pages CMS upon post creation
  // created_at: the datetime, in milliseconds, the comment was submitted
  // comment_author
  // comment_body
// this gets connected to Turso via the environment variables in .env

const CommentsDB = defineTable({
  columns: {
    id: column.number({ primaryKey: true}),
    post_uuid: column.text(),
    created_at: column.number({ default: Date.now()}),
    comment_author: column.text(),
    comment_body: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { CommentsDB }
});
