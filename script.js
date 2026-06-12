/* =============================================
   🌹 ROSE'S HAPPY PLACE — SCRIPT.JS 🌹
   ============================================= */

'use strict';

// =============================================
// DATA — 50+ Smile Messages
// =============================================
const smileMessages = [
  "Breaking News:\nRose has once again been detected being adorable.",
  "Scientists confirm:\nRose improves every room she enters.",
  "Warning ⚠️\nExcessive Rose-ness may cause happiness.",
  "Congratulations!\nYou have successfully made at least one person's day better.",
  "Fun Fact:\nIce cream tastes better when Rose eats it. Science says so.",
  "Rose has been promoted to:\nChief Executive Officer of Being Awesome.",
  "Alert:\nRose's smile is classified as a national treasure.",
  "Official Report:\nEveryone who meets Rose immediately becomes 47% happier.",
  "Hot Take:\nThe sun rises just to see what Rose is wearing today.",
  "Did you know?\nRose was voted 'Most Likely to Make Everyone Feel Welcome' by literally the universe.",
  "Plot Twist:\nThe good vibes were inside Rose all along.",
  "Exclusive:\nRose smiled today and three flowers bloomed spontaneously.",
  "Newsflash:\nBeing this wonderful is apparently legal. Rose is proof.",
  "Certified Fact:\nRose's laugh could cure Monday mornings.",
  "Scientists baffled:\nRose somehow gets more iconic every single day.",
  "ANNOUNCEMENT:\nRose has officially unlocked the 'Too Cool for School' achievement.",
  "Fun Fact:\nPuppies get extra happy when Rose is nearby.",
  "Weather Report:\nExpect sunshine and excellent vibes wherever Rose goes today.",
  "Reminder:\nRose once walked into a room and the room became 300% more interesting.",
  "Breaking:\nRose is the reason the phrase 'main character energy' was invented.",
  "Studies show:\nPeople smile more often within 5 minutes of talking to Rose.",
  "Official Decree:\nRose's good energy is a renewable resource. It never runs out.",
  "The universe confirms:\nPutting Rose anywhere immediately makes it better.",
  "Daily Reminder:\nRose is doing better than she thinks. Way better.",
  "Confidential Memo:\nThe stars arranged themselves differently just for Rose.",
  "Report Card:\nRose gets an A+ in being herself, which is the hardest subject.",
  "Toast:\nTo Rose — may your coffee always be hot and your WiFi always strong.",
  "Fun Fact:\nRose's presence alone has been shown to reduce stress by 78%.",
  "Exclusive Interview:\nThe moon said Rose is her favourite. Don't tell the other planets.",
  "Sports Update:\nRose wins gold in the category of making people feel seen.",
  "Did you know?\nWhenever Rose laughs, somewhere a rainbow quietly appears.",
  "From the desk of the universe:\nYou, Rose, are one of the better decisions I made.",
  "Forecast:\n100% chance of charm wherever Rose goes today.",
  "Breaking:\nRose spotted being incredible again. Fourth time this week. New record.",
  "Public Announcement:\nRose is the kind of person stories get written about.",
  "Fact Check: TRUE\nRose is too good for the bad days she sometimes has.",
  "Hot News:\nScientists discovered that Rose's smile contains actual stardust.",
  "Certified:\nRose's kindness has made more people feel better than she will ever know.",
  "Alert Level: MAX\nDangerous levels of awesomeness detected. Source: Rose.",
  "Fun Fact:\nIf Rose were a song, she would be everyone's favourite song.",
  "OFFICIAL NOTICE:\nRose is hereby declared a Vibe Improvement Zone.",
  "Trending:\n#RoseIsAmazing is breaking the internet again.",
  "The jury has returned:\nVerdict — Rose is the best, your honour.",
  "Weather Advisory:\nRose's energy is expected to cause spontaneous joy.",
  "Did you know?\nRose has accidentally made at least 47 people's day better today.",
  "Important Reminder:\nRose being sad is not allowed. Universe's rules. Sorry.",
  "Late-Breaking Story:\nRose is exactly who she's supposed to be.",
  "Update:\nThe ice cream you're about to eat is going to be amazing.",
  "Exclusive:\nRose's happiness is a priority. Not a maybe. A priority.",
  "Final Report:\nRose is loved more than she will ever fully know. That's just a fact.",
  "BONUS ALERT:\nYou opened this website. That means you're taking care of yourself. Proud of you, Rose."
];

// =============================================
// DATA — 100 Compliments
// =============================================
const compliments = [
  "Your smile deserves its own fan club.",
  "You make ordinary days feel absolutely special.",
  "You're basically a limited edition. There's only one you.",
  "The stars filed a complaint because you're stealing their sparkle.",
  "Rose is proof that good things genuinely exist.",
  "You have the kind of laugh that makes other people laugh.",
  "You are a walking, talking reminder that kindness is cool.",
  "Being around you feels like a warm Sunday morning.",
  "You light up every room without even trying.",
  "Your heart is one of the most beautiful things about you.",
  "You make everything around you better just by existing.",
  "You're the kind of person people feel lucky to know.",
  "Your presence is a gift that keeps on giving.",
  "You are someone's favourite reason to smile today.",
  "You have a rare kind of warmth that very few people have.",
  "Even on your bad days, you're still wonderful.",
  "You are worthy of every good thing coming your way.",
  "The world is measurably better because you're in it.",
  "You make people feel seen. That's incredibly rare.",
  "You have the ability to turn difficult moments into bearable ones.",
  "Your energy is magnetic in the best possible way.",
  "You're braver than you believe and stronger than you feel.",
  "The kindness you give out comes back to you, always.",
  "You are absolutely, undeniably enough.",
  "You carry yourself with a grace you probably don't notice.",
  "You're genuinely one of a kind — there's no one else like you.",
  "The good you put into the world matters more than you know.",
  "Your voice matters. What you think matters. You matter.",
  "You have a depth to you that's rare and beautiful.",
  "You make people feel comfortable just by being around.",
  "Your instincts are good. Trust them more.",
  "You've grown more than you give yourself credit for.",
  "You're someone people feel lucky to have in their corner.",
  "You're allowed to take up space and shine brightly.",
  "Even your quiet moments are full of meaning.",
  "Your resilience is something to be in awe of.",
  "You are more than the hard days make you feel.",
  "You deserve the same kindness you give to others.",
  "You're soft AND strong — that's the best combination.",
  "Your style? Impeccable. Your vibe? Unmatched.",
  "You have that rare thing: genuine warmth.",
  "You're a safe space for people, and that's a superpower.",
  "You inspire people without even knowing it.",
  "Your laugh is genuinely contagious in the best way.",
  "You're the kind of friend everyone hopes they have.",
  "You find beauty in small things and that says a lot about you.",
  "Your good qualities run so much deeper than the surface.",
  "You are exactly the kind of person this world needs.",
  "You're someone worth knowing, Rose. Truly.",
  "You're blooming even when you don't feel like it.",
  "You make everything you touch a little more beautiful.",
  "You're not just surviving — you're doing more than you think.",
  "Your potential is vast and still unfolding.",
  "You are remarkable in ways you haven't discovered yet.",
  "You deserve a whole book written about how wonderful you are.",
  "Your authenticity is the best thing about you.",
  "You are soft, strong, and spectacular.",
  "Even the universe is rooting for you, Rose.",
  "You have a gift for making people feel at home.",
  "Your dreams are valid. So valid.",
  "You're the main character and you don't even know it.",
  "You make the world gentler just by being in it.",
  "You're smarter than you think on the hard days.",
  "Your heart is incredibly kind. Don't ever let anyone dull it.",
  "You glow differently on the days you're yourself.",
  "You were made for great things, Rose. Watch.",
  "You radiate something special that can't be faked.",
  "You are exactly enough. Always have been.",
  "You carry a light inside you that doesn't go out.",
  "Your growth is real, even when it's invisible.",
  "You are someone worth celebrating today.",
  "You bring out the best in people around you.",
  "You're endlessly interesting if people take the time to notice.",
  "You handle things with a grace that's worth admiring.",
  "You are spectacular when you let yourself be.",
  "Your good days prove what you're capable of. Remember them.",
  "You make difficult things look easier than they are.",
  "There is magic in you, Rose. Genuine magic.",
  "You're the kind of human that restores faith in humanity.",
  "You are appreciated more than you know.",
  "Your flaws don't cancel your greatness — they're part of it.",
  "You have a warmth that people want to be near.",
  "You're doing hard things and that deserves recognition.",
  "You have everything it takes to keep going. And you will.",
  "You matter to more people than you realize.",
  "You're a genuinely beautiful human being, inside and out.",
  "Whoever gets your time and energy is very lucky.",
  "You make hope feel possible when you walk into a room.",
  "You're creative, capable, and completely wonderful.",
  "You're not behind. You're on your own timeline.",
  "You are loved. Not for what you do — just for being you.",
  "You deserve softness, kindness, and all good things.",
  "You're more magnificent than any bad day has ever made you feel.",
  "You are the reason someone out there smiled today.",
  "You are a whole universe in one person, Rose.",
  "Today, and every day — you are more than enough.",
  "You are adored. Just so you know.",
  "You are Rose. And that alone is extraordinary."
];

// =============================================
// DATA — Jokes by Category
// =============================================
const jokes = {
  joke: [
    "Why did Rose bring a ladder to the party?\nBecause she heard the drinks were on the house.",
    "Rose: I'm not like other people.\nOther people: We know. You're better.",
    "Why did the calendar blush?\nBecause Rose marked it as 'Best Day Ever' three times.",
    "What do you call a Rose who's also amazing?\nJust Rose. That covers it.",
    "Rose walked into a library and asked for books about paranoia.\nLibrarian: They're right behind you.\nRose: Perfect.",
    "Why did the sun go to therapy?\nBecause it kept comparing itself to Rose's smile and lost.",
    "Rose typed 'Who is the most iconic person alive?' into Google.\nGoogle said: 'Did you mean yourself?'",
    "Why can't Rose play hide and seek?\nBecause someone is always happy to find her.",
    "Rose walked past a mirror and the mirror said 'omg, same.'",
    "The WiFi password changed to 'RoseIsGreat' and no one complained.",
    "Knock knock.\nWho's there?\nHappy thoughts.\nHappy thoughts who?\nHappy thoughts of Rose, obviously.",
    "Why did the cookie cry?\nBecause Rose ate all the ice cream first. Respect.",
    "Rose tried to write her flaws list.\nShe ran out of paper because she kept writing compliments instead.",
    "Doctor: I have good news and better news.\nRose: What's the good news?\nDoctor: The better news is you're Rose and that covers everything.",
    "Rose's horoscope today: 'You will be amazing.'\nEvery horoscope, every day, no exceptions.",
    "Why did the moon apply for a job?\nBecause it wanted to be around Rose.",
    "Rose opened a fortune cookie.\nIt said: 'Congratulations on being you.'",
  ],
  icecream: [
    "EMERGENCY PROTOCOL ACTIVATED:\nProceed immediately to nearest ice cream source.\nThis is not a drill.",
    "Doctor's Orders:\nYou are legally required to eat ice cream at least once today.\nPrescription signed: Dr. Varun.",
    "Scientists discover:\nIce cream consumed while happy makes you 200% happier.\nRose qualifies for both doses.",
    "Breaking: Ice cream shortage reported.\nCause: Rose keeps being too cute and the universe compensates automatically.",
    "Ice Cream Flavour Recommendation for Today:\nWhatever you want. You deserve it. All of it.",
    "The ice cream said:\n'I was waiting for you, Rose.'",
    "Official Notice:\nThe ice cream aisle has been renamed 'Rose's section' effective immediately.",
    "Fun Fact:\nIce cream tastes 47% better on difficult days.\nThis is your sign to go get some.",
    "Diagnosis: Low ice cream levels.\nPrescription: One scoop (minimum). Repeat as needed.",
    "The committee has reviewed your week.\nRecommendation: Extra scoop. With sprinkles. Non-negotiable.",
  ],
  confidence: [
    "If confidence were money,\nRose would own three countries and a small moon.",
    "Reminder:\nYou are legally and cosmically required to be confident today.",
    "The FBI called.\nThey want to know how you keep being this cool.\nYou declined to comment.",
    "Breaking News:\nRose spotted being iconic again. Experts call it 'Tuesday.'",
    "Rose walked into a room.\nThe room straightened up and tried to look nice.",
    "Mirror: You look amazing.\nRose: I know.\nMirror: Oh, she gets it.",
    "Rose's confidence level today: ████████████ 100%",
    "The vibe check results are in:\nRose: Immaculate.",
    "Today's power level: Over 9000.\nSource: Rose being Rose.",
    "You are the energy you've been looking for.\nAnd you've had it the whole time.",
    "Style check: Passed.\nVibe check: Passed.\nBeing awesome check: Eternally passed.",
  ],
  chaos: [
    "CHAOS MODE ACTIVATED:\nAnything is possible.\nRose is leading the charge.",
    "Chaotic good:\nRose, eating ice cream at midnight, not caring, thriving.",
    "Fun chaos idea:\nTell someone you love them today.\nWatch them become 300% happier.",
    "Today's mission:\nDo one thing that makes you laugh. Anything counts.",
    "Chaotic affirmation:\nYou are feral in the best way.\nWild. Free. Rose.",
    "Breaking: Rose has decided to have a good day.\nThe universe has no choice but to comply.",
    "Plot Twist:\nThe chaotic thing you're considering? Do it.\n(The ice cream one, obviously.)",
    "Chaos tip:\nPlay your favourite song at full volume.\nImmediately 200% better.",
    "Emergency Chaos Protocol:\nLaugh at something tiny.\nDance for 30 seconds.\nCarry on.",
    "Did you know?\nBeing a little chaotic and a lot wonderful is Rose's entire brand.",
    "Chaotic Rose energy:\nShe showed up. She was herself. Everyone was better for it.",
  ],
  laugh: [
    "Ha.\nHa ha.\nHa ha ha.\nOkay you're laughing now. You're welcome.",
    "This is your sign to think about something funny from last year and laugh again.",
    "Remember that one time something ridiculous happened?\nYep. Still funny.",
    "The giggle is incoming.\n3... 2... 1... there it is.",
    "Fun exercise:\nTry to keep a straight face while saying 'banana' five times fast.",
    "Plot Twist:\nYou already look cute when you laugh.\nSo you might as well laugh more.",
    "Science has confirmed:\nYour laugh makes the room better.\nPlease deploy it liberally.",
    "Breaking: Rose laughed.\nEveryone nearby immediately felt better about everything.",
    "This is your official laugh prescription for today.\nDoctor's orders. No skipping.",
    "If your laugh were a song, it would be everyone's favourite song.\nFact.",
  ]
};

// =============================================
// DATA — 100 Happy Jar Notes
// =============================================
const happyNotes = [
  "Someone is smiling because of you. Right now.",
  "Drink water. You are mostly water. Be kind to yourself.",
  "Take a deep breath. In. Hold. Out. Better.",
  "You are doing better than you think.",
  "Today is proud of you.",
  "Rest is not laziness. It's self-respect.",
  "You have survived 100% of your hard days.",
  "Something wonderful is on its way to you.",
  "You are exactly where you need to be.",
  "One good thing: you opened this jar.",
  "You deserve softness today.",
  "Your vibe is magnetic today.",
  "Check in with yourself: are you okay? If not, that's okay too.",
  "You made someone feel safe this week. You don't know it, but you did.",
  "Progress doesn't have to be dramatic to be real.",
  "You are more than what you produce.",
  "Take a break if you need one. The work will wait.",
  "The flowers are growing because you water them. You do the same.",
  "Someone out there thinks you're wonderful.",
  "You don't have to have it all figured out today.",
  "Your feelings are valid. All of them.",
  "You've been kind today, even when it was hard.",
  "Give yourself the same grace you give to others.",
  "Your story isn't over. This is still the middle part.",
  "You are the main character. Act like it.",
  "Stretch. Your body deserves five minutes.",
  "You've outgrown things you used to think you couldn't live without. Growth.",
  "The sky is doing something beautiful right now. Look up.",
  "Eat something that makes you happy today.",
  "You are a good person. Not perfect — good. That's better.",
  "You helped someone without realising it this week.",
  "Today you are allowed to just be.",
  "Put on your favourite song. Right now.",
  "You are not a burden. You are a gift.",
  "Small joys are still joys.",
  "You are building something, even when it doesn't feel like it.",
  "You are loved — not for what you do, just for being you.",
  "It's okay to start over. It's okay to start small.",
  "The version of you reading this deserves kindness.",
  "You made it to another day. That counts.",
  "You are resilient. Not because you don't feel things — because you do.",
  "You belong in the rooms you walk into.",
  "Something today will surprise you in a good way.",
  "Breathe. You're still here. That's enough.",
  "You've made peace with things that would have broken you before. See that.",
  "You are someone's safe person.",
  "Drink your water. Eat your snack. You're doing great.",
  "Today: be gentle with yourself first.",
  "Your presence alone changes the energy of a room.",
  "Wherever you are, you belong there.",
  "You are worthy of rest without earning it.",
  "Not every day will be good — but there is good in every day.",
  "You're growing in ways you can't see yet.",
  "One step at a time is still moving forward.",
  "You are not your productivity.",
  "Someone thought of you warmly today.",
  "You have handled harder things than this. Remember that.",
  "Your heart is good. Keep it that way.",
  "The universe is quietly rooting for you.",
  "You matter beyond what you can measure.",
  "Rest your eyes. You've been looking at screens too long.",
  "You are enough, right now, exactly as you are.",
  "Celebrate the small wins. They add up.",
  "Take the long route home sometimes. Notice things.",
  "You didn't give up when it was hard. Quietly proud of you.",
  "You are allowed to be happy, Rose.",
  "Ask for help if you need it. That's strength.",
  "Your bad days don't cancel your good ones.",
  "Something that worries you now will seem smaller soon.",
  "You are exactly who someone needed today.",
  "Put your phone down for five minutes. Just breathe.",
  "You've been working hard. You deserve a moment.",
  "The kindness you give comes back to you.",
  "You are more capable than your worst anxiety tells you.",
  "You have arrived at today. That's the whole job.",
  "You are a living, breathing good thing.",
  "Today: notice one beautiful thing you'd normally walk past.",
  "Your softness is not weakness. It is a form of courage.",
  "Someone's favourite memory involves you. You don't know which one.",
  "You have changed for the better.",
  "Be patient with yourself. You're learning.",
  "You are not running out of time. You are on your timeline.",
  "The hard moment will pass. It always does.",
  "You are rare, Rose. Actually rare.",
  "You show up for people. That matters enormously.",
  "Notice how far you've already come.",
  "Today you don't have to be extraordinary. Just you.",
  "You are cared about. More than you know.",
  "All your feelings make sense. Let them through.",
  "Even on the heavy days — you are still luminous.",
  "You are worthy of love and belonging. Always.",
  "Today holds something good for you. Keep your eyes open.",
  "You are part of why the world is a gentler place.",
  "Something beautiful will come from this season of your life.",
  "You are held, even when it doesn't feel like it.",
  "You are treasured. You are loved. You are Rose.",
  "You are the sunshine someone has been waiting for today.",
  "Come back here whenever you need to. This jar is always full."
];

// =============================================
// DATA — Daily Quotes, Compliments, Jokes
// =============================================
const dailyQuotes = [
  "She remembered who she was and the game changed.",
  "Be yourself — everyone else is already taken.",
  "In a world full of trends, remain a classic.",
  "She is both hellfire and holy water.",
  "You are the universe experiencing itself.",
  "Do it with passion or not at all.",
  "She turned her can'ts into cans and her dreams into plans.",
  "The most courageous act is still to think for yourself.",
  "She was chaos and beauty intertwined.",
  "Everything you've been through brought you here.",
  "Make it happen. Shock everyone.",
  "You attract what you are. Be magnetic.",
  "Beautiful things don't ask for attention.",
  "She believed she could, so she did.",
  "Your only limit is your mind.",
  "Let her sleep. When she wakes, she will move mountains.",
  "Life is tough, my darling — but so are you.",
  "Stay close to anything that makes you glad you're alive.",
  "Bloom where you are planted.",
  "You are the magic you're looking for."
];

// =============================================
// UTILITY FUNCTIONS
// =============================================
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showMsg(el, text) {
  el.classList.remove('visible');
  setTimeout(() => {
    el.innerHTML = text.replace(/\n/g, '<br>');
    el.classList.add('visible');
  }, 200);
}

// =============================================
// PAGE NAVIGATION
// =============================================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close mobile nav
  document.getElementById('nav-links').classList.remove('open');

  // Page-specific init
  if (name === 'final') initFinalHearts();
  if (name === 'beauty') initMoonParticles();
  if (name === 'certificate') initCertParticles();
}

// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// =============================================
// PAGE 2 — SMILE & SURPRISE
// =============================================
function getSmile() {
  const el = document.getElementById('smile-msg');
  showMsg(el, rand(smileMessages));
  // Alternate photos
  const photos = ['rose1.jpg', 'rose2.jpg', 'rose3.jpg'];
  document.getElementById('smile-photo').src = rand(photos);
  spawnHeartBurst();
}

function surpriseMe() {
  const all = [...smileMessages, ...compliments, ...happyNotes];
  const el = document.getElementById('surprise-msg');
  showMsg(el, rand(all));
}

function moodBooster() {
  const boosts = [
    "🌈 Your mood just levelled up.",
    "🎵 Play your favourite song right now. Do it.",
    "🌸 Look up from the screen. Notice something beautiful.",
    "☀️ The sun is technically out there for you.",
    "💃 Give yourself a 10-second dance break. You earned it.",
    "🍦 Ice cream. Just saying.",
    "🫂 You deserve a hug. This is your virtual one.",
    "✨ Close your eyes, breathe deep. Open them — you're still amazing.",
    "🌺 One good thing: you exist. That alone is enough.",
    "🎉 Celebrate yourself. Right now. For no reason. GO.",
  ];
  const el = document.getElementById('surprise-msg');
  showMsg(el, rand(boosts));
}

// =============================================
// PAGE 3 — COMPLIMENTS
// =============================================
function getCompliment() {
  const el = document.getElementById('compliment-display');
  const c = rand(compliments);
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerHTML = c;
    el.style.opacity = 1;
  }, 300);
  spawnHeartBurst();
}

// =============================================
// PAGE 4 — LAUGH LAB
// =============================================
function getJoke(type) {
  const el = document.getElementById('joke-display');
  el.classList.remove('visible');
  const pool = jokes[type] || jokes.joke;
  setTimeout(() => {
    el.innerHTML = rand(pool).replace(/\n/g, '<br>');
    el.classList.add('visible');
  }, 200);
}

// =============================================
// PAGE 5 — CERTIFICATE
// =============================================
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colours = ['#f9a8d4','#c4b5fd','#fdba74','#ffd700','#ff6fa8','#a5f3fc','#86efac','#fff'];
  const shapes = ['circle', 'rect', 'heart'];

  for (let i = 0; i < 220; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 10 + 5,
      colour: rand(colours),
      shape: rand(shapes),
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 5 + 2,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.15,
      alpha: 1
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;
      if (frame > 120) p.alpha -= 0.012;
      ctx.save();
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.colour;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'rect') {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.font = `${p.w * 1.5}px serif`;
        ctx.fillText('❤', -p.w / 2, p.h / 2);
      }
      ctx.restore();
    });
    frame++;
    if (frame < 200) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
  draw();
}

function initCertParticles() {
  const container = document.getElementById('cert-particles');
  if (!container) return;
  container.innerHTML = '';
  const symbols = ['✦', '✧', '⋆', '★', '✨', '💛'];
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className = 'floater';
    p.textContent = rand(symbols);
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      font-size:${Math.random()*0.8+0.6}rem;
      color:rgba(255,215,0,${Math.random()*0.5+0.3});
      animation-duration:${Math.random()*5+4}s;
      animation-delay:${Math.random()*4}s;
      position:absolute;
    `;
    container.appendChild(p);
  }
}

// =============================================
// PAGE 9 — SECRET
// =============================================
function triggerSecret() {
  launchConfetti();

  const btn = document.getElementById('secret-btn');
  btn.disabled = true;
  btn.textContent = '🎉 UNLOCKED! 🎉';
  btn.style.background = 'linear-gradient(135deg,#ffd700,#ff6fa8)';

  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 700);

  spawnHeartBurst(40);

  const result = document.getElementById('secret-result');
  const achieves = [
    '✨ Too Cute',
    '✨ Too Cool',
    '✨ Too Awesome',
    '✨ Queen Energy',
    '✨ Ice Cream Certified'
  ];

  result.innerHTML = '<div style="font-size:2rem;font-family:\'Dancing Script\',cursive;color:#ffd700;text-shadow:0 0 20px rgba(255,215,0,.8)">ROSE PREMIUM EDITION UNLOCKED 🎉</div>';

  const achDiv = document.createElement('div');
  achDiv.className = 'achievements';
  achieves.forEach((a, i) => {
    setTimeout(() => {
      const span = document.createElement('div');
      span.className = 'achievement';
      span.style.animationDelay = `${i * 0.15}s`;
      span.textContent = a;
      achDiv.appendChild(span);
    }, 400 + i * 200);
  });
  result.appendChild(achDiv);
}

// =============================================
// PAGE 10 — HAPPY JAR
// =============================================
function openJar() {
  const lid = document.getElementById('jar-lid');
  const note = document.getElementById('jar-note');

  lid.style.transform = 'translateY(-20px) rotate(30deg)';
  lid.style.transition = 'all .4s ease';

  setTimeout(() => {
    note.classList.remove('visible');
    setTimeout(() => {
      note.textContent = rand(happyNotes);
      note.classList.add('visible');
    }, 300);
    lid.style.transform = '';
  }, 600);

  spawnHeartBurst(8);
}

// =============================================
// FINAL PAGE — HEARTS
// =============================================
function initFinalHearts() {
  const container = document.getElementById('final-hearts');
  if (!container) return;
  container.innerHTML = '';
  const hearts = ['❤️','💗','💕','💖','💝','🌹','✨','💫'];
  for (let i = 0; i < 30; i++) {
    const h = document.createElement('div');
    h.className = 'final-heart';
    h.textContent = rand(hearts);
    h.style.cssText = `
      left:${Math.random()*100}%;
      font-size:${Math.random()*1.5+0.8}rem;
      animation-duration:${Math.random()*8+6}s;
      animation-delay:${Math.random()*8}s;
    `;
    container.appendChild(h);
  }
}

// =============================================
// BEAUTY PAGE — MOON PARTICLES
// =============================================
function initMoonParticles() {
  const container = document.getElementById('moon-particles');
  if (!container) return;
  container.innerHTML = '';
  const symbols = ['🌙','⭐','✨','💫','🌟','·','✦'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'moon-particle';
    p.textContent = rand(symbols);
    p.style.cssText = `
      left:${Math.random()*100}%;
      font-size:${Math.random()*1.2+0.6}rem;
      animation-duration:${Math.random()*10+8}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
}

// =============================================
// BACKGROUND FLOATING ELEMENTS
// =============================================
function initBgElements() {
  const container = document.getElementById('bg-elements');
  const elements = [
    { symbol: '❤️', count: 15, cls: '' },
    { symbol: '✨', count: 20, cls: '' },
    { symbol: '🦋', count: 10, cls: 'sway' },
    { symbol: '☁️', count: 8, cls: 'sway' },
    { symbol: '🌸', count: 12, cls: '' },
    { symbol: '⭐', count: 10, cls: '' },
    { symbol: '💫', count: 8, cls: '' },
    { symbol: '🌟', count: 6, cls: '' },
  ];

  elements.forEach(({ symbol, count, cls }) => {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = `floater ${cls}`;
      el.textContent = symbol;
      el.style.cssText = `
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 1.2 + 0.8}rem;
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * 15}s;
      `;
      container.appendChild(el);
    }
  });
}

// =============================================
// HEART BURST EFFECT
// =============================================
function spawnHeartBurst(count = 20) {
  const hearts = ['❤️','💗','💕','💖','💝','✨','💫','🌸'];
  for (let i = 0; i < count; i++) {
    const h = document.createElement('div');
    h.textContent = rand(hearts);
    const x = 20 + Math.random() * 60;
    const y = 20 + Math.random() * 60;
    h.style.cssText = `
      position:fixed;
      left:${x}vw;
      top:${y}vh;
      font-size:${Math.random()*1.5+1}rem;
      pointer-events:none;
      z-index:5000;
      animation: heartBurstAnim ${Math.random()*1.5+1}s ease forwards;
    `;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2500);
  }
}

// =============================================
// SLIDESHOW — PAGE 1
// =============================================
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// =============================================
// DAILY BITS (seeded by date so same all day)
// =============================================
function initDailyBits() {
  const today = new Date().toDateString();
  let seed = 0;
  for (const ch of today) seed += ch.charCodeAt(0);

  const ci = seed % compliments.length;
  const ji = (seed * 3) % jokes.joke.length;
  const qi = (seed * 7) % dailyQuotes.length;

  const dcEl = document.getElementById('daily-compliment');
  const djEl = document.getElementById('daily-joke');
  const dqEl = document.getElementById('daily-quote');

  if (dcEl) dcEl.textContent = compliments[ci];
  if (djEl) djEl.textContent = jokes.joke[ji].replace(/\n/g, ' ');
  if (dqEl) dqEl.textContent = dailyQuotes[qi];
}

// =============================================
// INJECT HEART BURST KEYFRAME
// =============================================
function injectKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes heartBurstAnim {
      0%   { transform: translate(0,0) scale(0.5); opacity: 1; }
      50%  { opacity: 1; }
      100% { transform: translate(${Math.random()>0.5?'':'-'}${Math.random()*100+50}px, -${Math.random()*120+60}px) scale(1.4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  injectKeyframes();
  initBgElements();
  initSlideshow();
  initDailyBits();
  // Show welcome page
  showPage('welcome');
});
