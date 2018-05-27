function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
};

function inscreaseRankBy(n) {
 const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
 }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
