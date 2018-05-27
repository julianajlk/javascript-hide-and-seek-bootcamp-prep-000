function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  const elements = document.getElementById('nested');
  return elements.querySelector('.target');
};

function inscreaseRankBy(n) {
 const list = document.getElementById().querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + 1).parseInt()
  }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
