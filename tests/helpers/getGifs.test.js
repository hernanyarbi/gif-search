import { getGifs } from "../../src/helpers/getGifs";

describe('Testinf getGifs', () => {
  test('should get a list', async () => {
    const gifs = await getGifs()
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  });
});