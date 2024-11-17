# Construction - corporate landing page

## Why you build this Vanilla JS project ? Requirements of the project ?

- Implement Mobile First Approach,
- Implement Component based modular structure,
- Implement scss techniques,
- Implement BEM Naming convention for consistency,
- Implement Dark/light/system theme without any library,
- Improve Accessibility where and when necessary,
- Improve SEO

## Project starting date & time :- 14 Nov 2024, 11:00 AM

- component wise scss files; One way to write DRY code is to keep related code in separate files.
- use shorthand property (css minification)
- Use the most specific selector possible to reduce the number of styles applied to an element.
  - h1, ::before < .test, :hover, [href] < #navbar < style < !important ; (1 + 10 + 100 + 1000);
- use css flex/grid to reduce the number of CSS declarations and improve layout efficiency.
- use comments to explain complex codes

- [block]\_\_[element]--[modifier]
- One of the purposes behind BEM is to keep specificity low and consistent.

- Avoid over nesting (only 2-3 level deep)
- use @import in scss; Not in CSS (It creates an extra HTTP request each time you call it.)
- By default, Sass transpiles all the .scss files directly. \_partial.scss files are not transplied directly.

- body.classList.toggle("dark-mode"); if want to use class
- @media (prefers-schema-mode)

### Reseach completed : 14 Nov 2024, 14:00 (Preparation phase)

- Extract following things from figma first :

  1. images, icons,
  2. font faimilys, font sizes,
  3. color-codes.

##### (Attack phase started )

- 1. Attack Navbar ;
- 2. Atatck Hero-section ;

---

<!-- Learnings -->

- compile time error vs Runtime error ?
- use css vars. scss vars for static (will not change after compile), While css vars for dynamic (can change at runtime , form js, user etc).

readme updated from home.
