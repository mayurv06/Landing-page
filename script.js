document.querySelector('.hamburger')?.addEventListener('click', () => {
 document.querySelector('.nav-links')?.classList.toggle('open');
});

const canvas = document.getElementById('particle-canvas');
if (canvas) {
 const ctx = canvas.getContext('2d');
 let w = (canvas.width = window.innerWidth);
 let h = (canvas.height = window.innerHeight);
 const dots = Array.from({ length: 60 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 2 + 1,
  vx: Math.random() * 0.6 - 0.3,
  vy: Math.random() * 0.6 - 0.3,
 }));

 function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
 }
 window.addEventListener('resize', resize);

 function tick() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(78,168,233,0.25)';
  dots.forEach(d => {
   d.x += d.vx;
   d.y += d.vy;
   if (d.x < 0 || d.x > w) d.vx *= -1;
   if (d.y < 0 || d.y > h) d.vy *= -1;
   ctx.beginPath();
   ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
   ctx.fill();
  });
  requestAnimationFrame(tick);
 }
 tick();
}

document.getElementById('ctaMain')?.addEventListener('click', (e)=>{ e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior:'smooth'}); });
document.getElementById('joinTop')?.addEventListener('click', (e)=>{ e.preventDefault(); alert('Welcome to Wonder&Vibe  sign-up coming soon .'); });
document.getElementById('finalCta')?.addEventListener('click', (e)=>{ e.preventDefault(); alert('Welcome to Wonder&Vibe  sign-up coming soon .'); });
