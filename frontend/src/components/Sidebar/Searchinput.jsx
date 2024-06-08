import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversations"
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast"

const SearchInput = () => {
  const [search,setSearch]=useState("")
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversations()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search) return
    if(search.length <3)
      {
        return toast.error("search term must be aleast 3 characters long")
      }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
      if(conversation)
        {
          setSelectedConversation(conversation)
          setSearch('')
        }
      else toast.error("No user found")
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
        </button>
    </form>
    </div>
  )
}

export default SearchInput


// import { FaSearch } from "react-icons/fa";
// const SearchInput = () => {
//   return (
//     <div>
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <FaSearch />
//         </button>
//     </form>
//     </div>
//   )
// }

// export default SearchInput