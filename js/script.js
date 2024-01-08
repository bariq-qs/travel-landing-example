document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  getContentYourMember()
  getContentShooseCountry()
  getContentEasyToBook()
  getContentWantTravel()
  // getSiwperTop()
});
const getContentYourMember = () => {
  const main = document.querySelector('.section-get-yr-member .sct-item')
  const arrData = [
    {
      icon: './assets/icons/todo.svg',
      title: 'Prepare your <br/>Document',
      subtTitle: 'Prepare your identity and<br/>personal data'
    },
    {
      icon: './assets/icons/cheklist.svg',
      title: 'Self <br/>Verification',
      subtTitle: 'Do Video Call to<br/>verifiy<br/>identity yourself'
    },
    {
      icon: './assets/icons/pocket.svg',
      title: 'Ready to use your<br/>travel member',
      subtTitle: 'Your member will send<br/>to your address'
    }
  ]
  let htmlString = ""
  for (let i = 0; i < arrData.length; i++) {
    htmlString += `<div class="cntr-item item-${i}">
      <div class="sct-top">
      <img src="${arrData[i].icon}"/> 
      <div>
        <p class="font-bold" style="font-size: 24px; margin-bottom: 5px;">${arrData[i].title}</p>
        <p class="font-medium text-grey" style="font-size: 20px;">${arrData[i].subtTitle}</p>
      </div>
        </div>
        </div>`
  }
  main.innerHTML = htmlString
}

const getContentShooseCountry = () => {
  const main = document.querySelector('.section-choose-country .sct-list-cntry')
  const arrData = [
    {
      icon: './assets/countries/malaysia.png'
    },
    {
      icon: './assets/countries/singapore.png'
    },
    {
      icon: './assets/countries/thailand.png'
    },
    {
      icon: './assets/countries/jepang.png',
    },
    {
      icon: './assets/countries/australia.png',
    },
    {
      icon: './assets/countries/eropa.png',
    }
  ]
  let htmlString = ""
  for (let i = 0; i < arrData.length; i++) {
    htmlString += `<img class="card-item item-${i}" src="${arrData[i].icon}"></img>`
  }
  main.innerHTML = htmlString
}

const getContentEasyToBook = () => {
  const main = document.querySelector('.section-easy-to-book .cntnr-list-esy-book')
  const arrData = [
    {
      icon: './assets/icons/bookmark.svg',
      title: 'Choose',
      to: ''
    },
    {
      icon: './assets/icons/booking.svg',
      title: 'Booking',
      to: ''
    },
    {
      icon: './assets/icons/payment.svg',
      title: 'Payment',
      to: ''
    }
  ]
  let htmlString = ""
  for (let i = 0; i < arrData.length; i++) {
    htmlString +=
      `<div class="card-type-item card-item-${i}">
        <div class="content">
          <div style="display: flex; justify-content: center; margin-bottom: 30px">
            <img src="${arrData[i].icon}"/> 
          </div>
          <p class="font-medium" style="color: #38BCE5; text-align: center; font-size: 20px;">${arrData[i].title}</p>
          <div style="display: flex; justify-content: center; margin-top: 32px;">
            <img src="./assets/icons/arrow-right.svg" class="cursor-pointer" />
          </div>
        </div>
      </div>`
  }
  main.innerHTML = htmlString
  const listData = document.querySelectorAll(`.cntnr-list-esy-book .card-type-item`)
  listData.forEach((item, i) => {
    const infoContainer = document.querySelector(`.card-item-${i}`)
    item.addEventListener('mouseover', () => {
      infoContainer.classList.add('hover-active');
    });
    item.addEventListener('mouseout', () => {
      infoContainer.classList.remove('hover-active');
    })
  })
}

const getSiwperTop = () => {
  const swiper = document.querySelector('.list-wrap');
  const slides = swiper.getElementsByTagName('img');
  let currentIndex = 0;
  const intervalTime = 3000; // Ganti sesuai keinginan (dalam milidetik)

  function showSlide(index) {
    // Reset semua slide ke posisi semula
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${index * 100}%)`;
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Mulai animasi otomatis
  setInterval(nextSlide, intervalTime);
}

const getContentWantTravel = () => {
  const main = document.querySelector('.section-want-travel .list-travel-choice')
  console.log('main')
  const arrData = [
    {
      icon: './assets/australia.png',
      title: 'Australia',
    },
    {
      icon: './assets/japan.png',
      title: 'Japan',
    },
    {
      icon: './assets/america.png',
      title: 'America',
    }
  ]
  let htmlString = ""
  for (let i = 0; i < arrData.length; i++) {
    htmlString += `<div class="wrap-tvl-ch item-${i}">
    <img src="${arrData[i].icon}"></img>
    <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 20px;">
      <p class="font-bold">${arrData[i].title}</p>
    </div>
  </div>
    `
  }
  main.innerHTML = htmlString
}