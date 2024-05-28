import type { Fossil, PhyloNode, PhyloTree } from '~/types'

/*
  This composable is used to fetch the phylo tree data from the server.
*/
export const usePhyloTree = async (): Promise<Ref<string>> => {
  const { data } = await useAsyncData<Fossil[]>('fossils',
    () =>
      queryContent<Fossil>('fossils')
        .find(),
  )

  if (data.value === null) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch phylo tree data',
    })
  }

  const tree: PhyloTree = {
    root: {
      name: 'Life',
      children: [],
    },
    separation: 0.01,
  }

  // Loop over each fossil and add it to the tree
  data.value.forEach((fossil) => {
    const { classification } = fossil

    if (classification === undefined) {
      return
    }

    let node = tree.root

    if (classification.domain !== undefined) {
      node = findOrCreateNode(node, classification.domain)
    }

    if (classification.kingdom !== undefined) {
      node = findOrCreateNode(node, classification.kingdom)
    }

    if (classification.phylum !== undefined) {
      node = findOrCreateNode(node, classification.phylum)
    }

    if (classification.class !== undefined) {
      node = findOrCreateNode(node, classification.class)
    }

    if (classification.order !== undefined) {
      node = findOrCreateNode(node, classification.order)
    }

    if (classification.family !== undefined) {
      node = findOrCreateNode(node, classification.family)
    }

    if (classification.genus !== undefined) {
      node = findOrCreateNode(node, classification.genus)
    }

    if (classification.species !== undefined) {
      node = findOrCreateNode(node, classification.species)
    }

    node.children.push({
      name: fossil.name,
      children: [],
    })
  })

  const newpickTree = phyloTreeToNewick(tree)

  return ref(newpickTree)
}

// Function to convert a PhyloNode to Newick format
function nodeToNewick(node: PhyloNode, separation: number, depth: number = 0): string {
  if (!node.children || node.children.length === 0) {
    return node.name ? `${node.name}:${depth * separation}` : ''
  }
  else {
    const childrenNewick = node.children.map(child => nodeToNewick(child, separation, depth + 1)).join(',')
    return `(${childrenNewick})${':' + (depth * separation)}`
  }
}

// Main function to convert a PhyloTree to Newick format
export function phyloTreeToNewick(tree: PhyloTree): string {
  const newickString = nodeToNewick(tree.root, tree.separation)
  return `${newickString}`
}

function findOrCreateNode(node: PhyloNode, name: string): PhyloNode {
  const child = node.children.find(child => child.name === name)

  if (child !== undefined) {
    return child
  }

  const newChild = {
    name,
    children: [],
  }

  node.children.push(newChild)

  return newChild
}
