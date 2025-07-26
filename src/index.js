import "./styles/styles.css";
import "./styles/fontawesome.min.css";
import "./styles/regular.min.css";
import "./styles/solid.min.css";
import "./webfonts/fa-solid-900.ttf";
import Carousel from "./modules/carousel";
import image1 from './assets/images/intricate-explorer-qpt5EHmlDmg-unsplash-scaled.jpg';
import image2 from './assets/images/carlos-torres-ayxpIblYbPQ-unsplash-scaled.jpg';
import image3 from './assets/images/neom-r5xgKi-lZQg-unsplash-scaled.jpg';
import image4 from './assets/images/neom-_hjZ74lQOls-unsplash-scaled.jpg';
import image5 from './assets/images/neom-39n8YVSn0d4-unsplash-scaled.jpg';

const appContainer = document.getElementById("carousel");
const imageContainer = document.querySelector("#image-container");
const carousel = new Carousel(appContainer, imageContainer, 600);

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5
];

carousel.importImages(imageArray);
