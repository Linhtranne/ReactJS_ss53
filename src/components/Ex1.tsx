import React from 'react'

export default function Ex1() {
    function calculate(a: number, b: number, callback: (result: number) => void): void {
        const sum: number = a + b;
        callback(sum);
      }

      calculate(1, 1, (result: number) => {
        console.log(` ${result}`);
      });
      
  return (

    <div></div>
  )
}
