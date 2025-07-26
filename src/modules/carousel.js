// @ts-check

class Carousel {
  #parentElement;
  #imageContainer;
  #frameSize;
  #currentImageIndex;
  #totalImages;
  /**
   * @constructor
   * @param {HTMLElement} parentElement - the parent element of the carousel
   * @param {HTMLElement} imageContainer - the div container that contains all the images
   * @param {number} frameSize - the size of the frame that will hold the picture shown
   * */
  constructor(parentElement, imageContainer, frameSize) {
    this.#parentElement = parentElement;
    this.#imageContainer = imageContainer;
    this.#frameSize = frameSize;
    this.#currentImageIndex = 0;
    this.#totalImages = this.#imageContainer.children.length;

    this.setupListeners();
    this.setupAutoMovement();
  }

  /**
   * @method to setup global listeners for the carousel controls
   * */
  setupListeners() {
    const carouselLeft = document.querySelector('#carousel-left');
    const carouselRight = document.querySelector('#carousel-right');

    carouselLeft?.addEventListener('click', (e) => {
      console.log('click left')
      e.preventDefault();
      this.moveLeft();
    })

    carouselRight?.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('click right')
      this.moveRight();
    })
  }

  /**
   * @method to setup auto movement every 5 seconds on app start
   * */
  setupAutoMovement() {
    this.#currentImageIndex = 0;
    setInterval(() => {
      if (this.#currentImageIndex === this.#totalImages) {
        // console.log('index at the end')
        this.#currentImageIndex = 0;
        this.#imageContainer.style.transform = `translateX(-${this.#currentImageIndex * this.#frameSize}px)`;
      }
      console.log(this.#currentImageIndex)
      this.moveRight();

    }, 5 * 1000);

  }


  /**
   * @method to load images to be displayed into the carousel
   * @param {Array} images 
   * */
  importImages(images) {
    images.forEach(img => {
      const imgItem = document.createElement('img');
      imgItem.src = img;
      imgItem.alt = 'the image';
      this.#imageContainer?.appendChild(imgItem);
    });
  }

  /**
   * @method to move the carousel image to the left
   * */
  moveLeft() {
    if (this.#currentImageIndex > 0) {
      this.#currentImageIndex--;
      this.#imageContainer.style.transform = `translateX(-${this.#currentImageIndex * this.#frameSize}px)`;
    }
  }

  /**
   * @method to move the carousel image to the right
   * */
  moveRight() {
    const totalImages = this.#imageContainer ? this.#imageContainer.children.length : 0;
    if (this.#currentImageIndex < totalImages - 1) {
      this.#currentImageIndex++;
      this.#imageContainer.style.transform = `translateX(-${(this.#currentImageIndex * this.#frameSize)}px)`;
    }
    if(this.#currentImageIndex === totalImages -1){
      this.#currentImageIndex = -1;
    }
  }
}

export default Carousel;
