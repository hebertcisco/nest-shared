export class ProcessMock {
    public env: { [k: string]: string };
    constructor() {
        this.env = {
            PORT: '3333',
            NODE_ENV: 'testing',
        };
    }
}
export default new ProcessMock();
