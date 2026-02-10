document.addEventListener('DOMContentLoaded',()=>{
  // footer year
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();

  // reveal on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('reveal'); obs.unobserve(e.target); }
    });
  },{threshold:0.12});
  document.querySelectorAll('[data-reveal]').forEach(el=>obs.observe(el));

  // modal open/close
  const modal = document.getElementById('planner-modal');
  const openBtns = [document.getElementById('open-planner'), document.getElementById('plan-now'), document.getElementById('start-free')];
  openBtns.forEach(b=>{ if(b) b.addEventListener('click',()=>openModal()) });
  document.getElementById('close-modal').addEventListener('click',closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal() });

  function openModal(){ modal.setAttribute('aria-hidden','false'); const first = modal.querySelector('input,button,select'); if(first) first.focus(); }
  function closeModal(){ modal.setAttribute('aria-hidden','true'); }

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href'); if(href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'}); }
    });
  });

  // form: mock AI itinerary
  const form = document.getElementById('planner-form');
  const result = document.getElementById('itinerary-result');
  function showLoading(){ result.hidden = false; result.textContent = 'Planning your trip… ✨'; }
  function showItinerary(data){ result.innerHTML = `<strong>Smart itinerary for ${data.destination}</strong><ol><li>Arrival & quick coffee — local cafe</li><li>Curated walking tour + lunch</li><li>Hidden viewpoint for sunset</li></ol><p class="muted">Editable & shareable — export when ready.</p>`; }

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const payload = { destination: fd.get('destination'), start: fd.get('start'), end: fd.get('end'), style: fd.get('style'), budget: fd.get('budget') };
    showLoading();
    // Demo: simulate backend/AI call
    await new Promise(r=>setTimeout(r,1200));
    showItinerary(payload);
  });
});
