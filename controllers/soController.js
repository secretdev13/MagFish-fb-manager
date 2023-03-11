const connection = require('../db/connection')

const msg = require('../const/message')
const Validator = require('../helpers/validation')

// so stands for Sales Order
const soController = {
	// po stands for PO number
	updatePo: async (req, res) => {
		try {
			const params = req.params
			if (Validator.isEmpty(params.num) || Validator.isEmpty(params.po))
				return res.json({ success: false, error: msg.error.missing_fields })

			connection.query(`UPDATE so SET customerPO = ${params.po} WHERE num = ${params.num}`)
				.then(data => {
					res.json({ success: true, msg: msg.success.updatedPo })
				}).catch(error => {
					res.json({ success: false, error: error })
				})

		} catch (error) {
			res.json({ success: false, error: error })
		}
	}
}

module.exports = soController