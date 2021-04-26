exports.wait = () => {
	return`*「 WAIT 」 SEDANG DIPROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*Daftar Dengan Format ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar FDL|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*Kamu Telah Terdaftar Kak*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「 GROUP ONLY 」*`
}

exports.ownerb = () => {
	return`*「 OWNER BOT ONLY 」*`
}

exports.ownerg = () => {
	return`*「 OWNER GROUP ONLY 」*`
}

exports.admin = () => {
	return`*「 ADMIN GROUP ONLY 」*`
}

exports.badmin = () => {
	return`*「 BOT HARUS JADI ADMIN 」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner, Laporan palsu atau main main tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA USER BOT 」*\n\nkamu sudah terdaftar dengan data \n\n➢ Nama : ${namaUser}\n➢  Nomor : wa.me/${sender.split("@")[0]}\n➢ Umur : ${umurUser}\n➢ Waktu : ${time}\n\n*Serial*\n➢ ${serialUser}`
}

exports.cmdnf = (prefix, command) => {
	return`Maaf Command *${prefix}${command}* Tidak Di Temukan Di Dalam *${prefix}menu!*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script awokawokaowk*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*➢ Level Mu : ${getLevelingLevel(sender)}*\n*➢ Jenis Command : ${command}*\n*➢ Syarat Level : ${aha}*`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*➢ Level Mu : ${getLevelingLevel(sender)}*\n*➢ Jenis Command : ${command}*\n*➢ Syarat Level : ${ahb}*`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*➢ Level Mu : ${getLevelingLevel(sender)}*\n*➢ Jenis Command : ${command}*\n*➢ Syarat Level : ${ahc}*`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*➢ Level Mu : ${getLevelingLevel(sender)}*\n*➢ Jenis Command : ${command}*\n*➢ Syarat Level : ${ahd}*`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*➢ Level Mu : ${getLevelingLevel(sender)}*\n*➢ Jenis Command : ${command}*\n*➢ Syarat Level : ${ahe}*`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*➢ Level Mu : ${getLevelingLevel(sender)}*\n*➢ Jenis Command : ${command}*\n*➢ Syarat Level : ${ahf}*`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*

┌❏ *Nama*
└➢ ${pushname}

┌❏ *Nomor*
└➢ ${sender.split("@")[0]}

┌❏ *Xp*
└➢ ${getLevelingXp(sender)}

┌❏ *Pangkat*
└➢ ${role}

┌❏ *Level*
└➢ ${getLevel} ➢ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} Limit Kamu Hari Ini Telah Habis*\n*Hubungi kami* : wa.me/628990542731`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Limit Anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
