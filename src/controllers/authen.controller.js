const { authenticationClient } = require("../middleware/SoapConnector");

let soapClient = "";

exports.authen = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      console.log("🐱 soapClient create :", { username, password });
      return res.status(400).send({ message: "กรุณากรอกข้อมูลให้ครบถ้วน" });
    }

    if (!soapClient) {
      console.log("🐱 soapClient create :", { username, password });
      soapClient = await authenticationClient();
    }

    // console.log('req.session.....', req.session)
    soapClient.validate_user(
      { a: username, b: password },
      async (errValidateUser, result) => {
        if (errValidateUser) {
          console.error(
            "😈 Error user login soap errValidateUser :",
            errValidateUser
          );
          return res.status(500).send({
            message: "เกิดข้อผิดพลาดไม่สามารถยืนยันตัวตนกับระบบกลางได้(2)",
          });
        }

        if (!result) {
          return res
            .status(422)
            .send({ message: "ไม่สามารถเข้าใช้งานได้ กรุณาลองอีกครั้ง" });
        }

        if (!result.status.$value) {
          return res
            .status(422)
            .send({ message: "รหัสประจำตัวหรือรหัสผ่านไม่ถูกต้อง" });
        }

        // // console.log("result.status.$value", result.status.$value)

        // const approverList = await getApproversHavingPendingTasks()
        // console.log(`scheduleJob approverList`, approverList);

        return res.send(username);
      }
    );
  } catch (error) {
    // console.error("catching.....", error);
    if (error) {
      console.error("========= Error login", error);
      return res.status(500).send({ message: " Internal Server Error" });
    }
  }
};
