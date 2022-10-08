import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing <AddCategory />', () => {
  test('should change input value', () => {
    render(<AddCategory onAddCategory={() => { }} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'CT spawn' } })

    expect(input.value).toBe('CT spawn')
  });

  test('should call a prop method', () => {
    const inputValue = 'CT spawn'
    const onAddCategory = jest.fn()

    render(<AddCategory onAddCategory={onAddCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })

    expect(input.value).toBe(inputValue)

    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onAddCategory).toHaveBeenCalled()
    expect(onAddCategory).toHaveBeenCalledTimes(1)
    expect(onAddCategory).toHaveBeenCalledWith(inputValue)

  });

  test('should verify input value was empty', () => {
    const onAddCategory = jest.fn()

    render(<AddCategory onAddCategory={onAddCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)
    
    expect(onAddCategory).not.toHaveBeenCalled()
    expect(onAddCategory).toHaveBeenCalledTimes(0)
  });
});