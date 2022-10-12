const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
const data_hide = document.querySelector('.middle_layer')
 
const getInfo = async(event) =>{
    event.preventDefault()
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerHTML=`Search field cannot be empty! Enter some data`
        data_hide.classList.add('data_hide')
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=034683704c54f55e0128e5aaed43b54d`
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data]
            temp.innerHTML=arrData[0].main.temp
            // temp_status.innerHTML = arrData[0].weather[0].main
            const tempMood = arrData[0].weather[0].main

            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`

            if(tempMood==="Clear"){
                temp_status.innerHTML="<i class=' fa fa-sun' style='color:#eccc68'></i>"
            }else if(tempMood==="Clouds"){
                temp_status.innerHTML="<i class=' fa fa-cloud' style='color:#f1f2f6'></i>"
            }else if(tempMood==="Rain"){
                temp_status.innerHTML="<i class=' fa fa-cloud-rain' style='color:#a4b0be'></i>"
                
            }else{
                temp_status.innerHTML="<i class=' fa fa-sun' style='color:#f1f2f6'></i>"

            }
        data_hide.classList.remove('data_hide')

        }
        catch{
            city_name.innerHTML=`Enter city name properly`
            data_hide.classList.add('data_hide')

        }
        
    }
}

submitBtn.addEventListener('click' , getInfo);

