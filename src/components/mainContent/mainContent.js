import './mainContent.css';
import obj from '../../db/obj';
import '../../helpers/hendelbarHelpers';
import sliderItemTemplate from '../../templates/sliderItemTemplate.hbs';
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider';

const refs = {
  firstSlider: document.querySelector('.slider_first'),
  secondSlider: document.querySelector('.slider_second'),
};

function buildMarkup(list) {
  const createMarkup = sliderItemTemplate(list);
  refs.firstSlider.insertAdjacentHTML('beforeend', createMarkup);
  refs.secondSlider.insertAdjacentHTML('beforeend', createMarkup);
}
buildMarkup(obj);
const sliderRefs = {
  btnContainer: document.querySelector('.slider-arrows'),
  prevButton: document.querySelector('.slider__btn_prev'),
  nextButton: document.querySelector('.slider__btn_next'),
  secBtnContaine: document.querySelector('.second-slider-arrows'),
  secPrevButton: document.querySelector('.second-slider__btn_prev'),
  secNextButton: document.querySelector('.second-slider__btn_next'),
};

const firstSliderOptions = {
  container: refs.firstSlider,
  onInit: true,
  nav: false,
  gutter: 40,
  controlsContainer: sliderRefs.btnContainer,
  prevButton: sliderRefs.prevButton,
  nextButton: sliderRefs.nextButton,
  fixedWidth: 280,
  slideBy: 'page',
  center: true,
  autoplay: false,
  responsive: {
    768: {
      items: 2,
      center: false,
      gutter: 110,
      fixedWidth: 280,
    },
    1200: {
      items: 4,
      fixedWidth: 290,
      gutter: 0,
      viewportMax: 1200,
    },
  },
};

const secondSliderOptions = {
  container: refs.secondSlider,
  onInit: true,
  nav: false,
  controlsContainer: sliderRefs.secBtnContainer,
  prevButton: sliderRefs.secPrevButton,
  nextButton: sliderRefs.secNextButton,
  center: true,
  fixedWidth: 280,
  gutter: 40,
  slideBy: 'page',
  responsive: {
    768: {
      items: 2,
      center: false,
      gutter: 110,
      fixedWidth: 280,
    },
    1200: {
      items: 4,
      fixedWidth: 290,
      gutter: 0,
    },
  },
};

tns(firstSliderOptions);
tns(secondSliderOptions);
