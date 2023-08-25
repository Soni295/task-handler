import { Controller } from "./controller";
import { Model } from "./model";
import { View } from "./view";

function Composition() {
	const taskModel = new Model()
	const taskView = new View('root')
	const taskController = new Controller(taskModel, taskView)
	return {
		taskModel,
		taskView,
		taskController,
	}
}

export const {
	taskModel,
	taskView,
	taskController,
} = Composition()