import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('Testing useFetchGif hook', () => {
  test('should return inital state', () => {
    const { result } = renderHook(() => useFetchGif('A site'))
    const { gifs, isLoading } = result.current
    expect(gifs.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })
  test('should return images', async () => {
    const { result } = renderHook(() => useFetchGif('A site'))
    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    )
    const { gifs, isLoading } = result.current
    expect(gifs.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
});