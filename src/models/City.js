import $ from 'jquery-ajax'

class CityModel {
  static all() {
    let request = $.ajax({
      url: 'https://aqueous-badlands-79359.herokuapp.com/api/cities',
      method: 'GET'
    })
    return request;
  }
  static city() {
    let request = $.ajax({
      url: 'https://aqueous-badlands-79359.herokuapp.com/api/cities/598dfa10547c7100076323ef',
      method: 'GET'
    })
    return request;
  }
}

export default CityModel
