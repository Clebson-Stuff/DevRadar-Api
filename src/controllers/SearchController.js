const Dev = require('../models/Dev.js');
const parseStringAsArray = require('../utils/parseStringAsArray.js');


module.exports ={
    async index(request, response){
        const { longitude, latitude, techs } = request.query;
        const techsArr = parseStringAsArray(techs);
        console.log(techsArr);
        const devs = await Dev.find({
            techs: {
                $in: techsArr
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, 
                }
            }
        });
        return response.json({devs: devs});
    },
}