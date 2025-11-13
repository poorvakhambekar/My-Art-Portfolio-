
// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: highlight current section in nav as you scroll (minimal)
const links = [...document.querySelectorAll('.topnav a[href^="#"]')];
const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const onScroll = () => {
  const y = window.scrollY + 120;
  let active = null;
  for (const s of sections) {
    if (s.offsetTop <= y) active = s;
  }
  links.forEach(a => {
    a.classList.toggle('active', active && a.getAttribute('href') === `#${active.id}`);
  });
};
window.addEventListener('scroll', onScroll);
onScroll();

const track = document.querySelector('.carousel-track');
if (track) {
  const original = track.innerHTML;
  track.innerHTML = `<div class="sequence">${original}</div><div class="sequence">${original}</div>`;

  const seq = track.querySelector('.sequence');
  const distance = seq.scrollWidth;

  track.style.setProperty('--loop-distance', `${distance}px`);

  const pxPerSecond = 90;  // speed control
  const speedSeconds = Math.max(8, Math.min(60, distance / pxPerSecond));
  track.style.setProperty('--speed', `${speedSeconds}s`);
}

// ---- Carousel click delegation: always navigate to Work piece ----
const carousel = document.querySelector('.carousel');
if (carousel) {
  carousel.addEventListener('click', (e) => {
    const link = e.target.closest('a.card-link, [data-target]');
    if (!link) return;

    // Prefer normal anchors; fallback to data-target if needed
    const href = link.getAttribute('href');
    if (href) {
      // Let the browser handle it (works across Live Server / files)
      return;
    }
    const target = link.getAttribute('data-target');
    if (target) {
      window.location.href = `work.html#${target}`;
    }
  });
}



