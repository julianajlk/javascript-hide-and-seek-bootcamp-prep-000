function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
};

function inscreaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
 for (let i = 0; i < rankedLists.length; i++) {
   var children = rankedLists[i].children;
   for (let l = 0; l < children.length; l++) {
     children[l].innerHTML = parseInt(children[l].innerHTML) + n;
   }
 }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
