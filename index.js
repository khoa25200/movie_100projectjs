const main = document.getElementById('main');

// Load DOM from JS
const mainContainerDiv = document.createElement("div");
mainContainerDiv.classList.add("main-container")

const img = document.createElement('img');
img.src = 'https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
img.alt = 'movie-image';

const h1 = document.createElement('h1');
h1.textContent = 'Movie Title';

const p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste necessitatibus porro explicabo illo dolorum dolores cupiditate non modi quasi nobis, earum ab, autem esse vero sapiente minus vel! Provident?';

const button = document.createElement('button');
button.className = 'btn';
button.textContent = 'Watch now';

const trailerContainerDiv = document.createElement('div');
trailerContainerDiv.className = 'trailer-container active';

const video = document.createElement('video');
video.src = 'trailer.mp4';
video.controls = true;

const icon = document.createElement('i');
icon.className = 'fas fa-times fa-2x close-icon';

main.appendChild(mainContainerDiv);

// Append elements to mainContainerDiv
mainContainerDiv.appendChild(img);
mainContainerDiv.appendChild(h1);
mainContainerDiv.appendChild(p);
mainContainerDiv.appendChild(button);

main.appendChild(trailerContainerDiv);
// Append elements to trailerContainerDiv
trailerContainerDiv.appendChild(video);
trailerContainerDiv.appendChild(icon);

const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
