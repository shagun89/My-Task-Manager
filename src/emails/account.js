const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to : '238srishagun@gmail.com',
    from : '238srishagun@gmail.com',
    subject : 'This is my first creation',
    text : 'ahgyrbhfu'
})