const savingCtrl = {};

savingCtrl.showSavings = (req,res)=>{
    res.json({
        status:'Will show calculated savings'
    });
}

savingCtrl.calculateSavings = (req,res)=>{
    res.json({
        status:'Input savings data'
    });
}

module.exports = savingCtrl;