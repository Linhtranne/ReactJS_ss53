

export default function Ex8() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const myFind = (arr: number[], n: number, callback: Function) => {
        for (let i = 0; i < arr.length; i++) {
          if (callback(arr[i], n)) {
            return arr[i];
          }
        }
        return null;
      };
      
      const arr1 = [1, 2, 3, 4, 5, 2, 7];
      const callback = (arr: number, n: number) => arr === n;
      const result = myFind(arr1, 2, callback);
      console.log(result);
  return (
    <div>Ex8</div>
  )
}
