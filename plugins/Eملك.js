let handler = async (_0x25cf77, {
  conn: _0x47052e,
  text: _0x39055c,
  command: _0x16bf36,
  usedPrefix: _0x22413d,
  args: _0x2ad611
}) => {
  if (!_0x39055c) {
    throw "*「✧|───✦❯┇👑┇❮✦───|✧」*\n*مرحبا بك في لعبة ملك أو كتابه*\n*خمن صح واكسب نقاط 🪙*\n• ↞جنيه ملك 🫅\n• ↞جنيه كتابه 🏷️\n> *「✧|───✦❯┇👑┇❮✦───|✧」*";
  }
  var _0x31bd8a = Math.random();
  if (_0x31bd8a < 0.34) {
    _0x31bd8a = "ملك";
  } else if (_0x31bd8a > 0.34) {
    _0x31bd8a = "كتابه";
  }
  if (_0x39055c == _0x31bd8a) {
    global.db.data.users[_0x25cf77.sender].exp += 0x1f4;
    _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت صح الله عليك🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ +500\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
  } else {
    if (_0x39055c == "ملك") {
      if (_0x31bd8a == "ملك") {
        global.db.data.users[_0x25cf77.sender].exp += 0x3e8;
        _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت صح الله عليك🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ +500\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
      } else {
        global.db.data.users[_0x25cf77.sender].exp -= 0x12c;
        _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت غلط حاول تاني🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ -300\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
      }
    } else {
      if (_0x39055c == "كتابه") {
        if (_0x31bd8a == 'كتابه') {
          global.db.data.users[_0x25cf77.sender].exp += 0x3e8;
          _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت صح الله عليك🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ +500\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
        } else {
          global.db.data.users[_0x25cf77.sender].exp -= 0x12c;
          _0x25cf77.reply("*⚡️┇خمنت غلط حاول تاني🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ -300\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
        }
      } else {
        if (_0x39055c == "ملك") {
          if (_0x31bd8a == 'ملك') {
            global.db.data.users[_0x25cf77.sender].exp += 0x3e8;
            _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت صح الله عليك🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ +500\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
          } else {
            global.db.data.users[_0x25cf77.sender].exp -= 0x12c;
            _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n⚡️*┇خمنت غلط حاول تاني🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ -300\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
          }
        } else {
          if (_0x39055c == "كتابه") {
            if (_0x31bd8a == "كتابه") {
              global.db.data.users[_0x25cf77.sender].exp += 0x3e8;
              _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت صح الله عليك🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ +500\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
            } else {
              global.db.data.users[_0x25cf77.sender].exp -= 0x12c;
              _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت غلط حاول تاني🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ -300\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
            }
          } else if (_0x39055c == 'ملك') {
            if (_0x31bd8a == "ملك") {
              global.db.data.users[_0x25cf77.sender].exp += 0x3e8;
              _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n*⚡️┇خمنت صح الله عليك🪙┇⚡️*\n\n˼‏❖˹┇⇠تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ +500\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
            } else {
              global.db.data.users[_0x25cf77.sender].exp -= 0x12c;
              _0x25cf77.reply("*「✧|───✦❯┇✦┇❮✦───|✧」*\n⚡️*┇خمنت غلط حاول تاني🪙┇⚡️*\n\n˼‏❖˹┇تخمينك:↞ " + _0x39055c + "\n˼‏❖˹┇⇠الجنيه:↞ " + _0x31bd8a + "\n˼‏❖˹┇⇠نقاطك💰:↞ -300\n> *「✧|───✦❯┇✦┇❮✦───|✧」*");
            }
          }
        }
      }
    }
  }
};
handler.help = ["جنيه"];
handler.tags = ["new2"];
handler.command = /^(جنيه|جنية)$/i;
export default handler;