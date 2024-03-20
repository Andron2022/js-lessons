window.addEventListener("DOMContentLoaded", function () {
  let tab = document.getElementsByClassName("info-header-tab"),
    tabContent = document.getElementsByClassName("info-tabcontent"),
    infoTab = document.getElementsByClassName("info-header")[0];

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      hideTabContent(0);
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  infoTab.addEventListener("click", (event) => {
    let target = event.target;
    if (target.className == "info-header-tab") {
      for (i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Таймер отсчета времени до конца акции.
  // Объявим дату, на которой заканчивается таймер
  let deadline = "2024-03-22";

  function getTimeRemaining(endtime) {
    let t =
        Date.parse(endtime + "T23:59:59.999+05:00") - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / 1000 / 60 / 60);

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  // Устанавливает таймер в класс с id и меняет его каждую секунду, пока секунды не исчерпаются
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");
    // Обновляет значения таймера в html
    function updateClock() {
      let t = getTimeRemaining(endtime);

      if (t.total > 0) {
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
      } else {
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
  }

  setClock("timer", deadline);

  // let dl = getTimeRemaining("2024-03-15");
  // this.alert(Date.parse("2024-03-15"));
  // this.alert(Date.parse(new Date()));
  // this.alert(dl.total + " " + dl.hours + " " + dl.minutes + " " + dl.seconds);

  // Модальное окно. Кнопка: Узнать больше
  let more = document.querySelector(".more"),
    moreDiv = document.querySelectorAll(".description-btn"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  more.addEventListener("click", function () {
    this.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; //отключение переполнения фактически скроллинга
  });

  moreDiv[0].addEventListener("click", function () {
    this.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; //отключение переполнения фактически скроллинга
  });
  moreDiv[1].addEventListener("click", function () {
    this.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; //отключение переполнения фактически скроллинга
  });
  moreDiv[2].addEventListener("click", function () {
    this.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; //отключение переполнения фактически скроллинга
  });
  moreDiv[3].addEventListener("click", function () {
    this.classList.add("more-splash");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; //отключение переполнения фактически скроллинга
  });

  close.addEventListener("click", function () {
    more.classList.remove("more-splash");
    overlay.style.display = "none";
    document.body.style.overflow = ""; //включение переполнения
  });
});
