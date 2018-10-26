import { SampleCoordinateSpace } from './blob'
import BlobBoundaryFinder from './blob-boundary-finder'

const finder = new BlobBoundaryFinder(SampleCoordinateSpace)

const { reads, top, left, bottom, right } = finder.find()

/* tslint:disable:no-console */
console.log(`
Cell Reads: ${reads}
Top: ${top}
Left: ${left}
Bottom: ${bottom}
Right: ${right}
`)

