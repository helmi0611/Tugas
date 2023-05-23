const hBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hJinak = ["Kucing", "Kelinci", "Ayam"];

const gabung = () => {
    return [...hBuas,...hJinak];
};

const makan = () => {
    let Ikan, Wortel, Beras;
    [Ikan,Wortel,Beras] = hJinak;
    console.log("Ikan : "+Ikan);
    console.log("Wortel : "+Wortel);
    console.log("Beras : "+Beras);
}
makan();

const show = new Promise((cetak) =>{
    setTimeout(()=>{
    cetak(gabung());
    },5000);
});
