function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  const elements = document.getElementById('nested');
  return elements.querySelector('.target');
};

function inscreaseRankBy(n) {
 const rankedLists = document.getElementById().querySelectorAll('.ranked-list');
 const firstList = rankedLists[0]
 const secondList = rankedLists[1]
  for (let i = 0; i < list.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
