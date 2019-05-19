const assert = require('assert');
const chai = require('chai');
const expect = require('chai').expect;
const should = require('chai').should();
const ___ = '       ';

describe('#TEST_CASE()', function () {

  // [0] 테스트 케이스 작성,  시작 환경 만들기
  // 임의의 파티 테이블을 가져온다.
  const int = Math.floor(Math.random() * 6);
  const partyTables = (() => {
    let arry = [];
    for (let i = 0; i < int; i++) arry.push([]);
    return arry;
  })();

  it('테스트 케이스는 임의의 배열을 리턴 하며, 그 배열의 길이는 int값과 같다', function () {
    partyTables.should.be.a('array');
    partyTables.should.be.lengthOf(int);
  });


  // [1] 참여 인원을 파티 테이블의 갯수로 나눈다.
  // 각 테이블 마다 몇 명의 인원이 참여할 수 있는지 최대 숫자를 구하는 방법
  describe('#ShuffleMembers()', function() {

    describe('#getTicketNum()', function () {
      const max = partyTables.length;
      const min = 0;
      it('최소값과 최대값 사이의 임의의 숫자를 리턴한다', function () {
        const _return = Math.floor(Math.random() * (max - min) + min);
        console.log(max, min, _return)
        expect(_return).to.be.within(min, max);
      });
    });
  });

});
