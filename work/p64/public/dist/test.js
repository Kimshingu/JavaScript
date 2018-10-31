'use strict';

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  console.log('${subject} ${verb} ${object}'); // 변수값을 결합시킬 수 있다.
}

var sentences = [{ subject: 'I', verb: 'love', object: 'you' }, { subject: 'You', verb: 'love', object: 'me' }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;
    //배열이나 컬렉션 객채를 배치 //차례로 s에 다가 담아서 그걸 say 함수에 전달 // {subject:'I', verb:'love', object:'you'}가 전달됨
    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}