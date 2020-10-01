// llp_test.surge.sh

console.log('Hello there ✋');

const popup = {
  title: document.getElementById('popupTitle'),
  description: document.getElementById('popupDescription'),
  techno: document.getElementById('popupTechnoSection'),
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
  clean() {
    this.title.innerHTML = '';
    this.description.innerHTML = '';
    this.link.innerHTML = '';
    this.techno.innerHTML = '';
  },
};

function handleTileClick(e) {
  const tile = e.target.id;
  if (tile) {
    popup.setTitle(apps[tile].title);
    popup.setDescription(apps[tile].description);
    popup.setTechno(apps[tile].techno);
    popup.setLink(apps[tile].link);
    popup.show();
  }
}

function handleClosePopup(e) {
  if (e.target.id != 'innerContainer') {
    popup.hide();
  }
}

let projectTiles = Array.from(document.getElementsByClassName('projectTile'));
projectTiles.forEach((x) => x.addEventListener('click', handleTileClick));
document.getElementById('closePopup').addEventListener('click', handleClosePopup);
document.getElementById('popup').addEventListener('click', handleClosePopup);
