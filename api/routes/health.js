const { Router } = require('express')

const router = Router()

router.use('/health', (req, res) => {
	res.status(200).end('OK')
})

module.exports = router
