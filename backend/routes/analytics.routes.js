
const router = require('express').Router()
const User = require('../models/User')
const auth = require('../middleware/auth')
const role = require('../middleware/role')

router.get('/dashboard', auth, role('ADMIN'), async(req,res)=>{
  const totalUsers = await User.countDocuments()
  const activeUsers = await User.countDocuments({isActive:true})
  res.json({totalUsers, activeUsers})
})

module.exports = router
