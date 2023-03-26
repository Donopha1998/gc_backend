var jwt = require("jsonwebtoken");

class UtilsClass {
  constructor() {}


  returnRegexAlone = (value: any) => {
    return {
      $regex: new RegExp(this.replaceSearchTerm(value), "i"),
    };
  };
  appendRegex = (query: any, field: any, value: any) => {
    query[field] = this.returnRegexAlone(value);
  };
  replaceSearchTerm = (value: any) => {
    return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  returnPage = (query: any) => {
    return query.page ? parseInt(query.page) : 1;
  };

  returnLimit = (query: any) => {
    return query.limit ? parseInt(query.limit) : 10;
  };
}

export const Utils = new UtilsClass();
