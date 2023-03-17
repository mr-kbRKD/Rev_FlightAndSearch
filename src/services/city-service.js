const { CityRepository } = require('../repository/index');


class CityService {
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer createcity");
            throw { error}
        }
    }
    async deleteCity(cityId){
        try {
            const response = this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer deletecity");
            throw { error}
            
        }
    }
    async updateCity(cityId, data){
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer updatecity");
            throw { error}
            
        }
    }
    async getCity(cityId){
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer getcity");
            throw { error}
        }
    }
}


module.exports = CityService;