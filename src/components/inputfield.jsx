
const inputfield = ({type, ph}) => {
  return (
    <div className="w-full">
        <input className="bg-gray-100 placeholder-gray-600 p-3 w-full rounded-xl pl-7 outline-none" type={type} placeholder={ph} />
    </div>
  )
}

export default inputfield