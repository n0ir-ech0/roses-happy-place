/* =============================================
   ROSE'S HAPPY PLACE — script.js
   Performance-optimized, mobile-first
   ============================================= */

'use strict';

// =============================================
// 1. DATA
// =============================================

const HAPPINESS_MESSAGES = [
  "🚨 Breaking News: Rose has once again been detected being absolutely adorable.",
  "🔬 Scientists confirm: Rose improves every room she enters by a minimum of 200%.",
  "⚠️ Warning: Excessive Rose-ness detected in your area. Side effects include happiness.",
  "🍦 Fun Fact: Ice cream tastes better when Rose eats it. Science doesn't know why.",
  "📢 Alert: Rose has been named Official President of Being Too Cute.",
  "🌟 Update: The universe has filed a request to have more people like Rose.",
  "🏆 Announcement: Rose wins today's award for Most Delightful Human.",
  "💅 Reminder: You are *that* girl. Always have been.",
  "🌈 Weather Forecast: Rose = 100% chance of sunshine wherever she goes.",
  "🧠 Fun Fact: Rose's smile has been scientifically classified as a mood-booster.",
  "📊 Report: Rose's vibe is at an all-time high today. Analysts are impressed.",
  "🎪 JUST IN: Confidence levels for Rose are through the roof again.",
  "🌺 Today's Horoscope: You're glowing. You've been glowing. You will always glow.",
  "🚀 Mission Control: Rose's awesomeness has exceeded all projected expectations.",
  "🎯 Confirmed: Rose is the main character. This is not a drill.",
  "💫 PSA: Being this cute should come with a license. You are fully licensed.",
  "📰 HEADLINE: Local queen spotted being herself. Witnesses report feeling inspired.",
  "🍰 Notice: A slice of cake has been legally reserved in your name. You deserve it.",
  "🧚 Magic Update: Fairy godmother confirmed — Rose's good vibes are enchanted.",
  "🎵 Music News: A song has been written about how great you are. It has no title because words aren't enough.",
  "🌙 Stargazing Report: The stars are in your favor. As always.",
  "🏅 Official Result: Rose has placed 1st in the category of Amazing People.",
  "🦋 Nature Update: Local butterflies are following Rose again. Third week in a row.",
  "🎀 Fashion Bulletin: Rose could wear a trash bag and still look iconic.",
  "📱 Notification: Your future is so bright it has applied for sunglasses.",
  "🌸 Garden Report: Flowers bloom faster near Rose. Experts baffled.",
  "🏰 Royal Decree: It has been decided. Rose is royalty. There will be no debate.",
  "🎭 Critics' Choice: Rose's personality is receiving a standing ovation.",
  "🍭 Sweet Science: Rose's kindness has been measured. It's unmeasurably sweet.",
  "⭐ Star Report: The stars consulted and agreed — today is Rose's day. As is tomorrow.",
  "🌊 Ocean Bulletin: The sea called. It wants to know your skincare routine.",
  "🦁 Wildlife Update: Even lions soften up around Rose. Confirmed.",
  "🎉 Party Alert: Your existence is being celebrated somewhere right now.",
  "💎 Gem Report: Diamonds are jealous. That's all.",
  "🌻 Flower Forecast: Sunflowers are turning toward YOU this season.",
  "🍕 Food Update: Pizza gets better when you eat it. Pizzerias are investigating.",
  "🎸 Music Theory: Rose's laugh is in the key of happiness. It's a hit.",
  "🌍 World News: Multiple countries have reported improved moods today. Traced back to Rose.",
  "🦄 Rare Species Alert: A Rose has been spotted in the wild. Everyone is happy.",
  "🎈 Balloon Report: Balloons are more festive near you. Don't ask why. Just accept it.",
  "🏖️ Beach Update: Even the waves are trying to impress you.",
  "🌮 Taco Tuesday Decree: You deserve tacos every day of the week.",
  "🦢 Bird Watching: Elegant sightings in the area. Confirmed Rose-related.",
  "🎨 Art Review: Your presence is the best art installation of the year.",
  "🌠 Shooting Star Report: All shooting stars are currently pointed in your direction.",
  "💌 Letter from the Universe: You are exactly where you're supposed to be.",
  "🏄 Surfing Bulletin: You're riding the wave of fabulousness perfectly.",
  "🎯 Accuracy Report: Your gut instincts are correct. Especially the good ones about yourself.",
  "🦋 Transformation Update: You continue to glow up daily. Scientists can't keep up.",
  "🍩 Sweet Spot Alert: You have officially been located in life's sweet spot.",
];

const COMPLIMENTS = [
  "Your smile could end wars. Probably has.",
  "You make ordinary days feel like something worth remembering.",
  "You are a limited edition and the factory burned down.",
  "The stars filed a formal complaint — you're stealing their sparkle.",
  "You walk into a room and the vibe just *fixes itself*.",
  "Your kindness leaves a mark on everyone lucky enough to receive it.",
  "You have the rare gift of making people feel genuinely seen.",
  "Your laugh should be bottled and sold as medicine.",
  "You are the kind of person people write songs about.",
  "Your heart is bigger than most people's entire personalities.",
  "You turn ordinary moments into memories without even trying.",
  "The world calibrated itself slightly better the day you arrived in it.",
  "Your potential is embarrassingly large. In the best way.",
  "You make people brave just by being yourself.",
  "Every room you enter immediately becomes a better version of itself.",
  "You are so genuinely cool and I don't think you fully know it yet.",
  "Your energy is the good kind of contagious.",
  "You have a mind that notices things other people completely miss.",
  "You are the plot twist everyone needed but didn't expect.",
  "There's a warmth to you that's impossible to fake — it's just who you are.",
  "You carry grace in places most people carry stress.",
  "Your taste is immaculate. In all departments.",
  "You think deeply, feel deeply, and that is a rare kind of beautiful.",
  "The people who know you well count themselves lucky. They're right to.",
  "You have a gift for making hard things feel manageable.",
  "Your presence is a privilege that not everyone appreciates — but the right ones do.",
  "You are exactly the right amount of everything.",
  "You have a softness that isn't weakness — it's strength in disguise.",
  "You notice the details that make all the difference.",
  "Your ambition and your kindness coexist beautifully — that's rare.",
  "You are the main character and you deserve a sequel.",
  "There is a version of yourself you haven't met yet. She's going to blow you away.",
  "You are worthy of every good thing trying to find its way to you.",
  "Your voice matters more than you think it does.",
  "You are someone's favourite part of their day — probably more people than you know.",
  "The way you love people is something they carry forever.",
  "You have more impact than your modesty allows you to believe.",
  "Your instincts are sharper than you give them credit for.",
  "You are one of the genuinely good ones. That's not nothing. That's everything.",
  "You remind people what it looks like to be human in all the best ways.",
  "Your future is holding its breath because it's so excited to meet you.",
  "You are doing more right than you are doing wrong — by a landslide.",
  "You are the kind of rare that people search for their whole lives.",
  "Your creativity finds ways out of problems that logic can't solve.",
  "The difficulty you've navigated would have stopped most people. Not you.",
  "You wear your authenticity like armour and it looks incredible on you.",
  "You are kinder to others than you are to yourself. Time to fix that.",
  "Your potential doesn't have a ceiling. It just keeps going.",
  "You are allowed to be proud of yourself. Today especially.",
  "There is literally no one else like you, and the world is better for it.",
];

const LAB_MESSAGES = {
  joke: [
    "If confidence were currency, Rose would own three countries and a moon.",
    "The FBI called. They need to know how you keep being this cool.",
    "Scientists tried to measure your fabulousness. The instruments broke.",
    "Your main character energy is so strong Netflix wants to option the rights.",
    "Reminder: You are legally required to eat ice cream at least twice this week.",
    "You were so busy being amazing today you almost forgot to be humble. Almost.",
    "Plot twist: the whole universe has been designed as your backdrop.",
    "Your aura has filed a trademark application. Too powerful to be replicated.",
    "A mirror looked at you and immediately asked for your skincare routine.",
    "Local weather report: Chance of Rose 100%. Everyone is delighted.",
    "Your laugh has been classified by scientists as a renewable energy source.",
    "Time called. It wants to slow down when you're having a good day.",
    "Fun fact: Flowers get nervous around you because of the competition.",
    "You have too much personality for one single dimension. Please add more.",
    "The dictionary updated the definition of 'iconic' to include your name.",
    "Your future self already texted. She said: 'Trust me, it gets good.'",
    "An AI tried to replicate your energy. It crashed. Twice.",
    "Studies show: Rose's presence improves 9 out of 10 situations. The 10th was already perfect.",
    "Your vibe is so good even WiFi works better near you.",
    "You could make a spreadsheet look like fine art. Talent is natural.",
    "You could be having the worst day and still somehow be the best in the room.",
    "Scientists confirmed: the world is a better place with your laugh in it.",
    "Gravity is honestly just excited to keep you here.",
    "You live rent-free in people's minds. And you never leave a mess.",
    "Historians will write about this era as: The Age of Rose.",
    "The Moon applied for a transfer to be closer to your orbit.",
    "Your fashion sense causes spontaneous applause in local dressing rooms.",
    "You didn't wake up like this. You woke up and made 'this' look easy.",
    "A fortune cookie tried to predict your future. It gave up. Too bright.",
    "Certified chaotic icon. Papers signed. Crown issued.",
  ],
  icecream: [
    "🍦 DECREE: You are legally, cosmically, and nutritionally required to eat ice cream today.",
    "🍨 Science has spoken. Ice cream has zero calories when eaten during a sad mood. Eat up.",
    "🍧 The ice cream gods have reviewed your file. You qualify for extra sprinkles.",
    "🍦 Breaking: Ice cream is now prescribed medicine specifically for being this fabulous.",
    "🍨 The gelato council voted unanimously. You deserve the big scoop.",
    "🍧 Plot twist: the ice cream has been waiting for YOU.",
    "🍦 Emergency ice cream protocol initiated. Report to nearest freezer immediately.",
    "🍨 Doctors recommend: at least one ice cream per day for someone as great as you.",
    "🍧 The official antidote to any bad day has been confirmed: ice cream + Rose = fixed.",
    "🍦 Fun fact: ice cream tastes 47% better when YOU eat it. The data is conclusive.",
    "🍨 Your stomach called. It said 'please, we deserve this.'",
    "🍧 A scoop of ice cream has been reserved in your name at the universe's finest shop.",
  ],
  confidence: [
    "💪 Stand up. Shoulders back. Chin up. You are that person. Always have been.",
    "🔥 You have survived 100% of your hardest days. Undefeated. Undeniable.",
    "⚡ The version of you that doubts yourself? She's wrong. The confident one? She's right.",
    "🌟 You don't need everyone to believe in you. You just need YOU to believe in you.",
    "🦁 You are not too much. The room is just not big enough for what you carry.",
    "🌙 Slow days don't mean lost days. You are still moving, even when you can't feel it.",
    "🔑 You already have everything it takes. You just haven't opened all the doors yet.",
    "💎 Other people's doubt about you is THEIR limitation, not yours.",
    "🚀 You are not behind. You are exactly on your own timeline and it's the right one.",
    "🌺 You are allowed to be proud of how far you've come. You've earned it.",
    "🏆 The right people will see your value without you having to prove it.",
    "✨ You are not asking for too much by wanting good things. Keep wanting them.",
  ],
  chaos: [
    "🎉 CHAOS MODE ACTIVATED. Eat dessert first. Reply to no one. Be iconic.",
    "🌪️ Forget plans. The universe is improvising and so should you.",
    "🎊 Today's assignment: zero apologies for taking up space.",
    "💥 Breaking every rule of playing it safe. Just for today.",
    "🎪 Plot twist incoming. Embrace it. Chaos is just adventure in disguise.",
    "🌈 Unhinged decisions only. Responsible Rose is off the clock.",
    "🎭 Today you are the main character AND the plot twist.",
    "🦄 Normal is cancelled. Extraordinary has taken its place.",
    "🚀 Chaotic good unlocked. Side effects: too much fun, too many smiles.",
    "🎠 Rules? Shattered. Expectations? Exceeded. Rose? Unstoppable.",
  ],
};

const JAR_NOTES = [
  "Someone is smiling right now because of something you did. 🌸",
  "Drink some water. Your future self will thank you. 💧",
  "You are doing better than you think. Genuinely. 💛",
  "Today is proud of you. So are we. ✨",
  "You've already gotten through 100% of your hard days. Don't forget that. 💪",
  "The right things are finding their way to you. Even now. 🌺",
  "You made someone's day better today without even realizing it. 🌻",
  "Progress that's invisible is still progress. Keep going. 🌟",
  "Rest is not giving up. Rest is recharging. You deserve rest. 🌙",
  "The world is genuinely better with you in it. This is not an exaggeration. 🌍",
  "There is someone who thinks of you and immediately feels warm. 💕",
  "You are someone's favourite. You might not know who, but you are. 🌷",
  "You are more loved than you currently believe. Let that in. ❤️",
  "One small kind thing you did is still living in someone's memory. 🦋",
  "It's okay to not have everything figured out. Nobody does. 🌈",
  "You carry more grace than you give yourself credit for. ✨",
  "Your gut is right more often than your anxiety admits. 🌸",
  "You are allowed to take up space. All of it. 💫",
  "Today doesn't define your whole story. You have so many pages left. 📖",
  "Something good is coming. It's already on its way. 🌠",
  "You are exactly the kind of person the world needs more of. 💎",
  "Everything you're handling right now is proof of your strength. 🏆",
  "You deserve the same kindness you give everyone else. 🌺",
  "Your creativity, your warmth, your spark — they're rare. Don't dim them. 🔥",
  "The hard part is almost over. You're closer than you think. 🌅",
  "You have made a difference in people's lives and you don't even know it. 💌",
  "Being gentle with yourself is not weakness. It's wisdom. 🕊️",
  "Your laughter is a gift. Use it freely. 😂💕",
  "You don't need to be perfect. You need to be you. That's always enough. 🌸",
  "Tomorrow holds something good. So does today. Look a little closer. ✨",
  "You are not too sensitive. You feel things deeply and that's a superpower. 💖",
  "Every step you've taken has brought you exactly where you need to be. 🗺️",
  "You are so loved it would surprise you. 🌹",
  "The universe is quietly routing for you. Has been all along. 🌌",
  "Some of your greatest chapters haven't been written yet. 📚",
  "You matter to more people than you can count. Remember that. ❤️",
  "Slow progress is still progress. You're still in the race. 🌟",
  "Your presence is a privilege. Not everyone gets it. The lucky ones know. 💛",
  "You are not alone in this. Even when it feels that way. 🤝",
  "Something you did made someone feel less alone. You don't have to know what it was. 🌸",
  "Good things come to people like you. Keep being people like you. 💎",
  "You've already proven you can handle the hard stuff. The rest is manageable. 🦋",
  "Your kindness has already changed things. It keeps going after you leave. ✨",
  "You are seen. You are appreciated. You are loved. All three. 🌺",
  "This is a reminder from the universe that you're doing really, really well. 💌",
  "The next time things feel impossible, remember how many impossible things you've already done. 🏆",
  "Your story is still going. The best parts are still being written. 📖",
  "Someone needs what only you specifically can give them. Just by being you. 💫",
  "You are worthy of everything good that's coming. Let it come. 🌈",
  "End of this note: you are enough. Beginning of tomorrow: still enough. Always enough. 🌸",
];

// =============================================
// 2. STATE
// =============================================

let currentPage = 0;
const totalPages = 11;
let slideIndex = 0;
let slideTimer = null;
let confettiAnimId = null;
let confettiParticles = [];

// =============================================
// 3. FLOATING ELEMENTS
// =============================================

function createFloatingElements() {
  const container = document.getElementById('floatingElements');
  if (!container) return;

  const items = [
    { emoji: '🌹', count: 4 },
    { emoji: '✨', count: 6 },
    { emoji: '💕', count: 4 },
    { emoji: '🦋', count: 3 },
    { emoji: '🌸', count: 5 },
  ];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  items.forEach(({ emoji, count }) => {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'float-item';
      el.textContent = emoji;
      el.setAttribute('aria-hidden', 'true');
      const left = Math.random() * 95;
      const delay = Math.random() * 15;
      const duration = 14 + Math.random() * 12;
      el.style.cssText = `left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s`;
      container.appendChild(el);
    }
  });
}

// =============================================
// 4. PAGE NAVIGATION
// =============================================

function goToPage(index) {
  if (index < 0 || index >= totalPages) return;

  const pages = document.querySelectorAll('.page');
  const dots = document.querySelectorAll('.nav-dot');

  pages[currentPage].classList.remove('active');
  dots[currentPage].classList.remove('active');

  currentPage = index;

  pages[currentPage].classList.add('active');
  dots[currentPage].classList.add('active');

  pages[currentPage].scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (currentPage === 7) initStars();
}

// =============================================
// 5. SLIDESHOW
// =============================================

function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  slides[0].classList.add('active');

  function next() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  slideTimer = setInterval(next, 4000);
}

// =============================================
// 6. RANDOM PICKER UTIL
// =============================================

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setWithPop(element, text) {
  element.classList.remove('pop');
  void element.offsetWidth; // reflow to restart animation
  element.querySelector('p').textContent = text;
  element.classList.add('pop');
}

// =============================================
// 7. HAPPINESS BUTTON
// =============================================

function initHappinessButton() {
  const btn = document.getElementById('happinessBtn');
  const msg = document.getElementById('happinessMessage');
  if (!btn || !msg) return;

  btn.addEventListener('click', () => {
    setWithPop(msg, pickRandom(HAPPINESS_MESSAGES));
  });
}

// =============================================
// 8. COMPLIMENT GENERATOR
// =============================================

function initComplimentGenerator() {
  const btn = document.getElementById('complimentBtn');
  const textEl = document.getElementById('complimentText');
  const card = document.getElementById('complimentCard');
  if (!btn || !textEl) return;

  btn.addEventListener('click', () => {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = pickRandom(COMPLIMENTS);
      textEl.style.opacity = '1';
    }, 200);
    card.classList.remove('pop');
    void card.offsetWidth;
    card.classList.add('pop');
  });
}

// =============================================
// 9. LAUGH LAB
// =============================================

function initLaughLab() {
  const msg = document.getElementById('laughMessage');
  if (!msg) return;

  document.querySelectorAll('.btn-lab').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const pool = LAB_MESSAGES[type] || LAB_MESSAGES.joke;
      setWithPop(msg, pickRandom(pool));
    });
  });
}

// =============================================
// 10. CONFETTI
// =============================================

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ff4d9e','#ff85b8','#c084fc','#f59e0b','#34d399','#60a5fa','#fbbf24'];
  confettiParticles = [];

  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: -20,
      w: 6 + Math.random() * 8,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 5,
    });
  }

  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);

  let tick = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - tick / 140);
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    tick++;
    if (tick < 160) {
      confettiAnimId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  draw();
}

// =============================================
// 11. QUEEN CERTIFICATE
// =============================================

function initQueenCert() {
  const btn = document.getElementById('confettiBtn');
  if (!btn) return;
  btn.addEventListener('click', launchConfetti);
}

// =============================================
// 12. SECRET PAGE
// =============================================

function initSecretPage() {
  const btn = document.getElementById('secretBtn');
  const reveal = document.getElementById('secretReveal');
  if (!btn || !reveal) return;

  let triggered = false;

  btn.addEventListener('click', () => {
    if (!triggered) {
      triggered = true;
      reveal.hidden = false;
      launchConfetti();
      btn.textContent = '🎉 Already Done It';
      btn.disabled = true;
      btn.style.background = 'linear-gradient(135deg,#aaa,#888)';
    }
  });
}

// =============================================
// 13. HAPPINESS JAR
// =============================================

function initHappinessJar() {
  const btn = document.getElementById('jarBtn');
  const note = document.getElementById('jarNote');
  const jar = document.querySelector('.jar-visual');
  if (!btn || !note) return;

  btn.addEventListener('click', () => {
    if (jar) {
      jar.style.transform = 'scale(1.2) rotate(10deg)';
      setTimeout(() => { jar.style.transform = ''; }, 400);
    }
    note.classList.remove('pop');
    void note.offsetWidth;
    note.querySelector('p').textContent = pickRandom(JAR_NOTES);
    note.classList.add('pop');
  });
}

// =============================================
// 14. MOON STARS
// =============================================

function initStars() {
  const layer = document.getElementById('starsLayer');
  if (!layer || layer.children.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const count = reduced ? 0 : 30;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star-dot';
    const size = 1 + Math.random() * 3;
    const delay = Math.random() * 4;
    const duration = 2 + Math.random() * 3;
    star.style.cssText = `
      width:${size}px;height:${size}px;
      top:${Math.random() * 100}%;left:${Math.random() * 100}%;
      animation-delay:${delay}s;animation-duration:${duration}s
    `;
    layer.appendChild(star);
  }
}

// =============================================
// 15. NAV DOTS CLICK
// =============================================

function initNavDots() {
  document.querySelectorAll('.nav-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => goToPage(i));
  });
}

// =============================================
// 16. RESIZE HANDLER
// =============================================

let resizeTimer = null;
function onResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, 200);
}

// =============================================
// 17. KEYBOARD NAVIGATION
// =============================================

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (currentPage < totalPages - 1) goToPage(currentPage + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (currentPage > 0) goToPage(currentPage - 1);
    }
  });
}

// =============================================
// 18. INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  createFloatingElements();
  initSlideshow();
  initNavDots();
  initHappinessButton();
  initComplimentGenerator();
  initLaughLab();
  initQueenCert();
  initSecretPage();
  initHappinessJar();
  initKeyboardNav();
  window.addEventListener('resize', onResize, { passive: true });
});
