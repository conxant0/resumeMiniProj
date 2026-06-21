# Soft Resume Cards Design

## Goal

Improve the visual polish and readability of the resume windows with minimal, beginner-friendly CSS edits. The project should still feel like the same Mac desktop resume, just cleaner and easier to scan.

## Scope

This design is CSS-only. It does not add HTML, JavaScript, libraries, images, or new content.

The work applies to the existing window content styles in `style.css`, especially:

- `.skillGroup`
- `.educationCard`
- `.projectCard`
- `.contactCard`
- `.windowContent h2`
- project and contact links

## Visual Direction

Use the Soft Resume Cards direction selected during brainstorming.

Cards inside the folder windows will receive:

- A subtle blue left border using the existing desktop blue tone.
- A light shadow to separate each card from the window background.
- Slightly improved spacing for a cleaner resume feel.
- A small hover state that changes the border color and lifts the card very slightly.

Links inside project and contact cards will receive:

- A clearer hover style.
- No heavy button styling, so the page stays simple and resume-like.

Section headings will receive:

- Better bottom spacing so cards do not feel crowded under each title.

## Mobile Behavior

The existing mobile layout remains unchanged in structure. Cards should still stack naturally in one column. Hover effects can remain harmless on mobile, but shadows and spacing should stay modest so small screens do not feel cramped.

## Constraints

- Keep the CSS beginner-friendly: simple selectors, borders, padding, colors, shadows, and hover states.
- Reuse existing class names.
- Avoid new layout systems beyond the flex and grid already used.
- Avoid visual changes to desktop folders, dock, menu bar, or JavaScript behavior.

## Verification

After implementation, verify by opening `index.html` or serving the static page and checking:

- Skills, Education, Projects, and Contact windows all show the updated card polish.
- Links remain readable and clickable.
- Mobile width around 600px still looks clean and does not create text overlap.
