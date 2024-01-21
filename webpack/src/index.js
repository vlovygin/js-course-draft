import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'

console.log(config.key)

const service = new AppService('Hello AppService')
service.log()
