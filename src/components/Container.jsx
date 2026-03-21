export default function Container( {children} ) {
  return <div className="flex flex-col gap-4 max-w-lg mx-auto my-10 p-10 rounded-2xl shadow-lg text-gray-600"> {children} </div>
}
