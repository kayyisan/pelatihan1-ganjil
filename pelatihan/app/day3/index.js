//output sebuah nilai ke console
console.log(123)
console.log("tes")
console.log(`tes`)
console.log("tes", 1, 10.1)

//tipe nilai
console.log(1,2,3) //number
console.log("tes") //string
console.log(true) //boolean
console.log(null) //null
console.log(undefined) //undefined

//tipe data
let A = 12 //let=definisi variabel
const B = "L" //nilai ga bisa diubah
var C = true //var=mirip let (lama) 

//operasi matematika (+ - * / % **)
// pada string (+) buat gabung string

//operasi boolean (=== sama dengan, !== ngga sama dengan, && and, || or)

//array
const arr = [1,2,3,"tes", true]
//arr[5] => ngga ada isinya (undefined)
console.log(arr) //output 1 array
console.log(arr.length) //4 

//JSON (java script object notation)
const iniJson = {
    nama: "tes",
    umur: 20,
    hobi: ["makan","tidur","ngoding"],
    alamat: {
        jalan: "jalan tes",
        Kota : "jakarta",
        negara : "Indonesia",
    },
};

console.log(iniJson.nama)
console.log(iniJson.hobi[1])
console.log(iniJson.alamat.Kota)    
console.log(iniJson["umur"])
console.log(iniJson["alamat"]["negara"])
console.log(iniJson) //{bla: ... , bla dst..}

//copy array
let arr1 = [1,2,3]
let arr2 = arr1 //ini kalau arr2 diubah nilainya arr1 juga ikut berubah
let arr3 = [...arr1] //ini cara copy array yang benar

//copy JSON
let json1 = {
    nama: "tes", 
    umur:20,
}
let json2 = {...json1} //ini cara copy JSON yang benar
let json3 = {...json1, nama:"tes2"} //copy JSON dan ubah nilai nama

//destructuring variable 
let {nama, umur, eaaa} = json1 //ambil nilai dari json1 ke variabel nama, umur, eaaa (eaaa ngga ada isinya)
console.log(nama, umur, eaaa) //OUTPUT : {tes 20 undefined}

//function
function namafungsi(aparameter1, parameter2){
    //kode fungsi
    return aparameter1 + parameter2
}

//kasus penggunaan function
const kursi = (jumlahKursi = 5) => {
    return `Jumlah kursi adalah ${jumlahKursi}`
}
console.log(kursi(10)) //OUTPUT : Jumlah kursi adalah 10
console.log(kursi()) //OUTPUT : Jumlah kursi adalah 5




export default function page(){
    const a = 10;
    const b = 20;
    return <div>{fungsi(fungsi (A, 9))}</div>   
}