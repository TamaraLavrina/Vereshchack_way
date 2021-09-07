const scrollToElement = (element) =>{
  element.scrollIntoView ({
    behavior: 'smooth',
    block: 'start',
  });
};

const onSmoothLinksClick =() =>{
  const smoothLinks = document.querySelectorAll('a[href^="#"]:not(a[href="#"]');
  for (const smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');
      scrollToElement(document.querySelector(id));
    });
  }
};

export { onSmoothLinksClick };
export { scrollToElement };
