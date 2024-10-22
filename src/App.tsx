import useFormState from "./hooks/useFormState";
import { initialValue, tables } from "./constans";
import Table from "./components/Table";
import { useState } from "react";
import Button from "./components/Button";

import InitialForm from "./components/InitialForm";
import generetaPdf from "./utils/generatePdf";

export default function Tables() {
  const { formState, setFormState } = useFormState(initialValue);
  const [familyData, setFamilyData] = useState({ name: "", direction: "" });
  const [step, setStep] = useState(-1);

  const nextAndPrev = (step: 1 | -1) => setStep((prev) => prev + step);
  const produtosInArr: Record<string, Array<[string, string]>> = {};

  for (const key in initialValue) {
    produtosInArr[key] = Object.entries(initialValue[key]);
  }

  if (step === -1)
    return (
      <InitialForm
        setFamilyData={setFamilyData}
        familyData={familyData}
        next={nextAndPrev}
      />
    );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Table data={tables[step]} setForm={setFormState} formState={formState} />

      <div className="flex w-full max-w-[500px] space-x-2 ">
        {step > -1 && <Button onClick={() => nextAndPrev(-1)}>Anterior</Button>}
        {step < tables.length - 1 && (
          <Button onClick={() => nextAndPrev(1)}>Siguiente</Button>
        )}
        {step === tables.length - 1 && (
          <Button onClick={() => generetaPdf({familyData,formState})}>Crear PDF</Button>
        )}
      </div>
      <Button onClick={() => console.log(formState)}>Ver datos</Button>
    </div>
    // <div className="flex flex-col " id="Tables">
    //   {tables.map((table, index) => {
    //     return <Table data={table} setForm={setFormState} key={index + 1} />;
    //   })}
    //   <button onClick={generetaPdf}>Decargar PDF</button>
    // </div>
  );
}
