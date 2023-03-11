const msg = require('../const/message')
const Validator = require('../helpers/validation')
const Utils = require('../helpers/Utils')

// so stands for Sales Order
const soController = {
	// po stands for PO number
	updatePo: async (req, res) => {
		try {
			res.json({ success: true, msg: msg.success.updatedPo })
		} catch (error) {
			res.json({ success: false, error: error })
		}
	}
}

module.exports = soController