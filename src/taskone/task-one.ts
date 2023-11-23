interface Data {
    regType: string;
    currentDate: Date;
    seq: number;
}

function formatData(data: Data): string {
    // Mendapatkan tahun dan bulan dari tanggal sekarang
    const year = data.currentDate.getFullYear().toString();
    const month = (data.currentDate.getMonth() + 1).toString();
    const formattedSeq = data.seq.toString().padStart(4, '0');

    // Menggabungkan hasil format
    const formattedData = `${formattedSeq}-${year}/${month}/${data.regType}`;

    return formattedData;
}


function taskOne(inputUser: Data){
    const formattedResult = formatData(inputUser);
    return formattedResult;
}

export default taskOne;