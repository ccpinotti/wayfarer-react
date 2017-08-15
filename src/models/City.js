import $ from "jquery-ajax";

class CityModel {
  static all() {
    let request = $.ajax({
      url: "https://aqueous-badlands-79359.herokuapp.com/api/cities",
      method: "GET"
    });
    return request;
  }
  static city() {
    let request = $.ajax({
      url:
        "https://aqueous-badlands-79359.herokuapp.com/api/cities/598dfa10547c7100076323ef",
      method: "GET"
    });
    return request;
  }
  static createPost(data) {
    let request = $.ajax({
      method: "POST",
      url:
        "https://aqueous-badlands-79359.herokuapp.com/api/cities/598dfa10547c7100076323ef/posts",
      data: data
    });
    return request;
    console.log("were logged!");
  }
  static updatePost(data) {
    let request = $.ajax({
      method: "PUT",
      url: `https://aqueous-badlands-79359.herokuapp.com/api/cities/598dfa10547c7100076323ef/posts/${data.uniqueID}`,
      data: data
    });
    console.log("Updated Post with data:", data);
    return request;
  }
}
export default CityModel;
