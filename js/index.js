

const app = () => {

setProductMenu()
createCanva()
setMenuOpenListener()
setStickyMenu()
// setTimer()
setOpenCardListener();
}


const createCanva = () => {

const data = {
  datasets: [{
    label: 'Tokenomics',
    backgroundColor: 'rgb(255, 99, 132, 0)',
    borderColor: 'rgb(0, 0, 0)',
    data: [5.4,5,5,5,2.4,2.6,25,15,13,9.6,6,6],
  }]
};
    const config = {
    type: 'pie',
    data,
    options: {}
    };

    const chart = new Chart(document.getElementById('chart'), config)
}

const setProductMenu = () => {
    const menuItems = [...document.querySelectorAll('.menu_item')]
    const slider = document.querySelector('.slider')
    menuItems?.map(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const itemData = item.getAttribute('data-id')
            const itemSlide = document.getElementById(itemData)
            slider?.scrollTo(itemSlide.offsetLeft, 0)
            menuItems.map(item => {
                if(item.classList.contains("active")){
                    item.classList.remove('active')
                }
            })
            item.classList.add('active')
        })
    })
}

const setMenuOpenListener = () => {
    const btn = document.querySelector(".menu_burger");
    const menu = document.querySelector(".menu_mobile");
    const applyStickyBtn = document.querySelector(".apply_sticky_btn")

    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
        btn.classList.toggle("active");
        applyStickyBtn.classList.toggle('active')

    });

    menuBtns = [...menu.querySelectorAll('a')];
    menuBtns.map(menuBtn => {
        menuBtn.addEventListener('click', (event)=>{
            event.preventDefault();

            const scrollTo = menuBtn.getAttribute('href');
            menu.classList.remove('active');
            btn.classList.remove('active');
            applyStickyBtn.classList.remove('active')
            const scrollToElement = document.querySelector(`${scrollTo}`)

           
            console.log(scrollToElement)
            setTimeout(()=>{
                scrollToElement.scrollIntoView({behavior: 'smooth'
                })
            }, 500)
            
        })
    })
};

const setStickyMenu = () => {
    window.addEventListener("scroll", ()=> {
        const navbar = document.querySelector('nav');
        const sticky = navbar.offsetTop;

        if (window.pageYOffset > sticky ) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
  }
    })
}

const setTimer = () => {

function getTimeRemaining(deadline) {
  const total = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, deadline) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days').querySelector('.counter');
  const hoursSpan = clock.querySelector('.hours').querySelector('.counter');
  const minutesSpan = clock.querySelector('.minutes').querySelector('.counter');
  const secondsSpan = clock.querySelector('.seconds').querySelector('.counter');

  function updateClock() {
    const t = getTimeRemaining(deadline);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date('July 25, 2021');
initializeClock('clock', deadline);

}

const setOpenCardListener = () => {
  const cards = [...document.querySelectorAll('.member_card')];


  cards.map(card => {
    const openCard = card.querySelector('.open_hidden_card');
    const extendedCardId = card.getAttribute('data-id');
    const extendedCard = document.getElementById(extendedCardId);
    const closeBtn = extendedCard?.querySelector('.close__card_btn')


    closeBtn?.addEventListener('click', ()=>{
      extendedCard.classList.toggle('active');
    })

    openCard?.addEventListener('click', (e) =>{
      extendedCard.classList.toggle('active');
    })

  })
}

app()