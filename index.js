// Fairy Tail - Nhiệm vụ 100 năm - Tập 04 [Việt sub]
const VIDEO_FULL_URL = 'https://www.youtube.com/embed/aGe6MdQcNUo?si=7ZzCqqNZK0xQV_2h';
const VIDEO_TRAILER_URL = 'trailer.mp4';

const main = document.getElementById('main');

// Load DOM from JS
const mainContainerDiv = document.createElement("div");
mainContainerDiv.classList.add("main-container")

const img = document.createElement('img');
img.src = 'https://i3.ytimg.com/vi/AG9NrHpYaYw/maxresdefault.jpg';
img.alt = 'movie-image';

const h1 = document.createElement('h1');
h1.textContent = 'TAM QUỐC DIỄN NGHĨA';

const p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste necessitatibus porro explicabo illo dolorum dolores cupiditate non modi quasi nobis, earum ab, autem esse vero sapiente minus vel! Provident?';

const buttonNow = document.createElement('button');
buttonNow.className = 'btn watch-now';
buttonNow.textContent = 'Watch now';

const buttonTrailer = document.createElement('button');
buttonTrailer.className = 'btn watch-trailer';
buttonTrailer.textContent = 'Watch trailer';

const videoContainerDiv = document.createElement('div');
videoContainerDiv.className = 'video-container active';

const video = document.createElement('video');
video.src = VIDEO_TRAILER_URL;
video.controls = true;

const iframe = document.createElement('iframe');
iframe.src = VIDEO_FULL_URL;
iframe.allowFullscreen = true;
iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
iframe.frameborder = '0';
iframe.referrerPolicy = 'strict-origin-when-cross-origin';

const icon = document.createElement('i');
icon.className = 'fas fa-times fa-2x close-icon';

main.appendChild(mainContainerDiv);

// Append elements to mainContainerDiv
mainContainerDiv.appendChild(img);
mainContainerDiv.appendChild(h1);
mainContainerDiv.appendChild(p);
mainContainerDiv.appendChild(buttonNow);
mainContainerDiv.appendChild(buttonTrailer);

main.appendChild(videoContainerDiv);


const btnTrailer = document.querySelector(".btn.watch-trailer");
const btnFull = document.querySelector(".btn.watch-now");

const videoContainerEl = document.querySelector(".video-container");

btnTrailer.addEventListener("click", () => {
  createVideoTrailerE();
});

btnFull.addEventListener("click", () => {
  createIframeFullE();
});

function createVideoTrailerE() {
  // Append video element to videoContainerDiv
  videoContainerDiv.appendChild(video);
  videoContainerDiv.appendChild(icon);

  videoContainerEl.classList.remove("active");
  handleCloseIconClick();
}

function createIframeFullE() {
  // Append iframe element to videoContainerDiv
  videoContainerDiv.appendChild(iframe);
  videoContainerDiv.appendChild(icon);
  videoContainerEl.classList.remove("active");
  handleCloseIconClick();
}

function handleCloseIconClick() {
  const closeIconTrailer = document.querySelector(".close-icon");
  closeIconTrailer.addEventListener("click", () => {
    videoContainerEl.classList.add("active");
    videoContainerEl.textContent = "";
  });
}

videoContainerDiv.addEventListener("click", (e) => {
  if (e.target.tagName === 'VIDEO' || e.target.tagName === 'IFRAME') return;
  videoContainerEl.classList.add("active");
  videoContainerEl.textContent = "";
})

