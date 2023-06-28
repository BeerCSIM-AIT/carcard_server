const axios = require("axios");

const _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2U5NmRhZmIyMzk4ZDFjZDdkNjM2MTQ1YmZiYTEzNDcxOWUxYjIyZjcyNWRkMjcyNTM3NjZkMWIzZmE3NGUzY2E3ZGFkMGZiMWU3MDJiMTAiLCJpYXQiOjE2NTQ3NDU5NTMsIm5iZiI6MTY1NDc0NTk1MywiZXhwIjoxNjg2MjgxOTUzLCJzdWIiOiIxMDkiLCJzY29wZXMiOltdfQ.2u0gooC7vphp6Oe06uAqFbEoay2XSgpIgAugdn8OMeHlayp7hZW4R0A066jZtC7eyaAc0EW_UndQo_kULuK8yfprj7m-rRCTwwQ7WvC0skvbiKSxKjaEUK75rq-wZPG6JtN1TVPqrUZYUdWyXVK6xcF3puw1HforTxFF-F9rBPwu5seXSEYu4N29R6VEjjFCequCeNef_iFewDBnQN6LaEmsWf3tqwgBXFfjFyW88uymvLYK5skg-0nB9SMjzdQ8NxISrHhgoy5JmoTTGwHkLDr6ONcE7iFf7OfGACUAJwz1mTEsm0aSBWEwAr3BPCWAsGaX3vl7rd_mQam5Or2N5cfQrX1YyD3LyskpdIIKCsgq3wLZL89Hyc6SvE4i9lFQhw0flB0yY5KACp9IYA4qSLz3MD9OQIfaxjFCIjaq5CVW0LwiNF-ZGE1SlR7KTkzZ97zVQ9-CdB9TSUgKdmqzWNCgQBvuWagoaqhh6Tvx37Yl5STTfIEdpS6fqrSQIK5uGS5GzomkdoqEJLAdAlh12urJwvJlR_LAggqsLDE2khhCwwI_Ch6cAmyhLw6y84PvErqopSjhtCHtMtyg3wZTOoVrL93YuQ2istxErp1rGt0EQqwSEQtUEwXlaelhbtPZfynZMsgLxAdVF8OjnTje-ArOmH89DvP5q5NrIelUN7E";

exports.getEmpData = async (req, res) => {
  let empId = req.params.emp_id;
  let empParam = "work_locations,positions"
  let url = `https://hrapi.egat.co.th/api/v1/persons?filter[PersonCode]=00${empId}&include=${empParam}`;
  console.log(url)
  const header = {
    headers: {
      Authorization: "Bearer " + _token, //the token is a variable which holds the token
    },
  };
  let result='';
  let message='';
  let status_code='';

  await axios.get(url, header)
  .then(
    (response) => {
        // console.log(response.data)
        message = 'เข้าสู่ระบบ',
        status_code = 200,
        result = response.data
    }
  ).catch((e)=>console.log(e))
 
  if (!result.data){
    message = 'ข้อมูลของท่านไม่ถูกต้อง',
    status_code = 422,
    result = ""
  }
  res.send({
    message,
    status_code,
    data: { result }
  })
};
