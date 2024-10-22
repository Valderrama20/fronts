import { TableProps } from "../types";

const Table: React.FC<TableProps> = ({ data, setForm, formState }) => {
  return (
    <div className="text-center mx-auto w-full max-w-[700px]" id={data.title}>
      <div className=" bg-gray-200 p-2">
        <h2 className="text-xl font-semibold">{data.title}</h2>
      </div>

      <table className="w-full [&_td]:border [&_td]:border-black [&_th]:border [&_th]:border-black mb-5">
        <thead>
          <tr>
            <th></th>
            <th>{data.nameOfOptions}</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map(( name , index) => {
            return (
              <tr key={index + 1}>
                <td className="text-start w-7/12 p-1.5">{name}</td>
                <td>
                  <select
                    name={name}
                    id="1"
                    className="w-full p-1.5 text-center"
                    onChange={({target}) => setForm({name, value:target.value , category: data.title})}
                    value={formState[data.title][name]}
                  >
                    <option value="">Seleccionar</option>
                    {data.selectOptions.map((option, index) => {
                      return <option key={index + 1}>{option}</option>;
                    })}
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
