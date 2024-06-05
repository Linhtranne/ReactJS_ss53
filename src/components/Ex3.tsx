import React from 'react'

export default function Ex3() {
    function processArray(numbers: number[], callback: (arg0: number) => void): void {
        for (let i = 0; i < numbers.length; i++) {
          setTimeout(() => {
            callback(numbers[i]);
          }, i * 100);
        }
      }

      const numbers: number[] = [1, 2, 3, 4, 5];
      processArray(numbers, (number) => {
        console.log(`Phần tử thứ: ${number}`);
      });
      
  return (
    <div>Ex3</div>
  )
}
