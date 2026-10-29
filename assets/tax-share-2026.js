/* UK Gig Tax - share, copy and deep-link helpers for the 2026/27 calculators. */
(function () {
  'use strict';

  var YEAR = '2026/27';
  var state = null;

  function num(v) {
    var n = +v;
    return isFinite(n) && n > 0 ? n : 0;
  }

  function money(n) {
    return '\u00a3' + Math.round(num(n)).toLocaleString('en-GB');
  }

  function mileageLabel(vehicle) {
    if (vehicle === 'bicycle') return '20p per mile (bicycle)';
    if (vehicle === 'motorbike') return '24p per mile (motorbike)';
    return '55p first 10,000 miles, then 25p (car/van)';
  }

  function regionLabel(region) {
    return String(region || '').toLowerCase() === 'scotland' ? 'Scotland' : 'England / Wales / NI';
  }

  function setEstimate(data) {
    state = data || null;
  }

  function pageUrl() {
    return location.origin + location.pathname + location.search;
  }

  function writeParams(values) {
    if (!window.history || !history.replaceState) return;
    var params = new URLSearchParams(location.search);
    Object.keys(values).forEach(function (key) {
      var value = values[key];
      if (value === '' || value === null || value === undefined || value === 0 || value === '0') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });
    var query = params.toString();
    try {
      history.replaceState(null, '', location.pathname + (query ? '?' + query : '') + location.hash);
    } catch (e) {
      /* history is unavailable on some file:// previews */
    }
  }

  function restore(callback) {
    var params = new URLSearchParams(location.search);
    var ids = ['income', 'miles', 'expenses', 'paye', 'platform', 'vehicle', 'region'];
    var touched = false;
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el || !params.has(id)) return;
      el.value = params.get(id);
      touched = true;
    });
    var check = document.getElementById('paye-check');
    if (check && num(params.get('paye')) > 0 && !check.checked) {
      check.checked = true;
      var toggle = document.getElementById('paye-toggle');
      if (toggle) toggle.classList.add('on');
      var panel = document.getElementById('pf');
      if (panel) panel.classList.add('show');
    }
    if (touched && typeof callback === 'function') setTimeout(callback, 0);
  }

  function autoCalc(callback) {
    if (typeof callback !== 'function') return;
    var timer = null;
    function run() {
      clearTimeout(timer);
      timer = setTimeout(callback, 180);
    }
    document.querySelectorAll('.card input[type="number"], .card select, #paye-check').forEach(function (el) {
      el.addEventListener('input', run);
      el.addEventListener('change', run);
    });
  }

  function buildText() {
    if (!state) return '';
    var lines = [];
    lines.push('UK gig tax estimate ' + (state.year || YEAR) + (state.platform ? ' - ' + state.platform : ''));
    lines.push('Gross income: ' + money(state.income));
    if (num(state.mileageMiles) > 0) {
      lines.push('Mileage (' + mileageLabel(state.vehicle) + '): ' + money(state.mileage));
    }
    lines.push('Other expenses: ' + money(state.expenses));
    lines.push('Taxable profit: ' + money(state.profit));
    lines.push('Income Tax: ' + money(state.tax));
    lines.push('Class 4 NI: ' + money(state.ni));
    lines.push('Total tax: ' + money(state.total));
    lines.push('Take-home: ' + money(state.takehome));
    lines.push('Region: ' + regionLabel(state.region));
    lines.push('');
    lines.push('Estimate only, not tax advice. Calculate yours: ' + pageUrl());
    return lines.join('\n');
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
    function fallback() {
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
        /* clipboard is blocked */
      }
      document.body.removeChild(area);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  function isMobile() {
    return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
  }

  function track(method) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'share', { method: method, content_type: 'calculator_estimate', item_id: location.pathname });
      }
    } catch (e) {
      /* analytics must never break sharing */
    }
  }

  function shareUrl(medium) {
    var u;
    try { u = new URL(pageUrl()); } catch (e) { return pageUrl(); }
    u.searchParams.set('utm_source', 'share');
    u.searchParams.set('utm_medium', medium);
    return u.toString();
  }

  function leadText() {
    var t = buildText();
    var i = t.lastIndexOf('Calculate yours: ');
    return i >= 0 ? t.slice(0, i) + 'Calculate yours:' : t;
  }

  function fullText(medium) {
    return leadText() + ' ' + shareUrl(medium);
  }

  function shortText() {
    if (!state) return 'UK gig tax estimate ' + YEAR + '. Calculate yours:';
    return 'My UK gig tax estimate ' + (state.year || YEAR) + ': ' + money(state.total) + ' tax on ' + money(state.profit) + ' profit. Calculate yours:';
  }

  function shareTarget(network) {
    var enc = encodeURIComponent;
    switch (network) {
      case 'whatsapp': return 'https://wa.me/?text=' + enc(fullText('whatsapp'));
      case 'telegram': return 'https://t.me/share/url?url=' + enc(shareUrl('telegram')) + '&text=' + enc(leadText());
      case 'viber': return 'viber://forward?text=' + enc(fullText('viber'));
      case 'messenger': return 'fb-messenger://share/?link=' + enc(shareUrl('messenger'));
      case 'sms': return 'sms:?&body=' + enc(fullText('sms'));
      case 'x': return 'https://twitter.com/intent/tweet?text=' + enc(shortText()) + '&url=' + enc(shareUrl('x'));
      case 'facebook': return 'https://www.facebook.com/sharer/sharer.php?u=' + enc(shareUrl('facebook'));
      case 'linkedin': return 'https://www.linkedin.com/sharing/share-offsite/?url=' + enc(shareUrl('linkedin'));
      case 'reddit': return 'https://www.reddit.com/submit?url=' + enc(shareUrl('reddit')) + '&title=' + enc(shortText().replace(/ Calculate yours:$/, ''));
      case 'email': return 'mailto:?subject=' + enc('UK gig tax estimate ' + YEAR) + '&body=' + enc(fullText('email'));
    }
    return '';
  }

  function openShare(network) {
    var target = shareTarget(network);
    if (!target) return;
    track(network);
    if (/^https?:/.test(target)) window.open(target, '_blank', 'noopener,noreferrer');
    else window.location.href = target;
  }

  function ensureCss() {
    if (document.getElementById('ugt-share-css')) return;
    var style = document.createElement('style');
    style.id = 'ugt-share-css';
    style.textContent = [
      '.ugt-share{margin-top:14px;padding-top:13px;border-top:1px solid rgba(255,255,255,.08)}',
      '.ugt-share-t{font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#8ab4d4;margin-bottom:9px}',
      '.ugt-share-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}',
      '.ugt-share-grid button,.ugt-share-grid a{display:flex;align-items:center;justify-content:center;gap:6px;min-height:42px;padding:0 8px;background:#0d2036;border:1.5px solid #1e3a5f;border-radius:8px;color:#dbe9f7;font-family:inherit;font-size:.82rem;font-weight:600;text-decoration:none;cursor:pointer;transition:border-color .15s,color .15s,background .15s}',
      '.ugt-share-grid button:hover,.ugt-share-grid a:hover{border-color:#22c55e;color:#22c55e;background:rgba(34,197,94,.06)}',
      '.ugt-share-note{font-size:.7rem;line-height:1.45;color:#8ab4d4;margin-top:8px}',
      '.ugt-ok{border-color:#22c55e !important;color:#22c55e !important}',
      '@media(min-width:520px){.ugt-share-grid{grid-template-columns:repeat(4,1fr)}}'
    ].join('');
    document.head.appendChild(style);
  }

  function mountShare(container) {
    if (!container || document.getElementById('ugt-share')) return;
    ensureCss();
    var bar = document.createElement('div');
    bar.className = 'ugt-share';
    bar.id = 'ugt-share';
    var items = [];
    function btn(kind, label) { items.push('<button type="button" data-ugt="' + kind + '">' + label + '</button>'); }
    function link(kind, label) { items.push('<a href="#" data-ugt="' + kind + '" rel="noopener">' + label + '</a>'); }
    if (navigator.share) btn('native', 'Share\u2026');
    btn('copy', 'Copy estimate');
    btn('link', 'Copy link');
    link('whatsapp', 'WhatsApp');
    link('telegram', 'Telegram');
    link('viber', 'Viber');
    if (isMobile()) {
      link('messenger', 'Messenger');
      link('sms', 'SMS');
    }
    link('x', 'X / Twitter');
    link('facebook', 'Facebook');
    link('linkedin', 'LinkedIn');
    link('reddit', 'Reddit');
    link('email', 'Email');
    bar.innerHTML = [
      '<div class="ugt-share-t">Share this estimate</div>',
      '<div class="ugt-share-grid">' + items.join('') + '</div>',
      '<p class="ugt-share-note">Shared figures are an estimate for ' + YEAR + ', based on GOV.UK rates. Not tax advice.</p>'
    ].join('');
    container.appendChild(bar);

    bar.addEventListener('click', function (event) {
      var el = event.target.closest('[data-ugt]');
      if (!el) return;
      event.preventDefault();
      var kind = el.getAttribute('data-ugt');
      if (kind === 'copy') {
        track('copy_estimate');
        copy(fullText('copy'), el, 'Copied');
      } else if (kind === 'link') {
        track('copy_link');
        copy(shareUrl('copylink'), el, 'Link copied');
      } else if (kind === 'native') {
        track('native');
        if (navigator.share) {
          navigator.share({ title: 'UK gig tax estimate ' + YEAR, text: leadText(), url: shareUrl('native') }).catch(function () {});
        }
      } else {
        openShare(kind);
      }
    });
  }

  window.UKTaxShare = {
    YEAR: YEAR,
    setEstimate: setEstimate,
    buildText: buildText,
    pageUrl: pageUrl,
    writeParams: writeParams,
    restore: restore,
    autoCalc: autoCalc,
    mountShare: mountShare,
    copy: copy,
    shareTarget: shareTarget
  };
})();
