import autoTable from "jspdf-autotable";
import formatDate from "./formatDate";
import { jsPDF } from "jspdf";
import { initialValue } from "../constans";


interface jsPDFWithAutoTable extends jsPDF {
    lastAutoTable?: {
      finalY: number;
    };
  }

 interface GeneretaPdfProps {
    formState: typeof initialValue,
    familyData: { name: string, direction: string }
 }

const generetaPdf = async ({ formState, familyData }: GeneretaPdfProps) => {

    console.log(formState)
    const doc = new jsPDF() as jsPDFWithAutoTable;

    const title = "ACCEM. SERVICIO FASE DE VALORACION INICIAL Y DERIVACION";
    const familyAndDirection = `NOMBRE DE FAMILIA Y DIRECCIÓN: ${familyData.name} - ${familyData.direction}`;
    const date = `FECHA: ${formatDate()}`;
    let startY = 30;

    // Caracteristicas del texto
    doc.setFontSize(12);
    doc.setTextColor("#7030A0");
    doc.setLineHeightFactor(1.5);

    doc.text([title, familyAndDirection, date], 10, 10);

    // Columnas y filas
    for (const key in formState) {
      const head = [[{ content: key, colSpan: 2 }]];
      const body = Object.entries(formState[key]).filter(
        (product) => !!product[1]
      );
      if (!body.length) break;
      autoTable(doc, { head, body, startY });

      startY = doc.lastAutoTable?.finalY
        ? doc.lastAutoTable?.finalY + 10
        : startY;
    }

    doc.save("prueba.pdf");
  };

  export default generetaPdf