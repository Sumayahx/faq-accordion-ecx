const faqItems = 
document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
    const button = item.querySelector('.faq-toggle');
    const question = item.querySelector('.faq-question');
    const icon = button.querySelector('img');
    const answer = item.querySelector('.faq-answer');

    const toggleFAQ = ( ) => {
        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            answer.style.display = 'block';
            icon.src = 'images/icon-minus.svg';
            icon.alt = 'Collapse';
        } else {
            answer.style.display = 'none';
            icon.src = 'images/icon-plus.svg';
            icon.alt = 'Expand';
        }
    };

    button.addEventListener('click', toggleFAQ);
    question.addEventListener('click', toggleFAQ);
});