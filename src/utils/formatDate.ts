
const formatDate = () => {
   const today = new Date()

   let day: string | number = today.getDate()
   let month: string | number = today.getMonth() + 1
   const year = today.getFullYear()

   if(day < 10) day = `0${day}`
   if(month < 10) month = `0${month}`

   return `${day}-${month}-${year}`;
}

export default formatDate