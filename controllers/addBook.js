const pool = require('../config/db')
const uniqid = require('uniqid')
module.exports = async (req, res) => {
  const {  title, author, publish_date, language, pages, publisher } =
    req.body

  const id = uniqid()
  const query = `INSERT INTO books 
(id, title, author, publication_date, language, pages, publisher) 
VALUES
('${id}','${title}', '${author}', '${publish_date}',  '${language}', ${pages}, '${publisher}'); `
  try {
    const data = await pool.query(query)
    res.status(200).send({ id })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
