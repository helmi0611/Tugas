const data = {
    nama: "Helmi Tris Edyan",
    nim: "02042111017",
    email: "andrilukaw009@gmail.com"
};

const {nama, nim, email} = data;

console.log("Nama : ", nama);
console.log("NIM : ", nim);
console.log("Email : ", email);

const teman1 = ["Dede","Adam"];
const teman2 = ["Azriel","Pazarudin"];
const teman3 = ["Achmad","Fauzi"];

const gabungan =[...teman1,...teman2,...teman3];
console.log("Gabungan: ", gabungan);