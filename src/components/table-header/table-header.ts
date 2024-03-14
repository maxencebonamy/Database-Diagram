import type { TableHeaderProps } from "./table-header.type"

export const TableHeader = async({ name }: TableHeaderProps): Promise<SceneNode> => {
	const header = figma.createFrame()
	header.name = `${name} Header`
	header.topLeftRadius = 6
	header.topRightRadius = 6
	header.layoutSizingHorizontal = "FIXED"
	header.backgrounds = [{ type: "SOLID", color: { r: 0.46, g: 0.46, b: 0.46 } }]
	header.layoutMode = "HORIZONTAL"
	header.primaryAxisAlignItems = "CENTER"
	header.counterAxisAlignItems = "CENTER"
	header.resize(500, 60)

	const content = figma.createText()
	await figma.loadFontAsync({ family: "IBM Plex Mono", style: "Bold" }).then(() => {
		content.fontName = { family: "IBM Plex Mono", style: "Bold" }
	})
	content.name = name
	content.characters = name
	content.fontSize = 32
	content.textAlignHorizontal = "CENTER"
	content.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
	header.appendChild(content)

	return header
}