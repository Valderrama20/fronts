import useFormState from "./hooks/useFormState";
import { initialValue, tables } from "./constans";
import Table from "./components/Table";
import { useState } from "react";
import Button from "./components/Button";
import {jsPDF} from "jspdf"
import autoTable from "jspdf-autotable"
import formatDate from "./utils/formatDate";
import InitialForm from "./components/InitialForm";

export default function Tables() {
  const {formState, setFormState } = useFormState(initialValue);
  const [familyData, setFamilyData] = useState({ name:"", direction: "" });
  const [step, setStep] = useState(-1);

  interface jsPDFWithAutoTable extends jsPDF {
    lastAutoTable? : {
      finalY: number
    }
  }

  const generetaPdf = async () => {
      const doc = new jsPDF() as jsPDFWithAutoTable
       
      const title = "ACCEM. SERVICIO FASE DE VALORACION INICIAL Y DERIVACION"
      const familyAndDirection = `NOMBRE FAMILIA y DIRECCIÓN: ${familyData.name} - ${familyData.direction}`
      const date = `FECHA: ${formatDate()}`
      let startY = 30
     
      // Caracteristicas del texto 
      doc.setFontSize(12)
      doc.setTextColor("#7030A0")
      doc.setLineHeightFactor(1.5)

      doc.text([title,familyAndDirection,date],10,10)
     
      
      // Columnas y filas 
      for(const key in formState) {
        const head = [[{content: key, colSpan: 2}]]
        const body = Object.entries(formState[key]).filter((product) => !!product[1] )
        if(!body.length) break
        autoTable(doc, { head, body, startY })
        
        startY = doc.lastAutoTable?.finalY ? doc.lastAutoTable?.finalY + 10 : startY
      }
      
      doc.save("prueba.pdf")

  };

  const nextAndPrev = (step: 1 | -1) => setStep((prev) =>  prev + step)
  const produtosInArr: Record<string, Array<[string,string]>> = {}

  for(const key in initialValue) {
    produtosInArr[key] = Object.entries(initialValue[key])
  }

  if(step === -1) return <InitialForm setFamilyData={setFamilyData} familyData={familyData} next={nextAndPrev}/>
    
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        
        <Table data={tables[step]} setForm={setFormState} formState={formState} />
      
      <div>
        {step > -1 && <Button onClick={() => nextAndPrev(-1)}>Anterior</Button>} 
     {step < tables.length-1 && <Button onClick={() => nextAndPrev(1)}>Siguiente</Button>} 
      </div>
     {/* <Button onClick={() => console.log(formState)}>Ver datos</Button> */}
     {step === tables.length-1 && <Button onClick={() => generetaPdf()}>Crear PDF</Button>}
    </div>
    // <div className="flex flex-col " id="Tables">
    //   {tables.map((table, index) => {
    //     return <Table data={table} setForm={setFormState} key={index + 1} />;
    //   })}
    //   <button onClick={generetaPdf}>Decargar PDF</button>
    // </div>
  );
}
