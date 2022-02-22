"use strict"
var project = require("../models/project");
var fs=require("fs");
const { exists } = require("../models/project");
var path=require("path");
var controller={
    home:(req,res)=>{
        return res.status(200).send({mensaje:"soy la home"});
    },
    test:(req,res)=>{
        return res.status(200).send({mensaje:"soy el metodo test"});
    },
    saveProject:(req,res)=>{
        let proj= new project();
        var params= req.body;
        console.log(req.body);
        proj.name=params.name;
        proj.description=params.description;
        proj.category=params.category;
        proj.year=params.year;
        proj.langs=params.langs;
        proj.img=null;
        proj.save((err,projectStored)=>{
            if(err){
                return res.status(500).send({msg:"error en la petición"})
            }
            if(!projectStored){
                return res.status(404).send({msg:"No se ha podido guardar el proyecto"});
            }
            return res.status(200).send({msg:"Proyecto agregado existosamente",proyecto:projectStored});
        });
       
    },
    getProject:(req,res)=>{
        var project_id=req.params.id;
        project.findById(project_id,(err,project)=>{
            if(err){
                return res.status(500).send({msg:"Error al devolver los datos"});
            }
            if(!project){
                return res.status(404).send({msg:"El documento no existe"});
            }
            return res.status(200).send({project});
        });
    },
    getProjects:(req,res)=>{
        //se pueden pasar en el json condiciones de busqueda
        //lo que devuelve find es una lista a la cual se le pueden encadenar funciones como .sort()
        project.find({}).exec((err,projects)=>{
            if(err){
                return res.status(500).send({msg:"error al cargar los proyectos"});
            }
            if(!projects){
                return res.status(404).send({msg:"No existen proyectos"});
            }
            return res.status(200).send({projects});
        });
    },
    upDateProject:(req, res)=>{
         var projectId=req.params.id;
         var update = req.body;
         //el {new:true} es para que el objeto que devuelve el projectUpDated sea el objeto ya actualizado y no el antiguo
         project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdated)=>{
             if(err){
                 return res.status(500).send({msg:"error al actualizar"});
             }
             if(!projectUpdated){
                 return res.status(404).send({msg:"Proyecto no existe"})
             }
             return res.status(200).send({msg:"Proyecto actulizado correctamente",project:projectUpdated})
         });
    },
    deleteProject:(req,res)=>{
        var projectid=req.params.id;
        project.findByIdAndRemove(projectid,(err,projectDeleted)=>{
            if(err){
                return res.status(500).send({msg:"Ha ocurrido un error al eliminar el proyecto"});
            } 
            if(!projectDeleted){
                return res.status(404).send({msg:"No se puede eliminar el proyecto"});
            }
            return res.status(200).send({msg:"Proyecto eliminado correctamente",project:projectDeleted});
        })
    },
    upLoadImage:(req,res)=>{
        var projectid=req.params.id;
        var fileName="Imagen no subida...";
        if(req.files){
            var filePath= req.files.image.path;
            var fileSplit= filePath.split("\\");
            var fileName=fileSplit[1];
            var extsplit=fileName.split("\.");
            var fileExt=extsplit[1];
            if(fileExt=="png" || fileExt=="jpg"||fileExt=="jpeg"||fileExt=="gif"){
                project.findByIdAndUpdate(projectid,{img:fileName},{new:true},(err,projectUpdated)=>{
                    if(err){
                        return res.status(500).send({msg:"La imagen no se ha subido"});
                    }
                    if(!projectUpdated){
                        return res.status(404).send({msg:" La imagen no existe"});
                    }    
                    return res.status(200).send({projectUpdated});
                });
            }
            else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({msg:"Extension no es valida"})
                });
            }
        }
        else{
            return res.status(500).send({msg:"No se han subido archivos"})
        }
    },
    getImageFile:(req,res)=>{
        var file=req.params.image;
        var path_file="./uploads/"+file;

        fs.exists(path_file,(exists)=>{
            console.log("paseo");
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }
            else{
                return res.status(200).send({msg:"No existe la imagen..."});
            }
        });
    }
};
module.exports=controller;