console.log('java script hello')




        // const url='http://api.weatherstack.com/current?access_key=e8e0bae89a25745ca583653f521fd8c6&query=boston'

       
        // fetch(url).then((response)=>{
        //         response.json().then((data)=>{
        //                console.log(data)
        //         })

        // })



        const wetherform=document.querySelector('form')
        console.log(wetherform)
        wetherform.addEventListener('submit',(e) =>{

            e.preventDefault()

            const ptext1 = document.querySelector('#message-1')
            const ptext2 = document.querySelector('#message-2')
            ptext1.textContent='loading'

            const searchText=wetherform.querySelector('input').value
            const url='http://api.weatherstack.com/current?access_key=e8e0bae89a25745ca583653f521fd8c6&query=' + searchText

       
                fetch(url).then((response)=>{
                        ptext1.textContent=''

                
                        
                        response.json().then((data)=>{
                                console.log('datat is =' + data)
                            if(data.success===false)
                            {
                                    ptext2.textContent='error finding address s'
                                    return
                            }
                            ptext2.textContent='the temperature =' + data.current.temperature

                               console.log(data)
                        })

                })

        })



