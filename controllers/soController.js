const connection = require('../db/connection')

const msg = require('../const/message')
const Validator = require('../helpers/validation')

// so stands for Sales Order
const soController = {
	// po stands for PO number
	updatePo: async (req, res) => {
		try {
			const { num, po } = req.body
			if (Validator.isEmpty(num) || Validator.isEmpty(po))
				return res.json({ success: false, error: msg.error.missing_fields })

			connection.query(`UPDATE so SET customerPO = ${po} WHERE num = ${num}`, (error, results, fields) => {
				if (error) {
					res.json({ success: false, error: error })
				} else {
					res.json({ success: true, msg: msg.success.updatedPo })
				}
			})

		} catch (error) {
			res.json({ success: false, error: error })
		}
	}
}

module.exports = soController