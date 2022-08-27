# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

# Mobile Preview 

![screenshot]()

# Mobile Preview - active

![screenshot]()

# Desktop Preview 

![screenshot]()

# Mobile Preview - active 

![screenshot]()

### Links

 - Source code: []()
 - Live website: []()

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

This was a really fun challenge and was anticipating to complete this, after I completed a previous FAQ project which is distinct to this one however it followed a similar principle. Recreating the desgin of this FAQ was the most fun, particularly the animation in desktop mode. First I created a function in javascript that allowed a user to press any question and view the answer, where they can see multiple answers at the same time however I noticed that it made the FAQ too 'messy' so I changed the code to allow the user to click a question and then click another, which would close the previous question that was clicked. Overall, this was an enjoyable project and had fun coding the FAQ from scatch whilst following the design provided.

CSS - `@keyframes`:

```css

@keyframes upDown {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-10px);
        }

        100% {
            transform: translateY(0);
        }
    }

```

Javascript - FAQ forEach: 

```javascript

const faq = document.querySelectorAll(".faq");

faq.forEach(faqEach => {
    faqEach.addEventListener("click", () => {
        faq.forEach(section => {
            if(section !== faqEach) {
                section.classList.remove("active");
            }
        });
        faqEach.classList.toggle("active");
    });
});

```

### Continued development

For future developments, I should focus on building web pages to work on my HTML and CSS skills on layouts. Also, I should focus on working with more javascript projects in the junior section.


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)
