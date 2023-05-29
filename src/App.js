const Hello = (props) => {
  console.log(props);
  return (
    <>
      HEllo {props.name}, you are {props.age} years old!
      <br />
    </>
  );
};

const App = () => {
  const now = new Date();
  const name = "Tej";
  const age = 20;
  const friends = [
    { name: "Ram", age: 90 },
    { name: "Sita", age: 78 },
  ];
  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>
      <br />
      <Hello name="Tejesh" age={10 + 90} />
      <Hello name={name} age={age} />
      <p>{friends[1].name}</p>
      <p>{friends[0].age}</p>
    </div>
  );
};

export default App;
