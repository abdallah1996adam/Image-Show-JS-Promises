const imgShow = document.querySelector('.images');

let currentImage;

function wait(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = imgPath;
    image.addEventListener('load', () => {
      imgShow.append(image);
      resolve(image);
    });
    image.addEventListener('error', () => {
      reject(new Error('image not found'));
    });
  });
}

createImage('img/img-1.jpg')
  .then(image => {
    currentImage = image;
    console.log('imgae loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(image => {
    currentImage = image;
    console.log('imgae loaded');
    return wait(2);
  }).then(()=>{
    currentImage.style.display = 'none';
    return createImage('img/img-3.jpg')
  }).then(image => {
    currentImage = image;
    console.log('imgae loaded');
    return wait(2);
  }).then(()=>{
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err));
