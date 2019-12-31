import {getFlyingSuperHeros} from '../super-heroes'

test('returns returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperHeros()
  // use the Snapshot
  expect(flyingHeros).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Apogee",
        "powers": Array [
          "gravity control",
          "fly",
        ],
      },
    ]
  `)
})
