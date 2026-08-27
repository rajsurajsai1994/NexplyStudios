# Rakhi Gift Landing Page - Setup

Two plain HTML pages, styled to match the Nexply Studios site exactly
(same fonts, colors, gradients, and button treatment). No build step -
upload as-is.

## Files
- `index.html` - the gift-reveal page. Picks one of the 6 gift messages
  at random on every load and shows it with the "Claim Your Gift" button.
- `claim.html` - the form page (Name, Phone, Business Name, and the gift
  they were shown, carried over automatically and shown read-only).
- `style.css` - shared styling.
- `nexply-logo-white.svg`, `favicon.svg` - brand assets.

## 1. Connect the form to your email (required)

This is plain HTML with no backend, so form submissions need a small
free service to actually deliver to your inbox - **Formspree** is the
simplest option (2 minutes, free tier is enough for this):

1. Go to https://formspree.io and sign up free.
2. Create a new form, and set its notification email to
   **next@nexplystudio.com** (the address you gave me - if that was
   meant to be `next@nexply.in`, the address already used elsewhere on
   your main site, use that instead).
3. Formspree gives you a form ID that looks like `mgvkzzzz`.
4. Open `claim.html`, find this line near the bottom:
   ```js
   var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   Replace `YOUR_FORM_ID` with the ID Formspree gave you.

Until you do this, the form will show a friendly "something went
wrong" message on submit instead of silently failing - so you'll know
right away in testing if this step got missed.

## 2. Deploy to Vercel

Simplest path: drag this whole folder into a new Vercel project (or
`vercel deploy` from inside it via the CLI). It's static HTML, so
Vercel needs no build settings - just deploy as-is.

## Notes
- Both pages are set to `noindex, nofollow` (meta robots tag) since
  this is a campaign page, not something you'd want showing up in
  search results. Remove that tag from the `<head>` of each file if
  you'd rather it be indexable.
- The gift shown on the form page is read-only by design (it reflects
  whichever of the 6 gifts they were randomly given) - if you'd rather
  let people change it, remove the `readonly` attribute on the `#gift`
  input in `claim.html`.
