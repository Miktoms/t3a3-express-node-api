const profileRouter = require('express').Router()
const profileModel = require('../../profile.js')
const mocks = require('../../../helpers/mocks')

profileRouter.get('/', (req, res, next) => {
    res.body = mocks.createMockprofile()
    next()
})


profileRouter.use((req, res, next) => {
    profileModel.createprofileRecord(res.body)
    res.send(res.body)
})

module.exports = profileRouter