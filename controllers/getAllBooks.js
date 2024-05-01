const pool = require('../config/db')

module.exports = async (req, res) => {
  const data = await pool.query('select * from books')
  res.status(200).json(data.rows)
}
