import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

  const [categoryInput, setCategoryInput] = useState('')

  const handleCategoryInput = (event) => {
    const newCategory = event.target.value
    setCategoryInput(newCategory)
  }

  const onAddCategoryI = (event) => {
    event.preventDefault()
    if (!categoryInput.length) return
    onAddCategory(categoryInput)
    setCategoryInput('')
  }

  return (
    <form onSubmit={onAddCategoryI} aria-label='add-category-form'>
      <input type='text' value={categoryInput} onChange={handleCategoryInput}/>
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}