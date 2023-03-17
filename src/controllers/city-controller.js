const { CityService } = require('../services/index');

const cityService = new CityService();

// controller fn, before it middleware see in docs
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err:{}
        });
    } catch (error) {
        console.log("error in createcity");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err : error
        });
    }
}
const destroy = async (req, res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        });
    } catch (error) {
        console.log("error in deletecity");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            err : error
        });
    }
}
const get = async (req, res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched a city",
            err:{}
        });
    } catch (error) {
        console.log("error in getcity");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch a city",
            err : error
        });
    }
    
}
const update = async (req, res)=>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated a city",
            err:{}
        });
    } catch (error) {
        console.log("error in updatecity");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update a city",
            err : error
        });
    }
    
}

module.exports = {
    create, 
    destroy,
    get,
    update
}