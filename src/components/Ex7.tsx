
export default function Ex7() {
    const numbers:number[]=[1,2,3,4,5,6];
    
    const myForEach=(arr:number[],callback=(i:number,number:number)=>{console.log(`Vị trí: ${i}, Phần tử${number}, Mảng ${arr}`)})=>{
        for (let i = 0; i < arr.length; i++) {
            callback(i,arr[i]);            
        }
    }
    myForEach(numbers)
  return (
    <div>Ex7</div>
  )
}
