import { profile } from './data/profile.js';
import { about } from './data/about.js';
import { experience } from './data/experience.js';
import { skills } from './data/skills.js';
import { academic } from './data/academic.js';
import { education } from './data/education.js';

const app = document.getElementById('app');
const el = (html) => html.trim();
const sectionHeader = (num, title) => el(`
  <div class="section-header fade-in">
    <span class="section-num">${num}</span>
    <h2 class="section-title">${title}</h2>
    <div class="section-line"></div>
  </div>
`);

function renderHero() {
  const [firstName, ...lastParts] = profile.name.split(' ');
  const lastName = lastParts.join(' ');
  return el(`
    <div id="hero">
      <div class="hero-grid-bg"></div>
      <div class="hero-glow"></div>
      <div class="hero-glow-2"></div>
      <div class="hero-content">
        <p class="hero-eyebrow">${profile.availability}</p>
        <h1 class="hero-name">${firstName}<br><em>${lastName}</em></h1>
        <p class="hero-subtitle">${profile.headline} · <span class="accent">${profile.highlight}</span> · ${profile.secondary}</p>
        <div class="hero-tags">
          ${profile.tags.map((tag) => {
    const cls = `tag ${tag.accent ? 'amber' : ''}`;
    if (tag.experienceSlug) {
      return `<a href="#exp-${tag.experienceSlug}" class="${cls}">${tag.label}</a>`;
    }
    return `<span class="${cls}">${tag.label}</span>`;
  }).join('')}
        </div>
        <div class="hero-stats">
          ${profile.stats.map(stat => `<div class="stat-item"><div class="stat-num">${stat.value}</div><div class="stat-label">${stat.label}</div></div>`).join('')}
        </div>
        <div class="hero-actions">
          <a href="#experience" class="btn-primary">View Work ↓</a>
          <a href="#academic" class="btn-ghost">Academic Portfolio</a>
          <a href="${profile.resumeUrl}" class="btn-ghost" target="_blank" rel="noopener">
            Resume
          </a>
        </div>
      </div>
      <div class="hero-photo-col">
        <div class="hero-photo-card">
          <div class="hero-photo-frame"><img src="${profile.image}" alt="${profile.imageAlt}" /></div>
          <div class="photo-status"><div><strong>${profile.name}</strong><br><span>Java Backend / Full Stack Engineer · Spring Boot · AWS · React.js</span></div><div class="status-dot" title="Available"></div></div>
        </div>
      </div>
    </div>
  `);
}

function renderAbout() {
  const contact = profile.contact;
  return el(`
    <div class="full-divider"></div>
    <section id="about">
      ${sectionHeader('01', 'About')}
      <div class="about-grid fade-in">
        <div class="about-text">${about.map(p => `<p>${p}</p>`).join('')}</div>
        <div class="contact-card fade-in">
          <h3>Contact</h3>
          <div class="contact-item"><span>📧</span><a href="mailto:${contact.email}">${contact.email}</a></div>
          <div class="contact-item"><span>📱</span><span>${contact.phone}</span></div>
          <div class="contact-item"><span>🔗</span><a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn Profile</a></div>
          <div class="contact-item"><span>🌐</span><a href="${contact.portfolio}" target="_blank" rel="noopener">Portfolio Website</a></div>
          <div class="contact-item"><button data-open-contact style="background:none;border:none;cursor:pointer;font-family:var(--font-mono);font-size:.72rem;color:var(--cyan);padding:0;letter-spacing:.05em;">✉ Send a message →</button></div>
        </div>
      </div>
    </section>
  `);
}

function renderExperience() {
  return el(`
    <div class="full-divider"></div>
    <section id="experience">
      ${sectionHeader('02', 'Experience')}
      <div class="exp-list">
        ${experience.map(job => `
          <div class="exp-item fade-in" id="exp-${job.slug}">
            <div class="exp-meta"><div class="exp-period">${job.period}</div><div class="exp-company">${job.company}</div><div class="exp-location">${job.location}</div></div>
            <div class="exp-content">
              <div class="exp-role">${job.role}</div>
              <ul class="exp-highlights">${job.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
              <div class="exp-stack">${job.stack.map(item => `<span class="stack-chip">${item}</span>`).join('')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `);
}

function renderSkills() {
  return el(`
    <div class="full-divider"></div>
    <section id="skills">
      ${sectionHeader('03', 'Skills')}
      <div class="skills-grid">
        ${skills.map(group => `
          <div class="skill-group fade-in">
            <div class="skill-group-label">${group.group}</div>
            <div class="skill-pills">${group.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `);
}

function renderAcademic() {
  return el(`
    <div class="full-divider"></div>
    <section id="academic">
      ${sectionHeader('04', 'Academic Portfolio')}
      <div class="academic-course-header fade-in">
        <div><div class="course-name">${academic.course.name}</div><div class="course-meta">${academic.course.meta}</div></div>
        <span class="course-badge">${academic.course.badge}</span>
      </div>
      <div class="assignments-grid">
        ${academic.assignments.map(a => `
          <div class="assignment-card fade-in" ${a.disabled ? 'style="opacity:.5;pointer-events:none;"' : ''}>
      <div class="assignment-preview">
        ${a.image
      ? `<img src="${a.image}" alt="${a.title}" loading="lazy" />`
      : `<div class="preview-placeholder">
              <span class="preview-icon">${a.icon || '📄'}</span>
              <span class="preview-label">${a.previewLabel || 'Coming Soon'}</span>
            </div>`
    }
      </div>

      <div class="assignment-body">
        <div class="assignment-week">${a.week}</div>
        <div class="assignment-title">${a.title}</div>
        <div class="assignment-desc">${a.description}</div>

        <div class="assignment-footer">
          ${a.status ? `<span class="assignment-status status-${a.statusType || 'default'}">${a.status}</span>` : ''}
          ${a.link ? `<a href="${a.link}" class="assignment-link">View Artifact →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('')}
</div>
    </section>
  `);
}

function renderEducation() {
  return el(`
    <div class="full-divider"></div>
    <section id="education">
      ${sectionHeader('05', 'Education')}
      <div class="edu-grid">
        ${education.map(item => `
          <div class="edu-card fade-in">
            <div class="edu-degree">${item.degree}</div>
            <div class="edu-school">${item.school}</div>
            <div class="edu-field">${item.field}</div>
            <div class="edu-gpa"><span class="edu-gpa-num ${item.perfect ? 'perfect' : ''}">${item.gpa}</span><span class="edu-gpa-label">${item.label}</span></div>
          </div>
        `).join('')}
      </div>
    </section>
  `);
}

function renderFooterLinks() {
  const c = profile.contact;
  document.getElementById('footerLinks').innerHTML = `
    <a href="mailto:${c.email}">Email</a>
    <a href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    <a href="${c.github}" target="_blank" rel="noopener">GitHub</a>
  `;
}

function setupModal() {
  const modal = document.getElementById('contactModal');
  const form = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const formError = document.getElementById('formError');
  document.querySelectorAll('[data-open-contact]').forEach(btn => btn.addEventListener('click', () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }));
  document.querySelectorAll('[data-close-contact]').forEach(btn => btn.addEventListener('click', closeModal));
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }

  document.getElementById('modalLinkedIn').href = profile.contact.linkedin;
  document.getElementById('modalEmail').href = `mailto:${profile.contact.email}`;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending…';
    formError.style.display = 'none';
    try {
      const res = await fetch(profile.contact.formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('Form submission failed');
      document.getElementById('formView').style.display = 'none';
      document.getElementById('successView').style.display = 'block';
    } catch {
      formError.style.display = 'block';
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send →';
    }
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

app.innerHTML = [renderHero(), renderAbout(), renderExperience(), renderSkills(), renderAcademic(), renderEducation()].join('');
renderFooterLinks();
setupModal();
setupReveal();
