import React, { ChangeEvent, FormEvent } from "react"
import Input from "./Input";
import Button from "./Button";

interface InitialFormProps {
    setFamilyData: React.Dispatch<React.SetStateAction<{ name: string; direction: string }>>
    familyData: { name: string; direction: string; }
    next: (step: 1 | -1) => void
}

const InitialForm = ({ setFamilyData, familyData, next }: InitialFormProps) => {
   
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFamilyData((prev) => ({...prev, [name]: value}))
    }
    const nextForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        next(1)

    }
    return <div className="h-[100vh] w-[100%] flex justify-center items-center bg-black/30">
        <div className="max-w-[500px] border p-5 rounded-md bg-white">
        <h1 className="text-3xl text-center font-bold my-5">Informacion de la familia</h1>
        <form onSubmit={ nextForm } className="flex flex-col">
            <Input label="Nombre" id="familyName" onChange={handleInput} value={familyData.name} name="name"/>
            <Input label="Direccion" id="familyAddress" onChange={handleInput} value={familyData.direction} name="direction" />
            <Button type="submit">Siguiente</Button>
        </form>
        </div>
    </div>
     
}


export default InitialForm