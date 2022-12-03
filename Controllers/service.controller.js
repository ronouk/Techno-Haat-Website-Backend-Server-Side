//operation = CRU
const {
  createServicesContentInfoSchema,
  getServicesContentInfoSchema,
  updateServicesContentInfoSchema,
  createServiceListInfoSchema,
  getServiceListInfoSchema,
  updateServiceListInfoSchema,
  getUniqueServiceInfoSchema,
  updateUniqueServiceInfoSchema,
} = require("../Services/service.service");

//-----------------project Content---------------------------
exports.createServicesContent = async (req, res, next) => {
  try {
    const result = await createServicesContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Services Content Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Services Content data couldn't insert an error occurred",
      error: error.message,
    });
  }
};
exports.getServicesContent = async (req, res, next) => {
  try {
    const result = await getServicesContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Services Content Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Services Content data get error",
      error: error.message,
    });
  }
};
exports.updateServicesContent = async (req, res, next) => {
  try {
    const result = await updateServicesContentInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Services Content Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Services Content couldn't update an error occurred",
      error: error.message,
    });
  }
};

//----------------------project List---------------------------

exports.createServicesList = async (req, res, next) => {
  try {
    const result = await createServiceListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Services List Data inserted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Services List data couldn't insert an error occurred",
      error: error.message,
    });
  }
};
exports.getServicesList = async (req, res, next) => {
  try {
    const result = await getServiceListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Services List Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Services List Data an error occurred",
      error: error.message,
    });
  }
};
exports.updateServicesList = async (req, res, next) => {
  //servicelist update is not working properly have to work with body
  try {
    const result = await updateServiceListInfoSchema(req.body);

    res.status(200).json({
      status: "success",
      message: "Services List Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Services List couldn't update an error occurred",
      error: error.message,
    });
  }
};

//unique project from list
exports.getUniqueService = async (req, res, next) => {
  const serviceId = req.params.id;
  try {
    const result = await getUniqueServiceInfoSchema(serviceId);

    res.status(200).json({
      status: "success",
      message: "Service Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Services Data an error occurred",
      error: error.message,
    });
  }
};
exports.updateUniqueService = async (req, res, next) => {
  const serviceId = req.params.id;
  const updatedData = req.body;
  try {
    const result = await updateUniqueServiceInfoSchema(serviceId, updatedData);

    res.status(200).json({
      status: "success",
      message: "Service Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get Services Data an error occurred",
      error: error.message,
    });
  }
};
/*
exports.updateUniqueProject = async (req,res,next)=>{
  res.send("unique project Updated!!");
}

exports.deleteUniqueProject = async (req,res,next)=>{
  res.send("unique project deleted!!");
} */
