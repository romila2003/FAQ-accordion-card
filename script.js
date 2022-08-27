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


