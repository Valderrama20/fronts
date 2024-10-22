import useFormState from "./hooks/useFormState";
import { initialValue, tables } from "./constans";
import Table from "./components/Table";
import { useState } from "react";
import Button from "./components/Button";
import InitialForm from "./components/InitialForm";
import generetaPdf from "./utils/generatePdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFileAlt} from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex flex-col justify-center items-center min-h-screen py-5">
      <div className="w-full max-w-[700px]">
        <Table
          data={tables[step]}
          setForm={setFormState}
          formState={formState}
        />

        <div className="flex space-x-2 ">
          {step > -1 && (
            <Button onClick={() => nextAndPrev(-1)}><FontAwesomeIcon icon={faArrowLeft}/> Anterior</Button>
          )}
          {step < tables.length - 1 && (
            <Button onClick={() => nextAndPrev(1)}>Siguiente <FontAwesomeIcon icon={faArrowRight} /></Button>
          )}
          {step === tables.length - 1 && (
            <Button onClick={() => generetaPdf({ familyData, formState })}>
              Crear PDF <FontAwesomeIcon icon={faFileAlt} />
            </Button>
          )}
        </div>
      </div>

      {/* <Button onClick={() => console.log(formState)}>Ver datos</Button> */}
    </div>
  );
}
