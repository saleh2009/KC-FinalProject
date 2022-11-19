function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 const btn = document.getElementById('btn').innerHTML;

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'black';

  // 👇️ Change text color for clicked element only
  // event.target.style.color = 'salmon';
});
