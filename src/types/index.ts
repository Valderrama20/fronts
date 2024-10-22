import { initialValue, tables } from "../constans";
export interface TableProps {
   data: typeof tables[0],
   setForm: (input: { name: string, value: string, category: string }) => void ,
   formState: typeof initialValue
}