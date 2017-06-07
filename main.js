//Global Require
//require(['numbers']);

var linkedList = new LinkedList();
  linkedList.push({
    name: 'John',
    birthyear: 1981
  });
  linkedList.push({
    name: 'Pavlo',
    birthyear: 2000
  });
  linkedList.push({
    name: 'Garry',
    birthyear: 1989
  });
  linkedList.push({
    name: 'Derek',
    birthyear: 1990
  });
  linkedList.push({
    name: 'Ivan',
    birthyear: 1966
  });

//console.log(linkedList.shift().data); // { name: 'John', birthyear: 1981 }
//console.log(linkedList.pop().data);   // { name: 'Ivan', birthyear: 1966 }
 console.log(linkedList);