function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
};

function inscreaseRankBy(n) {
 const rankedLists = document.querySelectorAll('.ranked-list');
 let children = rankedLists[i].children
  for (let i = 0; i < rankedLists.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
