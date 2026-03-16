
export class Ordo {
    options: {};
    constructor(options = {}) {
        this.options = options
    }
    /**
     * Add a job to the Queue.
     * 
     * @param {JobData} data - An object containg job details. 
     */
    async add(data: JobData) {
        if (!data) return;
    }
}