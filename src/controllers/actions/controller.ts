import { Request, Response } from "express";
import { Responder } from "../../helpers/responder";
import { IProduct } from "../../interfaces/product";
import ProductModel from "../../schemas/productSchema";

class ActionController {
  constructor() {}



  createAction = async (req: Request, res: Response) => {
    let data = req.body;

    if (!data)
      return Responder.sendFailureMessage("Please check your inputs", res);
    let user_id = data.user_id;

    let findProduct = await ProductModel.findOne({
      title: req.query.title,
      user_id,
    });
    let final;
    if (findProduct) {
      findProduct.like = data.like;
      findProduct.dislike = data.dislike;
      final = findProduct.save();
    } else {
      let createAction: IProduct = new ProductModel(data);
      final = await createAction.save();
    }

    if (final)
      Responder.sendSuccessMessage("Produce Updated Successfully", res);
    else Responder.sendFailureMessage("Product Update Failed", res);
  };

  listProducts = async (req: Request, res: Response) => {
    let query = req.query;
    let productList = await ProductModel.find({ category: query.category,user_id:query.user_id });
    if (productList)
      Responder.sendSuccessData(productList, "Product List", res);
    else Responder.sendFailureMessage("Not found", res);
  };
}

export const Controller = new ActionController();
