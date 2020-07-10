export class MarsDataHandler {

    parsedData: any;
    sol_keys: any;
    compiledData: {}[] = [];

    public async getData() {
        await fetch('https://api.nasa.gov/insight_weather/?api_key=eOMf0tm4jfdxtQNzmZfrTn8aFKqMn1EewwZRNDVD&feedtype=json&ver=1.0')
            .then(response => response.json())
            .then(data => {
                this.setData(data);
            });
    }

    public setData(data: any) {
        this.parsedData = data;
        this.parseData();
    }

    public getCompiledData() {
        return this.compiledData;
    }

    public parseData() {
        let sol_keys: [] = this.parsedData.sol_keys;
        this.compiledData = [];
        for (let i = 0; i < this.parsedData.sol_keys.length; i++) {
            this.compiledData.push({
                sol: sol_keys[i],
                temp_avg: this.parsedData[sol_keys[i]].AT.av,
                temp_max: this.parsedData[sol_keys[i]].AT.mx,
                temp_min: this.parsedData[sol_keys[i]].AT.mn,
                wind_avg: this.parsedData[sol_keys[i]].HWS.av,
                wind_max: this.parsedData[sol_keys[i]].HWS.mx,
                wind_min: this.parsedData[sol_keys[i]].HWS.mn,
                pressure_avg: this.parsedData[sol_keys[i]].PRE.av,
                pressure_max: this.parsedData[sol_keys[i]].PRE.mx,
                pressure_min: this.parsedData[sol_keys[i]].PRE.mn
            });
        }
    }
}