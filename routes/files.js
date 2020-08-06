const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/data/", async (req, res) => {
  try {
    const n = parseInt(req.query.n, 10);
    console.log(n);

    const response = await axios.get("https://terriblytinytales.com/test.txt");
    const text_res = response.data;
    var array = text_res.toString().split("\n");

    var freq = {};

    for (i in array) {
      var remove_delimitor = array[i].replace(/[^0-9a-z]/gi, " ");
      space_seperated = remove_delimitor.split(" ");
      for (ind in space_seperated) {
        var word = space_seperated[ind];
        if (word != "") {
          num = parseInt(word);

          if (Number.isInteger(num)) continue;
          word = word.toLowerCase();
          //exist
          if (freq[word]) {
            freq[word] = freq[word] + 1;
          } else {
            freq[word] = 1;
          }
        }
      }
    }
    var freq_sorted = Object.entries(freq).sort(function (a, b) {
      return b[1] - a[1];
    });

    freq_json = [];

    for (i = 0; i < n; i++) {
      freq_json.push({ word: freq_sorted[i][0], count: freq_sorted[i][1] });
    }

    console.log(freq_json);
    res.json({ data: freq_json, success: true });
  } catch (error) {
    console.log("error ", error);
    res.json({ success: false, message: "internal server error" });
  }
});
module.exports = router;
