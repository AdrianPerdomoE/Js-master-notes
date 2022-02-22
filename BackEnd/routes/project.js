"use strict"
//fichero de configuracion de las rutas
var express= require("express");
var projectController=require("../controllers/project");
var router= express.Router();
var multipart= require("connect-multiparty");
var multipartMiddleWare = multipart({uploadDir:"./uploads"})
router.get("/home", projectController.home);
router.post("/test",projectController.test);
router.post("/save-project",projectController.saveProject);
router.get("/getProject/:id",projectController.getProject);
router.get("/getProjects",projectController.getProjects);
router.put("/upDateProject/:id",projectController.upDateProject); 
router.delete("/deleteProject/:id",projectController.deleteProject);
router.post("/upLoadImg/:id",multipartMiddleWare,projectController.upLoadImage);
router.get("/getImage/:image",projectController.getImageFile); 
module.exports= router;