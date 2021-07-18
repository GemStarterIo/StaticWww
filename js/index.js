"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var app = function app() {
  setProductMenu();
  setScrollMenu();
  setMenuOpenListener();
  setStickyMenu(); // setTimer()

  setOpenCardListener();
  setScrollAnimations();
};

var createCanva = function createCanva() {
  var labels = ["Private Sale A", "Liquidity Providing Rewards", "Seed Sale", "Exchanges", "Private Sale B", "Community Private & PublicSale", "Research Fundation", "Team ", "Reserve", "Marketing", "Advisors", "Staking Rewards"];
  var data = {
    labels: [].concat(labels),
    datasets: [{
      backgroundColor: 'rgb(255, 99, 132, 0)',
      borderColor: 'rgb(0, 0, 0)',
      data: [5.4, 5, 5, 5, 2.4, 2.6, 25, 15, 13, 9.6, 6, 6]
    }]
  };
  var options = {
    tooltips: {
      callbacks: {
        label: function label(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          return label + "%";
        }
      }
    }
  };
  var config = {
    type: 'pie',
    data: data,
    options: options
  };
  Chart.defaults.plugins.legend.display = false;
  var ctx = document.getElementById('chart');
  return new Chart(ctx, config);
};

var setProductMenu = function setProductMenu() {
  var menuItems = _toConsumableArray(document.querySelectorAll('.menu_item'));

  var slides = _toConsumableArray(document.querySelectorAll('.product_card'));

  menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var itemData = item.getAttribute('data-id');
      var itemSlide = document.getElementById(itemData);
      slides.map(function (slide) {
        if (slide.classList.contains('active')) {
          slide.classList.remove('active');
        }
      });
      itemSlide.classList.add('active', 'selected');
      menuItems.map(function (item) {
        if (item.classList.contains("active")) {
          item.classList.remove('active');
        }
      });
      item.classList.add('active');
    });
  }); //add intervar to slider

  setInterval(function () {
    var slides = _toConsumableArray(document.querySelectorAll('.product_card'));

    var activeSlide = slides.find(function (slide) {
      return slide.classList.contains('active');
    });
    var index = slides.indexOf(activeSlide);
    slides.map(function (slide) {
      if (slide.classList.contains('active')) {
        slide.classList.remove('active');
      }
    });
    menuItems.map(function (item) {
      item.classList.remove('active');
    });

    if (_toConsumableArray(document.querySelectorAll('.selected')).some(function (slide) {
      return slide.classList.contains('selected');
    }) === false) {
      index < slides.length - 1 ? index++ : index = 0;
    }

    slides[index].classList.add('active');
    var menuItemID = slides[index].getAttribute('id');
    var menuItem = document.querySelector("[data-id=\"".concat(menuItemID, "\"]"));
    menuItem.classList.add('active');
    slides.map(function (slide) {
      slide.classList.remove('selected');
    });
  }, 10000);
};

var setScrollMenu = function setScrollMenu() {
  var menuDesktop = document.querySelector('.menu_wrapper.desktop');

  var links = _toConsumableArray(menuDesktop.querySelectorAll('a'));

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var scrollTo = link.getAttribute('href');
      var scrollToElement = document.querySelector("".concat(scrollTo));
      scrollToElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};

var setMenuOpenListener = function setMenuOpenListener() {
  var btn = document.querySelector(".menu_burger");
  var menu = document.querySelector(".menu_mobile");
  var applyStickyBtn = document.querySelector(".apply_sticky_btn");
  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
    btn.classList.toggle("active");
    applyStickyBtn.classList.toggle('active');
  });

  var menuBtns = _toConsumableArray(menu.querySelectorAll('a'));

  menuBtns.map(function (menuBtn) {
    menuBtn.addEventListener('click', function (event) {
      event.preventDefault();
      var scrollTo = menuBtn.getAttribute('href');
      menu.classList.remove('active');
      btn.classList.remove('active');
      applyStickyBtn.classList.remove('active');
      var scrollToElement = document.querySelector("".concat(scrollTo));
      console.log(scrollToElement);
      setTimeout(function () {
        scrollToElement.scrollIntoView({
          behavior: 'smooth'
        });
      }, 500);
    });
  });
};

var setStickyMenu = function setStickyMenu() {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector('nav');
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
};

var setTimer = function setTimer() {
  function getTimeRemaining(deadline) {
    var total = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor(total / 1000 % 60);
    var minutes = Math.floor(total / 1000 / 60 % 60);
    var hours = Math.floor(total / (1000 * 60 * 60) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function initializeClock(id, deadline) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days').querySelector('.counter');
    var hoursSpan = clock.querySelector('.hours').querySelector('.counter');
    var minutesSpan = clock.querySelector('.minutes').querySelector('.counter');
    var secondsSpan = clock.querySelector('.seconds').querySelector('.counter');

    function updateClock() {
      var t = getTimeRemaining(deadline);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date('July 25, 2021');
  initializeClock('clock', deadline);
};

var setOpenCardListener = function setOpenCardListener() {
  var cards = _toConsumableArray(document.querySelectorAll('.member_card'));

  var extendedCard = document.getElementById('modal');
  var closeBtn = extendedCard === null || extendedCard === void 0 ? void 0 : extendedCard.querySelector('.close__card_btn');
  closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () {
    extendedCard.classList.toggle('active');
  });
  cards.map(function (card) {
    var openCard = card.querySelector('.open_hidden_card');
    openCard === null || openCard === void 0 ? void 0 : openCard.addEventListener('click', function (e) {
      // fetch content from card and fill modal
      extendedCard.classList.toggle('active');
      extendedCard.querySelector('.name').innerHTML = card.querySelector('.name').innerHTML;
      extendedCard.querySelector('.role').innerHTML = card.querySelector('.role').innerHTML;
      extendedCard.querySelector('.description').innerHTML = card.querySelector('.extended_description').innerHTML;
      extendedCard.querySelector('.social_wrapper').innerHTML = card.querySelector('.social_wrapper').innerHTML;
    });
  });
};

var setScrollAnimations = function setScrollAnimations() {
  var scrollElements = document.querySelectorAll(".scroll");

  var elementInView = function elementInView(el) {
    var scrollOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset;
  };

  var displayScrollElement = function displayScrollElement(element) {
    if (element.classList.contains('tokenomics') && !element.classList.contains('created')) {
      element.classList.add('created');
      element.classList.add("scrolled");
      setTimeout(createCanva, 500);
    } else {
      element.classList.add("scrolled");
    }
  };

  var hideScrollElement = function hideScrollElement(element) {
    element.classList.remove("scrolled");
  };

  var handleScrollAnimation = function handleScrollAnimation() {
    scrollElements.forEach(function (el) {
      if (elementInView(el, 200)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', function () {
    handleScrollAnimation();
  });
};

app();