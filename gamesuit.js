//game suit 
var tanya =  true;
while ( tanya ) {
    //pilihan pemain
    var player = prompt('pilih : gajah, semut, orang')
    //menangkap pilihan komputer
    //membangkitkan bilangan random
    var computer = Math.random();

    if ( computer < 0.34){
        computer = 'gajah';
    }else if ( computer >= 0.34 && computer < 0.67){
        computer = 'orang';
    }else{
        computer = 'semut';
    }
    var hasil ='';
    //menentukan rules
    if (player == computer){
        alert('SERI!');
    }else if (player == 'gajah'){
        // if(computer == 'orang'){
        //     hasil = 'Menang';
        // }else {
        //     hasil = 'KALAH';
        // }
        hasil = (computer == 'orang') ? 'MENANG!' : 'KALAH';
    }else if (player == 'orang'){
        hasil = (computer == 'gajah') ? 'KALAH!' : 'MENANG';
    }else if (player == 'semut'){
        hasil = (computer == 'orang') ? 'KALAH!' : 'MENANG';
    }else{
        hasil = 'Memasukkan pilihan yang salah';
    }
    //menampilkan hasil
    alert('Kamu memilih : ' +player+ ' dan Komputer memilih : ' +computer+ 
        '\nMaka hasilnya : Kamu ' +hasil);

    tanya = confirm('Main Lagi ?');
}

alert('Terima Kasih !!');
