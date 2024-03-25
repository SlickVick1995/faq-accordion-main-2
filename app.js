let buttons = document.querySelectorAll('button');

// Function to handle resize
function handleResize() {
 buttons.forEach((button) => {
    if (button.classList.contains("active")) { // Adjusted to check for 'active' class
      button.nextElementSibling.style.maxHeight =
        button.nextElementSibling.scrollHeight + "px";
    }
 });
}

window.addEventListener("resize", handleResize);

// Existing event listener for button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
       button.classList.toggle('active');
       if(button.classList.contains('active')){
        button.nextElementSibling.style.maxHeight = button.nextElementSibling.scrollHeight + 'px';
        button.querySelector('img').src = 'assets/images/icon-minus.svg';
       } else {
        button.nextElementSibling.style.maxHeight = 0;
        button.querySelector('img').src = 'assets/images/icon-plus.svg';
       }
    });
});

