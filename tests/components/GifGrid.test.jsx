import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock("../../src/hooks/useFetchGif")

describe('Testing <GifGrid/>', () => {
  const category = "TT Spwn"
  test('should render de initial state without list and loading true', () => {
    useFetchGif.mockReturnValue(
      {
        gifs: [],
        isLoading: true
      }
    )
    render(<GifGrid category={category} />)
    expect(screen.getByText('cargando...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()
  });
  test('should render items', () => {

    const gifs = [
      {
        id:'1',
        title: 'terrorist meme',
        url: 'https://csgo.com/img.png'
      },
      {
        id:'2',
        title: 'chiken killer',
        url: 'https://csgo.com/img2.png'
      }
    ]

    useFetchGif.mockReturnValue(
      {
        gifs,
        isLoading: false
      }
    )
    render(<GifGrid category={category} />)

    gifs.forEach(gif => {
      expect(screen.getByText(gif.title)).toBeTruthy()
    })

  });

});