//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach((sq) => {
    sq.addEventListener('mouseenter', () => {
        squares.forEach(s => s.style.backgroundColor = "#6F4E37"); // coffee
        sq.style.backgroundColor = "#E6E6FA"; // hovered stays lavender
    });

    sq.addEventListener('mouseleave', () => {
        squares.forEach(s => s.style.backgroundColor = "#E6E6FA"); // reset all
    });
});

