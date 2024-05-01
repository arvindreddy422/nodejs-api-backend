const pool = require('../config/db')

module.exports = async (req, res) => {
  const id = req.params.id
  const query = `select * from books where id = '${id}'`
  const data = await pool.query(query)
  if (data.rows.length !== 0) {
    res.status(200).send(data.rows)
  } else {
    res.status(200).json({ message: 'No Book was found ' })
  }
}
