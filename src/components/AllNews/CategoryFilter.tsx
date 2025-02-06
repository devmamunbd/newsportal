import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


interface CategoryProps {
    onCategory: (onCategoryTram: string) => void;
}

const categories = ['all', 'tech', 'health', 'sports', 'business']

const CategoryFilter = ({onCategory}: CategoryProps) => {
  return (
    <div className="md:w-1/4">
         <h3 className="text-xl  font-normal mb-2">Filter By Category</h3>
         <Select
         onValueChange={(value)=> onCategory(value === 'all' ? "" : value)}
         >
  <SelectTrigger className="w-full capitalize">
    <SelectValue placeholder="Select Category" />
  </SelectTrigger>
  <SelectContent>
    {
        categories?.map((category)=> (
            <SelectItem key={category} value={category} className="capitalize">{category}</SelectItem>
        ))
    }


  </SelectContent>
</Select>

    </div>
  )
}

export default CategoryFilter
