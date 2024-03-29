const { CityRepository } = require('../repository/index');


class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer createcity");
            throw { error}
        }
    }
    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer deletecity");
            throw { error}
            
        }
    }
    async updateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer updatecity");
            throw { error}
            
        }
    }
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer getcity");
            throw { error}
        }
    }
    async getAllCities(fliter){
        try {
            const cities = await this.cityRepository.getAllCities({name : fliter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer getallCities");
            throw { error}
            
        }
    }
}


module.exports = CityService;