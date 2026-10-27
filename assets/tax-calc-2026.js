/* UK Gig Tax - 2026/27 tax engine.
   Verified against GOV.UK on 27 October 2026:
   - Income Tax rates and Personal Allowances
   - Self-employed National Insurance rates (Class 4: 6% / 2%)
   - Simplified expenses - vehicles (cars/vans 55p then 25p; motorcycles 24p)
   - Scottish Income Tax rates and bands 2026 to 2027
   Bicycles: 20p per mile (HMRC approved mileage rate). */
(function () {
  'use strict';

  var YEAR = '2026/27';
  var PA = 12570;
  var BASIC_LIMIT = 50270;
  var HIGHER_LIMIT = 125140;
  var TAPER_START = 100000;

  function num(v) {
    var n = +v;
    return isFinite(n) && n > 0 ? n : 0;
  }

  function personalAllowance(totalIncome) {
    var income = num(totalIncome);
    if (income <= TAPER_START) return PA;
    return Math.max(0, PA - (income - TAPER_START) / 2);
  }

  function incomeTax(totalIncome, region) {
    var income = num(totalIncome);
    if (!income) return 0;
    var taxable = Math.max(0, income - personalAllowance(income));
    var tax = 0;
    var left = taxable;
    if (String(region || '').toLowerCase() === 'scotland') {
      var bands = [
        [3967, 0.19],
        [12989, 0.20],
        [14136, 0.21],
        [31338, 0.42],
        [50140, 0.45],
        [Infinity, 0.48]
      ];
      for (var i = 0; i < bands.length && left > 0; i++) {
        var chunk = Math.min(left, bands[i][0]);
        tax += chunk * bands[i][1];
        left -= chunk;
      }
    } else {
      var basic = Math.min(left, 37700);
      tax += basic * 0.20;
      left -= basic;
      var higher = Math.min(left, 74870);
      tax += higher * 0.40;
      left -= higher;
      tax += left * 0.45;
    }
    return Math.max(0, Math.round(tax));
  }

  function class4(profit) {
    var p = num(profit);
    if (p <= PA) return 0;
    var main = Math.min(p - PA, BASIC_LIMIT - PA);
    var extra = Math.max(0, p - BASIC_LIMIT);
    return Math.round(main * 0.06 + extra * 0.02);
  }

  function mileage(miles, vehicle) {
    var m = num(miles);
    if (!m) return 0;
    if (vehicle === 'bicycle') return m * 0.20;
    if (vehicle === 'motorbike') return m * 0.24;
    return Math.min(m, 10000) * 0.55 + Math.max(0, m - 10000) * 0.25;
  }

  function mileageLabel(vehicle) {
    if (vehicle === 'bicycle') return '20p per mile (bicycle)';
    if (vehicle === 'motorbike') return '24p per mile (motorbike)';
    return '55p first 10,000 miles, then 25p (car/van)';
  }

  function money(n) {
    return '\u00a3' + Math.round(num(n)).toLocaleString('en-GB');
  }

  function regionLabel(region) {
    return String(region || '').toLowerCase() === 'scotland' ? 'Scotland' : 'England / Wales / NI';
  }

  window.UKTax = {
    YEAR: YEAR,
    PA: PA,
    BASIC_LIMIT: BASIC_LIMIT,
    HIGHER_LIMIT: HIGHER_LIMIT,
    personalAllowance: personalAllowance,
    incomeTax: incomeTax,
    calcIT: incomeTax,
    class4: class4,
    calcNI: class4,
    mileage: mileage,
    mileageLabel: mileageLabel,
    money: money,
    num: num,
    regionLabel: regionLabel
  };
})();
