import { User } from './models'

const init = () => Promise.all([User.sync()])

export default init
