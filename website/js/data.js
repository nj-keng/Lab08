// Note: This is my character selection category variable containing all the cateogries that we are putting characters in.
let quickAgilityChars = "<ul>" +
"<li><div class='div_char'><img src='../img/fox.png' alt='test_image' class='img_char'><p class='name_char'>Fox</p></div></li>" +
"<li><div class='div_char'><img src='../img/sheik.png' alt='test_image' class='img_char'><p class='name_char'>Shiek</p></div></li>" +
"<li><div class='div_char'><img src='../img/pikachu.png' alt='test_image' class='img_char'><p class='name_char'>Pikachu</p></div></li>" +
"<li><div class='div_char'><img src='../img/captainfalcon.png' alt='test_image' class='img_char'><p class='name_char'>Captain Falcon</p></div></li>" +
"<li><div class='div_char'><img src='../img/pichu.png' alt='test_image' class='img_char'><p class='name_char'>Pichu</p></div></li>" +
"</ul>";

let powerChars =
  "<ul>" +

  "<li><div class='div_char'><img src='../img/bowser.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Bowser</p></div></li>" +

  "<li><div class='div_char'><img src='../img/dk.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Donkey Kong</p></div></li>" +

  "<li><div class='div_char'><img src='../img/ganondorf.png' alt='test_image' class='img_char'>" + "<p class='name_char'>Ganondorf</p></div></li>" +

  "<li><div class='div_char'><img src='../img/roy.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Roy</p></div></li>" +

  "<li><div class='div_char'><img src='../img/drmario.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Dr.Mario</p></div></li>" +

  "<li><div class='div_char'><img src='../img/samus.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Samus</p></div></li>" +

  "</ul>";

let controlChars =
  "<ul>" +

  "<li><div class='div_char'><img src='../img/samus.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Samus</p></div></li>" +

  "<li><div class='div_char'><img src='../img/zelda.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Zelda</p></div></li>" +

  "<li><div class='div_char'><img src='../img/pikachu.png' alt='test_image' class='img_char'>" + "<p class='name_char'>Pikachu</p></div></li>" +

  "<li><div class='div_char'><img src='../img/pichu.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Pichu</p></div></li>" +

  "<li><div class='div_char'><img src='../img/peach.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Peach</p></div></li>" +

  "<li><div class='div_char'><img src='../img/link.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Link</p></div></li>" +

  "<li><div class='div_char'><img src='../img/younglink.png' alt='test_image' class='img_char'>" + "<p class='name_char'>Young Link</p></div></li>" +

  "<li><div class='div_char'><img src='../img/ness.png' alt='test_image' class='img_char'>" +
  "<p class='name_char'>Ness</p></div></li>" +

  "</ul>";

let relentlessOffenseChars = ["Mario", "Marth", "Fox", "Luigi", "Yoshi", "Falco", "Ice Climbers", "Dr.Mario", "Sheik"]

<<<<<<< HEAD
let recoveryCharacters = ["Jigglypuff", "Kirby", "Mewtwo", "Ice Climbers", "Pikachu", "Pichu", "Yoshi", "Peach", "Zelda"]
    
let beginnerFriendlyChars = ["Mario", "Link", "Kirby", "Pikachu", "Donkey Kong", "Yoshi", "Jigglypuff"]

let recoveryCharacters = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

let beginnerFriendlyChars = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]


module.exports = {
  // HTML
  getQuickAgilityChars: function() {
    console.log("called: getQuickAgilityChars");
    return quickAgilityChars;
  },

  getPowerChars: function() {
    console.log("called: getPowerChars");
    return powerChars;
  },

  getControlChars: function() {
    console.log("called: getControlChars");
    return controlChars;
  },

  // JSON
  getRelentlessOffenseChars: function() {
    console.log("called: getRelentlessOffenseChars");
    return relentlessOffenseChars;
  },

  getRecoveryChars: function() {
    console.log("called: getRecoveryChars");
    return recoveryCharacters;
  },

  getBeginnerFriendlyChars: function() {
    console.log("called: getBeginnerFriendlyChars");
    return beginnerFriendlyChars;
  }
};
