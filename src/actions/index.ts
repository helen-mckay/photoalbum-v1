import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, CommentsDB } from 'astro:db';

// Astro action
// accepts form data
// checks if user is logged in via Clerk
  // if they are, then submit the comment to the database
// CommentsDB defined in db/config.ts

export const server = {
  addComment: defineAction({
    accept: 'form',
    input: z.object({
      post_uuid: z.string(),
      comment_author: z.string().min(1, 'Name is required'),
      comment_body: z.string().min(1, 'Message cannot be empty')
    }),
    handler: async ({ post_uuid, comment_author, comment_body }, context) => {

      if (!context.locals.auth().isAuthenticated)
      {
        // console.log("you can't submit a post without logging in!");
        return null;
      }

      const comment = await db
        .insert(CommentsDB)
        .values({
          post_uuid,
          created_at: Date.now(),
          comment_author,
          comment_body
        })
        .returning();

      return comment[0];
      
    },
  }),
};