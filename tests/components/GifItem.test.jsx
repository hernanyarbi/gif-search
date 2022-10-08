import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Testing <GifItem/>', () => {
  const title = 'title'
  const url = 'https://test.com/'
  test('should match with stapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  });
  
  test('should have a text and alt', () => {
    render(<GifItem title={title} url={url} />)
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  });
  
  test('should have a title', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  });
});