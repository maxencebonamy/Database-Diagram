import { TableHeader } from "@/components/table-header"
import { TableField } from "@/components/table-field"
import type { TableProps } from "./table.type"

export const Table = async({ name, fields }: TableProps): Promise<SceneNode> => {
	const table = figma.createFrame()
	table.name = `${name} Table`
	table.layoutMode = "VERTICAL"
	table.layoutSizingHorizontal = "HUG"
	table.layoutSizingVertical = "HUG"
	table.primaryAxisAlignItems = "MIN"
	table.counterAxisAlignItems = "CENTER"
	table.fills = []

	const header = await TableHeader({ name })
	table.appendChild(header)

	for (const field of fields) {
		const tableField = await TableField(field)
		table.appendChild(tableField)
	}

	return table
}