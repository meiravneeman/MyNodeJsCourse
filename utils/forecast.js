const request = require('request')



const geocode1 = (address,callback) =>
{
        const url='http://api.weatherstack.com/current?access_key=e8e0bae89a25745ca583653f521fd8c6&query='+address

        request({url:url,json:true},(error,response) => {
                if(error)
                    callback('there has been an error',undefined)
                else if(response.body.success===false)
                         callback('there has been an error 2',undefined)
                else
                    callback(undefined,{temprature: response.body.current.temperature})

        })

}


const geocode = (address,callback) =>
{
        const url='http://api.weatherstack.com/current?access_key=e8e0bae89a25745ca583653f521fd8c6&query='+address

        

        request({url,json:true},(error,response) => {

                const {temperature}=response.body.current
                const {success} =response.body
                if(error)
                    callback('there has been an error',undefined)
                else if(success===false)
                         callback('there has been an error 2',undefined)
                else
                 {
                    callback(undefined,{temprature: temperature})

                 }   

        })

}




module.exports=geocode