
[참고](https://www.onlineinterviewquestions.com/blog/a-glance-at-deep-and-shallow-copy-in-javascript/)
[참고](http://2ality.com/2016/10/rest-spread-properties.html)
[참고](https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa)
> 내용 매우 좋음!

[참고](https://lodash.com/docs/#cloneDeep)
```
$ npm i --save lodash.clonedeep
```
```javascript
var cloneDeep = require('lodash.clonedeep');

const people = [{ name: 'Bob' }, { name: 'Alice' }];
const morePeople = cloneDeep(people).concat([{ name: 'John' }]);
console.log(people[0] === morePeople[0]); // returns false
```
