interface IDataTemplate {
    regType: string;
    currentDate: Date;
    seq: number;
}

/**
     * 
     * @param template 
     * example template
     * 
     * {SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}
     * 
     * {REG_TYPE}/{YY}{MM}{DD}/{SEQ}
     * ```typescript
     * const data = {
     *      regType: 'RI',
     *      date: new Date,
     *      seq: 1
     * }
     * const firstTemplate = new TaskOne("{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}");
     * firstTemplate.template = firstTemplate.generateTemplate(data);
     * ```
     * 
     * @returns
     * example output
     * 
     * 0001-2021/09/01-RI
     * 
     * RI/210901/0001
     * @description
     * SEQ = Sequence
     * 
     * YYYY = Year
     * 
     * YY = Short Year
     * 
     * MM = Month
     * 
     * DD = Day
     * 
     * REG_TYPE = Registration Type
     */
class TaskOne {
    private template: string;
    constructor(template: string) {
        this.template = template;
    }
    
    generateTemplate(inputUser: IDataTemplate): String {
        if (!this.template) {
            throw new Error('Template is not set');
        }

        return this.formatData(inputUser);
    }

    private formatData(data: IDataTemplate): String {
        // Mendapatkan tahun dan bulan dari tanggal sekarang
        const YYYY = data.currentDate.getFullYear().toString().padStart(4, '0');
        const YY = YYYY.slice(-2).padStart(2, '0');
        const MM = (data.currentDate.getMonth() + 1).toString().padStart(2, '0');
        const SEQ = data.seq.toString().padStart(4, '0');
        const DD = data.currentDate.getDate().toString().padStart(2, '0');
    
        // Menggabungkan hasil format
        const formattedData = this.template
        .replace('{YYYY}', YYYY)
        .replace('{YY}', YY)
        .replace('{MM}', MM)
        .replace('{DD}', DD)
        .replace('{SEQ}', SEQ)
        .replace('{REG_TYPE}', data.regType)
        ;
    
        return formattedData;
    }
}

export default TaskOne;