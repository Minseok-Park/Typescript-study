import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  click: (name: string) => void;
};

// const Greetings = React.FC<GreetingsProps> = ({children}) => null;
function Greetings({ name, mark = "!", optional, click }: GreetingsProps) {
  const handleClick = () => click(name);

  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
