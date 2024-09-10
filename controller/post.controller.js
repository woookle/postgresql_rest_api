const db = require("../db");

class postController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
      "insert into post (title, content, fk_id_user) values ($1, $2, $3) returning *",
      [title, content, userId]
    );
    res.json(newPost.rows[0]);
  }
  async getPost(req, res) {
    const id = req.query.id;
    const posts = await db.query("select * from post where fk_id_user = $1", [id]);
    res.json(posts.rows);
  }
}

module.exports = new postController();