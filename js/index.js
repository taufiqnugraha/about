/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: https://www.modernizr.com/download/#-cssanimations-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
    function x(a) {
      j.cssText = a
    }

    function y(a, b) {
      return x(prefixes.join(a + ";") + (b || ""))
    }

    function z(a, b) {
      return typeof a === b
    }

    function A(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function B(a, b) {
      for (var d in a)
        if (j[a[d]] !== c) return b == "pfx" ? a[d] : !0;
      return !1
    }

    function C(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function D(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.substr(1),
        e = (a + " " + n.join(d + " ") + d).split(" ");
      return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
    }
    var d = "2.5.3",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = "Webkit Moz O ms",
      n = m.split(" "),
      o = m.toLowerCase().split(" "),
      p = {},
      q = {},
      r = {},
      s = [],
      t = s.slice,
      u, v = {}.hasOwnProperty,
      w;
    !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
      return v.call(a, b)
    } : w = function(a, b) {
      return b in a && z(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = t.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(t.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(t.call(arguments)))
        };
      return e
    }), p.cssanimations = function() {
      return D("animationName")
    };
    for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
    return x(""), i = k = null,
      function(a, b) {
        function g(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function h() {
          var a = k.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function i(a) {
          var b = {},
            c = a.createElement,
            e = a.createDocumentFragment,
            f = e();
          a.createElement = function(a) {
            var e = (b[a] || (b[a] = c(a))).cloneNode();
            return k.shivMethods && e.canHaveChildren && !d.test(a) ? f.appendChild(e) : e
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function(a) {
            return b[a] = c(a), f.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(k, f)
        }

        function j(a) {
          var b;
          return a.documentShived ? a : (k.shivCSS && !e && (b = !!g(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), f || (b = !i(a)), b && (a.documentShived = b), a)
        }
        var c = a.html5 || {},
          d = /^<|^(?:button|form|map|select|textarea)$/i,
          e, f;
        (function() {
          var a = b.createElement("a");
          a.innerHTML = "<xyz></xyz>", e = "hidden" in a, f = a.childNodes.length == 1 || function() {
            try {
              b.createElement("a")
            } catch (a) {
              return !0
            }
            var c = b.createDocumentFragment();
            return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
          }()
        })();
        var k = {
          elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: j
        };
        a.html5 = k, j(b)
      }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
        return B([a])
      }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return o.call(a) == "[object Function]"
    }

    function e(a) {
      return typeof a == "string"
    }

    function f() {}

    function g(a) {
      return !a || a == "loaded" || a == "complete" || a == "uninitialized"
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        (a.t == "c" ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          a != "img" && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = {},
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      y[c] === 1 && (r = 1, y[c] = [], l = b.createElement(a)), a == "object" ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), a != "img" && (r || y[c] === 2 ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i(b == "c" ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), p.length == 1 && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && o.call(a.opera) == "[object Opera]",
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return o.call(a) == "[object Array]"
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, i) {
        var j = b(a),
          l = j.autoCallback;
        j.url.split(".").pop().split("?").shift(), j.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h), j.instead ? j.instead(a, e, f, g, i) : (y[j.url] ? j.noexec = !0 : y[j.url] = 1, f.load(j.url, j.forceCSS || !j.forceJS && "css" == j.url.split(".").pop().split("?").shift() ? "c" : c, j.noexec, j.attrs, j.timeout), (d(e) || d(l)) && f.load(function() {
          k(), e && e(j.origUrl, i, g), l && l(j.origUrl, i, g), y[j.url] = 2
        })))
      }

      function i(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var j, l, m = this.yepnope.loader;
      if (e(a)) g(a, 0, m, 0);
      else if (w(a))
        for (j = 0; j < a.length; j++) l = a[j], e(l) ? g(l, 0, m, 0) : w(l) ? B(l) : Object(l) === l && i(l, m);
      else Object(a) === a && i(a, m)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };
  
var main = {
  init: function init(o) {var _this = this;
    this.vars();this.initContainer();this.initClose();this.initHideClose();
    this.prepareSprites();this.events();this.draw();
    setInterval(function () {_this.updateProgress(false);}, 10);
    return this;
  },
  initContainer: function initContainer() {
    this.iscroll = new IScroll('#js-wrapper', {
      scrollX: true, freeScroll: true, mouseWheel: true, probeType: 3 });

    var x = -this.centerX + this.wWidth / 2 + this.xOffset,
    y = -this.centerY + this.wHeight / 2 + this.yOffset;
    this.iscroll.scrollTo(x, y, 10);
  },
  vars: function vars() {
    this.S = 1;this.loadCnt = 0;this.maxLoadCnt = 8;
    this.BLOB_DURATION = 500;
    this.ext = this.isCanPlayMP3() ? 'mp3' : 'wav';
    this.isIE = this.isIE();
    this.isIOS = !!/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    this.isIOS && document.body.classList.add('ios');
    !this.isTabletMobile && document.body.classList.add('desktop');
    this.progressStep = 150 / this.maxLoadCnt * (1 / 16);

    this.getDOMElements();

    this.particleRadius = parseInt(getComputedStyle(this.particles[0]).width, 10) / 2;
    this.particlesLength = this.particles.length;

    this.radPoint = mojs.helpers.getRadialPoint;
    this.particleBuffer = null;this.isOpen = false;
    this.blobBase = 1.6;this.blob = this.blobBase;this.blobShift = this.blobBase;
    this.xOffset = this.particleRadius + 25;
    this.yOffset = 1.4 * this.particleRadius;

    var styles = getComputedStyle(this.particlesContainer);
    this.width = parseInt(styles.width, 10);this.height = parseInt(styles.height, 10);

    this.prepareDust();this.calcDimentions();this.loadAssets();

    var i = this.particlesLength;
    while (i--) {
      var particle = this.particles[i];
      particle.x = parseInt(particle.getAttribute('data-left'), 10);
      particle.y = parseInt(particle.getAttribute('data-top'), 10);
    }

  },
  getDOMElements: function getDOMElements() {
    this.particlesContainer = document.querySelector('#scroller');
    this.particles = document.querySelectorAll('.particle');
    this.closeBtn = document.querySelector('#js-close-btn');
    this.blobCircle = document.querySelector('#js-blob-circle');
    this.blobEllipses = this.blobCircle.querySelectorAll('#js-blob-circle-ellipse');
    this.dust1 = document.querySelector('#js-dust-1');
    this.dust2 = document.querySelector('#js-dust-2');
    this.dust3 = document.querySelector('#js-dust-3');
    this.dust4 = document.querySelector('#js-dust-4');
    this.content = document.querySelector('#js-content');
    this.curtain = document.querySelector('#js-curtain');
    this.progress = document.querySelector('#js-progress');
    this.progressGrad = document.querySelector('#js-progress-gradient');
  },
  draw: function draw() {
    var origin = this.bubleCenter.x + 'px ' + this.bubleCenter.y + 'px',
    h = mojs.h,inEasing = mojs.easing.cubic.in,i = this.particlesLength;

    h.setPrefixedStyle(this.particlesContainer, 'perspective-origin', origin);

    while (i--) {
      this.particleBuffer = this.particles[i];
      var x = Math.abs(this.bubleCenter.x - this.particleBuffer.x),
      y = Math.abs(this.bubleCenter.y - this.particleBuffer.y),
      radius = Math.sqrt(x * x + y * y),
      a = this.blob - 2 * radius / this.size,
      b = this.blobShift - 2 * radius / this.size,scaleMax = 1;

      var delta = mojs.helpers.clamp(inEasing(a), 0.03, scaleMax),
      deltaShift = h.clamp(inEasing(b), 0.03, scaleMax),
      isDeltaChanged = this.particleBuffer.prevDelta !== delta;

      if (isDeltaChanged || this.particleBuffer.prevDeltaShift !== deltaShift) {
        var translateZ = -150 * inEasing(1 - deltaShift),
        transform = 'scale(' + delta + ') translateZ(' + translateZ + 'px)';
        h.setPrefixedStyle(this.particleBuffer, 'transform', transform);
        this.particleBuffer.prevDelta = delta;
        this.particleBuffer.prevDeltaShift = deltaShift;
      }
    }
    requestAnimationFrame(this.draw.bind(this));
  },
  calcDimentions: function calcDimentions() {
    this.wWidth = window.innerWidth;this.wHeight = window.innerHeight;
    this.centerY = this.height / 2 - this.wHeight / 2;
    this.centerX = this.width / 2 - this.wWidth / 2;
    this.bubleCenter = { x: this.centerX, y: this.centerY };
    var x = Math.sqrt(this.wHeight * this.wHeight),
    y = Math.sqrt(this.wWidth * this.wWidth);
    this.size = 1 * Math.min(x, y);
  },
  start: function start() {this.curtain.classList.add('is-hide');this.startBlob();},
  startBlob: function startBlob() {var _this2 = this;
    var tween = new mojs.Tween();
    var t = new mojs.Timeline({
      duration: 1200 * this.S,
      onUpdate: function onUpdate(p) {
        _this2.blob = _this2.blobBase + .3 * (1 - mojs.easing.elastic.out(p));
      } });


    var centerX = this.bubleCenter.x,centerY = this.bubleCenter.y;

    var t2 = new mojs.Timeline({
      duration: 1200 * this.S, delay: 0 * this.S,
      onUpdate: function onUpdate(p) {
        _this2.blobShift = _this2.blobBase + .5 * (1 - mojs.easing.elastic.out(p));
      },
      onStart: function onStart() {_this2.closeScaleSound.play();} });

    tween.add(t, t2);tween.start();
  },
  updateProgress: function updateProgress() {var isReturn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (isReturn) {return;}
    var shift = (this.maxLoadCnt - ++this.loadCnt) * this.progressStep;
    this.progress.style.width = shift + 'rem';
    mojs.h.setPrefixedStyle(this.progressGrad, 'transform', 'translateX(-' + this.loadCnt * this.progressStep / 1.3 + 'rem)');
    this.loadCnt === this.maxLoadCnt && this.start();
  },
  loadAssets: function loadAssets() {
    this.openSound = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/open-bubble-2.' + this.ext], onload: this.updateProgress.bind(this) });
    this.openSound2 = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/open-bubble-3.' + this.ext], rate: .15, onload: this.updateProgress.bind(this) });
    this.bounceSound = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/bounce.' + this.ext] });
    this.closeSound = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/bubble-single-1.' + this.ext], rate: .5, onload: this.updateProgress.bind(this) });
    this.closeSound2 = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/bubble-single-1.' + this.ext], rate: .75, onload: this.updateProgress.bind(this) });
    this.closeSound3 = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/bubble-single-1.' + this.ext], rate: .85, onload: this.updateProgress.bind(this) });
    this.closeScaleSound = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/open-bubble-3.' + this.ext], rate: .25, onload: this.updateProgress.bind(this) });
    this.closeBtnSound = new Howl({ urls: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/open-bubble-3.' + this.ext], rate: 1, onload: this.updateProgress.bind(this) });
    this.loadImage('https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/mojs-logo.png');
  },
  loadImage: function loadImage(url) {
    var image = new Image();
    image.addEventListener('load', this.updateProgress.bind(this), false);
    image.addEventListener('error', this.updateProgress.bind(this), false);
    image.src = url;
  },
  isCanPlayMP3: function isCanPlayMP3() {
    var userAgent = navigator.userAgent;
    return !(userAgent.indexOf("Opera") && userAgent.indexOf('firefox') > -1);
  },
  isIE: function isIE() {
    return !!(window.navigator.msPointerEnabled && !window.PointerEvent);
  },
  isTabletMobile: function () {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }(),

  setBubblePosition: function setBubblePosition() {
    this.bubleCenter.x = -this.iscroll.x + this.wWidth / 2 + this.xOffset;
    this.bubleCenter.y = -this.iscroll.y + this.wHeight / 2 + this.yOffset;
  },

  events: function events() {var _this3 = this;
    window.addEventListener('resize', function () {
      _this3.calcDimentions();_this3.setBubblePosition();
    });
    new Hammer(document.body).on('tap', function (e) {
      var el = e.target.parentNode;
      if (_this3.isOpen) {return e.preventDefault();}
      if (el.classList.contains('particle')) {_this3.showOnEl(el);} else
      if (el.parentNode.classList.contains('particle')) {
        _this3.showOnEl(el.parentNode);
      }
    });
    new Hammer(this.closeBtn).on('tap', this.closeEl.bind(this));
    document.addEventListener('touchmove', function (e) {e.preventDefault();}, false);
    this.iscroll.on('scroll', this.setBubblePosition.bind(this));
  },
  initClose: function initClose() {var _this4 = this;
    var dur = 400 * this.S;
    var closeOption = {
      parent: document.querySelector('#js-close-btn'),
      type: 'circle',
      radius: { 0: 15 },
      fill: 'transparent',
      stroke: 'white',
      strokeWidth: { 5: 0 },
      x: '50%', y: '50%',
      duration: dur,
      isRunLess: true };

    this.closeCircle = new mojs.Transit(closeOption);

    var closeCrossOption = {
      type: 'cross',
      delay: .4 * dur,
      angle: 45,
      strokeWidth: 2,
      radius: { 0: 8 },
      isShowEnd: true,
      onStart: function onStart() {_this4.closeSound.play();} };

    mojs.h.extend(closeCrossOption, closeOption);
    this.closeCross = new mojs.Transit(closeCrossOption);

    var closeBurstOption = {
      type: 'line',
      radius: { 0: 30 },
      strokeWidth: { 4: 0 },
      delay: .4 * dur,
      childOptions: { radius: { 5: 0 } } };

    mojs.h.extend(closeBurstOption, closeOption);
    this.closeBurst = new mojs.Burst(closeBurstOption);

    var closeOption2 = {
      parent: document.querySelector('#js-close-btn'),
      type: 'circle',
      radius: { 0: 10 },
      fill: 'transparent',
      stroke: 'white',
      strokeWidth: { 5: 0 },
      x: '-20%', y: '-50%',
      isRunLess: true,
      delay: .7 * dur,
      duration: 400 * this.S,
      onStart: function onStart() {_this4.closeSound2.play();} };

    this.closeCircle2 = new mojs.Transit(closeOption2);

    var closeOption3 = {
      x: '80%', y: '-30%',
      radius: { 0: 6 },
      delay: 1.1 * dur,
      duration: 300 * this.S,
      onStart: function onStart() {_this4.closeSound3.play();} };

    mojs.h.extend(closeOption3, closeOption2);
    this.closeCircle3 = new mojs.Transit(closeOption3);

    var closeOption4 = {
      x: '50%', y: '130%',
      radius: { 0: 4 },
      delay: .9 * dur,
      duration: 200 * this.S,
      onStart: function onStart() {_this4.closeSound3.play();} };

    mojs.h.extend(closeOption4, closeOption2);
    this.closeCircle4 = new mojs.Transit(closeOption4);

    this.showCloseBtnTween = new mojs.Tween();
    this.showCloseBtnTween.add(
    this.closeCircle.tween, this.closeCircle2.tween,
    this.closeCircle3.tween, this.closeCircle4.tween,
    this.closeCross.tween, this.closeBurst.tween);


  },
  showClose: function showClose() {
    this.closeBtn.classList.add('is-show');this.showCloseBtnTween.start();
  },
  initHideClose: function initHideClose() {var _this5 = this;
    this.hideBurst = new mojs.Burst({
      x: '50%', y: '50%',
      parent: this.closeBtn,
      radius: { 0: 100 },
      type: 'circle',
      fill: 'white',
      degree: 25,
      isSwirl: true,
      randomRadius: 1,
      isRunLess: true,
      childOptions: { radius: { 'rand(12,5)': 0 } },
      duration: 500 * this.S,
      onUpdate: function onUpdate(p) {
        p = mojs.easing.cubic.in(p);
        mojs.h.setPrefixedStyle(_this5.closeCross.el, 'transform', 'scale(' + (1 - p) + ')');
      },
      onStart: function onStart() {_this5.closeBtnSound.play();},
      onComplete: function onComplete() {
        _this5.closeBtn.classList.remove('is-show');
        mojs.h.setPrefixedStyle(_this5.closeCross.el, 'transform', 'none');
      } });

    this.hideCircle = new mojs.Transit({
      x: '50%', y: '50%',
      parent: this.closeBtn,
      type: 'circle',
      radius: { 0: 15 },
      fill: 'transparent',
      stroke: 'white',
      strokeWidth: { 8: 0 },
      isRunLess: true,
      duration: 500 * this.S });

  },
  hideClose: function hideClose() {this.hideBurst.run();this.hideCircle.run();},
  closeEl: function closeEl() {var _this6 = this;
    this.iscroll.enabled = true;this.isOpen = false;this.hideClose();

    var innerEl = this.currentEl.querySelector('.particle__inner'),
    scaleDownTween = new mojs.Tween();

    var scaleDownTimeline = new mojs.Timeline({
      duration: 500 * this.S,
      onUpdate: function onUpdate(p) {
        var np = 1 - p,npe = mojs.easing.cubic.inout(np),
        scaleSize = .75 + 18 * npe,scale = 'scale(' + scaleSize + ')';

        mojs.h.setPrefixedStyle(innerEl, 'transform', scale);
        mojs.h.setPrefixedStyle(_this6.content, 'transform', 'scale(' + npe + ')');
      } });


    var scaleDownSoundTimeline = new mojs.Timeline({
      delay: 0 * this.S, onStart: function onStart() {_this6.closeScaleSound.play();} });


    var scaleUpTimeline = new mojs.Timeline({
      duration: 1000 * this.S,
      onUpdate: function onUpdate(p) {
        var scaleSize = .75 + .25 * mojs.easing.elastic.out(p),
        scale = 'scale(' + scaleSize + ')';
        mojs.h.setPrefixedStyle(innerEl, 'transform', scale);
      },
      onComplete: function onComplete() {
        if (_this6.isOpen) {
          return mojs.h.setPrefixedStyle(_this6.content, 'transform', 'translate3d(-5000px,-5000px,0)');
        }
        mojs.h.setPrefixedStyle(_this6.content, 'transform', 'translate3d(-5000px,-5000px,0)');
      } });

    scaleDownTween.add(scaleDownTimeline);scaleDownTween.append(scaleUpTimeline);

    var blobTween = new mojs.Tween();
    var blobShiftDownTimeline = new mojs.Timeline({
      duration: 1200 * this.S, delay: 300 * this.S,
      onUpdate: function onUpdate(p) {
        if (_this6.isOpen) {return;}
        _this6.blobShift = _this6.blobBase + (1 - mojs.easing.elastic.out(p));
      } });

    var blobDownTimeline = new mojs.Timeline({
      duration: 2100 * this.S, delay: 0 * this.S,
      onUpdate: function onUpdate(p) {
        if (_this6.isOpen) {return;}
        _this6.blob = _this6.blobBase + .3 * (1 - mojs.easing.elastic.out(p));
      } });


    blobTween.add(blobShiftDownTimeline, blobDownTimeline, scaleDownSoundTimeline);

    this.jellyTween = new mojs.Tween();
    this.jellyTween.add(scaleDownTween, blobTween);
    this.jellyTween.start();
  },
  moveTextEl: function moveTextEl(el, p) {
    p = mojs.easing.cubic.out(p);
    var transform = 'rotate(' + 90 * (1 - p) + 'deg) translateY(' + 200 * (1 - p) + '%)',
    transformOrigin = 'left ' + 80 * p + '%';
    mojs.h.setPrefixedStyle(el, 'transform', transform);
    mojs.h.setPrefixedStyle(el, 'transform-origin', transformOrigin);
    el.style.opacity = mojs.easing.cubic.out(p);
  },

  prepareDust: function prepareDust() {
    this.dust1Spriter = new mojs.Spriter({
      el: this.dust1,
      duration: 300 * this.S,
      delay: 275 * this.S,
      isRunLess: true });

    this.dust2Spriter = new mojs.Spriter({
      el: this.dust2,
      duration: 200 * this.S,
      delay: 575 * this.S,
      isRunLess: true });

    this.dust3Spriter = new mojs.Spriter({
      el: this.dust3,
      duration: 100 * this.S,
      delay: 725 * this.S,
      isRunLess: true });

  },

  runDust: function runDust() {
    if (this.isTabletMobile || this.isIE) {return;};
    this.dust1Spriter.run();this.dust2Spriter.run();
    this.dust3Spriter.run();
  },

  showInnerPlastic: function showInnerPlastic(el) {var _this7 = this;
    var tween = new mojs.Tween(),
    image = el.querySelector('.image'),
    scene = el.querySelector('.shape'),
    shadow = el.querySelector('#js-shadow'),
    shadowWrap = el.querySelector('#js-shadow-wrap');

    this.runDust();

    var mp = new mojs.MotionPath({
      path: { x: -300, y: -300 },
      curvature: { x: '75%', y: '50%' },
      offsetX: 300,
      offsetY: 300,
      el: image,
      duration: this.isIE ? 200 * this.S : 1000 * this.S,
      easing: 'cubic.out',
      onPosit: function onPosit(p, x, y, angle) {
        p = mojs.easing.expo.out(mojs.easing.cubic.in(p));
        var rotate = 'rotateX(70deg) rotateZ(' + -60 * (1 - p) + 'deg)',
        translate = 'translateX(' + x + 'px) translateY(' + y + 'px)',
        scale = 'scaleY(' + (2.5 - 1.5 * p) + ')';
        mojs.h.setPrefixedStyle(shadow, 'transform', translate + ' ' + rotate + ' ' + scale);
        return 'translate(' + x + 'px, ' + y + 'px)';
      } });


    var opacityEasing = mojs.easing.path('M0,0 C0,0 32.1191406,0.314142863 40.1669859,0 C40.1669859,0.165327852 50.9999996,-112.569017 74.0660521,0 C80.8905119,-16.0420643 87.1001393,-19.621745 92.0689049,0 C92.0689049,1.54522552 95.3231688,-14.8615687 100,0'),
    bounceEasing = mojs.easing.path('M0,100 C28.3125,98.6523445 39.0445328,8.99375039 40.1669859,0 C40.1669859,-0.0485295402 50.9999996,152.873952 74.0660521,0 C80.8905119,21.9365596 87.1001393,26.7923438 92.0689049,0 C92.0689049,-1.92034044 95.3231688,20.3352347 100,0');

    var timeline1 = new mojs.Timeline({
      duration: this.isIE ? 200 * this.S : 800 * this.S,
      onStart: function onStart() {
        mojs.h.setPrefixedStyle(_this7.content, 'transform', 'translate3d(0,0,0)');
      },
      onComplete: function onComplete() {_this7.showClose();},
      onUpdate: function onUpdate(p) {
        var b = mojs.easing.bounce.out(p),bin = mojs.easing.bounce.in(p),
        t = mojs.easing.cubic.out(p),
        rotate = 'rotateY(' + 90 * (1 - b) + 'deg) rotateX(' + 70 * (1 - t) + 'deg) rotateZ(' + 90 * (1 - t) + 'deg)',
        scale = 'scaleX(' + opacityEasing(p) + ')',
        transform = 'translate(' + (-300 * mojs.easing.bounce.in(1 - p) - 5) + 'px, 2px) ' + scale;
        mojs.h.setPrefixedStyle(scene, 'transform', '' + rotate);
        mojs.h.setPrefixedStyle(scene, 'transform-origin', 50 + 50 * t + '% 100%');
        mojs.h.setPrefixedStyle(shadowWrap, 'transform', transform);
        scene.style.opacity = mojs.easing.expo.out(p);
        shadow.style.opacity = .75 * bounceEasing(p);
      } });


    var soundTimeline = new mojs.Timeline({
      delay: 300 * this.S, onStart: function onStart() {
        if (_this7.isIE) {return;};_this7.bounceSound.play();
      } });


    tween.add(timeline1, soundTimeline);
    tween.start();
  },
  prepareSprites: function prepareSprites() {
    this.blobSprite = new mojs.Spriter({
      el: this.blobCircle,
      duration: this.BLOB_DURATION * this.S,
      isRunLess: true });

  },

  showInnerCircle: function showInnerCircle(x, y) {var _this8 = this;
    this.blobCircle.style.left = x + 'px';
    this.blobCircle.style.top = y + 'px';

    var tween = new mojs.Tween(),
    size = Math.min(this.wWidth, this.wHeight),
    borderWidth = Math.min(10 * mojs.easing.cubic.in(size / 800), 20),
    blobCircleSize = 30 + 2 * borderWidth,
    strokeStep = borderWidth / 2 / this.blobEllipses.length,
    i = 0;

    for (var i = 0; i < this.blobEllipses.length; i++) {
      var item = this.blobEllipses[i];
      item.setAttribute('stroke-width', borderWidth / 2 - i * strokeStep);
      item.setAttribute('rx', blobCircleSize / 2);
      item.setAttribute('ry', blobCircleSize / 2);
    };

    this.blobCircle.style.display = 'block';
    var blobCircleTm = new mojs.Timeline({
      duration: this.BLOB_DURATION * this.S,
      onStart: function onStart() {
        _this8.blobSprite.run();
        _this8.openSound.play();
      },
      onUpdate: function onUpdate(p) {
        var tr = 'scale(' + 28 * p + ')';
        mojs.h.setPrefixedStyle(_this8.blobCircle, 'transform', tr);
        _this8.blobCircle.style.opacity = 1 * mojs.easing.cubic.in(1 - p);
      } });


    tween.add(blobCircleTm);
    tween.start();
  },

  showOnEl: function showOnEl(el) {var _this9 = this;
    this.prevEl = this.currentEl;this.currentEl = el;
    this.prevEl && (this.prevEl.style['z-index'] = 0);
    // return immediately on edges
    if (el.delta < .2) {return;}
    var x = el.x - this.wWidth / 2 - this.xOffset,
    y = el.y - this.wHeight / 2 - this.yOffset,
    innerEl = el.querySelector('.particle__inner'),
    contentEl = el.querySelector('.particle__content'),
    tween = new mojs.Tween();

    this.isOpen = true;el.style['z-index'] = 20;this.iscroll.enabled = false;
    this.showInnerCircle(el.x + 75, el.y + 75);this.iscroll.scrollTo(-x, -y, 500 * this.S);

    var soundTimeline = new mojs.Timeline({
      delay: 0 * this.S, onStart: function onStart() {_this9.openSound2.play();} });


    var scaleDownTween = new mojs.Timeline({
      duration: 300 * this.S, easing: 'expo.out',
      onUpdate: function onUpdate(p) {
        mojs.h.setPrefixedStyle(innerEl, 'transform', 'scale(' + (1 - .25 * p) + ')');
        innerEl.style.opacity = 1 - .25 * p;
      } });


    var blobTimeline = new mojs.Timeline({
      duration: 600 * this.S, delay: 100 * this.S,
      onUpdate: function onUpdate(p) {
        _this9.blob = _this9.blobBase + .3 * mojs.easing.cubic.out(p);
        _this9.blobShift = _this9.blobBase + 1 * p;
      } });


    mojs.h.setPrefixedStyle(this.content, 'transform', 'translate3d(-5000px,-5000px,0)');

    var scaleUpTimeline = new mojs.Timeline({
      duration: 600 * this.S, delay: 350 * this.S,
      onUpdate: function onUpdate(p) {
        var scaleSize = 19 * mojs.easing.cubic.in(p);
        scaleSize = Math.max(.75, scaleSize);
        var scale = 'scale(' + scaleSize + ')';
        mojs.h.setPrefixedStyle(innerEl, 'transform', scale);
        innerEl.style.opacity = .75 + .25 * mojs.easing.cubic.out(p);
      },
      onStart: function onStart() {
        setTimeout(function () {_this9.showInnerPlastic(_this9.content);}, 400);
      },
      onComplete: function onComplete() {
        _this9.blobCircle.style.display = 'none';
      } });


    tween.add(scaleDownTween, soundTimeline, blobTimeline, scaleUpTimeline);
    tween.start();
  } };

main.init();