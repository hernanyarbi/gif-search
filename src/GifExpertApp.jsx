import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['CsGo'])

  const onAddCategory = (categoryInput) => {
    const categoryExist = categories.filter(category => category.toUpperCase() === categoryInput.toUpperCase())
    if (!categoryExist.length) {
      setCategories([
        ...categories,
        categoryInput
      ])
    }
  }

  return (
    <>
      < AddCategory onAddCategory={onAddCategory} />

      {categories.map(category => (
        <GifGrid key={category} category={category}/>
      ))}

    </>
  )
}
