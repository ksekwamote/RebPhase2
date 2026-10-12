/* =============================================================================
   REB RESOURCES — RISK READINESS CHECKLIST + RISK SELF-ASSESSMENT
   Vanilla JS only. No build step, no dependencies.

   -----------------------------------------------------------------------------
   HOW TO EDIT THIS FILE IF YOU'RE NOT A DEVELOPER
   -----------------------------------------------------------------------------
   Everything you are likely to want to change lives in the "CONFIG" section
   directly below this comment block:
     - Checklist category/item wording and sector tags -> CHECKLIST_CONFIG
     - Checklist result bands (under 40% / 40-70% / over 70%) -> CHECKLIST_CONFIG.bands
     - Quiz questions, options and per-question tips -> QUIZ_CONFIG.questions
     - Quiz result bands (score out of 15) -> QUIZ_CONFIG.bands
     - CTA heading/copy/links -> CTA_CONFIG
     - Form endpoints for "email me my results" and tool feedback -> FORM endpoints
   You do not need to touch anything below "END CONFIG" to change wording.
   ============================================================================= */

/* ---------- Shared form endpoints -------------------------------------------
   TODO (REB/dev): replace with real endpoints before launch, e.g. a Formspree
   form (https://formspree.io) or REB's own lead-capture endpoint. Both are
   posted to as simple application/x-www-form-urlencoded requests. */
var LEAD_ENDPOINT = "https://formspree.io/f/TODO_REPLACE_WITH_LEAD_FORM_ID"; // TODO: "email me my results"
var FEEDBACK_ENDPOINT = "https://formspree.io/f/TODO_REPLACE_WITH_FEEDBACK_FORM_ID"; // TODO: "give feedback on this tool"

/* ---------- Shared call-to-action copy --------------------------------------
   Shown after results in both applets. `low`/`high` swap based on the score,
   split at `lowThreshold` (percent). */
var CTA_CONFIG = {
  heading: "Want to know where you really stand?",
  lowThreshold: 70,
  low: "Your gaps are fixable. Let's walk the site together.", // TODO (REB): confirm copy
  high: "Strong foundation. Let's verify it on-site.", // TODO (REB): confirm copy
  primaryLabel: "Book a Site Survey",
  primaryUrl: "contact.html#contactForm",
  secondaryLabel: "Talk to a risk advisor",
  secondaryUrl: "contact.html#contactForm"
};

/* =============================================================================
   APPLET 1 CONFIG — RISK READINESS CHECKLIST
   Wording below is taken verbatim from the REB Risk Checklist PDF.
   `sectors` on an item = which sector buttons give that item the orange
   "Priority for your sector" badge and double its score weight.
   Sector keys must match a `key` in CHECKLIST_CONFIG.sectors.
   ============================================================================= */
var CHECKLIST_CONFIG = {
  sectors: [
    { key: "all", label: "All" },
    { key: "mining", label: "Mining" },
    { key: "transport", label: "Transport & Logistics" },
    { key: "tourism", label: "Tourism & Hospitality" },
    { key: "utilities", label: "Utilities" }
  ],
  categories: [
    {
      name: "Governance & Compliance",
      items: [
        { text: "Company registration and tax compliance certificates are up to date", sectors: [] },
        { text: "Aligned with Botswana's Companies Act and labour laws", sectors: [] },
        { text: "Leadership trained in corporate governance best practices", sectors: [] }
      ]
    },
    {
      name: "Cybersecurity",
      items: [
        { text: "Regular backups of critical data", sectors: [] },
        { text: "Sensitive customer and operational data encrypted", sectors: ["utilities", "transport"] },
        { text: "Employees receive cybersecurity awareness training", sectors: [] }
      ]
    },
    {
      name: "Operational Resilience",
      items: [
        { text: "Documented business continuity plan in place", sectors: [] },
        { text: "Supply chain and route vulnerabilities assessed", sectors: ["mining", "transport"] },
        { text: "Adequate insurance coverage for property, liability, and business interruption", sectors: [] }
      ]
    },
    {
      name: "Crisis Communication",
      items: [
        { text: "Internal communication protocol for emergencies established", sectors: ["mining", "tourism"] },
        { text: "Designated spokesperson identified for external stakeholders", sectors: [] },
        { text: "Communication channels tested regularly (email, SMS, radio, social media)", sectors: ["tourism"] }
      ]
    },
    {
      name: "Risk Monitoring",
      items: [
        { text: "Risk register updated quarterly", sectors: [] },
        { text: "Annual risk surveys or audits conducted on-site", sectors: ["mining", "utilities"] },
        { text: "Incident reporting and tracking system in place", sectors: [] }
      ]
    }
  ],
  // Shown when every unticked item is gone (nothing left for "Where to start").
  allDoneMessage: "Every box is ticked. A site survey is the natural next step to verify and pressure-test what's in place.", // TODO (REB): confirm copy
  // Result bands. `max` is the upper bound of the readiness percentage for
  // that band (inclusive). Keep them in ascending order.
  bands: [
    { max: 40, label: "High exposure", message: "Several fundamentals are missing. This is where an on-site survey finds the costliest gaps first." }, // TODO (REB): confirm copy
    { max: 70, label: "Gaps to close", message: "You've got a foundation in place, but a few priority gaps are leaving you exposed." }, // TODO (REB): confirm copy
    { max: Infinity, label: "Well prepared", message: "Strong readiness across the board. A site survey can help you verify and fine-tune it." } // TODO (REB): confirm copy
  ]
};

/* =============================================================================
   APPLET 2 CONFIG — RISK SELF-ASSESSMENT
   Questions and options are taken verbatim from the REB Risk Checklist PDF.
   Scoring: A=0, B=1, C=2, D=3 per question, summed (max 15).
   `tip` is shown in "Your priorities" only when that question is answered A or B.
   ============================================================================= */
var QUIZ_CONFIG = {
  scoreMap: { A: 0, B: 1, C: 2, D: 3 },
  questions: [
    {
      text: "How often does your business review its risk register?",
      options: [
        { key: "A", text: "Never" },
        { key: "B", text: "Once a year" },
        { key: "C", text: "Quarterly" },
        { key: "D", text: "Monthly" }
      ],
      tip: "TODO (REB): Review your risk register at least quarterly — annual reviews miss emerging risks." // placeholder
    },
    {
      text: "Do you have a documented business continuity plan?",
      options: [
        { key: "A", text: "No" },
        { key: "B", text: "Yes, but outdated" },
        { key: "C", text: "Yes, updated annually" },
        { key: "D", text: "Yes, updated quarterly" }
      ],
      tip: "TODO (REB): A continuity plan loses value if it isn't kept current — review and test it on a set schedule." // placeholder
    },
    {
      text: "How secure is your customer and operational data?",
      options: [
        { key: "A", text: "Stored without encryption" },
        { key: "B", text: "Encrypted but not regularly tested" },
        { key: "C", text: "Encrypted and tested annually" },
        { key: "D", text: "Encrypted and tested quarterly" }
      ],
      tip: "TODO (REB): Encrypt operational data and test that encryption regularly, not just once at setup." // placeholder
    },
    {
      text: "Do employees receive cybersecurity training?",
      options: [
        { key: "A", text: "Never" },
        { key: "B", text: "Occasionally" },
        { key: "C", text: "Annually" },
        { key: "D", text: "Quarterly" }
      ],
      tip: "TODO (REB): Make cybersecurity awareness training a recurring habit, not a one-off induction topic." // placeholder
    },
    {
      text: "How prepared is your business for a crisis affecting operations or reputation?",
      options: [
        { key: "A", text: "No plan in place" },
        { key: "B", text: "Informal plan only" },
        { key: "C", text: "Formal plan, not tested" },
        { key: "D", text: "Formal plan, tested annually" }
      ],
      tip: "TODO (REB): Move beyond an informal plan — a tested, formal crisis plan is what holds up when it matters." // placeholder
    }
  ],
  // Shown when no question was answered A or B.
  noPrioritiesMessage: "You're covering the fundamentals well across every question. A site survey is the next step to pressure-test what's already in place.", // TODO (REB): confirm copy
  // Result bands keyed on raw score (0-15, inclusive upper bound).
  bands: [
    { max: 5, label: "Critical", message: "Your business is highly exposed right now. This is the priority conversation to have." }, // TODO (REB): confirm copy
    { max: 9, label: "Developing", message: "You're building the basics, but there are real gaps still open." }, // TODO (REB): confirm copy
    { max: 12, label: "Good", message: "Solid risk management is in place — a few refinements will close the remaining gaps." }, // TODO (REB): confirm copy
    { max: 15, label: "Strong", message: "A strong foundation across the board. Worth verifying it holds up under a real on-site survey." } // TODO (REB): confirm copy
  ]
};

/* =============================================================================
   END CONFIG — logic below. No wording lives past this point.
   ============================================================================= */

(function () {
  "use strict";

  var REDUCED_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------- */
  /* Reveal-on-scroll (IntersectionObserver)                                */
  /* ---------------------------------------------------------------------- */
  var revealObserver = null;
  function initRevealObserver() {
    if ("IntersectionObserver" in window && !REDUCED_MOTION) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
  }
  function observeReveal(el) {
    if (!el) return;
    el.classList.add("reveal");
    if (!revealObserver) {
      el.classList.add("is-visible");
      return;
    }
    revealObserver.observe(el);
  }
  // For content revealed by a user action (not scroll) rather than observed.
  function revealNow(el) {
    if (!el) return;
    el.classList.add("reveal");
    el.classList.remove("is-visible");
    void el.offsetWidth; // force reflow so the transition replays
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.classList.add("is-visible");
      });
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Small shared helpers                                                   */
  /* ---------------------------------------------------------------------- */
  function animateNumber(el, to, opts) {
    if (!el) return;
    opts = opts || {};
    var suffix = opts.suffix == null ? "%" : opts.suffix;
    var from = parseFloat(el.dataset.val || "0");
    if (REDUCED_MOTION || from === to) {
      el.textContent = to + suffix;
      el.dataset.val = to;
      return;
    }
    var duration = opts.duration || 500;
    var start = performance.now();
    function tick(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var val = Math.round(from + (to - from) * eased);
      el.textContent = val + suffix;
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = to + suffix;
        el.dataset.val = to;
      }
    }
    requestAnimationFrame(tick);
  }

  function setRing(circleEl, pct) {
    if (!circleEl) return;
    var r = circleEl.r.baseVal.value;
    var c = 2 * Math.PI * r;
    circleEl.style.strokeDasharray = c + "";
    circleEl.style.strokeDashoffset = c + "";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        circleEl.style.strokeDashoffset = c * (1 - pct / 100) + "";
      });
    });
  }

  var ctaBarShown = false;
  function markStarted() {
    if (ctaBarShown) return;
    ctaBarShown = true;
    var bar = document.getElementById("mobileCtaBar");
    if (bar) bar.classList.add("show");
  }

  /* ---------------------------------------------------------------------- */
  /* Shared CTA card (used by both applets)                                 */
  /* ---------------------------------------------------------------------- */
  function renderCtaCard(mountEl, initialPct, appletName, getPct) {
    if (!mountEl) return;
    var low = initialPct < CTA_CONFIG.lowThreshold;
    mountEl.innerHTML =
      '<div class="cta-card">' +
      "<h3>" + CTA_CONFIG.heading + "</h3>" +
      '<p class="cta-copy">' + (low ? CTA_CONFIG.low : CTA_CONFIG.high) + "</p>" +
      '<div class="cta-actions">' +
      '<a class="btn cta-primary-btn" href="' + CTA_CONFIG.primaryUrl + '">' + CTA_CONFIG.primaryLabel + "</a>" +
      '<a class="cta-secondary-link" href="' + CTA_CONFIG.secondaryUrl + '">' + CTA_CONFIG.secondaryLabel + "</a>" +
      "</div>" +
      '<div class="lead-capture">' +
      '<button type="button" class="lead-toggle">Email me my results</button>' +
      '<form class="lead-form" novalidate hidden>' +
      '<input type="text" name="name" placeholder="Your name" autocomplete="name" required />' +
      '<input type="email" name="email" placeholder="Your email" autocomplete="email" required />' +
      '<button type="submit" class="btn btn-dark">Send</button>' +
      '<div class="lead-status" aria-live="polite"></div>' +
      "</form>" +
      "</div>" +
      "</div>";

    var toggle = mountEl.querySelector(".lead-toggle");
    var form = mountEl.querySelector(".lead-form");
    toggle.addEventListener("click", function () {
      form.hidden = !form.hidden;
      if (!form.hidden) {
        var first = form.querySelector("input");
        if (first) first.focus();
      }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submitLead(form, appletName, getPct ? getPct() : initialPct);
    });
  }

  function updateCtaCopy(mountEl, pct) {
    if (!mountEl) return;
    var p = mountEl.querySelector(".cta-copy");
    if (!p) return;
    var low = pct < CTA_CONFIG.lowThreshold;
    var text = low ? CTA_CONFIG.low : CTA_CONFIG.high;
    if (p.textContent !== text) p.textContent = text;
  }

  function submitLead(form, appletName, pct) {
    var status = form.querySelector(".lead-status");
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    if (!name || !email) {
      status.textContent = "Please add your name and email.";
      return;
    }
    status.textContent = "Sending…";
    fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({ name: name, email: email, applet: appletName, result: pct + "%" })
    })
      .then(function () {
        status.textContent = "Thanks — results are on their way to your inbox.";
        form.reset();
      })
      .catch(function () {
        status.textContent = "Couldn't send right now — please email info@reb.co.bw directly.";
      });
  }

  /* =============================================================================
     APPLET 1 — RISK READINESS CHECKLIST
     ============================================================================= */
  var checklistState = { sector: "all", ticked: new Set() };
  var lastChecklistPct = 0;

  function itemFromId(id) {
    var parts = id.split("-");
    var ci = parseInt(parts[0].slice(1), 10);
    var ii = parseInt(parts[1].slice(1), 10);
    return CHECKLIST_CONFIG.categories[ci].items[ii];
  }

  function buildSectorButtons() {
    var wrap = document.getElementById("sectorSelect");
    if (!wrap) return;
    wrap.innerHTML = CHECKLIST_CONFIG.sectors
      .map(function (s) {
        var active = s.key === "all";
        return (
          '<button type="button" class="sector-btn' + (active ? " active" : "") +
          '" data-sector="' + s.key + '" aria-pressed="' + active + '">' + s.label + "</button>"
        );
      })
      .join("");
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".sector-btn");
      if (!btn) return;
      checklistState.sector = btn.dataset.sector;
      wrap.querySelectorAll(".sector-btn").forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active);
      });
      refreshSectorBadges();
      updateChecklistScore();
    });
  }

  function refreshSectorBadges() {
    document.querySelectorAll("#checklistCategories .check-row").forEach(function (row) {
      var item = itemFromId(row.dataset.id);
      var match = checklistState.sector !== "all" && item.sectors.indexOf(checklistState.sector) !== -1;
      var badge = row.querySelector(".sector-badge");
      if (badge) badge.hidden = !match;
      row.classList.toggle("is-priority", match);
    });
  }

  function buildChecklistDOM() {
    var wrap = document.getElementById("checklistCategories");
    if (!wrap) return;
    var html = "";
    CHECKLIST_CONFIG.categories.forEach(function (cat, ci) {
      html +=
        '<div class="cat-card" data-cat-card="' + ci + '">' +
        '<div class="cat-head"><h3>' + cat.name + '</h3><div class="cat-count" data-cat="' + ci + '">0 / ' + cat.items.length + "</div></div>" +
        '<div class="cat-progress"><div class="cat-progress-fill" data-cat-fill="' + ci + '"></div></div>' +
        '<div class="cat-items">';
      cat.items.forEach(function (item, ii) {
        var id = "c" + ci + "-i" + ii;
        html +=
          '<label class="check-row" data-id="' + id + '">' +
          '<input type="checkbox" class="check-input" id="chk-' + id + '" />' +
          '<span class="check-box" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="check-path" d="M4 12.5l4.5 4.5L20 6"/></svg></span>' +
          '<span class="check-text"><span class="check-label">' + item.text + "</span>" +
          (item.sectors.length ? '<span class="sector-badge" hidden>Priority for your sector</span>' : "") +
          "</span>" +
          "</label>";
      });
      html += "</div></div>";
    });
    wrap.innerHTML = html;
    wrap.addEventListener("change", onCheckToggle);
    document.querySelectorAll(".cat-card").forEach(observeReveal);
  }

  function onCheckToggle(e) {
    var input = e.target;
    if (!input.classList.contains("check-input")) return;
    var row = input.closest(".check-row");
    var id = row.dataset.id;
    if (input.checked) checklistState.ticked.add(id);
    else checklistState.ticked.delete(id);
    row.classList.toggle("is-checked", input.checked);
    updateCategoryCounts();
    updateChecklistScore();
    markStarted();
  }

  function updateCategoryCounts() {
    CHECKLIST_CONFIG.categories.forEach(function (cat, ci) {
      var count = 0;
      cat.items.forEach(function (item, ii) {
        if (checklistState.ticked.has("c" + ci + "-i" + ii)) count++;
      });
      var countEl = document.querySelector('.cat-count[data-cat="' + ci + '"]');
      var fillEl = document.querySelector('.cat-progress-fill[data-cat-fill="' + ci + '"]');
      if (countEl) countEl.textContent = count + " / " + cat.items.length;
      if (fillEl) fillEl.style.width = Math.round((count / cat.items.length) * 100) + "%";
    });
  }

  function computeChecklistScore() {
    var earned = 0,
      max = 0;
    CHECKLIST_CONFIG.categories.forEach(function (cat, ci) {
      cat.items.forEach(function (item, ii) {
        var id = "c" + ci + "-i" + ii;
        var weight = checklistState.sector !== "all" && item.sectors.indexOf(checklistState.sector) !== -1 ? 2 : 1;
        max += weight;
        if (checklistState.ticked.has(id)) earned += weight;
      });
    });
    return { earned: earned, max: max, pct: max ? Math.round((earned / max) * 100) : 0 };
  }

  function renderWhereToStart() {
    var listEl = document.getElementById("checklistWhereToStart");
    if (!listEl) return;
    var all = [];
    CHECKLIST_CONFIG.categories.forEach(function (cat, ci) {
      cat.items.forEach(function (item, ii) {
        var id = "c" + ci + "-i" + ii;
        if (checklistState.ticked.has(id)) return;
        var priority = 0;
        if (checklistState.sector !== "all" && item.sectors.indexOf(checklistState.sector) !== -1) priority = 2;
        else if (item.sectors.length) priority = 1;
        all.push({ text: item.text, cat: cat.name, priority: priority, order: ci * 100 + ii });
      });
    });
    all.sort(function (a, b) {
      return b.priority - a.priority || a.order - b.order;
    });
    var top3 = all.slice(0, 3);
    if (!top3.length) {
      listEl.innerHTML = "<li>" + CHECKLIST_CONFIG.allDoneMessage + "</li>";
      return;
    }
    listEl.innerHTML = top3
      .map(function (t) {
        return '<li><strong>' + t.text + '</strong><span class="wts-cat">' + t.cat + "</span></li>";
      })
      .join("");
  }

  function updateChecklistScore() {
    var result = computeChecklistScore();
    var pct = result.pct;
    var fillEl = document.getElementById("readinessFill");
    var pctEl = document.getElementById("readinessPct");
    if (fillEl) fillEl.style.width = pct + "%";
    animateNumber(pctEl, pct);

    var band = CHECKLIST_CONFIG.bands.find(function (b) {
      return pct <= b.max;
    }) || CHECKLIST_CONFIG.bands[CHECKLIST_CONFIG.bands.length - 1];
    var labelEl = document.getElementById("checklistBandLabel");
    var msgEl = document.getElementById("checklistBandMessage");
    if (labelEl) labelEl.textContent = band.label;
    if (msgEl) msgEl.textContent = band.message;

    renderWhereToStart();
    updateCtaCopy(document.getElementById("checklistCtaMount"), pct);
    lastChecklistPct = pct;
  }

  function initChecklistApp() {
    if (!document.getElementById("checklist-app")) return;
    buildSectorButtons();
    buildChecklistDOM();
    updateCategoryCounts();
    renderCtaCard(document.getElementById("checklistCtaMount"), 0, "Risk Readiness Checklist", function () {
      return lastChecklistPct;
    });
    updateChecklistScore();
    observeReveal(document.getElementById("checklistResultsPanel"));
  }

  /* =============================================================================
     APPLET 2 — RISK SELF-ASSESSMENT
     ============================================================================= */
  var quizState = { current: 0, answers: [] };

  function buildQuizDOM() {
    var wrap = document.getElementById("quizScreens");
    if (!wrap) return;
    var html = "";
    QUIZ_CONFIG.questions.forEach(function (q, qi) {
      html +=
        '<div class="quiz-screen' + (qi === 0 ? " active" : "") + '" data-index="' + qi + '">' +
        '<h3 class="quiz-q-text">' + (qi + 1) + ". " + q.text + "</h3>" +
        '<div class="quiz-options" role="radiogroup" aria-label="Question ' + (qi + 1) + '">' +
        q.options
          .map(function (opt) {
            return (
              '<button type="button" class="quiz-opt" data-key="' + opt.key + '" role="radio" aria-checked="false">' +
              '<span class="opt-key">' + opt.key + "</span>" +
              '<span class="opt-text">' + opt.text + "</span>" +
              "</button>"
            );
          })
          .join("") +
        "</div>" +
        "</div>";
    });
    wrap.innerHTML = html;
    wrap.addEventListener("click", onQuizOptionClick);
  }

  function onQuizOptionClick(e) {
    var btn = e.target.closest(".quiz-opt");
    if (!btn) return;
    var screen = btn.closest(".quiz-screen");
    var qi = parseInt(screen.dataset.index, 10);
    var key = btn.dataset.key;
    quizState.answers[qi] = key;
    screen.querySelectorAll(".quiz-opt").forEach(function (o) {
      var sel = o === btn;
      o.classList.toggle("selected", sel);
      o.setAttribute("aria-checked", sel ? "true" : "false");
    });
    if (qi === quizState.current) updateQuizNav();
    markStarted();
  }

  function updateQuizProgress() {
    var total = QUIZ_CONFIG.questions.length;
    var labelEl = document.getElementById("quizProgressLabel");
    var fillEl = document.getElementById("quizProgressFill");
    if (labelEl) labelEl.textContent = "Question " + (quizState.current + 1) + " of " + total;
    if (fillEl) fillEl.style.width = Math.round(((quizState.current + 1) / total) * 100) + "%";
  }

  function updateQuizNav() {
    var backBtn = document.getElementById("quizBackBtn");
    var nextBtn = document.getElementById("quizNextBtn");
    if (backBtn) backBtn.disabled = quizState.current === 0;
    var answered = quizState.answers[quizState.current] != null;
    if (nextBtn) {
      nextBtn.disabled = !answered;
      nextBtn.textContent = quizState.current === QUIZ_CONFIG.questions.length - 1 ? "See Results" : "Next";
    }
  }

  function goToQuestion(newIndex, dir) {
    var screens = document.querySelectorAll("#quizScreens .quiz-screen");
    var cur = screens[quizState.current];
    var next = screens[newIndex];
    if (!cur || !next) return;
    cur.classList.remove("active", "enter-next", "enter-back");
    quizState.current = newIndex;
    next.classList.add("active", dir === "back" ? "enter-back" : "enter-next");
    function clearAnim() {
      next.classList.remove("enter-next", "enter-back");
      next.removeEventListener("animationend", clearAnim);
    }
    next.addEventListener("animationend", clearAnim);
    updateQuizProgress();
    updateQuizNav();
  }

  function showQuizResults() {
    var shell = document.getElementById("quizShell");
    var panel = document.getElementById("quizResultsPanel");
    if (shell) shell.hidden = true;
    var score = quizState.answers.reduce(function (sum, key) {
      return sum + (QUIZ_CONFIG.scoreMap[key] || 0);
    }, 0);
    var pct = Math.round((score / 15) * 100);
    var band = QUIZ_CONFIG.bands.find(function (b) {
      return score <= b.max;
    }) || QUIZ_CONFIG.bands[QUIZ_CONFIG.bands.length - 1];

    if (panel) panel.hidden = false;

    var numEl = document.getElementById("quizScoreNum");
    animateNumber(numEl, pct);
    var labelEl = document.getElementById("quizBandLabel");
    var msgEl = document.getElementById("quizBandMessage");
    if (labelEl) labelEl.textContent = band.label;
    if (msgEl) msgEl.textContent = band.message;
    setRing(document.getElementById("quizRingFill"), pct);

    var tips = [];
    QUIZ_CONFIG.questions.forEach(function (q, i) {
      var ans = quizState.answers[i];
      if (ans === "A" || ans === "B") tips.push(q.tip);
    });
    var listEl = document.getElementById("quizPrioritiesList");
    if (listEl) {
      listEl.innerHTML = tips.length
        ? tips.map(function (t) { return "<li>" + t + "</li>"; }).join("")
        : "<li>" + QUIZ_CONFIG.noPrioritiesMessage + "</li>";
    }

    renderCtaCard(document.getElementById("quizCtaMount"), pct, "Risk Self-Assessment", function () {
      return pct;
    });

    if (panel) {
      revealNow(panel);
      panel.scrollIntoView({ behavior: REDUCED_MOTION ? "auto" : "smooth", block: "start" });
    }
  }

  function resetQuiz() {
    quizState.current = 0;
    quizState.answers = [];
    var panel = document.getElementById("quizResultsPanel");
    var shell = document.getElementById("quizShell");
    if (panel) {
      panel.hidden = true;
      panel.classList.remove("is-visible");
    }
    if (shell) shell.hidden = false;
    buildQuizDOM();
    updateQuizProgress();
    updateQuizNav();
    if (shell) shell.scrollIntoView({ behavior: REDUCED_MOTION ? "auto" : "smooth", block: "start" });
  }

  function initQuizApp() {
    if (!document.getElementById("quiz-app")) return;
    buildQuizDOM();
    observeReveal(document.getElementById("quizShell"));
    var backBtn = document.getElementById("quizBackBtn");
    var nextBtn = document.getElementById("quizNextBtn");
    var retakeBtn = document.getElementById("quizRetakeBtn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        if (quizState.current > 0) goToQuestion(quizState.current - 1, "back");
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (quizState.answers[quizState.current] == null) return;
        if (quizState.current < QUIZ_CONFIG.questions.length - 1) goToQuestion(quizState.current + 1, "next");
        else showQuizResults();
      });
    }
    if (retakeBtn) retakeBtn.addEventListener("click", resetQuiz);
    updateQuizProgress();
    updateQuizNav();
  }

  /* =============================================================================
     FEEDBACK MODAL (shared by both applets)
     ============================================================================= */
  function initFeedbackModal() {
    var modal = document.getElementById("feedbackModal");
    if (!modal) return;
    var backdrop = document.getElementById("feedbackBackdrop");
    var closeBtn = document.getElementById("feedbackClose");
    var form = document.getElementById("feedbackForm");
    var appletEl = document.getElementById("feedbackApplet");
    var status = document.getElementById("feedbackStatus");
    var rating = 0;

    function open(appletName) {
      appletEl.textContent = "Tool: " + appletName;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      var textarea = form.querySelector("textarea");
      if (textarea) textarea.focus();
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      form.reset();
      rating = 0;
      modal.querySelectorAll(".rate-btn").forEach(function (b) {
        b.classList.remove("selected");
        b.setAttribute("aria-pressed", "false");
      });
      status.textContent = "";
    }

    document.querySelectorAll(".feedback-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        open(btn.dataset.applet || "Resources tool");
      });
    });
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });

    modal.querySelectorAll(".rate-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        rating = parseInt(btn.dataset.val, 10);
        modal.querySelectorAll(".rate-btn").forEach(function (b) {
          var sel = b === btn;
          b.classList.toggle("selected", sel);
          b.setAttribute("aria-pressed", sel ? "true" : "false");
        });
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!rating) {
        status.textContent = "Please choose a rating from 1 to 5.";
        return;
      }
      status.textContent = "Sending…";
      var comment = form.elements.comment.value.trim();
      var email = form.elements.email.value.trim();
      fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          applet: appletEl.textContent.replace("Tool: ", ""),
          rating: rating,
          comment: comment,
          email: email
        })
      })
        .then(function () {
          status.textContent = "Thanks — your feedback helps us improve this tool.";
          setTimeout(close, 1600);
        })
        .catch(function () {
          status.textContent = "Couldn't send right now — please try again shortly.";
        });
    });
  }

  /* ---------------------------------------------------------------------- */
  /* Init                                                                    */
  /* ---------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initRevealObserver();
    initChecklistApp();
    initQuizApp();
    initFeedbackModal();
  });
})();
