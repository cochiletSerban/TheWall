const records = [
  'spotify:playlist:4QM31esUCyVCNkIIj52A0c', // ian slayer
  'spotify:album:1VAc77UvK5wj8ZSWCo3V2b', // g - easy - the beatutiful and dammed,
  'spotify:album:09Q3WwGYsQe5ognkvVkmCu', // g easy - when it’s dark out
  'spotify:album:7maywFP1bQZyit0l9l0VHb', // nightwish - decades
  'spotify:album:1tVEWlyn2nsAke3Lp7HoZ0', // nightwish -  Endless Forms Most Beautiful
  'spotify:album:2TIErYUfgCJuDpSqsp3wvm', // epica -  The Phantom Agony
  'spotify:album:0IUmtDZj4sNXkJzm8Pvske', // epica - Consign To Oblivion
  'spotify:album:55XMVRZIAYt0SzDbr2GmYg', // epica  -  Design Your Universe
  'spotify:album:6v1PVAPgppTzae7jCZPklp', // epica -Requiem For The Indifferen
  'spotify:album:67MVeoUEnpRmrkIaxCkoS3', // epica - The Holografic principle,
  'spotify:album:5BfyEp6GQAzUBozLtJdthU', // epica - 2017 - The Solace System
  'spotify:album:448wLlFJO42jAikj7C79vB', // within temptation - let us burn live
  'spotify:album:7Mqb9JDLwwr4kLuNXFnuJZ', // within temptation - the silent force
  'spotify:album:75bAr1OZeJ4OVX2v18CHeS', // lacuna coil - the 119 show,
  'spotify:album:78bpIziExqiI9qztvNFlQu', // artic monkyes  - am
  'spotify:album:1m48hdS1VeCbPI7rWlxPL1', // bon jovi - greatest heats
  'spotify:album:3Wl7Bde5TcxZX3ZJweBE9d', // dorothy 28 days in the valley,
  'spotify:album:5n3hrFblwbuQUzdkUxbqnh', // dubioza kolectiv - happy machine,
  'spotify:album:02w1xMzzdF2OJxTeh1basm', // evanescence - fallen
  'spotify:album:10aiDpdFGyfCFEcqpx6XTq', // santana - supernatural
  'spotify:album:3N4yLjjleaOxnrjDAwbS1p', // ipr - acustic live,
  'spotify:album:4YSBG3GFgm1UXZ6I5Uia8s', // coma - orizont
  'spotify:album:23Zzt38MKydLZ1yrjBe5yS', // alternosfera - flori din groapa marienelor
  'spotify:album:3tr9TKBRA3ZJKdm3DE82QF', // visatoru cu plumb in ochi
  'spotify:album:0SHpIbyBLUugMXsl3yNkUz', // mc - emotions
  'spotify:album:1ibYM4abQtSVQFQWvDSo4J', // mc - daydream
  'spotify:album:2NxnSpRW6vvDbCBoJkb5gC', // eric clapton - one more car one more rider
  'spotify:album:33dUoork6zlEyk8gLtCMkV', // sistem -sisTeMpo
  'spotify:album:0Uo3Vv7z4jnFoOkQgrM0k5', // nelly furtado the best of nelly furtado deluxe
  'spotify:album:1mOi6MmZAO0VTaIgTeMNOD', // enigma love sesuality devotion greatest hits
  'spotify:album:51KdKyc5zBF9x2ZBIeEEe7', // macanache  - interzis
  'spotify:album:5vY1MNFjiUXDgDL2ARRCOt', // subcarpati - piele de gaina
  'spotify:album:0v5BqH7RQlIuJIWfQCl1Bp', // disclosure - settle(special edition)
  'spotify:playlist:50xkdX7TndzkDDTCT2nlKT', // club 229 - back to school
  'spotify:album:5mAdQ0WLcOfjudclbFOiX2', // vremya i steklo - vislovo
  'spotify:album:2PSBOIRwY67GKL9kPbWvof', // vremya i steklo обратный отсчёт (the best)
  'spotify:playlist:3mIKzB4WiI0RPMwXjYFUea', // vicetone - remixes
  'spotify:playlist:6cAoQF852XypJEFUcbNbEW', // vicetone - vicetunes
  'spotify:playlist:19y0UVk0bcrJWEqMwBHosj', // liquicity - liquicity drum & bass
  'spotify:album:0qeuXe8csIcNboMT3Q0dmD', // veela icy love
  'spotify:playlist:5hHLFIci647cgwwNfpykgQ', // veela OG veela songs
  'spotify:album:1gLPm1bWZFHv6ORBbEmQPM', // adventure club - calling all heroes
  'spotify:album:45hTiiH7JpJx1P5TN6iDDG', // adventure club - red/ blue
  'spotify:album:7eu4Uyj5s88ge7bE56gFbw', // grabbitz friends ep
  'spotify:playlist:3CB2dm9qclLc3h6cYuJSLw', // illenium best of illenium
  'spotify:album:4LJREuUF35TAABilBY1GDe', // k theory - #kristmas 2014,
  'spotify:album:6KYYbd0nSJZMF48Rj13cIr', // lindsey stirling - lindsey stirling
  'spotify:album:6GazPcWYAUnvB83tXIbs97', // nero - welcome reality
  'spotify:album:6JK4re0Squ6HvGMuQHDiIn', // globus - break from this world
  'spotify:playlist:3LQWZ4GvFMwxvsx052hVXv', // subsoul - playlist
  'spotify:album:7ag0Nx09xAPMFk0oRNKaRQ', // gramatik - epigram
  'spotify:playlist:3uQzurzlLqPgCxCA7M2JMd', // elephante - elephante remixes
  'spotify:playlist:0NCspsyf0OS4BsPgGhkQXM', // trap nation - trap nation
  'spotify:album:7IbLwLHsoHXvw3sgpXoZls', // morgan james - ourvinyl sessions
  'spotify:album:5NSd2ZLmympzUNTUxjSqJw', // morgan james - morgan james live
  'spotify:album:1ELEhdPXAK8v07n8G20Lp4', // morgan james - hunter
  'spotify:playlist:7csrlizJurpn6y0xenTwzu', // post modern jukebox - post modern jukebox
  'spotify:album:2ODvWsOgouMbaA5xf0RkJe', // the weekend - starboy
  'spotify:album:76Vzi0jSLVMz24g2dRvnzF', // gary moore - blues and beyond
  'spotify:album:7b0Ysbudh2BH9A853EfxEu', // bb king - riding with the king
  'spotify:album:1OZaosC2RtsE2TEqLziwAD', // metalica - s&m
  'spotify:album:4BxB8U8QgpR4UCvJ0moj8Z', // timbaland - shock value
  'spotify:album:5FK6borHO8QcztXhXCPn5H' // timbaland - sock value II
]

module.exports = {
  records
}
