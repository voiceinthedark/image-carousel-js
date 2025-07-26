// @ts-check

class Carousel {
  #parentElement;
  #imageContainer;
  #frameSize;
  #carouselControl;
  #currentImageIndex;
  #totalImages;
  /**
   * @constructor
   * @param {HTMLElement} parentElement - the parent element of the carousel
   * @param {HTMLElement} imageContainer - the div container that contains all the images
   * @param {number} frameSize - the size of the frame that will hold the picture shown
   * @param {HTMLElement} carouselControl
   * */
  constructor(parentElement, imageContainer, frameSize, carouselControl) {
    this.#parentElement = parentElement;
    this.#imageContainer = imageContainer;
    this.#frameSize = frameSize;
    this.#currentImageIndex = 0;
    this.#totalImages = this.#imageContainer.children.length;
    this.#carouselControl = carouselControl;

    this.setupListeners();
    this.setupAutoMovement();
    // this.setupIndicatorDots();
  }

  /**
   * @method to setup global listeners for the carousel controls
   * */
  setupListeners() {
    const carouselLeft = document.querySelector("#carousel-left");
    const carouselRight = document.querySelector("#carousel-right");

    carouselLeft?.addEventListener("click", (e) => {
      console.log("click left");
      e.preventDefault();
      this.moveLeft();
    });

    carouselRight?.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click right");
      this.moveRight();
    });
  }

  /**
   * @method to setup auto movement every 5 seconds on app start
   * */
  setupAutoMovement() {
    setInterval(() => {
      this.moveRight();
    }, 5 * 1000);
  }

  setupIndicatorDots() {
    console.log("attempting to append controls");
    console.log(this.#totalImages);
    for (let i = 0; i < this.#totalImages; i++) {
      const dot = document.createElement("span");
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "50%";
      dot.style.borderStyle = "solid";
      dot.style.borderWidth = "1px";
      dot.style.borderColor = "black";

      dot.dataset.id = "" + i;

      this.#carouselControl.appendChild(dot);
      console.log("appending dot");

      dot.addEventListener("click", (e) => {
        const clickedIndex = parseInt(e.target?.dataset.id);
        // console.log(clickedIndex)
        this.jumpToIndex(clickedIndex);
        this.activateIndicator(clickedIndex);
      });
    }
  }

  /**
   * @method to jump to the picture by index
   * @param {number} imageIndex
   * */
  jumpToIndex(imageIndex) {
    //if (imageIndex >= 0 && imageIndex < this.#totalImages) {
    //this.#currentImageIndex = imageIndex;
    this.#imageContainer.style.transform = `translateX(-${imageIndex * this.#frameSize}px)`;
    //}
  }

  /**
   * @method to load images to be displayed into the carousel
   * @param {Array} images
   * */
  importImages(images) {
    images.forEach((img) => {
      const imgItem = document.createElement("img");
      imgItem.src = img;
      imgItem.alt = "the image";
      this.#imageContainer?.appendChild(imgItem);
    });
    this.#totalImages = images.length;

    this.setupIndicatorDots();
  }

  /**
   * @method to move the carousel image to the left
   * */
  moveLeft() {
    if (this.#currentImageIndex > 0) {
      this.#currentImageIndex--;
      this.#imageContainer.style.transform = `translateX(-${this.#currentImageIndex * this.#frameSize}px)`;
    }
    this.activateIndicator(this.#currentImageIndex);
  }

  /**
   * @method to move the carousel image to the right
   * */
  moveRight() {
    // Use the cached total number of images
    const totalImages = this.#totalImages;

    // Increment current index
    this.#currentImageIndex++;

    if (this.#currentImageIndex >= totalImages) {
      this.#currentImageIndex = 0;
    }

    this.#imageContainer.style.transform = `translateX(-${this.#currentImageIndex * this.#frameSize}px)`;

    this.activateIndicator(this.#currentImageIndex);
  }

  /**
   * @method to activate the visual indicator of the image
   * @param {number} index
   * */
  activateIndicator(index) {
    console.log(`activating ${index}`);
    Array.from(this.#carouselControl.children).forEach((child) => {
      child.classList.remove("active-circle");
    });

    // Then, activate the current indicator
    if (this.#carouselControl.children[index]) {
      this.#carouselControl.children[index].classList.add("active-circle");
    }
  }
}

export default Carousel;
