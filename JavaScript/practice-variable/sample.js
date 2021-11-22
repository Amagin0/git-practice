var str = "webcamp" //グローバルスコープ

function foo() {
  var str
  console.log(str)
  var str = "dmm webcamp" //関数スコープ
  console.log(str)
}

foo()