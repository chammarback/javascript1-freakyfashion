var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
   res.render("index", { title: "Freaky Fashion" });
});

router.get("/checkout", function (req, res, next) {
   res.render("checkout", { title: "Checkout" });
});

router.get("/product-details", function (req, res, next) {
   res.render("product-details", { title: "Prodouct-Details" });
});

router.get("/admin/products/index", function (req, res, next) {
   res.render("admin/products/index", { title: "Admin Index" });
});

router.get("/admin/products/new", function (req, res, next) {
   res.render("admin/products/new", { title: "New Product" });
});

module.exports = router;
