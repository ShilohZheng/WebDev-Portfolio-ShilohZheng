# Shiloh's Web Development Portfolio

![My Website](images/Screenshot_of_my_website.png)

This is my personal portfolio website showcasing my journey in learning web development, with a focus on HTML, CSS, and JavaScript fundamentals.

## Features

- **Colorful Design**: Carefully selected color palette with page-specific backgrounds
- **Responsive Layout**: Adapts to different screen sizes
- **Accessible**: Follows WCAG guidelines
- **Interactive Elements**: Hover effects and buttons
- **Multi-page Structure**: Organized content sections

## Color Scheme

| Color Name       | Hex Code  | Usage Example         |
|------------------|----------|-----------------------|
| Deep Blue        | #003366  | Headers, text accents |
| Light Blue       | #B3E5FC  | Portfolio background  |
| Light Green      | #C8E6C9  | Accessibility page    |
| Light Purple     | #E1BEE7  | Behind-the-scenes page|
| Light Orange     | #FFE0B2  | Design page           |
| Light Yellow     | #FFF9C4  | Global Goals page     |

## Pages

1. **Home**: Introduction and navigation hub
2. **Portfolio**: Showcases my projects and interests
3. **Design**: Explains my design thinking process
4. **Global Goal**: Focus on UN Sustainable Development Goal 15
5. **Accessibility**: Details accessibility features
6. **Behind the Scenes**: Development process and challenges

## Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Variables)
- JavaScript (Basic interactivity)
- GitHub Pages (Hosting)

## How to Run Locally

## ♿ Accessibility Features

This website was built with accessibility as a core priority, implementing the following features:

### **1. Semantic HTML Structure**
- Proper use of HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Logical document outline for screen readers
- Meaningful link text (e.g., "Read more about animal protection" instead of "Click here")

### **2. Visual Design**
- **Color Contrast**: All text meets WCAG AA standards:
  - Normal text: 4.5:1 contrast ratio
  - Large text (headers): 3:1 ratio
- **Color Independence**: No information conveyed solely through color
- **Focus Indicators**: Visible focus rings for keyboard navigation

### **3. Navigation**
- Keyboard-operable menus (Tab/Shift+Tab/Enter)
- Skip-to-content link (hidden until focused)
- Consistent navigation across all pages

### **4. Media & Interactive Elements**
- **Images**: 
  - Descriptive alt attributes for all meaningful images
  - Decorative images have empty alt (`alt=""`)
- **Buttons**: 
  - ARIA labels where needed
  - Clear hover/focus states
- **Animations**:
  - Prefers-reduced-motion media query support
  - No flashing content (>3 flashes/second)
