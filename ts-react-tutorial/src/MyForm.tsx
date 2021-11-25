import React, { useState } from "react";

type FormParams = {
  name: string;
  description: string;
};

type MyFormProps = {
  onSubmit: (form: FormParams) => void;
};

const MyForm: React.FC<MyFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<FormParams>({
    name: "",
    description: "",
  });
  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default MyForm;
