import React from 'react'
import { Input } from "@/components/ui/input"



interface SearchBarProps {
    onSearch: (searchTram: string) => void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
  return (
    <div className="mb-4 md:w-3/4">
     <h3 className="text-xl text-black font-normal mb-2">Search News</h3>
     <Input
     type='text'
     onChange={(e)=> onSearch(e.target.value)}
     placeholder='Search News.....'
     className="w-full p-2 rounded-md border outline-none"
     />

    </div>
  )
}

export default SearchBar
