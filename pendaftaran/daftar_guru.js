function validation() {
	var nama = document.getElementById("nama").value;
	var pend = document.getElementById("pend").value;
	var kelas = document.getElementById("kelas").value;
	var telp = document.getElementById("telp").value;
	var email = document.getElementById("email").value;
	var pesan = document.getElementById("pesan").value;
	var error = document.getElementById("error");
	var text;
	
	error.style.padding = "10px";
	if(nama.length <5){
		text = "tolong cantumkan nama lengkap anda";
		error.innerHTML = text;
		return false;
	}

	if(isNaN(kelas) || kelas == ''){
		text = "tolong isi kolom kelas dengan benar";
		error.innerHTML = text;
		return false;
	}

	if(pend == ''){
		text = "tolong isi mata pelajaran yang diinginkan";
		error.innerHTML = text;
		return false;
	}

	if(isNaN(telp) || telp == ''){
		text = "tolong isi kolom telepon dengan benar";
		error.innerHTML = text;
		return false;
	}

	if(email.indexOf("@") == -1 || email == ''){
		text = "tolong cantumkan email dengan benar";
		error.innerHTML = text;
		return false;
	}

	if(pesan == ''){
		text = "tolong sertakan catatan";
		error.innerHTML = text;
		return false;
	}

	alert("data tersimpan, kami akan mengirim informasi lanjutannya melalui email anda!");
	nama = '';
	kelas = '';
	pend = '';
	telp = '';
	email = '';
	pesan = '';
}