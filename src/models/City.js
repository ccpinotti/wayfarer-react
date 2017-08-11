import $ from 'jquery-ajax'

class CityModel {


static all() {

  let request =  $.ajax({
  url: 'https://aqueous-badlands-79359.herokuapp.com/api/cities',
  method: 'GET'
})
return request;
}


}

export default CityModel
