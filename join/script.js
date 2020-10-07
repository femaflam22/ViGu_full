let tombol = document.querySelector('#buttonSubmit');
let nama = document.querySelector('#nama');
let telp = document.querySelector('#telp');
let email = document.querySelector('#email');
let sekolah = document.querySelector('#sekolah');
let pesan = document.querySelector('#pesan');

	const validate = () => {
		if(nama.value != '' && telp.value != '' && email.value != '' && sekolah.value != '' && pesan.value != ''){
			alert('Terima kasih, kami akan segera merespon pesan anda lewat email!');
			const clear = () => {
				nama.value = '';
				telp.value = '';
				email.value = '';
				sekolah.value = '';
				pesan.value = '';
			}
		}
		else {
			alert('data tidak boleh ada yang kosong, silahkan dilengkapi');
		}

    }
    

