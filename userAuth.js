// Disable user auth. Copied from the official library customization example.
// https://github.com/nytimes/library-customization-example/blob/65a6e70240cfee31e444fa20fe74ae32daf437d9/userAuth.js
'use strict'

const md5 = require('md5')
const router = require('express-promise-router')()

router.use(async (req, res) => {
  req.userInfo = {
    email: 'guest@propertytothepeople.com',
    userId: '-1',
    analyticsUserId: false // disable GA tracking
  }

  return 'next'
})

module.exports = router
