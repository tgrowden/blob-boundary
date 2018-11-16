export const SampleGrid: Grid = [
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
	[ 0, 0, 1, 1, 1, 1, 1, 0, 0, 0 ],
	[ 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
	[ 0, 0, 1, 1, 1, 1, 1, 0, 0, 0 ],
	[ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
	[ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
	[ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
]

export type CoordinateSpace = 0 | 1

export type CoordinateSpaceRow = [
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace,
	CoordinateSpace
]

export type Grid = [
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow,
	CoordinateSpaceRow
]
