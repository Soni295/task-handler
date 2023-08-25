import { Model } from "./model"
import { View } from "./view"

export class Controller {
	constructor(
		private model: Model,
		private view: View
	) { }

	handlerAddTask(newText: string) {
		this.model.addTask(newText)
	}

	handleDeleteTask(id: number) {
		this.model.deleteTask(id)
	}

	handleEditTask(id: number, newText: string) {
		this.model.editTask(id, newText)
	}
	toggleCompleteTask(id: number) {
		this.model.toggleComplete(id)
	}
}