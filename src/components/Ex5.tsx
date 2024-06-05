

export default function Ex5() {
  function checkCondition (value: boolean, callback =((i:boolean)=>{console.log(`Điều kiện trả về :${i}`);}) ){
    callback(value);
  }
  checkCondition(true)
  checkCondition(false)
  return (
    <div>Ex5</div>
  )
}
