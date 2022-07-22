function allTimezone(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'world-time2.p.rapidapi.com',
            'X-RapidAPI-Key': '993d681e51mshf76c754719a6dacp1220f6jsn8a2d642d6aeb'
        }
    };
    
    fetch('https://world-time2.p.rapidapi.com/timezone', options)
        .then(response => response.json())
        .then(response => {
            
            for(i=0;i<response.length;i++){
                console.log(response[i]);
            }
        })
        .catch(err => console.error(err));
}