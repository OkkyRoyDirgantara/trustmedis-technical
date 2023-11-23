interface Data {
    regType: string;
    currentDate: Date;
    seq: number;
}

function firstFormatData(data: Data): string {
    // Mendapatkan tahun dan bulan dari tanggal sekarang
    const year = data.currentDate.getFullYear().toString();
    const month = (data.currentDate.getMonth() + 1).toString();
    const formattedSeq = data.seq.toString().padStart(4, '0');
    const day = data.currentDate.getDate().toString().padStart(2, '0');

    // Menggabungkan hasil format
    const formattedData = `${formattedSeq}-${year}/${month}/${day}-${data.regType}`;

    return formattedData;
}

function secondFormatData(data: Data): string {
    const year = data.currentDate.getFullYear().toString().slice(-2);
    const month = (data.currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = data.currentDate.getDate().toString().padStart(2, '0');

    const seqString = data.seq.toString().padStart(4, '0');

    const formattedData = `${data.regType}/${year}${month}${day}/${seqString}`;

    return formattedData;
}


class TaskOne {
    firstTemplate(inputUser: Data) {
        const formattedResult = firstFormatData(inputUser);
        return formattedResult;
    }
    secondTemplate(inputUser: Data) {
        const formattedResult = secondFormatData(inputUser);
        return formattedResult;
    }
}

export default TaskOne;