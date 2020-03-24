import {Request,Response,NextFunction, Errback} from 'express';
import {User} from '../models/User';
import {compareSync} from 'bcryptjs'
export class UserController{
    
    static login(req:Request,res:Response,next:NextFunction){
       User.findOne({email:req.body.email},(err:Errback,result:any)=>{
            if(err){
                res.status(500).json({ status: "failed", message: err });
            }else{
                if(result != undefined){
                    if(compareSync(req.body.password,result.password)){
                        res.json({ status: "success", message:'Login Success!' });
                    }else{
                        res.json({ status: "failed", message:'UserName or Password is incorrect!'});
                    }
                }else{
                    res.json({ status: "failed", message:'UserName or Password is incorrect!'}); 
                }
            }
      })
    }

    static register(req:Request,res:Response,next:NextFunction){
        const user=new User(req.body);
        User.create(user,(err:Errback,result:any)=>{
            if(err){
                res.status(500).json({status:'failed',message:err})
                }
                else{
                    res.json({status:'success',message:'Registration Successful',data:result})
                }
            })
    }

    static updateProfile(req:Request,res:Response,next:NextFunction){
        console.log(req.body);
        res.json({ user: "Test", success: "true" });
    }
}