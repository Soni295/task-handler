const a = document.getElementById('a')

export class View {
	private root: HTMLDivElement | null
	private form = document.createElement('form')
	private input = document.createElement('input')
	private button = document.createElement('button')
	private title = document.createElement('p')
	private taskList = document.createElement('ul')

	constructor(rootId: string) {
		this.root = document.getElementById(rootId) as HTMLDivElement | null
		if (!this.root) throw new Error("the rootId is incorrect")
		this.form.append(this.title, this.input, this.button)
		this.root.append(this.form, this.taskList)

		this.setTitle()
		this.setForm(console.log)
		this.setInput()
		this.setButton()
	}

	private addTask(text: string){
		const li = document.createElement('li')
		const p = document.createElement('p')
		p.textContent = text
		li.append(p)
		this.taskList.append(li)
	}

	private setTitle() {
		this.title.textContent = "Task handler"
		this.title.style.fontSize = "30px"
	}

	private setInput() {
		this.input.type = 'text'
		this.input.autocomplete = "off"
		this.input.autofocus = true
		this.input.placeholder = 'TODO ...'
		this.input.name = 'taskText'
		this.input.style.padding = "10px"
		this.input.style.borderRadius = "20px"
		this.input.style.marginTop = "10px"
	}

	private setButton() {
		this.button.textContent = 'Add'
		this.button.style.padding = "10px 50px"
		this.button.style.fontSize = "20px"
		this.button.style.borderRadius = "20px"
		this.button.style.margin = "10px"
	}

	private setForm(cb: () => void) {
		this.form.style.display = "flex"
		this.form.style.flexDirection = "column"
		this.form.style.justifyContent = "center"
		this.form.style.alignItems = "center"
		this.form.style.marginTop = "50px"

		this.form.onsubmit = event => {
			event.preventDefault()
			const taskText = this.input.value
			if (taskText === "") return
			this.addTask(taskText)
			this.input.value = ""
			cb()
		}
	}
}