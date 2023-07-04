const express = require('express');
const app = express();
const referralController = require('./controllers/referralController');
const {connect}=require('./db')
app.use(express.json());

// Routes
connect();
app.post('/createReferral', referralController.createReferral);
app.get('/checkReferralCode', referralController.checkReferralCode);
app.post('/loginReferral', referralController.loginReferral);
app.post('/checkEmail', referralController.checkEmail);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
