const fs = require("fs");
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("nama siswa : ", (nama) => {
  rl.question("nim : ", (nim) => {
    //kontainer sementara untuk file
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "mahasiswa.json"), "utf-8")
    );

    //data yang akan dimasukkan
    data.push({ nama, nim });

    //mengisi data ke dalam file mahasiswa.json
    fs.writeFileSync(
      path.join(__dirname, "data", "mahasiswa.json"),
      JSON.stringify(data)
    );

    rl.close();
  });
  rl.close;
});
