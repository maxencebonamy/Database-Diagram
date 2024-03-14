export const appendAndSelect = (nodes: SceneNode[]): void => {
	nodes.forEach(node => figma.currentPage.appendChild(node))
	figma.currentPage.selection = nodes
	figma.viewport.scrollAndZoomIntoView(nodes)
}