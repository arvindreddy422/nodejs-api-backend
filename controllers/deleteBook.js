const pool = require('../config/db')

module.exports = async (req, res) => {
  const id = req.params.id

  try {
    const query = `delete from books where id = '${id}';`
    const data = await pool.query(query)
    if (data.rowCount > 0) {
      res.status(200).json({ id, message: 'Book is deleted' })
    } else {
      res.status(400).json({ message: `No book found with that id: ${id}` })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
