# Assignment #6 — jQuery (Selectors, Effects, Animations)

## Student information
- **Name:** Zhumadilla Saniya
- **Group:** IT-2503

## Project
A responsive personal portfolio demonstrating jQuery selectors, effects, DOM manipulation, form interaction, and animations.

## How to run
1. Download or clone this repository.
2. Open `index.html` in a browser. An internet connection is required to load jQuery from the CDN and the remote gallery photos.
3. Open browser Developer Tools → Console and confirm the message: `jQuery is ready!`.

## Assignment tasks

### Task 0 — Setup
- jQuery 3.7.1 is included from the official jQuery CDN.
- All interactions are initialized inside `$(document).ready(function () { ... })`.
- The ready message is printed in the browser console.

### Task 1 — Selectors & CSS
- The page displays a name, personal headline, introduction, and portfolio profile.
- Tag (`body`), ID (`#mainHeadline`), and class (`.hero-intro`) selectors are used.
- The greeting is updated dynamically with `.html()`.
- `.css()` changes selected element styling.
- Sun and moon buttons switch light and dark themes.

### Task 2 — Visibility Methods
- The About Me section includes a biography, status message, and fun facts.
- Hide, Show, and Toggle buttons use `.hide()`, `.show()`, and `.toggle()`.

### Task 3 — Fade Methods
- The gallery contains two images.
- Fade In, Fade Out, and Fade Toggle buttons use `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()`.

### Task 4 — Slide Methods
- Three clickable headings show favorite music, movie, and subject information.
- Panels use `.slideUp()`, `.slideDown()`, and `.slideToggle()` for smooth interactions.

### Task 5 — Add & Remove Elements
- The initial technical skills list contains HTML5, CSS3, JavaScript, and jQuery.
- Visitors can add a skill to the end with `.append()`, add one to the beginning with `.prepend()`, and remove the last item with `.remove()`.
- Empty input is rejected with a visible validation message.

### Task 6 — Modifying Attributes
- A social media link is included.
- The button changes its `href` and visible label using `.attr()`.

### Task 7 — Form Interaction
- The form includes Name and Email inputs.
- Live previews read values with `.val()` and display them with `.text()`.

### Task 8 — Basic Animation
- Three skill bars start at zero width.
- The Animate My Skills button uses `.animate()` with different target widths.
- Clicking the button again animates all bars back to zero.

## Screenshots for submission

Add your own browser screenshots in the `screenshots/` folder. The assignment requires screenshots for each part; capture the running project in your browser and place the corresponding image after each task heading below.

- **Task 0 — Setup:** screenshot of the browser console showing `jQuery is ready!`.
- **Task 1 — Selectors & CSS:** screenshot of the hero/profile and theme controls.
- **Task 2 — Visibility Methods:** screenshot of About Me with status/facts visible.
- **Task 3 — Fade Methods:** screenshot of the gallery.
- **Task 4 — Slide Methods:** screenshot showing an expanded accordion panel.
- **Task 5 — Add & Remove Elements:** screenshot showing the skills list and controls.
- **Task 6 — Modifying Attributes:** screenshot showing the social link after changing its destination.
- **Task 7 — Form Interaction:** screenshot showing live Name and Email preview.
- **Task 8 — Basic Animation:** screenshot with the animated skill bars filled.

## Work summary
I created a responsive personal portfolio using HTML, CSS, JavaScript, and jQuery. I connected the jQuery CDN and initialized the code when the document was ready. I practiced selectors and CSS changes, implemented visibility, fade, and slide effects, manipulated DOM elements and attributes, created a live form preview, and animated skill bars. I tested the interactions in the browser and organized the source code into separate files.

## Before submitting
- [ ] Check that your name and group are displayed correctly in the page and this README.
- [ ] Personalize the biography and examples so they accurately describe you.
- [ ] Test all buttons and form interactions in your browser.
- [ ] Capture and add the required screenshots to `screenshots/` and embed them under the matching task sections.
- [ ] Push the complete project to a **public** GitHub repository.
- [ ] Enable GitHub Pages (Settings → Pages → deploy from `main` branch, `/ (root)`).
- [ ] Submit both the GitHub repository URL and GitHub Pages URL on Moodle.
- [ ] Be ready to explain the jQuery methods during the mandatory defence.


## Gallery photos
- `assets/saniya-celebration.jpg` — personal celebration photo.
- `assets/saniya-rest-time.jpg` — personal rest-time photo.
The About Me avatar remains the original initials; no Halloween photo is used.
