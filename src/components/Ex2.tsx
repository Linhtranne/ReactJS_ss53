import React from 'react'

export default function Ex2() {
    const delayCallback = (cb = () =>{console.log('Hehehehehe');} ) => {
        setTimeout(() =>{
            cb();
        },1000);
    }
    delayCallback();
  return (
    <div>Ex2</div>
  )
}
