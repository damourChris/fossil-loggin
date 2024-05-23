export default defineEventHandler(async (event) => {
  const data = useStorage('data')

  const sharedTaxonomy = {
    phylum: 'Mollusca',
    class: 'Bivalvia',
    order: 'Ammonitida',
  }

  const collections = [
    {
      ...sharedTaxonomy,
      family: 'Baculitidae',
      genus: 'Baculites',
      species: 'ancepts',
    },
    {
      ...sharedTaxonomy,
      family: 'Baculitidae',
      genus: 'Baculites',
      species: 'compressus',
    },
    {
      ...sharedTaxonomy,
      family: 'Diplomoceratidae',
      genus: 'Doplomoceras',
      species: 'cylindraceum',
    },
  ]

  return collections
})
