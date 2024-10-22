import { useState } from "react";
import { initialValue } from "../constans";

const useFormState = <T extends typeof initialValue>(initialState: T) => {
  const [form, setForm] = useState(initialState);
    
  const setFormState = (input: { name: string, value: string, category: string }) => {
    const { name, value, category } = input;
    setForm((prev) => ({ ...prev, [category]: { ...prev[category], [name]: value} }));
  };

  return { formState: form, setFormState };
};

export default useFormState;
