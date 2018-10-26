export const SampleCoordinateSpace: CoordinateSpace = [
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

export type Blob = 0 | 1

export type BlobRow = [ Blob, Blob, Blob, Blob, Blob, Blob, Blob, Blob, Blob, Blob ]

export type CoordinateSpace = [
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow,
	BlobRow
]
