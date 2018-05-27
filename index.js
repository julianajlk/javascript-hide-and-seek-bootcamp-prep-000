function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
};

function inscreaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  const firstList = lists[0];
  const secondList = lists[1];
  let firstListChildren = firstList.children;
  let secondListChildren = secondList.children;
    for (let i = 0; i < firstListChildren.length; i++) {
firstListChildren[i].innerHTML = parseInt(firstListChildren[i].innerHTML) + n;
}
    for (let i = 0; i < secondListChildren.length; i++) {
secondListChildren[i].innerHTML = parseInt(secondListChildren[i].innerHTML) + n;
}
  return test;
};

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  return grandNode.querySelector('div div div div div')
};
