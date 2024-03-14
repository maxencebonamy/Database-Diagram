import type { TableFieldProps } from "./table-field.type"

export const TableField = async({ name, primaryKey = false, foreignKey = false }: TableFieldProps): Promise<SceneNode> => {
	const field = figma.createFrame()
	field.name = `${name} Field`
	field.strokeLeftWeight = 1
	field.strokeRightWeight = 1
	field.strokeBottomWeight = 1
	field.strokes = [{ type: "SOLID", color: { r: 0.46, g: 0.46, b: 0.46 } }]
	field.layoutSizingHorizontal = "FIXED"
	field.backgrounds = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
	field.layoutMode = "HORIZONTAL"
	field.primaryAxisAlignItems = "MIN"
	field.counterAxisAlignItems = "CENTER"
	field.horizontalPadding = 20
	field.resize(500, 60)

	const content = figma.createText()
	await figma.loadFontAsync({ family: "IBM Plex Mono", style: foreignKey ? "Italic" : "Regular" }).then(() => {
		content.fontName = { family: "IBM Plex Mono", style: foreignKey ? "Italic" : "Regular" }
	})
	content.name = name
	content.characters = name
	content.textDecoration = primaryKey ? "UNDERLINE" : "NONE"
	content.fontSize = 24
	content.textAlignHorizontal = "LEFT"
	content.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
	field.appendChild(content)

	return field
}