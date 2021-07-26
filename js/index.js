"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var app = function app() {
  setProductMenu(), setScrollMenu(), setMenuOpenListener(), setStickyMenu(), setOpenCardListener(), setScrollAnimations();
},
    createCanva = function createCanva() {
  var e = {
    type: "pie",
    data: {
      labels: ["Private Sale A", "Liquidity Providing Rewards", "Seed Sale", "Exchanges", "Private Sale B", "Community Private & PublicSale", "Research Fundation", "Team ", "Reserve", "Marketing", "Advisors", "Staking Rewards"],
      datasets: [{
        backgroundColor: "rgb(255, 99, 132, 0)",
        borderColor: "rgb(0, 0, 0)",
        data: [5.4, 5, 5, 5, 2.4, 2.6, 25, 15, 13, 9.6, 6, 6]
      }]
    },
    options: {
      tooltips: {
        callbacks: {
          label: function label(e, t) {
            return (t.datasets[e.datasetIndex].label || "") + "%";
          }
        }
      }
    }
  };
  Chart.defaults.plugins.legend.display = !1;
  var t = document.getElementById("chart");
  return new Chart(t, e);
},
    setProductMenu = function setProductMenu() {
  var e = _toConsumableArray(document.querySelectorAll(".menu_item")),
      t = _toConsumableArray(document.querySelectorAll(".product_card"));

  e !== null && e !== void 0 && e.map(function (s) {
    s.addEventListener("click", function (c) {
      c.preventDefault();
      var r = s.getAttribute("data-id"),
          n = document.getElementById(r);
      t.map(function (e) {
        e.classList.contains("active") && e.classList.remove("active");
      }), n.classList.add("active", "selected"), e.map(function (e) {
        e.classList.contains("active") && e.classList.remove("active");
      }), s.classList.add("active");
    });
  }), setInterval(function () {
    var t = _toConsumableArray(document.querySelectorAll(".product_card")),
        s = t.find(function (e) {
      return e.classList.contains("active");
    });

    var c = t.indexOf(s);
    t.map(function (e) {
      e.classList.contains("active") && e.classList.remove("active");
    }), e.map(function (e) {
      e.classList.remove("active");
    }), !1 === _toConsumableArray(document.querySelectorAll(".selected")).some(function (e) {
      return e.classList.contains("selected");
    }) && (c < t.length - 1 ? c++ : c = 0), t[c].classList.add("active");
    var r = t[c].getAttribute("id");
    document.querySelector("[data-id=\"".concat(r, "\"]")).classList.add("active"), t.map(function (e) {
      e.classList.remove("selected");
    });
  }, 1e4);
},
    setScrollMenu = function setScrollMenu() {
  _toConsumableArray(document.querySelector(".menu_wrapper.desktop").querySelectorAll("a")).forEach(function (e) {
    e.addEventListener("click", function (t) {
      t.preventDefault();
      var s = e.getAttribute("href");
      document.querySelector("".concat(s)).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
},
    setMenuOpenListener = function setMenuOpenListener() {
  var e = document.querySelector(".menu_burger"),
      t = document.querySelector(".menu_mobile"),
      s = document.querySelector(".apply_sticky_btn");
  e.addEventListener("click", function () {
    t.classList.toggle("active"), e.classList.toggle("active"), s.classList.toggle("active");
  });

  _toConsumableArray(t.querySelectorAll("a")).map(function (c) {
    c.addEventListener("click", function (r) {
      r.preventDefault();
      var n = c.getAttribute("href");
      t.classList.remove("active"), e.classList.remove("active"), s.classList.remove("active");
      var o = document.querySelector("".concat(n));
      console.log(o), setTimeout(function () {
        o.scrollIntoView({
          behavior: "smooth"
        });
      }, 500);
    });
  });
},
    setStickyMenu = function setStickyMenu() {
  window.addEventListener("scroll", function () {
    var e = document.querySelector("nav"),
        t = e.offsetTop;
    window.pageYOffset > t ? e.classList.add("sticky") : e.classList.remove("sticky");
  });
},
    setTimer = function setTimer() {
  !function (e, t) {
    var s = document.getElementById(e),
        c = s.querySelector(".days").querySelector(".counter"),
        r = s.querySelector(".hours").querySelector(".counter"),
        n = s.querySelector(".minutes").querySelector(".counter"),
        o = s.querySelector(".seconds").querySelector(".counter");

    function l() {
      var e = function (e) {
        var t = Date.parse(e) - Date.parse(new Date()),
            s = Math.floor(t / 1e3 % 60),
            c = Math.floor(t / 1e3 / 60 % 60),
            r = Math.floor(t / 36e5 % 24);
        return {
          total: t,
          days: Math.floor(t / 864e5),
          hours: r,
          minutes: c,
          seconds: s
        };
      }(t);

      c.innerHTML = e.days, r.innerHTML = ("0" + e.hours).slice(-2), n.innerHTML = ("0" + e.minutes).slice(-2), o.innerHTML = ("0" + e.seconds).slice(-2), e.total <= 0 && clearInterval(a);
    }

    l();
    var a = setInterval(l, 1e3);
  }("clock", new Date("July 25, 2021"));
},
    setOpenCardListener = function setOpenCardListener() {
  var _t$querySelector;

  var e = _toConsumableArray(document.querySelectorAll(".member_card")),
      t = document.getElementById("modal");

  t !== null && t !== void 0 && (_t$querySelector = t.querySelector(".close__card_btn")) !== null && _t$querySelector !== void 0 && _t$querySelector.addEventListener("click", function () {
    t.classList.toggle("active");
  }), e.map(function (e) {
    var _e$querySelector;

    (_e$querySelector = e.querySelector(".open_hidden_card")) === null || _e$querySelector === void 0 ? void 0 : _e$querySelector.addEventListener("click", function (s) {
      t.classList.toggle("active"), t.querySelector(".name").innerHTML = e.querySelector(".name").innerHTML, t.querySelector(".role").innerHTML = e.querySelector(".role").innerHTML, t.querySelector(".description").innerHTML = e.querySelector(".extended_description").innerHTML, t.querySelector(".social_wrapper").innerHTML = e.querySelector(".social_wrapper").innerHTML;
    });
  });
},
    setScrollAnimations = function setScrollAnimations() {
  var e = document.querySelectorAll(".scroll"),
      t = function t() {
    e.forEach(function (e) {
      var t;
      (function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return e.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - t;
      })(e, 200) ? (t = e).classList.contains("tokenomics") && !t.classList.contains("created") ? (t.classList.add("created"), t.classList.add("scrolled"), setTimeout(createCanva, 500)) : t.classList.add("scrolled") : function (e) {
        e.classList.remove("scrolled");
      }(e);
    });
  };

  setTimeout(function () {
    window.scrollY > 50 && window.dispatchEvent(new Event("scroll", function () {}));
  }, 0), window.addEventListener("scroll", function () {
    t();
  });
};

setProductMenu(), setScrollMenu(), setMenuOpenListener(), setStickyMenu(), setOpenCardListener(), setScrollAnimations();