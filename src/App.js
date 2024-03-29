import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';

import Header from './components/Header';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Chat from './components/Chat'; 
import './App.css';


function App() {

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    let swiper;

    function handleMediaChange(mediaQuery) {
      if (mediaQuery.matches) {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 60,
        });
      } else {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 4,
          spaceBetween: 60,
        });
      }
    }

    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);

    const slidersAll = document.querySelectorAll(".swiper-slide");
    const sliderBtnFuture = document.querySelector(
      ".tournaments__info-slider-filter-future"
    );
    const sliderBtnPast = document.querySelector(
      ".tournaments__info-slider-filter-past"
    );

    sliderBtnPast.addEventListener("click", () => {
      slidersAll.forEach((slider) => {
        if (slider.classList.contains("slideActive")) {
          slider.classList.remove("slideActive");
          slider.classList.add("slideBlocked");
        } else if (slider.classList.contains("slideBlocked")) {
          slider.classList.remove("slideBlocked");
          slider.classList.add("slideActive");
        }
      });

      sliderBtnFuture.removeAttribute("disabled", "disabled");
      sliderBtnPast.setAttribute("disabled", "disabled");
    });

    sliderBtnFuture.addEventListener("click", () => {
      slidersAll.forEach((slider) => {
        if (slider.classList.contains("slideActive")) {
          slider.classList.remove("slideActive");
          slider.classList.add("slideBlocked");
        } else if (slider.classList.contains("slideBlocked")) {
          slider.classList.remove("slideBlocked");
          slider.classList.add("slideActive");
        }
      });

      sliderBtnPast.removeAttribute("disabled", "disabled");
      sliderBtnFuture.setAttribute("disabled", "disabled");
    });
    

    return () => {
      // Cleanup the swiper instance and remove media query listener when the component is unmounted
      if (swiper) {
        swiper.destroy();
      }
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []); 

  return (
    <>
      <Header />
      {/* <Chat /> */}
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </>
  );
}

export default App;
