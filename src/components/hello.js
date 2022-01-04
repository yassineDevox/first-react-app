
export default function HelloWorld() {
  return (<div>
   
    {
      [1, 2, 3].map(number => (<div>{number}</div>))
    }
  </div>
  );
}

