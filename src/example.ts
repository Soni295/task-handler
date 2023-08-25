export class Example {
	constructor(
		private foo: string,
		public bar: string,
		public number: number
	) { }

	print() {
		console.log({
			foo:this.foo,
			bar: this.bar,
			number: this.number
		})
	}
}