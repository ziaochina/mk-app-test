import config from './config'
import * as data from './data'

export default {
	name: "mk-app-test",
	version: "1.0.0",
	description: "mk-app-test",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "mk-app-test")
	}
}