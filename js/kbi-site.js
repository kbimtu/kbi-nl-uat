(function () {
  'use strict';

  var ORG = 'Königsberger Bridges Institute Netherlands Chapter';

  var base = '';
  var scriptTags = document.getElementsByTagName('script');
  for (var i = 0; i < scriptTags.length; i++) {
    var src = scriptTags[i].getAttribute('src') || '';
    if (src.indexOf('kbi-site.js') !== -1) {
      base = src.indexOf('../') === 0 ? '../' : '';
      break;
    }
  }

  function url(path) {
    return base + path;
  }

  function renderAnnouncementBar() {
    var el = document.getElementById('announcement-bar');
    if (!el) return;
    el.innerHTML =
      '<div class="kbi-announcement">' +
      '<div class="container">' +
      '<span><i class="fas fa-bullhorn"></i> ETO Western 2026 — 8–9 October, InHolland University of Applied Sciences</span>' +
      '<a href="' + url('upcoming-events/events.html') + '">View all events →</a>' +
      '</div></div>';
    document.body.classList.add('kbi-has-announcement');
  }

  function navDropdown(label, items) {
    var id = 'nav-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    var html =
      '<li class="nav-item dropdown">' +
      '<a class="nav-link dropdown-toggle" href="javascript:void(0)" id="' + id + '" role="button" data-bs-toggle="dropdown" aria-expanded="false">' +
      label + '</a>' +
      '<ul class="dropdown-menu" aria-labelledby="' + id + '">';
    items.forEach(function (item) {
      html += '<li><a class="dropdown-item" href="' + url(item.href) + '">' + item.label + '</a></li>';
    });
    html += '</ul></li>';
    return html;
  }

  function navMegaProgrammes() {
    return (
      '<li class="nav-item dropdown kbi-mega-nav">' +
      '<a class="nav-link dropdown-toggle" href="javascript:void(0)" id="nav-programmes" role="button" data-bs-toggle="dropdown" aria-expanded="false">Programmes</a>' +
      '<div class="dropdown-menu kbi-mega-menu" aria-labelledby="nav-programmes">' +
      '<div class="kbi-mega-grid">' +
      megaCol('Compete', [
        { label: 'Emerging Technologies Olympiad (ETO)', href: 'upcoming-events/eto-western-2026.html' },
        { label: 'I2OL Scheme', href: 'programme/i2ol.html' }
      ]) +
      megaCol('Certify', [
        { label: 'ETTI', href: 'programme/etti.html' },
        { label: 'SkillSprint', href: 'programme/skillsprint.html' },
        { label: 'ABC5', href: 'programme/abc5.html' },
        { label: 'ISFRETIC', href: 'programme/isfretic.html' }
      ]) +
      megaCol('Collab', [
        { label: 'Project Support', href: 'programme/projects.html' },
        { label: 'Working &amp; Research Groups', href: 'programme/working-research-groups.html' }
      ]) +
      megaCol('Connect', [
        { label: 'Socratic Circles', href: 'programme/socratic-circles.html' },
        { label: 'Community Gatherings', href: 'programme/community-gatherings.html' }
      ]) +
      '</div>' +
      '<div class="kbi-mega-footer"><a href="' + url('programme/programmes.html') + '">View all programmes →</a></div>' +
      '</div></li>'
    );
  }

  function megaCol(title, items) {
    var html = '<div class="kbi-mega-col"><span class="kbi-mega-title">' + title + '</span><ul>';
    items.forEach(function (item) {
      html += '<li><a href="' + url(item.href) + '">' + item.label + '</a></li>';
    });
    html += '</ul></div>';
    return html;
  }

  function renderNav() {
    var el = document.getElementById('site-nav');
    if (!el) return;

    el.innerHTML =
      '<nav class="navbar navbar-expand-lg fixed-top kbi-navbar" id="tm-nav">' +
      '<a href="' + url('index.html') + '" class="kbi-nav-logo" aria-label="KBI Netherlands — home">' +
      '<img src="' + url('img/brand/logo-icon.png') + '" alt="" class="kbi-nav-logo-icon" width="40" height="40">' +
      '<span class="kbi-nav-wordmark"><span class="kbi-nav-wordmark-name">KBI Netherlands</span>' +
      '<span class="kbi-nav-wordmark-sub">Königsberger Bridges Institute</span></span></a>' +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#kbi-navbar-content" aria-controls="kbi-navbar-content" aria-expanded="false" aria-label="Toggle navigation">' +
      '<span class="navbar-toggler-icon"></span></button>' +
      '<div class="collapse navbar-collapse" id="kbi-navbar-content">' +
      '<ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-lg-center">' +
      navDropdown('About Us', [
        { label: 'Who We Are', href: 'about/about-who-we-are.html' },
        { label: 'Our History', href: 'about/about-history.html' },
        { label: 'Our Impact', href: 'about/about-impact.html' },
        { label: 'Our Team', href: 'about/about-team.html' },
        { label: 'Media &amp; Brand Kit', href: 'media.html' }
      ]) +
      navMegaProgrammes() +
      '<li class="nav-item"><a class="nav-link" href="' + url('upcoming-events/events.html') + '">Upcoming Events</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="' + url('news/news.html') + '">News</a></li>' +
      '<li class="nav-item"><a class="nav-link" href="' + url('contact.html') + '">Contact</a></li>' +
      '</ul>' +
      '<div class="kbi-nav-actions">' +
      '<a href="' + url('programme/partners.html') + '" class="kbi-btn kbi-btn-outline">Partner With Us</a>' +
      '<a href="' + url('programme/membership.html') + '" class="kbi-btn kbi-btn-primary">Join Us</a>' +
      '</div></div></nav>';
  }

  function footerLinks(items) {
    return items.map(function (item) {
      return '<li><a href="' + url(item.href) + '">' + item.label + '</a></li>';
    }).join('');
  }

  function footerProgrammeGroup(label, items) {
    return (
      '<div class="kbi-footer-group">' +
      '<button type="button" class="kbi-footer-toggle" aria-expanded="false">' + label + '</button>' +
      '<ul class="kbi-footer-panel">' + footerLinks(items) + '</ul></div>'
    );
  }

  function footerCol(title, innerHtml) {
    return (
      '<div class="col-6 col-md-4 col-lg mb-4 kbi-footer-col">' +
      '<h6 class="kbi-footer-col-title">' + title + '</h6>' + innerHtml + '</div>'
    );
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML =
      '<footer class="kbi-footer">' +
      '<div class="container">' +
      '<div class="row kbi-footer-main">' +
      '<div class="col-12 col-lg-3 mb-4 mb-lg-0 kbi-footer-brand-col">' +
      '<a href="' + url('index.html') + '" class="kbi-footer-brand">' +
      '<img src="' + url('img/brand/logo-icon.png') + '" alt="" class="kbi-footer-brand-icon" width="40" height="40">' +
      '<span class="kbi-footer-brand-name">KBI Netherlands</span>' +
      '</a>' +
      '<p class="kbi-footer-tagline">' + ORG + ' connects students, universities, and industry in the Netherlands through olympiads, certification, and community programmes.</p>' +
      '</div>' +
      footerCol('About Us',
        '<ul class="kbi-footer-links">' + footerLinks([
          { label: 'Who We Are', href: 'about/about-who-we-are.html' },
          { label: 'Our History', href: 'about/about-history.html' },
          { label: 'Our Impact', href: 'about/about-impact.html' },
          { label: 'Our Team', href: 'about/about-team.html' },
          { label: 'Media &amp; Brand Kit', href: 'media.html' }
        ]) + '</ul>') +
      footerCol('Programme',
        '<div class="kbi-footer-programme">' +
        footerProgrammeGroup('Compete', [
          { label: 'ETO Western 2026 (8–9 Oct, InHolland)', href: 'upcoming-events/eto-western-2026.html' },
          { label: 'I2OL Scheme', href: 'programme/i2ol.html' }
        ]) +
        footerProgrammeGroup('Certify', [
          { label: 'ETTI', href: 'programme/etti.html' },
          { label: 'SkillSprint', href: 'programme/skillsprint.html' },
          { label: 'ABC5', href: 'programme/abc5.html' },
          { label: 'ISFRETIC', href: 'programme/isfretic.html' }
        ]) +
        footerProgrammeGroup('Collab', [
          { label: 'Project Support', href: 'programme/projects.html' },
          { label: 'Working &amp; Research Groups', href: 'programme/working-research-groups.html' }
        ]) +
        footerProgrammeGroup('Connect', [
          { label: 'Socratic Circles', href: 'programme/socratic-circles.html' },
          { label: 'Community Gatherings', href: 'programme/community-gatherings.html' }
        ]) +
        '</div>') +
      footerCol('Events',
        '<ul class="kbi-footer-links">' + footerLinks([
          { label: 'All Events', href: 'upcoming-events/events.html' },
          { label: 'ETO Western 2026', href: 'upcoming-events/eto-western-2026.html' },
          { label: 'ETS 2026', href: 'upcoming-events/events.html#ets-2026' }
        ]) + '</ul>') +
      footerCol('News &amp; Insights',
        '<ul class="kbi-footer-links">' + footerLinks([
          { label: 'News &amp; Insights', href: 'news/news.html' }
        ]) + '</ul>') +
      footerCol('Get Involved',
        '<ul class="kbi-footer-links">' + footerLinks([
          { label: 'Partner With Us', href: 'programme/partners.html' },
          { label: 'Join Us', href: 'programme/membership.html' },
          { label: 'Contact', href: 'contact.html' }
        ]) + '</ul>') +
      '</div>' +
      '<div class="kbi-footer-bottom">' +
      '<p class="kbi-footer-copyright">&copy; 2026 Königsberger Bridges Institute. All rights reserved.</p>' +
      '<ul class="kbi-legal-links">' +
      '<li><a href="' + url('privacy-policy.html') + '">Privacy Policy</a></li>' +
      '<li><a href="' + url('gdpr.html') + '">GDPR Statement</a></li>' +
      '<li><a href="' + url('personal-data.html') + '">Personal Data Statement</a></li>' +
      '<li><a href="#" id="kbi-cookie-settings">Cookie Settings</a></li>' +
      '</ul></div></div></footer>';
  }

  function bindFooterToggles() {
    document.querySelectorAll('.kbi-footer-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.closest('.kbi-footer-group');
        var open = group.classList.contains('is-open');
        document.querySelectorAll('.kbi-footer-group.is-open').forEach(function (g) {
          g.classList.remove('is-open');
          g.querySelector('.kbi-footer-toggle').setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          group.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function getCookieConsent() {
    try {
      return JSON.parse(localStorage.getItem('kbi-cookie-consent'));
    } catch (e) {
      return null;
    }
  }

  function setCookieConsent(analytics) {
    localStorage.setItem('kbi-cookie-consent', JSON.stringify({ analytics: analytics, ts: Date.now() }));
  }

  function renderCookieBanner(forceShow) {
    var el = document.getElementById('cookie-banner');
    if (!el) return;

    var consent = getCookieConsent();
    if (consent && !forceShow) {
      el.innerHTML = '';
      el.classList.remove('kbi-cookie-visible');
      return;
    }

    el.innerHTML =
      '<div class="kbi-cookie-banner" role="dialog" aria-label="Cookie consent">' +
      '<div class="container">' +
      '<p>We use essential cookies for site functionality. Analytics cookies help us improve the site — you can accept or decline them. See our <a href="' + url('privacy-policy.html') + '">Privacy Policy</a>.</p>' +
      '<div class="kbi-cookie-actions">' +
      '<button type="button" class="kbi-btn kbi-btn-primary" id="kbi-cookie-accept">Accept all</button>' +
      '<button type="button" class="kbi-btn kbi-btn-outline" id="kbi-cookie-essential">Essential only</button>' +
      '</div></div></div>';
    el.classList.add('kbi-cookie-visible');

    document.getElementById('kbi-cookie-accept').addEventListener('click', function () {
      setCookieConsent(true);
      renderCookieBanner(false);
    });
    document.getElementById('kbi-cookie-essential').addEventListener('click', function () {
      setCookieConsent(false);
      renderCookieBanner(false);
    });
  }

  function bindCookieSettings() {
    document.addEventListener('click', function (e) {
      var target = e.target.closest('#kbi-cookie-settings');
      if (target) {
        e.preventDefault();
        renderCookieBanner(true);
      }
    });
  }

  function bindNavScroll() {
    var nav = document.querySelector('.kbi-navbar');
    if (!nav) return;

    var threshold = 70;

    function updateNav() {
      var y = window.scrollY || window.pageYOffset;
      if (y > threshold) {
        nav.classList.add('kbi-nav-frosted');
        nav.classList.remove('kbi-nav-solid');
      } else {
        nav.classList.remove('kbi-nav-frosted');
        nav.classList.add('kbi-nav-solid');
      }
    }

    nav.classList.add('kbi-nav-solid');
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  function bindAudienceTabs() {
    var tabs = document.querySelectorAll('.audience-tab');
    var panels = document.querySelectorAll('.audience-panel');
    if (!tabs.length) return;

    function showAudience(target) {
      tabs.forEach(function (tab) {
        var active = tab.dataset.audience === target;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach(function (panel) {
        var active = panel.dataset.audience === target;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        showAudience(tab.dataset.audience);
      });
    });
  }

  function bindStatCounters() {
    if (!('IntersectionObserver' in window)) return;

    function animateCounter(el) {
      var suffix = el.querySelector('span');
      var suffixTxt = suffix ? suffix.textContent : '';
      var raw = el.textContent.replace(suffixTxt, '').trim();
      var num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      if (isNaN(num)) return;

      var duration = 1800;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var prog = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - prog, 3);
        var val = Math.round(num * eased);
        var disp = num >= 1000 ? val.toLocaleString() : String(val);
        el.textContent = disp;
        if (suffix) el.appendChild(suffix);
        if (prog < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    var counters = document.querySelectorAll('.stats-counter');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function bindNewsFilters() {
    var btns = document.querySelectorAll('.news-filter-btn');
    var cards = document.querySelectorAll('.news-all-card');
    if (!btns.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        btns.forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });
        cards.forEach(function (card) {
          var cat = card.getAttribute('data-category');
          card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
        });
      });
    });
  }

  function init() {
    renderAnnouncementBar();
    renderNav();
    renderFooter();
    bindFooterToggles();
    bindNavScroll();
    bindAudienceTabs();
    bindStatCounters();
    bindNewsFilters();
    renderCookieBanner(false);
    bindCookieSettings();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
