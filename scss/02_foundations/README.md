# Foundational Patterns

> Files that exist in this directory should viewed as the "theme."

When creating a Design System the Foundational Patterns are patterns that add aesthetic value or strengthen the emotional connection to a design. These patterns are typically the limited set of patterns found in style guides.

**Note: changes to these files can have a global impact**

---

## Hierarchy
Some foundational patterns are part of larger categories & are organized in sub-directories when possible. Additional sub-groups could include shapes, elevation, iconography, motion, etc. As a general rule, add sub-directories when possible.

+ base/
  * 00-reset - browser reset should be the first file in this directory
  * 01-root - :root element for CSS variables, themeing, etc
+ layout/
  * grid - define the grid
  * sizing - common responsive widths & heights that fall outside the grid
  * spacing - global, responsive margin & padding
+ typography/
  * font-general - define font families, weights, styles, & variants
  * font-sizes - define responsive font sizes
  * headings - define headings
  * text-colors - define colors for fonts
  * text-utils - commone text helpers relative to the theme





