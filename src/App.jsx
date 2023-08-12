import { BrowserRouter } from 'react-router-dom';
import './general.css';
import './style.css';
import './queries.css';
import { useEffect } from 'react';
import Hero from './ui/Hero';
import Features from './ui/Features';
import Services from './ui/Services';
import Tropical from './ui/Tropical';
import Resort from './ui/Resort';
import Footer from './ui/Footer';
import Copyright from './ui/Copyright';

export default function App() {
  ///////////////////////////////////////////////////////////
  // Sticky Navigation

  useEffect(function () {
    const sectionHeroEl = document.querySelector('.section-hero');
    const nav = document.querySelector('.header');
    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = function (entries) {
      const [entry] = entries;
      // console.log(entry);

      if (!entry.isIntersecting) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(sectionHeroEl);
  }, []);

  ///////////////////////////////////////////////////////////
  // Reveal sections
  useEffect(function () {
    const allSections = document.querySelectorAll('.section');

    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });
  }, []);
  // Lazy loading images

  useEffect(function () {
    const imgTargets = document.querySelectorAll('img[data-src]');
    console.log(imgTargets);
    const loadImg = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '200px',
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  }, []);

  ///////////////////////////////////////////////////////////
  // Smooth scrollling animation //
  useEffect(function () {
    const allLinks = document.querySelectorAll('a:link');
    const headerEl = document.querySelector('.header');

    allLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Scroll to other links

        if (href !== '#' && href.startsWith('#')) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile navigation
        if (link.classList.contains('main-nav-link'))
          headerEl.classList.toggle('nav-open');
      });
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Hero />
        <Features />
        <Services />
        <Tropical />
        <Resort />
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
}
