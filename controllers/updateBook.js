const pool = require('../config/db')

module.exports = async (req, res) => {
  const id = req.params.id
  const { title, author, publish_date, language, pages, publisher } = req.body
  let cmd = `${title ? "title='" + title + "', " : ''}${
    author ? "author='" + author + "', " : ''
  }${publish_date ? "publication_date='" + publish_date + "', " : ''}${
    language ? "language='" + language + "', " : ''
  }${pages ? "pages='" + pages + "', " : ''}${
    publisher ? "publisher='" + publisher + "' " : ''
  }`
  if (cmd.length === 0) {
    res.status(200).json({ message: 'Provide Attributes' })
  }
  const query = 'update books set ' + cmd + " where id= '" + id + "';"
  console.log(query)
  try {
    const data = await pool.query(query)
    if (data.rowCount === 0) {
      res.status(400).json({ message: 'ID not found' })
    }
    res.status(200).json({ message: `Row updated with id: ${id}` })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
