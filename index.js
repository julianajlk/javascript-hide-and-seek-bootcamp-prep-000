function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  const elements = document.getElementById('nested');
  return elements.querySelector('.target');
};

function inscreaseRankBy(n) {
 const rankedLists = document.querySelectorAll('.ranked-list');
 const firstList = rankedLists[0]
 const secondList = rankedLists[1]
 let children = rankedLists[i].children
 let secondChildren = secondList.children
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
  for (let i = 0; i < secondChildren.length; i++) {
    secondChildren[i].innerHTML = parseInt(secondChildren[i].innerHTML) + n;
  }
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
