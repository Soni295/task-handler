export class Task {
	constructor(
		public id: number,
		public text: string,
		public complete: boolean = false
	) { }
}

export class Model {
	private tasks: Task[] = []

	constructor() {
		const localTask = localStorage.getItem('task')
		if (localTask) this.tasks = JSON.parse(localTask)
	}

	private save() {
		localStorage.setItem('task', JSON.stringify(this.tasks))
	}

	public addTask(text: string) {
		const id = this.tasks.length > 0
			? this.tasks[this.tasks.length - 1].id + 1
			: 1

		const newTask = new Task(id, text)
		this.tasks.push(newTask)
		this.save()
	}

	public toggleComplete(id: number) {
		this.tasks = this.tasks.map(currentTask => {
			if (currentTask.id === id) {
				currentTask.complete = !currentTask.complete
			}
			return currentTask
		})
	}

	public editTask(id: number, newText: string) {
		this.tasks = this.tasks.map(currentTask => {
			if (currentTask.id === id) {
				currentTask.text = newText
			}
			return currentTask
		})
		this.save()
	}
	public deleteTask(id: number) {
		this.tasks = this.tasks.filter(task => task.id !== id)
		this.save()
	}
}