

export default function Ex6() {
    const task1 = () => {
        console.log("task1 được thưc thi");
      };
      const task2 = () => {
        console.log("task2 được thưc thi");
      };
      const task3 = () => {
        console.log("task3 được thưc thi");
      };
      setTimeout(() => {
        task1();
        setTimeout(() => {
          task2();
          setTimeout(() => {
            task3();
            console.log("Hoàn thành!");
          }, 500);
        }, 500);
      }, 1000);
  return (
    <div>Ex6</div>
  )
}
