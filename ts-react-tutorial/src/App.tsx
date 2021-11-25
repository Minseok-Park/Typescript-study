import React from "react";
import MyForm from "./MyForm";

function App() {
  type FormParams = {
    name: string;
    description: string;
  };
  const onSubmit = (form: FormParams) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
}

export default App;
