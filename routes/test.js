const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "test de prueba",
  });
});

module.exports = router;
