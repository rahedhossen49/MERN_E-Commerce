const {CreateInvoiceService, PaymentSuccessService, PaymentFailService, PaymentCancelService, PaymentIPNService,
    InvoiceListService, InvoiceProductListService
} = require("../services/InvoiceServices");


exports.CreateInvoice=async(req,res)=>{
    let result=await CreateInvoiceService(req);
    return res.status(200).json(result)
}


exports.PaymentSuccess=async (req, res) => {
    await PaymentSuccessService(req);
    return res.redirect("/invoices")
}

exports.PaymentFail=async (req, res) => {
    await PaymentFailService(req);
    return res.redirect("/invoices")
}


exports.PaymentCancel=async (req, res) => {
    await PaymentCancelService(req);
    return res.redirect("/invoices")
}


exports.PaymentIPN=async (req, res) => {
    let result=await PaymentIPNService(req);
    return res.status(200).json(result)
}



exports.InvoiceList=async (req, res) => {
    let result=await InvoiceListService(req);
    return res.status(200).json(result)
}

exports.InvoiceProductList=async (req, res) => {
    let result=await InvoiceProductListService(req);
    return res.status(200).json(result)
}
