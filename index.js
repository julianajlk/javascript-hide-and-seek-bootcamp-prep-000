function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  const elements = document.getElementById('nested');
  return elements.querySelector('.target');
};

function inscreaseRankBy(n) {
 const rankedList = document.getElementById().querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
