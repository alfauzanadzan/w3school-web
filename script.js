// Floating Elements Generator
const container = document.getElementById('floating-container');
for (let i = 0; i < 30; i++) {
  const el = document.createElement('div');
  el.className = 'floating-element';
  el.style.left = `${Math.random() * 100}%`;
  const size = Math.random() * 20 + 10;
  el.style.width = el.style.height = `${size}px`;
  el.style.animationDelay = `${Math.random() * 20}s`;
  el.style.animationDuration = `${Math.random() * 10 + 10}s`;
  container.appendChild(el);
}

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;

    const inc = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(update, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  update();
});
