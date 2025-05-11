import QRCode from 'qrcode';

const options = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  color: {
    dark: "#0f0f0f",
    light:"#d60404"
  }
}

const content = 'This is a test!'

QRCode.toString(content, options, (err, url) => {
    console.log(url);
})
QRCode.toFile('./url.jpeg', content , options, (err)=>{if(err){throw err}});