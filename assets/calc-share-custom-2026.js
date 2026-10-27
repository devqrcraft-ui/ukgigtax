/* UK Gig Tax - custom share bar for the extra 2026/27 calculators.
   Each calculator supplies its own summary text, so labels always match the result. */
(function () {
  'use strict';

  function pageUrl() {
    return location.origin + location.pathname + location.search;
  }

  function fallbackCopy(text, done) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand('copy');
      done();
    } catch (e) {
      /* clipboard blocked */
    }
    document.body.removeChild(area);
  }

  function copy(text, button, okLabel) {
    function done() {
      if (!button) return;
      var old = button.getAttribute('data-label') || button.textContent;
      button.setAttribute('data-label', old);
      button.textContent = okLabel || 'Copied';
      button.classList.add('ugt-ok');
      setTimeout(function () {
        button.textContent = old;
        button.classList.remove('ugt-ok');
      }, 1800);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }

  function openShare(network, text, url) {
    var t = encodeURIComponent(text);
    var u = encodeURIComponent(url);
    var target = '';
    if (network === 'whatsapp') target = 'https://wa.me/?text=' + t;
    else if (network === 'telegram') target = 'https://t.me/share/url?url=' + u + '&text=' + t;
    else if (network === 'x') target = 'https://twitter.com/intent/tweet?text=' + t + '&url=' + u;
    else if (network === 'facebook') target = 'https://www.facebook.com/sharer/sharer.php?u=' + u;
    else if (network === 'email') target = 'mailto:?subject=' + encodeURIComponent('UK tax estimate 2026/27') + '&body=' + t;
    if (target) window.open(target, '_blank', 'noopener,noreferrer');
  }

  function ensureCss() {
    if (document.getElementById('ugt-share-css')) return;
    var style = document.createElement('style');
    style.id = 'ugt-share-css';
    style.textContent = [
      '.ugt-share{margin-top:14px;padding-top:13px;border-top:1px solid rgba(255,255,255,.08)}',
      '.ugt-share-t{font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#8ab4d4;margin-bottom:9px}',
      '.ugt-share-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}',
      '.ugt-share-grid button,.ugt-share-grid a{display:flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:0 8px;background:#0d2036;border:1.5px solid #1e3a5f;border-radius:8px;color:#dbe9f7;font-family:inherit;font-size:.82rem;font-weight:600;text-decoration:none;cursor:pointer;transition:border-color .15s,color .15s,background .15s}',
      '.ugt-share-grid button:hover,.ugt-share-grid a:hover{border-color:#22c55e;color:#22c55e;background:rgba(34,197,94,.06)}',
      '.ugt-share-note{font-size:.7rem;line-height:1.45;color:#8ab4d4;margin-top:8px}',
      '.ugt-ok{border-color:#22c55e !important;color:#22c55e !important}',
      '@media(min-width:520px){.ugt-share-grid{grid-template-columns:repeat(4,1fr)}}'
    ].join('');
    document.head.appendChild(style);
  }

  function mount(container, textBuilder) {
    if (!container || document.getElementById('ugt-share') || typeof textBuilder !== 'function') return;
    ensureCss();
    var bar = document.createElement('div');
    bar.className = 'ugt-share';
    bar.id = 'ugt-share';
    bar.innerHTML = [
      '<div class="ugt-share-t">Share this estimate</div>',
      '<div class="ugt-share-grid">',
      '<button type="button" data-ugt="copy">Copy result</button>',
      '<button type="button" data-ugt="link">Copy link</button>',
      '<button type="button" data-ugt="native">Share</button>',
      '<a href="#" data-ugt="whatsapp" rel="noopener">WhatsApp</a>',
      '<a href="#" data-ugt="telegram" rel="noopener">Telegram</a>',
      '<a href="#" data-ugt="x" rel="noopener">X / Twitter</a>',
      '<a href="#" data-ugt="facebook" rel="noopener">Facebook</a>',
      '<a href="#" data-ugt="email" rel="noopener">Email</a>',
      '</div>',
      '<p class="ugt-share-note">Shared figures are an estimate for 2026/27, based on GOV.UK rates. Not tax advice.</p>'
    ].join('');
    container.appendChild(bar);

    function text() {
      return textBuilder() + '\n\nEstimate only, not tax advice. Calculate yours: ' + pageUrl();
    }

    bar.addEventListener('click', function (event) {
      var el = event.target.closest('[data-ugt]');
      if (!el) return;
      event.preventDefault();
      var kind = el.getAttribute('data-ugt');
      if (kind === 'copy') copy(text(), el, 'Copied');
      else if (kind === 'link') copy(pageUrl(), el, 'Link copied');
      else if (kind === 'native') {
        if (navigator.share) {
          navigator.share({ title: 'UK tax estimate 2026/27', text: text(), url: pageUrl() }).catch(function () {});
        } else {
          openShare('whatsapp', text(), pageUrl());
        }
      } else {
        openShare(kind, text(), pageUrl());
      }
    });
  }

  window.UKCalcShare = { mount: mount, copy: copy, pageUrl: pageUrl };
})();
