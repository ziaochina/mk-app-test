__webpack_public_path__ = window["__pub_mk-app-test__"];

const data = require('./data')
const config = require('./config')
require('./mock.js')
require('./style.less')

export default {
    name: "mk-app-test",
    version: "1.0.0",
    description: "mk-app-test",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}