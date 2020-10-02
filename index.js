// llp_test.surge.sh

console.log('Hello there ✋');

const popup = {
  title: document.getElementById('popupTitle'),
  description: document.getElementById('popupDescription'),
  techno: document.getElementById('popupTechnoSection'),
  image: document.getElementById('popupImages'),
  link: document.getElementById('popupLinkSection'),
  popupDiv: document.getElementById('popup'),
  hide() {
    this.popupDiv.style.display = 'none';
  },
  show() {
    this.popupDiv.style.display = 'flex';
  },
  setTitle(x) {
    this.title.innerHTML = x;
  },
  setDescription(x) {
    this.description.innerHTML = x;
  },
  setTechno(x) {
    const technoArray = x.map(
      (index) => `<div class="technoBullet">
      <img src=${technoSource[index][1]} alt=${technoSource[index][0]} class="miniIcon" />
      <h5>${technoSource[index][0]}</h5>
    </div>`
    );
    this.techno.innerHTML = technoArray.join('');
  },
  setLink(x) {
    const linkArray = x.map(
      (index) => `<div class="popupLink">
      <p>${index[0]} :&nbsp</p>
      <a href=${index[1]} target="blank">${index[1]}</a>
    </div>`
    );
    this.link.innerHTML = '<h4 class="popupSubTitle">Liens</h4>' + linkArray.join('');
  },
  setImages(x, tileName) {
    const imagesArray = x.map(
      (index) => `<img class="popupImage" src=${index} alt="${tileName} image" />`
    );
    this.image.innerHTML = imagesArray.join('');
  },
  clean() {
    this.title.innerHTML = '';
    this.description.innerHTML = '';
    this.link.innerHTML = '';
    this.techno.innerHTML = '';
    this.image.innerHTML = '';
  },
};

function handleTileClick(e) {
  const tile = e.target.id;
  if (tile) {
    popup.setTitle(apps[tile].title);
    popup.setDescription(apps[tile].description);
    popup.setTechno(apps[tile].techno);
    popup.setLink(apps[tile].link);
    popup.setImages(apps[tile].image, tile);
    popup.show();
  }
}

function initProjectTiles() {
  const projects = Object.entries(apps).map((x) => generateOneTile(x[0]));
  const projectDiv = document.getElementById('projectContainer');
  projectDiv.innerHTML = projects.join('');
}

function generateOneTile(tileId) {
  const tile = {
    title: apps[tileId].title,
    smallDescription: apps[tileId].smallDescription,
    directLink: apps[tileId].link[1][1],
    githubLink: apps[tileId].link[0][1],
    video: apps[tileId].video,
    techno: apps[tileId].techno,
    technoHTML() {
      return this.techno
        .map(
          (index) => `<div class="technoBullet boxShadow">
      <img src=${technoSource[index][1]} alt=${technoSource[index][0]} class="miniIcon" />
      <h5>${technoSource[index][0]}</h5>
    </div>`
        )
        .join('');
    },
  };

  return `
  <div id=${tileId} class="projectTile">
          <div class="tileVideoContainer">
            <video autoplay muted loop>
              <source src=${tile.video} type="video/mp4" />
            </video>
          </div>
          <div class="tileTriangle boxShadow"></div>
          <a href=${tile.githubLink} target="blank" class="tileGithub"
            ><img src="./assets/icons/github.svg" alt="github" class="biggerIcon"
          /></a>
          <div class="tileTextContainer">
            <div class="tileTitle">
              <h1>${tile.title}</h1>
              <a href=${tile.directLink} class="playButton" target="blank"
                ><img src="./assets/icons/external-link.svg"
              /></a>
            </div>
            <p class="tileText">
              ${tile.smallDescription}
            </p>
          </div>
          <div class="tileTechno">
            ${tile.technoHTML()}
          </div>
        </div>
  `;
}

function handleClosePopup(e) {
  if (e.target.id === 'popup' || e.target.id === 'closePopup') {
    popup.hide();
  }
}

function setPopupListener() {
  let projectTiles = Array.from(document.getElementsByClassName('projectTile'));
  projectTiles.forEach((x) => x.addEventListener('click', handleTileClick));
  document.getElementById('popup').addEventListener('click', handleClosePopup);
}

function openXpSection() {
  const xpSection = document.getElementById('asideXpSection');
  const button = document.getElementById('buttonAsideXpIcon');
  xpSection.classList.toggle('minimizeSection');
  button.classList.toggle('rotate180Button');
}

document.getElementById('buttonAsideXp').addEventListener('click', openXpSection);

// -----------------------------------

initProjectTiles();
setPopupListener();
