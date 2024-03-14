import { TableHeader } from "@/components/table-header"
import { TableField } from "@/components/table-field"
import { appendAndSelect } from "@/utils/figma"
import { Table } from "./components/table"

if (figma.editorType === "figma") {
	figma.showUI(__html__)

	figma.ui.onmessage = async(msg: {type: string, name: string}) => {
		if (msg.type === "create-table") {
			const name = msg.name

			const table = await Table({
				name,
				fields: [
					{ name: "id", primaryKey: true },
					{ name: "name" },
					{ name: "age" },
					{ name: "email" },
					{ name: "foreign", foreignKey: true },
					{ name: "pf", foreignKey: true, primaryKey: true }
				]
			})
			
			appendAndSelect([table])
		}
		figma.closePlugin()
	}
}