const path=require('path')
const express =require('express')
const geocode = require('../utils/forecast.js')

const hbs=require('hbs')
const { Console } = require('console')

const app =express()
const port =process.env.PORT || 3000



console.log(path.join(__dirname,'../public'))
const publicDirectory = path.join(__dirname,'../public')
const viewesDirectory=path.join(__dirname,'/templates/viewes')
const partialsDirectory=path.join(__dirname,'/templates/partials')

app.set('view engine','hbs')
app.set('views',viewesDirectory)
hbs.registerPartials(partialsDirectory)
app.use(express.static(publicDirectory))

console.log('dsfsdafdf')
app.get('',(req,res) =>
{
    res.render('index',{title:'Wether' , name:'meirav' })

})

app.get('/about',(req,res) =>{

    res.render('about',{title:'About',name:'joe'})
})

app.get('/help',(req,res) => {
    res.render('help',{title:'Help',name:'yuval'})

})


app.get('/help/*',(req,res) => {
    res.render('404',{title:'there is no help here',name:'by meirav'})

})
app.get('/wether',(req,res) =>
    {
        
        if(req.query.address)
        {
            
            geocode(req.query.address, (error,response) =>{
                if(error)
                    return res.send({'error':'didnt find address'})
                   res.send({'forecast':response.temprature,'location' :req.query.address })

            })
            
          
        }
        else
             return res.send({'error':'must supply address'})
            
       
    }
)

app.get('*',(req,res) =>{
    res.render('404',{title:'cant find page',name:'by ofir'})

})
// app.get('',(req,res) =>
//     {
//         res.send('Hello Express!!!!!!!!!!!!!!')
//     }
// )

// app.get('/about',(req,res) =>
//     {
//         res.send('<h1>this is about page</h1>')
//     }
// )


app.listen(port,() => {
    console.log('app is runnig')

})
