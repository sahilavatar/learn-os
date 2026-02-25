/**
 * learnOS — app.js
 * Vanilla JS. No dependencies. Works with index.html as-is.
 */

'use strict';

// ── Data ──────────────────────────────────────────────────────────────────────

const COURSES = [
  { c:'Introduction to Computer Science', e:'💻', t:'6.0001 - Intro to CS and Programming in Python',            i:'MIT OCW',            u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA', p:'youtube'  },
  { c:'Introduction to Computer Science', e:'💻', t:'CS50 - Introduction to Computer Science',                    i:'Harvard University',  u:'https://www.youtube.com/playlist?list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V', p:'youtube'  },
  { c:'Introduction to Computer Science', e:'💻', t:'CS 106A - Programming Methodology',                          i:'Stanford University', u:'https://www.youtube.com/playlist?list=PL84A56BC7F4A1F852',                  p:'youtube'  },
  { c:'Introduction to Computer Science', e:'💻', t:'CS 61A - Structure and Interpretation of Computer Programs', i:'UC Berkeley',         u:'https://cs61a.org/',                                                        p:'external' },
  { c:'Introduction to Computer Science', e:'💻', t:'CS 107 - Programming Paradigms',                             i:'Stanford University', u:'https://see.stanford.edu/Course/CS107',                                      p:'external' },
  { c:'Introduction to Computer Science', e:'💻', t:'Introduction to Problem Solving and Programming',            i:'IIT Kanpur',          u:'https://nptel.ac.in/courses/106104074/',                                    p:'external' },
  { c:'Data Structures & Algorithms', e:'📊', t:'6.006 - Introduction to Algorithms',         i:'MIT OCW',            u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY',              p:'youtube'  },
  { c:'Data Structures & Algorithms', e:'📊', t:'Algorithms: Design and Analysis 1',          i:'Stanford University', u:'https://www.youtube.com/playlist?list=PLXFMmlk03Dt7Q0xr1PIAriY5623cKiH7V',              p:'youtube'  },
  { c:'Data Structures & Algorithms', e:'📊', t:'Algorithms: Design and Analysis 2',          i:'Stanford University', u:'https://www.youtube.com/playlist?list=PLXFMmlk03Dt5EMI2s2WQBsLsZl7A5HEK6',              p:'youtube'  },
  { c:'Data Structures & Algorithms', e:'📊', t:'CS 170 - Algorithms',                        i:'UC Berkeley',         u:'https://www.youtube.com/playlist?list=PLIygTcviGPKD4TU_QsvJI0G7QnrIS_7Wn',              p:'youtube'  },
  { c:'Data Structures & Algorithms', e:'📊', t:'Data Structures — mycodeschool',             i:'mycodeschool',        u:'https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P',              p:'youtube'  },
  { c:'Data Structures & Algorithms', e:'📊', t:'CS 161 - Design and Analysis of Algorithms', i:'Stanford University', u:'http://openclassroom.stanford.edu/MainFolder/CoursePage.php?course=IntroToAlgorithms', p:'external' },
  { c:'Data Structures & Algorithms', e:'📊', t:'Data Structures and Algorithms',             i:'IIT Delhi',           u:'https://nptel.ac.in/courses/106102064/',                                                  p:'external' },
  { c:'Machine Learning', e:'🧠', t:'CS229 - Machine Learning (Andrew Ng)',      i:'Stanford University',    u:'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU', p:'youtube'  },
  { c:'Machine Learning', e:'🧠', t:'Probabilistic Machine Learning',            i:'University of Tuebingen', u:'https://www.youtube.com/playlist?list=PL05umP7R6ij1tHaOFY96m5uX3J21a6yNd', p:'youtube'  },
  { c:'Machine Learning', e:'🧠', t:'Statistical Machine Learning',              i:'University of Tuebingen', u:'https://www.youtube.com/playlist?list=PL05umP7R6ij2XCvrRzLokX6EoHWaGA2cC', p:'youtube'  },
  { c:'Machine Learning', e:'🧠', t:'Applied Machine Learning',                  i:'Cornell Tech',            u:'https://www.youtube.com/playlist?list=PL2UML_KCiC0UlY7iCQDSiGDMovaupqc83', p:'youtube'  },
  { c:'Machine Learning', e:'🧠', t:'CS 189 - Introduction to Machine Learning', i:'UC Berkeley',             u:'https://people.eecs.berkeley.edu/~jrs/189/',                               p:'external' },
  { c:'Machine Learning', e:'🧠', t:'Machine Learning, 2014-2015',               i:'University of Oxford',    u:'https://www.cs.ox.ac.uk/people/nando.defreitas/machinelearning/',          p:'external' },
  { c:'Deep Learning', e:'🔬', t:'Neural Networks: Zero to Hero',           i:'Andrej Karpathy',    u:'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ', p:'youtube' },
  { c:'Deep Learning', e:'🔬', t:'MIT 6.S191 - Introduction to Deep Learning', i:'MIT',             u:'https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI', p:'youtube' },
  { c:'Deep Learning', e:'🔬', t:'CS231n - CNNs for Visual Recognition',    i:'Stanford University', u:'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv', p:'youtube' },
  { c:'Deep Learning', e:'🔬', t:'Practical Deep Learning for Coders',      i:'fast.ai',             u:'https://www.youtube.com/playlist?list=PLfYUBJiXbdtSvpQjSnJJ_PmDQB_VyT5iU', p:'youtube' },
  { c:'Deep Learning', e:'🔬', t:"Let's build GPT from scratch",            i:'Andrej Karpathy',    u:'https://www.youtube.com/watch?v=kCc8FmEb1nY',                               p:'youtube' },
  { c:'Natural Language Processing', e:'🗣️', t:'CS224N - NLP with Deep Learning',        i:'Stanford University', u:'https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ', p:'youtube' },
  { c:'Natural Language Processing', e:'🗣️', t:'CS224U - Natural Language Understanding', i:'Stanford University', u:'https://www.youtube.com/playlist?list=PLoROMvodv4rPt5D0zs3YhbWSZA8Q_lAJC', p:'youtube' },
  { c:'Natural Language Processing', e:'🗣️', t:'CMU CS 11-747 Neural Nets for NLP',      i:'CMU',                 u:'https://www.youtube.com/playlist?list=PL8PYTP1V4I8AkaHEJ7lOOrlex-pcxS-XV', p:'youtube' },
  { c:'Natural Language Processing', e:'🗣️', t:'NLP Course',                              i:'Hugging Face',        u:'https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o', p:'youtube' },
  { c:'Operating Systems', e:'⚙️', t:'CS 162 - Operating Systems',          i:'UC Berkeley', u:'https://www.youtube.com/playlist?list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC', p:'youtube'  },
  { c:'Operating Systems', e:'⚙️', t:'6.828 - Operating System Engineering', i:'MIT',        u:'https://www.youtube.com/playlist?list=PLfciLKR3SgqNJKKIKUliWoNBBH1VHL3AP', p:'youtube'  },
  { c:'Operating Systems', e:'⚙️', t:'Introduction to Operating Systems',    i:'IIT Madras', u:'https://nptel.ac.in/courses/106106144/',                                    p:'external' },
  { c:'Database Systems', e:'🗄️', t:'15-445 - Intro to Database Systems',  i:'CMU',         u:'https://www.youtube.com/playlist?list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq', p:'youtube'  },
  { c:'Database Systems', e:'🗄️', t:'15-721 - Advanced Database Systems',  i:'CMU',         u:'https://www.youtube.com/playlist?list=PLSE8ODhjZXjYa_zX-KeMJui7pcN1rIaIJ', p:'youtube'  },
  { c:'Database Systems', e:'🗄️', t:'CS 186 - Database Systems',           i:'UC Berkeley', u:'http://www.infocobuild.com/education/audio-video-courses/computer-science/cs186-spring2015-berkeley.html', p:'external' },
  { c:'Database Systems', e:'🗄️', t:'Database Design',                     i:'IIT Madras',  u:'https://nptel.ac.in/courses/106106093/',                                    p:'external' },
  { c:'Computer Networks', e:'🌐', t:'Introduction to Computer Networking',   i:'Stanford University',     u:'https://www.youtube.com/playlist?list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS', p:'youtube' },
  { c:'Computer Networks', e:'🌐', t:'CS 436 - Distributed Computer Systems', i:'University of Waterloo',  u:'https://www.youtube.com/playlist?list=PLawkBQ15NDEkDJ5IyLIJUTZ1rRM9YQq6N', p:'youtube' },
  { c:'Distributed Systems', e:'🔗', t:'6.824 - Distributed Systems',          i:'MIT',                       u:'https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB', p:'youtube' },
  { c:'Distributed Systems', e:'🔗', t:'Distributed Systems Lecture Series',   i:'Martin Kleppmann/Cambridge',u:'https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB', p:'youtube' },
  { c:'Distributed Systems', e:'🔗', t:'CSE 138 - Distributed Systems',        i:'UC Santa Cruz',             u:'https://www.youtube.com/playlist?list=PLNPUF5QyWU8O0Wd8QDh9KaM1ggsxspJ31', p:'youtube' },
  { c:'Artificial Intelligence', e:'🤖', t:'CS50 AI - Introduction to AI with Python', i:'Harvard',    u:'https://www.youtube.com/playlist?list=PLhQjrBD2T383Xfn0zECHrOTpfOSlptPAB', p:'youtube'  },
  { c:'Artificial Intelligence', e:'🤖', t:'CS 188 - Introduction to AI',              i:'UC Berkeley',u:'https://www.youtube.com/playlist?list=PLp8QV47qJEg7WWVg_5eOECzVPpy23UjJz', p:'youtube'  },
  { c:'Artificial Intelligence', e:'🤖', t:'CS221 - AI: Principles and Techniques',    i:'Stanford',   u:'https://www.youtube.com/playlist?list=PLoROMvodv4rO1NB9TD4iUZ3qghGEGtqNX', p:'youtube'  },
  { c:'Artificial Intelligence', e:'🤖', t:'6.034 Artificial Intelligence',            i:'MIT OCW',    u:'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',     p:'external' },
  { c:'Computer Vision', e:'👁️', t:'CS231n - Deep Learning for Computer Vision', i:'Stanford',              u:'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv', p:'youtube'  },
  { c:'Computer Vision', e:'👁️', t:'Computer Vision - Andreas Geiger',           i:'University of Tuebingen',u:'https://www.youtube.com/playlist?list=PL05umP7R6ij35L2MHGzis8AEHz7mg381_', p:'youtube'  },
  { c:'Computer Vision', e:'👁️', t:'First Principles of Computer Vision',        i:'Columbia University',    u:'https://fpcv.cs.columbia.edu/',                                            p:'external' },
  { c:'Security', e:'🔐', t:'6.858 Computer Systems Security', i:'MIT OCW',  u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh', p:'youtube'  },
  { c:'Security', e:'🔐', t:'CS 253 Web Security',             i:'Stanford', u:'https://web.stanford.edu/class/cs253/',                                     p:'external' },
  { c:'Math for Computer Science', e:'📐', t:'6.042J Mathematics for Computer Science',      i:'MIT OCW',                u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP60UlabZBeeqOuoLuj_KNphQ', p:'youtube' },
  { c:'Math for Computer Science', e:'📐', t:'Essence of Linear Algebra',                    i:'3Blue1Brown',            u:'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', p:'youtube' },
  { c:'Math for Computer Science', e:'📐', t:'18.065 Matrix Methods in Data Analysis and ML',i:'MIT OCW (Gilbert Strang)',u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNmAh5WqLlFtZFBHLVkK',p:'youtube' },
  { c:'Math for Computer Science', e:'📐', t:'Statistics 110: Probability',                  i:'Harvard',                u:'https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo', p:'youtube' },
  { c:'Math for Computer Science', e:'📐', t:'Essence of Calculus',                          i:'3Blue1Brown',            u:'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', p:'youtube' },
  { c:'Reinforcement Learning', e:'🎮', t:'Introduction to Reinforcement Learning', i:'DeepMind / UCL', u:'https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ', p:'youtube' },
  { c:'Reinforcement Learning', e:'🎮', t:'CS285 - Deep Reinforcement Learning',   i:'UC Berkeley',    u:'https://www.youtube.com/playlist?list=PL_iWQOsE6TfX7MaC6C3HcdOf1g337dlC9', p:'youtube' },
  { c:'Reinforcement Learning', e:'🎮', t:'RL Course by David Silver',             i:'DeepMind',       u:'https://www.youtube.com/playlist?list=PLbWDNovNB5mqFBgq7i3MY6Ui4zudcvNFJ', p:'youtube' },
  { c:'Generative AI & LLMs', e:'✨', t:'Stanford CS25 - Transformers United', i:'Stanford',        u:'https://www.youtube.com/playlist?list=PLoROMvodv4rNiJRchCzutFw5ItR_Z27CM', p:'youtube'  },
  { c:'Generative AI & LLMs', e:'✨', t:"Let's build GPT from scratch",        i:'Andrej Karpathy', u:'https://www.youtube.com/watch?v=kCc8FmEb1nY',                               p:'youtube'  },
  { c:'Generative AI & LLMs', e:'✨', t:'Large Language Models (CS324)',       i:'Stanford',        u:'https://stanford-cs324.github.io/winter2022/',                              p:'external' },
  { c:'Quantum Computing', e:'⚛️', t:'Quantum Computing for Computer Scientists', i:'Microsoft Research', u:'https://www.youtube.com/watch?v=F_Riqjdh2oM',                               p:'youtube' },
  { c:'Quantum Computing', e:'⚛️', t:'Quantum Computation - Umesh Vazirani',     i:'UC Berkeley',        u:'https://www.youtube.com/playlist?list=PLDAjb_zu5aoFulfed4NdGTzGnS_4sCKdg', p:'youtube' },
  { c:'Computer Architecture', e:'🖥️', t:'CS61C - Great Ideas in Computer Architecture', i:'UC Berkeley',      u:'https://www.youtube.com/playlist?list=PLhMnuBfGeCDM8pXLpqib90mDFJI-e1lpk', p:'youtube'  },
  { c:'Computer Architecture', e:'🖥️', t:'Nand to Tetris',                               i:'Hebrew University', u:'https://www.youtube.com/playlist?list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI', p:'youtube'  },
  { c:'Computer Architecture', e:'🖥️', t:'15-213 Intro to Computer Systems',             i:'CMU',              u:'https://scs.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22b96d90ae-9871-4fae-91e2-b1627b43e25e%22', p:'external' },
  { c:'Software Engineering', e:'🛠️', t:'6.172 Performance Engineering of Software Systems', i:'MIT OCW',    u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf', p:'youtube' },
  { c:'Software Engineering', e:'🛠️', t:'CS169 - Software Engineering',                     i:'UC Berkeley', u:'https://www.youtube.com/playlist?list=PLVEFwJhglgHJQEQ6RjMMjcclix94gp1k2', p:'youtube' },
  { c:'Blockchain Development', e:'🔒', t:'Blockchain and Money', i:'MIT OCW', u:'https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn', p:'youtube' },
  { c:'Robotics', e:'🦾', t:'Underactuated Robotics', i:'MIT',          u:'https://www.youtube.com/playlist?list=PLkx8KyIQkMfUmB3j-DyP58ThDXM7enA8x', p:'youtube'  },
  { c:'Robotics', e:'🦾', t:'CS287 Advanced Robotics', i:'UC Berkeley', u:'https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/',                    p:'external' },
];

// ── State ─────────────────────────────────────────────────────────────────────

let activeCategory = null;
let activeSort     = 'all';
let searchQuery    = '';

// ── Helpers ───────────────────────────────────────────────────────────────────

function getCategories() {
  return COURSES.reduce((map, c) => { map[c.c] = (map[c.c] || 0) + 1; return map; }, {});
}

function getFiltered() {
  const q = searchQuery.toLowerCase();
  return COURSES.filter(c => {
    const catMatch    = !activeCategory || c.c === activeCategory;
    const sortMatch   = activeSort === 'all' || c.p === activeSort;
    const searchMatch = !q || c.t.toLowerCase().includes(q) || c.c.toLowerCase().includes(q) || c.i.toLowerCase().includes(q);
    return catMatch && sortMatch && searchMatch;
  });
}

function getCategoryColor(cat) {
  const colors = {
    'Introduction to Computer Science': 'linear-gradient(135deg,#1a1a2e,#16213e)',
    'Data Structures & Algorithms':     'linear-gradient(135deg,#0f2027,#203a43)',
    'Machine Learning':                 'linear-gradient(135deg,#1a1a0f,#2d2d00)',
    'Deep Learning':                    'linear-gradient(135deg,#1a0f1a,#2d002d)',
    'Natural Language Processing':      'linear-gradient(135deg,#0f1a1a,#002d2d)',
    'Operating Systems':                'linear-gradient(135deg,#1a0f00,#2d1a00)',
    'Database Systems':                 'linear-gradient(135deg,#001a1a,#002020)',
    'Distributed Systems':              'linear-gradient(135deg,#1a001a,#200020)',
    'Artificial Intelligence':          'linear-gradient(135deg,#001a0f,#00200a)',
    'Computer Vision':                  'linear-gradient(135deg,#1a1000,#2d1e00)',
    'Security':                         'linear-gradient(135deg,#1a0000,#2d0000)',
    'Math for Computer Science':        'linear-gradient(135deg,#0f0f1a,#1a1a2d)',
    'Reinforcement Learning':           'linear-gradient(135deg,#001a00,#002000)',
    'Generative AI & LLMs':             'linear-gradient(135deg,#1a1a00,#2d2d00)',
  };
  return colors[cat] || 'linear-gradient(135deg,#111118,#18181f)';
}

function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

// ── Render ────────────────────────────────────────────────────────────────────

function renderNav() {
  const cats = getCategories();
  let html = `
    <div class="nav-item ${activeCategory === null ? 'active' : ''}" data-cat="">
      <span class="nav-item-name">✦ All Courses</span>
      <span class="nav-count">${COURSES.length}</span>
    </div>`;
  Object.entries(cats).forEach(([cat, count]) => {
    const emoji = COURSES.find(c => c.c === cat)?.e || '📚';
    html += `
      <div class="nav-item ${activeCategory === cat ? 'active' : ''}" data-cat="${cat.replace(/"/g, '&quot;')}">
        <span class="nav-item-name">${emoji} ${cat}</span>
        <span class="nav-count">${count}</span>
      </div>`;
  });
  document.getElementById('navList').innerHTML = html;
}

function renderGrid() {
  const courses  = getFiltered();
  const showHero = activeCategory === null && !searchQuery;

  document.getElementById('hero').classList.toggle('visible', showHero);
  document.getElementById('topbar').style.display = showHero ? 'none' : 'flex';

  if (!showHero) {
    document.getElementById('topbarTitle').textContent = activeCategory || 'Search Results';
    document.getElementById('topbarMeta').textContent  = `${courses.length} course${courses.length !== 1 ? 's' : ''}`;
  }

  const grid  = document.getElementById('courseGrid');
  const empty = document.getElementById('emptyState');

  if (courses.length === 0) {
    grid.innerHTML       = '';
    empty.style.display  = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = courses.map((c, i) => {
    const badge = c.p === 'youtube'
      ? '<span class="card-platform platform-yt">▶ YouTube</span>'
      : '<span class="card-platform platform-ext">↗ External</span>';
    return `
      <div class="card" style="animation-delay:${i * 30}ms" data-idx="${COURSES.indexOf(c)}">
        <div class="card-thumb" style="background:${getCategoryColor(c.c)}"><span>${c.e}</span></div>
        <div class="card-body">
          <div class="card-tag">${c.c}</div>
          <div class="card-title">${c.t}</div>
          <div class="card-inst"><span>${c.i || 'Open University'}</span><span class="card-inst-dot"></span>${badge}</div>
        </div>
      </div>`;
  }).join('');
}

function renderSortButtons() {
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === activeSort);
  });
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function openCourse(idx) {
  const c = COURSES[idx];
  if (!c) return;
  document.getElementById('pCategory').textContent = c.c;
  document.getElementById('pTitle').textContent    = c.t;
  document.getElementById('pInst').textContent     = c.i || '';
  document.getElementById('pEmoji').textContent    = c.e;
  document.getElementById('pDesc').textContent     =
    `A free university-level course from ${c.i || 'an open institution'}. ` +
    `Click below to access the full lecture series on ${c.p === 'youtube' ? 'YouTube' : 'the course website'}.`;
  const btn = document.getElementById('pOpenBtn');
  btn.href        = c.u;
  btn.textContent = c.p === 'youtube' ? '▶ Open on YouTube →' : '↗ Open Course →';
  document.getElementById('pTags').innerHTML = [
    `<span class="tag">${c.c}</span>`,
    c.i ? `<span class="tag">${c.i}</span>` : '',
    `<span class="tag">${c.p === 'youtube' ? 'YouTube' : 'External'}</span>`,
  ].join('');
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Events ────────────────────────────────────────────────────────────────────

function bindEvents() {
  document.getElementById('navList').addEventListener('click', e => {
    const item = e.target.closest('[data-cat]');
    if (!item) return;
    activeCategory = item.dataset.cat || null;
    activeSort     = 'all';
    searchQuery    = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('content').scrollTop = 0;
    renderNav(); renderGrid(); renderSortButtons();
  });

  document.getElementById('courseGrid').addEventListener('click', e => {
    const card = e.target.closest('[data-idx]');
    if (card) openCourse(Number(card.dataset.idx));
  });

  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSort = btn.dataset.sort;
      renderGrid(); renderSortButtons();
    });
  });

  document.getElementById('searchInput').addEventListener('input', debounce(e => {
    searchQuery = e.target.value;
    if (searchQuery) activeCategory = null;
    renderNav(); renderGrid();
  }, 150));

  document.getElementById('overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('overlay') ||
        e.target.closest('[data-action="closeModal"]')) closeModal();
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  document.getElementById('statCourses').textContent = COURSES.length;
  document.getElementById('statCats').textContent    = Object.keys(getCategories()).length;
  bindEvents();
  renderNav();
  renderGrid();
  renderSortButtons();
}

init();
