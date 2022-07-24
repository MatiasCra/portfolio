export default async function handle(req, res) {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const body = JSON.parse(req.body)
  const msg = {
    to: 'cravchikm@gmail.com',
    from: 'cravchikm@gmail.com',
    subject: body.subject,
    text: `Message from ${body.name} on portfolio\n${body.message}`,
    html: `Message from ${body.name} on portfolio<br/>${body.message}`,
  }
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      res.status(200).json({ status: 'Ok' })
    })
    .catch((error) => {
      console.error(JSON.stringify(error, 2))
      res.status(500).json({ status: 'Error' })
    })
}
