auto ("fast");
while(true){
  id("word_list").findOne().scrollForward();
  sleep(1000)
  id("right2_button").findOne().click();
  id("right2_button").findOne().click();
  var a=id("iv_add_new_word").selected(false);
  a.untilFind().click();
}
