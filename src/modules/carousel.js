// @ts-check

class Carousel{
  #parentElement;
  #imageContainer;
  /**
   * @constructor
   * @param {HTMLElement} parentElement 
   * @param {HTMLElement} imageContainer 
   * */
  constructor(parentElement, imageContainer){
    this.#parentElement = parentElement;
    this.#imageContainer = imageContainer;
  }

  /**
   * @method to load images to be displayed into the carousel
   * @param {Array} images 
   * */
  importImages(images){
    images.forEach(img => {
      const imgItem = document.createElement('img');
      imgItem.src = img;
      imgItem.alt = 'the image';
      this.#imageContainer?.appendChild(imgItem);
    })
  }
}

export default Carousel;
