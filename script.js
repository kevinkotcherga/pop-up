const open = document.getElementById("open");
const close = document.getElementById("close");
const refuse = document.getElementById("btn-refuse");
const container = document.getElementById("container");

open.addEventListener('click', () => {
  container.classList.add('active');
});

close.addEventListener('click', () => {
  container.classList.remove('active');
});

refuse.addEventListener('click', () => {
  container.classList.remove('active');
});

container.addEventListener('click', () => {
  container.classList.remove('active');
});
