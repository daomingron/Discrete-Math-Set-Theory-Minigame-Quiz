var score = 0;
var currentQuestionIndex = 0;
var totalQuestions = 35;

// Questions (unchanged content preserved)
var questions = [
  {
    number: 1,
    text: 'Let X be the set of all even positive integers strictly less than 13. What are the elements of X?',
    choices: ['{2, 4, 6, 8, 10, 12, 14}', '{0, 2, 4, 6, 8, 10, 12}', '{2, 4, 6, 8, 10, 12}'],
    answer: 'C'
  },
  {
    number: 2,
    text: 'Let Y be the set of odd integers greater than 10 and less than 20. What are the elements of Y?',
    choices: ['{11, 13, 15, 17, 19}', '{11, 13, 17, 19}', '{9, 11, 13, 15, 17, 19, 21}'],
    answer: 'A'
  },
  {
    number: 3,
    text: 'Consider Set M = {even integers} and Set N = {multiples of 5}. Are these two sets disjoint?',
    choices: [
      'Yes, because no even numbers can ever end in a 5 or 0.',
      'No, because numbers like 10, 20, and 30 belong to both sets.',
      'They are disjoint only when 0 is excluded from both sets.'
    ],
    answer: 'B'
  },
  {
    number: 4,
    text: 'If Set A = {10, 15, 20, 25} and Set B = {12, 15, 18, 20, 22}, find the intersection (A n B).',
    choices: ['{15, 20}', '{10, 12, 15, 18, 20, 22, 25}', '{15}'],
    answer: 'A'
  },
  {
    number: 5,
    text: 'If Set C = {1, 3, 8, 9} and Set D = {2, 3, 9, 10}, find the union (C u D).',
    choices: ['{3, 9}', '{1, 2, 3, 8, 9, 10}', '{1, 2, 8, 10}'],
    answer: 'B'
  },
  {
    number: 6,
    text: 'What is the cardinality of the set S = {x | x is an even prime number greater than 10}?',
    choices: ['1', '0', 'Infinite'],
    answer: 'B'
  },
  {
    number: 7,
    text: "True or False: The sets {4, 8, 12, 16} and {16, 12, 8, 4, 4} are equal sets.",
    choices: [
      'True (Element ordering and duplicate entries do not alter set identity)',
      'False (The second set has 5 listed items while the first has 4)',
      'Only if duplicates are counted separately, they are not equal.'
    ],
    answer: 'A'
  },
  {
    number: 8,
    text: 'If Set P = {5, 10, 15, 20, 25} and Set Q = {15, 25, 35}, evaluate the set difference P - Q.',
    choices: ['{5, 10, 20}', '{35}', '{5, 10, 15, 20, 25, 35}'],
    answer: 'A'
  },
  {
    number: 9,
    text: 'What is the cardinality of the Power Set of R = {3, 6, 9, 12}?',
    choices: ['4', '8', '16'],
    answer: 'C'
  },
  {
    number: 10,
    text: 'Does creating a new set by combining duplicate listings change its underlying properties? e.g., does {x, y} equal {x, y, x, y}?',
    choices: ['Yes, it artificially inflates the unique item count.', 'No, multiple listings of identical objects make no difference.', 'Yes, because repeated entries create an ordered list instead of a set.'],
    answer: 'B'
  },
  {
    number: 11,
    text: "If an element 'k' belongs to the complement of Set A within Universal Set U, which expression is true?",
    choices: ['k is an element of A', 'k is not an element of U', 'k is an element of U but not an element of A'],
    answer: 'C'
  },
  {
    number: 12,
    text: 'Let Universal set U = {10, 20, 30, 40, 50, 60}. If A = {10, 30, 50}, find the explicit complement of A.',
    choices: ['{20, 40, 60}', '{10, 30, 50}', '{}'],
    answer: 'A'
  },
  {
    number: 13,
    text: 'In an ordered 3-tuple sequence, does changing the position of components result in a completely distinct sequence?',
    choices: [
      'Yes, because position and ordering matter fundamentally in tuples.',
      'No, sequences contain objects exactly like standard unordered sets.',
      'Only when the tuple contains repeated values does order matter.'
    ],
    answer: 'A'
  },
  {
    number: 14,
    text: 'If Set G has 4 elements and Set H has 3 elements, what is the total number of coordinate items in the Cartesian Product |G x H|?',
    choices: ['7', '12', '64'],
    answer: 'B'
  },
  {
    number: 15,
    text: 'Using the Principle of Inclusion-Exclusion, if |A| = 12, |B| = 15, and |A n B| = 4, what is |A u B|?',
    choices: ['27', '31', '23'],
    answer: 'C'
  },
  {
    number: 16,
    text: 'Find the Universal Set.',
    choices: ['{2, 3, 4, 5, 6, 7, 8, 10, 11, 12}', '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}', '{1, 9}'],
    answer: 'B'
  },
  {
    number: 17,
    text: 'Find the Union Set (A U B).',
    choices: ['{2, 3, 4, 5, 6, 7, 8, 10, 11, 12}', '{2}', '{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}'],
    answer: 'A'
  },
  {
    number: 18,
    text: 'Find Set A.',
    choices: ['{3, 5, 7, 11}', '{2, 4, 6, 8, 10, 12}', '{2, 3, 5, 7, 11}'],
    answer: 'C'
  },
  {
    number: 19,
    text: 'Find Set B.',
    choices: ['{4, 6, 8, 10, 12}', '{2, 4, 6, 8, 10, 12}', '{2, 3, 5, 7, 11}'],
    answer: 'B'
  },
  {
    number: 20,
    text: 'Find the Intersection (A n B).',
    choices: ['{2}', '{1, 9}', '{}'],
    answer: 'A'
  },
  {
    number: 21,
    text: 'Find the Complement Of The Union.',
    choices: ['{2}', '{3, 5, 7, 11}', '{1, 9}'],
    answer: 'C'
  },
  {
    number: 22,
    text: 'Find the Set Difference A - B.',
    choices: ['{2}', '{3, 5, 7, 11}', '{4, 6, 8, 10, 12}'],
    answer: 'B'
  },
  {
    number: 23,
    text: 'Find the Set Difference B - A.',
    choices: ['{4, 6, 8, 10, 12}', '{3, 5, 7, 11}', '{2, 4, 6, 8, 10, 12}'],
    answer: 'A'
  },
  {
    number: 24,
    text: "Find the Complement A'.",
    choices: ['{1, 4, 6, 8, 9, 10, 12}', '{4, 6, 8, 10, 12}', '{1, 3, 5, 7, 9, 11}'],
    answer: 'A'
  },
  {
    number: 25,
    text: "Find the Complement B'.",
    choices: ['{3, 5, 7, 11}', '{1, 4, 6, 8, 9, 10, 12}', '{1, 3, 5, 7, 9, 11}'],
    answer: 'C'
  },
  {
    number: 26,
    text: 'Find the Universal Set.',
    choices: ['{2, 4, 6, 8, 10, 12}', '{2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22}', '{14, 16, 18, 20, 22}'],
    answer: 'B'
  },
  {
    number: 27,
    text: 'Find the Union Set (A U B).',
    choices: ['{2, 4, 6, 8, 10, 12}', '{6, 8}', '{14, 16, 18, 20, 22}'],
    answer: 'A'
  },
  {
    number: 28,
    text: 'Find Set A.',
    choices: ['{2, 4}', '{2, 4, 6, 8}', '{6, 8}'],
    answer: 'B'
  },
  {
    number: 29,
    text: 'Find Set B.',
    choices: ['{6, 8, 10, 12}', '{10, 12}', '{2, 4, 6, 8, 10, 12}'],
    answer: 'A'
  },
  {
    number: 30,
    text: 'Find the Intersection (A n B).',
    choices: ['{2, 4}', '{14, 16, 18, 20, 22}', '{6, 8}'],
    answer: 'C'
  },
  {
    number: 31,
    text: 'Find the Complement Of The Union.',
    choices: ['{14, 16, 18, 20, 22}', '{}', '{2, 4, 10, 12}'],
    answer: 'A'
  },
  {
    number: 32,
    text: 'Find the Set Difference A - B.',
    choices: ['{6, 8}', '{2, 4}', '{10, 12}'],
    answer: 'B'
  },
  {
    number: 33,
    text: 'Find the Set Difference B - A.',
    choices: ['{10, 12}', '{2, 4}', '{6, 8, 10, 12}'],
    answer: 'A'
  },
  {
    number: 34,
    text: "Find the Complement A'.",
    choices: ['{10, 12}', '{2, 4, 14, 16, 18, 20, 22}', '{10, 12, 14, 16, 18, 20, 22}'],
    answer: 'C'
  },
  {
    number: 35,
    text: "Find the Complement B'.",
    choices: ['{2, 4, 14, 16, 18, 20, 22}', '{2, 4}', '{10, 12, 14, 16, 18, 20, 22}'],
    answer: 'A'
  }
];

// DOM references
var questionIndex = document.getElementById('questionIndex');
var questionText = document.getElementById('questionText');
var feedback = document.getElementById('feedback');
var resultPanel = document.getElementById('resultPanel');
var resultScore = document.getElementById('resultScore');
var resultAverage = document.getElementById('resultAverage');
var retryButton = document.getElementById('retryButton');
var welcomePanel = document.getElementById('welcomePanel');
var quizCard = document.getElementById('quizCard');
var startButton = document.getElementById('startButton');
var openGuideButton = document.getElementById('openGuideButton');
var closeGuideButton = document.getElementById('closeGuideButton');
var guidePanel = document.getElementById('guidePanel');
var guideBasics = document.getElementById('guideBasics');
var guideDiagrams = document.getElementById('guideDiagrams');
var guideDiagram1 = document.getElementById('guideDiagram1');
var guideDiagram2 = document.getElementById('guideDiagram2');
var diagramPanel = document.getElementById('diagramPanel');
var diagramTitle = document.getElementById('diagramTitle');
var diagram1 = document.getElementById('diagram1');
var diagram2 = document.getElementById('diagram2');
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext && canvas.getContext('2d');

// Game state
var targets = []; // array of {x,y,w,h,label,choiceIndex}
var projectile = null; // {x,y,vx,vy,r}
var mousePos = {x: 0, y: 0};
var cannon = {x: 0, y: 0, angle: 0};
var animId = null;
var feedbackShowing = false; // flag to prevent firing while feedback is displayed

function startQuiz() {
  welcomePanel.classList.add('hidden');
  quizCard.classList.remove('hidden');
  openGuideButton.classList.remove('hidden');
  score = 0;
  currentQuestionIndex = 0;
  feedback.style.color = '#D2E8FF';
  initGame();
  renderQuestion();
}

function handleTouchStartEvent(e) {
  var t = e.touches[0];
  onTouchStart(t);
  e.preventDefault();
}

function initGame() {
  // setup canvas size
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('click', onCanvasClick);
  canvas.addEventListener('touchstart', handleTouchStartEvent);
  // start render loop
  if (!animId) animId = requestAnimationFrame(loop);
}

function stopGame() {
  if (animId) {
    cancelAnimationFrame(animId);
    animId = null;
  }
  window.removeEventListener('resize', resizeCanvas);
  canvas.removeEventListener('mousemove', onMouseMove);
  canvas.removeEventListener('click', onCanvasClick);
  canvas.removeEventListener('touchstart', handleTouchStartEvent);
  projectile = null;
  targets = [];
}

function resizeCanvas() {
  var rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  // reposition cannon
  cannon.x = rect.width / 2;
  cannon.y = rect.height - 18;
}

function renderQuestion() {
  feedbackShowing = false; // allow firing for new question
  var fadeOverlay = document.getElementById('fadeOverlay');
  if (fadeOverlay) {
    fadeOverlay.classList.remove('fade-out');
  }
  var question = questions[currentQuestionIndex];
  questionIndex.textContent = 'Question ' + question.number + ' of ' + totalQuestions;
  questionText.textContent = question.text;
  feedback.textContent = 'Aim and shoot the target to select an answer.';
  feedback.style.color = '#FFFFFF';
  updateDiagram(question.number);
  // build targets
  buildTargets(question.choices);
  updateGuidePanel();
}

function updateGuidePanel() {
  var questionNumber = currentQuestionIndex + 1;
  if (questionNumber >= 16 && questionNumber <= 25) {
    guideBasics.classList.add('hidden');
    guideDiagrams.classList.remove('hidden');
    guideDiagram1.classList.remove('hidden');
    guideDiagram2.classList.add('hidden');
  } else if (questionNumber >= 26 && questionNumber <= 35) {
    guideBasics.classList.add('hidden');
    guideDiagrams.classList.remove('hidden');
    guideDiagram1.classList.add('hidden');
    guideDiagram2.classList.remove('hidden');
  } else {
    guideDiagrams.classList.add('hidden');
    guideBasics.classList.remove('hidden');
    guideDiagram1.classList.add('hidden');
    guideDiagram2.classList.add('hidden');
  }
}

function updateDiagram(questionNumber) {
  if (questionNumber >= 16 && questionNumber <= 25) {
    diagramPanel.classList.remove('hidden');
    diagramPanel.setAttribute('aria-hidden', 'false');
    diagramTitle.textContent = 'Part 2: Diagram 1 (Prime & Even Numbers)';
    diagram1.classList.remove('hidden');
    diagram2.classList.add('hidden');
  } else if (questionNumber >= 26 && questionNumber <= 35) {
    diagramPanel.classList.remove('hidden');
    diagramPanel.setAttribute('aria-hidden', 'false');
    diagramTitle.textContent = 'Part 3: Diagram 2 (Even Numbers 2–22)';
    diagram1.classList.add('hidden');
    diagram2.classList.remove('hidden');
  } else {
    diagramPanel.classList.add('hidden');
    diagramPanel.setAttribute('aria-hidden', 'true');
  }
}

function buildTargets(choices) {
  targets = [];
  var rect = canvas.getBoundingClientRect();
  var areaW = rect.width;
  var baseY = rect.height * 0.35; // targets in upper-middle
  // compute dynamic gap and width so targets don't overlap
  var minGap = 20;
  var maxW = Math.min(360, areaW * 0.32);
  // available width after reserving gaps between boxes
  var availableWidth = areaW - minGap * (choices.length + 1);
  var w = Math.max(140, Math.min(maxW, availableWidth / choices.length));
  var gap = Math.max(minGap, (areaW - w * choices.length) / (choices.length + 1));

  for (var i = 0; i < choices.length; i++) {
    // estimate height based on text wrapping
    ctx.save();
    ctx.font = '14px Inter, system-ui, sans-serif';
    var textHeight = estimateTextHeight(choices[i], w - 68, 18, ctx);
    ctx.restore();
    var paddingV = 20;
    var h = Math.max(80, textHeight + paddingV);
    var x = gap + i * (w + gap);
    var y = baseY - h / 2;
    targets.push({x: x, y: y, w: w, h: h, label: ['A','B','C'][i], text: choices[i], choiceIndex: i});
  }
}

function estimateTextHeight(text, maxWidth, lineHeight, ctxLocal) {
  var words = text.split(' ');
  var line = '';
  var y = 0;
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctxLocal.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      y += lineHeight;
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  // add last line
  y += lineHeight;
  return y;
}

function onMouseMove(e) {
  var rect = canvas.getBoundingClientRect();
  mousePos.x = e.clientX - rect.left;
  mousePos.y = e.clientY - rect.top;
  updateCannonAngle();
}

function onTouchStart(touch) {
  var rect = canvas.getBoundingClientRect();
  mousePos.x = touch.clientX - rect.left;
  mousePos.y = touch.clientY - rect.top;
  updateCannonAngle();
  fireProjectile();
}

function updateCannonAngle() {
  var dx = mousePos.x - cannon.x;
  var dy = mousePos.y - cannon.y;
  cannon.angle = Math.atan2(dy, dx);
}

function onCanvasClick() {
  fireProjectile();
}

function fireProjectile() {
  if (projectile) return; // one at a time
  if (feedbackShowing) return; // prevent firing while feedback is displayed
  var speed = 8; // pixels per frame
  var vx = Math.cos(cannon.angle) * speed;
  var vy = Math.sin(cannon.angle) * speed;
  projectile = {x: cannon.x, y: cannon.y, vx: vx, vy: vy, r: 8};
}

function loop() {
  update();
  draw();
  animId = requestAnimationFrame(loop);
}

function update() {
  // update projectile
  if (projectile) {
    projectile.x += projectile.vx;
    projectile.y += projectile.vy;
    // simple bounds check
    var rect = canvas.getBoundingClientRect();
    if (projectile.x < -20 || projectile.x > rect.width + 20 || projectile.y < -20 || projectile.y > rect.height + 20) {
      projectile = null;
    } else {
      // check collisions with targets
      for (var i = 0; i < targets.length; i++) {
        if (circleRectCollision(projectile, targets[i])) {
          var selected = targets[i].label;
          projectile = null;
          checkAnswer(selected);
          break;
        }
      }
    }
  }
}

function circleRectCollision(circle, rectObj) {
  var cx = circle.x;
  var cy = circle.y;
  var rx = rectObj.x;
  var ry = rectObj.y;
  var rw = rectObj.w;
  var rh = rectObj.h;
  // find closest point
  var closestX = Math.max(rx, Math.min(cx, rx + rw));
  var closestY = Math.max(ry, Math.min(cy, ry + rh));
  var dx = cx - closestX;
  var dy = cy - closestY;
  return (dx * dx + dy * dy) <= (circle.r * circle.r);
}

function draw() {
  var rect = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
  // draw targets
  for (var i = 0; i < targets.length; i++) {
    drawTarget(targets[i]);
  }
  // draw cannon
  drawCannon();
  // draw projectile
  if (projectile) drawProjectile(projectile);
}

function drawTarget(t) {
  // box
  ctx.save();
  ctx.fillStyle = 'rgba(32,217,163,0.06)';
  ctx.strokeStyle = 'rgba(32,217,163,0.22)';
  roundRect(ctx, t.x, t.y, t.w, t.h, 10, true, true);
  // label circle
  ctx.fillStyle = 'rgba(32,217,163,0.12)';
  ctx.beginPath();
  ctx.arc(t.x + 28, t.y + t.h/2, 20, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#20D9A3';
  ctx.font = '700 16px Inter, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(t.label, t.x + 28, t.y + t.h/2);
  // text
  ctx.fillStyle = '#DCEEFF';
  ctx.font = '14px Inter, system-ui, sans-serif';
  ctx.textAlign = 'left';
  // vertically center wrapped text inside the target box
  var lineHeight = 18;
  var textMaxWidth = t.w - 68;
  var estHeight = estimateTextHeight(t.text, textMaxWidth, lineHeight, ctx);
  var textStartY = t.y + (t.h - estHeight) / 2 + lineHeight/2;
  // draw with middle baseline so y positions center each line
  ctx.textBaseline = 'middle';
  wrapText(ctx, t.text, t.x + 60, textStartY, textMaxWidth, lineHeight);
  ctx.restore();
}

function drawCannon() {
  var rect = canvas.getBoundingClientRect();
  var x = cannon.x;
  var y = cannon.y;
  // base
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(cannon.angle);
  ctx.fillStyle = '#20D9A3';
  ctx.fillRect(-10, -6, 40, 12);
  // barrel
  ctx.fillStyle = '#0d7d67';
  ctx.fillRect(30, -4, 18, 8);
  // pivot circle
  ctx.beginPath();
  ctx.arc(0, 0, 12, 0, Math.PI*2);
  ctx.fillStyle = '#051a15';
  ctx.fill();
  ctx.strokeStyle = 'rgba(32,217,163,0.18)';
  ctx.stroke();
  ctx.restore();
}

function drawProjectile(p) {
  ctx.save();
  ctx.fillStyle = '#20D9A3';
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  if (typeof r === 'undefined') r = 5;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

// answer checking called when a target is hit
function checkAnswer(selectedChoice) {
  feedbackShowing = true; // prevent new shots while feedback is displayed
  var fadeOverlay = document.getElementById('fadeOverlay');
  if (fadeOverlay) {
    fadeOverlay.classList.add('fade-out');
  }
  var question = questions[currentQuestionIndex];
  if (selectedChoice === question.answer) {
    score += 1;
    feedback.textContent = 'Correct!';
    feedback.style.color = '#A5FFBB';
  } else {
    feedback.textContent = 'Wrong! The correct answer was ' + question.answer + '.';
    feedback.style.color = '#FFB3AA';
  }
  // small delay then next question
  setTimeout(function() {
    currentQuestionIndex += 1;
    if (currentQuestionIndex >= questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }, 900);
}

function showResults() {
  resultPanel.classList.remove('hidden');
  openGuideButton.classList.add('hidden');
  questionIndex.textContent = '';
  questionText.textContent = 'All questions complete.';
  feedback.textContent = '';
  // stop animation
  if (animId) cancelAnimationFrame(animId);
  animId = null;
  resultScore.textContent = 'Your Total Score: ' + score + ' out of ' + totalQuestions;
  resultAverage.textContent = 'Average: ' + ((score / totalQuestions) * 100).toFixed(2) + '%';
}

function resetQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  resultPanel.classList.add('hidden');
  quizCard.classList.add('hidden');
  welcomePanel.classList.remove('hidden');
  openGuideButton.classList.add('hidden');
  feedback.style.color = '#D2E8FF';
  feedback.textContent = '';
  questionIndex.textContent = '';
  questionText.textContent = '';
  stopGame();
  if (typeof diagramPanel !== 'undefined' && diagramPanel) {
    diagramPanel.classList.add('hidden');
    diagramPanel.setAttribute('aria-hidden', 'true');
  }
}

retryButton.addEventListener('click', resetQuiz);
startButton.addEventListener('click', startQuiz);
openGuideButton.addEventListener('click', function () { updateGuidePanel(); guidePanel.classList.remove('hidden'); guidePanel.setAttribute('aria-hidden', 'false'); });
closeGuideButton.addEventListener('click', function () { guidePanel.classList.add('hidden'); guidePanel.setAttribute('aria-hidden', 'true'); });
