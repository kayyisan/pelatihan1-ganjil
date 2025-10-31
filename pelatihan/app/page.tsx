
export default function Home() {
  return (
  // PERTEMUAN 1 ^^ 
  // <div>
  //     <h1>INI HEADER TERBESAR</h1>
  //     <p>Ini paragraf pertama di halaman utama.</p>
  //     <b>ini bold</b>
  //     <i>ini italic</i>
  //     <u>ini underline</u>
  //     <img alt="gambar" src={"/file.svg"} width={500} height={500}></img>
  //     <br /> 
  //     <button>ini button</button>
  //     <input></input>
  // </div>;
  
  //  <div className="bg-[red] p-4 text-[100px] font-[700] text-[yellow]">pelatihan ganjil</div>
    // <div className="bg-[blue] w-full h-screen"> //parent
    //   <div className="bg-[red] w-[300px] h-[400px]" /> //children
    //   <div className="bg-[green] w-[300px] aspect-[3/4]" />
    //   <div className="bg-[red] w-[300px] h-[400px]" />
    // </div>

    <div className="w-[100vw] h-[100vh] bg-[white] md:bg-[red] xl:bg-[blue]">
      <h1 className="text-[100px] md:hidden">SERU</h1>
    </div>
    // agar tampilan di tiap device beda, Cek ? pakai inspect ditarik tarik/extention mobile simulator
    //!PAKAI VW ATAU % (biar konsisten)

    /*
    x : kanan kiri
    r : kanan
    l : kiri 

    t : atas
    b : bawah
    y : atas bawah

    ! : important : memaksa classnya dia untuk dipakai

    hover (bisa berturut turut)) : memberi sedikit class berbeda ketika kena kursor
    bg-[red] hover:bg-[blue] hover:text-red =:ika di hover backgroundnya jadi biru
    biar smooth : pakai dutaration-100 (ex)
    []: untuk custom nilai di tailwind
    tanpa []: untuk nilai yang sudah ada di tailwind

    aspect-[3/4] : untuk mengatur rasio panjang dan lebar
    bg-gradient-to-r from-red-500 to-yellow-500 : untuk gradasi background dari merah ke kuning

    relative : penempatan teratur berdasarkan parent 
    absolute : penempatan bebas (bisa di awal, posisi ngaco, dkk) berdasarkan parent terdekat yang relative
    fixed : penempatan sesuai layar

    responsive css : menyesuaikan ukuran layar
    sm : small / hp
    md : medium / potrait tablet
    lg : large/ landscape tablet
    xl : extra large / laptop (tp laptop orang beda beda)
    2xl : double extra large / pc
    breakpoint:class

    satuan css
    px : pixel
    % : persentase
    vw : viewport width = 1vw : 1% dari lebar layar
    vh : viewport height
    s, ms, full 
    screen 
      - h-screen = 100vh
      - w-screen = 100vw
    pt : points (ukuran font yg biasa dipakai di ms word)
    svh, lvh, dvh ?????

    flexbox
    align-items (reserve itu buat kebalikan => kanan jadi kiri gitu)
    justify = sejajar dengan arah flow (penjelasan lengkap di link pertemuan 2)
    //hmz, nyontek aja ppt pertemuan 2 bagian akhir akhir

    COBA CTRL+ALT+ROW DOWN

    slicing gambar di figma
    => membagi gambar yang ada di figma menjadi beberapa bagian dan PROSES
    */
)
}
