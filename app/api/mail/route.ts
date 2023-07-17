
export async function POST(req: Request){

    const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    
    const msg = {
      to: 'aakash19here@gmail.com', // Change to your recipient
      from: 'aakash19here@gmail.com', // Change to your sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error : any) => {
        console.error(error)
      });

}