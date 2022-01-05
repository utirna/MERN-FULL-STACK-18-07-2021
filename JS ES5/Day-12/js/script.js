var btn = id("btn");

onEvent(btn, "click", function () {
  id("text").classList.add("changeText");
});

onEvent(id("btn-remove"), "click", function () {
  id("text").classList.remove("changeText");
});

onEvent(id("text"), "click", function (_this) {
  _this.classList.add("set-blink");
  console.log("click");
});
