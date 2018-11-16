import { Grid } from './blob'

export default class BlobBoundaryFinder {
	public top: number = 0

	public right: number = 9

	public bottom: number = 9

	public left: number = 0

	public reads: number = 0

	private grid: Grid

	constructor(grid: Grid) {
		this.grid = grid
	}

	public find() {
		this.findLeft()
		this.findBottom()
		this.findRight()
		this.findTop()

		return {
			top: this.top,
			right: this.right,
			bottom: this.bottom,
			left: this.left,
			reads: this.reads
		}
	}

	private getBlobByCoords(i: number, j: number): number {
		const res = this.grid[i][j]
		this.reads += 1

		return res
	}

	private checkPreviousRow(i: number, j: number): boolean {
		let prev = false

		for (; j <= this.right; j = j + 2) {
			if (this.getBlobByCoords(i, j) === 1) {
				prev = true
				return prev
			}
		}

		return prev
	}

	private checkPreviousColumn(i: number, j: number): boolean {
		let prev = false

		for (; i <= this.bottom; i = i + 2) {
			if (this.getBlobByCoords(i, j) === 1) {
				prev = true
				return prev
			}
		}

		return prev
	}

	private findRight() {
		let offset = 0

		for (let j = 9; j >= this.left; j--) {
			offset = this.top + j % 2

			for (let i = offset; i <= this.bottom; i = i + 2) {
				if (this.getBlobByCoords(i, j) === 1) {
					this.right = this.checkPreviousColumn(i, j + 1) ? j + 1 : j

					return
				}
			}
		}
	}

	private findLeft() {
		let offset = 0

		for (let j = 0; j <= this.right; j++) {
			offset = this.top + j % 2

			for (let i = offset; i <= this.bottom; i = i + 2) {
				if (this.getBlobByCoords(i, j) === 1) {
					this.left = this.checkPreviousColumn(i, j - 1) ? j - 1 : j

					return
				}
			}
		}
	}

	private findTop() {
		let offset = 0

		for (let i = 0; i <= this.bottom; i++) {
			offset = this.left + i % 2

			for (let j = offset; j <= this.right; j = j + 2) {
				if (this.getBlobByCoords(i, j) === 1) {
					this.top = this.checkPreviousRow(i - 1, j) ? i - 1 : i

					return
				}
			}
		}
	}

	private findBottom() {
		let offset = 0

		for (let i = 9; i >= this.top; i--) {
			offset = this.left + i % 2

			for (let j = offset; j <= this.right; j = j + 2) {
				if (this.getBlobByCoords(i, j) === 1) {
					this.bottom = this.checkPreviousRow(i + 1, j) ? i + 1 : i

					return
				}
			}
		}
	}
}
