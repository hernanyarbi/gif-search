import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test <GifExpertApp/>', () => {
  test('should get initial state', () => {
    render(<GifExpertApp />)
    expect(screen.getByText('CsGo')).toBeTruthy()
  });
  test('should add category and show it', () => {
    const category = 'A Site'
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    
    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)
    
    expect(screen.getByText(category)).toBeTruthy()
  });
});