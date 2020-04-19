module.exports = {
  sendMail: async (req, res, next) => {
    try {
      var api_key = process.env.APIKEY;
      var domain = process.env.MAILDOMAIN;
      var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

      var data = {
        from: "Bimlendu <bimlendu357@gmail.com>",
        to: "bimlendu357@gmail.com",
        subject: req.body.email.subject,
        text: req.body.email.message,
      };

      mailgun.messages().send(data, function (error, body) {
        if (error) {
          console.log(error);
          res.status(400).json({ msg: "error while sending mail" });
        }
        console.log(body);
        res.status(200).json({ email: body });
      });
    } catch (error) {
      next(error);
    }
  },
};
