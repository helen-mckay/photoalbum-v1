---
layout: ../layouts/InfoLayout.astro
---
# About this Photo Album

For my dear friend Naurin Nasim, I built a photo album website to serve as her digital scrapbook. She requested that the site be password-protected to grant access to only her trusted friends (reminiscent of old-school secret keeper journals) as well as comment sections so that visiting friends may write something on the posts.

The version you are currently viewing is for featuring on my portfolio. The rest of my portfolio can viewed at: [https://helenmckay.dev](https://helenmckay.dev). Comments are DISABLED. Attempted comment submissions do not write to the database.

I found this project challenging and incredibly rewarding to make. It went through many iterations (and hit a lot of roadblocks), but the final version was built using the following:

1.  Astro
2.  Tailwind
    1.  Daisy UI
    2.  Tailwind Typography
3.  GitHub
4.  Pages CMS
5.  Clerk
6.  Turso
7.  Astro DB
8.  Cloudflare
    1.  Pages
    2.  DNS

## Features

### Password-protection

Clerk provides user authentication and management, which I configured to match Naurin's desired specs: a single login to be used by all trusted friends, but users cannot create or edit their user accounts. Clerk also provides handy components that integrate beautifully with Astro, which made handling signed in/out checks a breeze.

### CMS for Photos

Pages CMS is my new favorite CMS; it's so easy to use!! I love that the posts are stored in the repo and I can direct all photos uploaded in post creation to be stored in their own media file, and it works seamlessly with Astro collections.

I also made this info page editable via Pages CMS.

### Comments

This was the most difficult feature to solve. I settled on using Astro DB and Turso because they work well together. My first choice would've been Cloudflare D1, just to simplify the number of services used, but for the life of me I couldn't get Astro DB and Cloudflare D1 to talk to each other the way I needed.

## Lessons Learned

*   Keep a large running to-do list with expected next-steps for all the phases of development. I turned the main README file into that, and wrote notes at each step as I learned what was and was not working
    
*   Try to get the API connections working in a production-like environment as quickly as possible so that you don't hit major roadblocks converting to production environment after the whole thing was working fine in development
    
*   It's worth it to take the time to configure multiple environments so you don't have to push to production every time you want to see a little change.

## Looking Ahead

This is only version 1! I'll be returning with a version 2... eventually.
