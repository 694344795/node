var fs = require("fs")
var ProtoBuf = require("protobufjs");
var userProtoStr = fs.readFileSync('./static-demo2.proto').toString();
var UserModel = ProtoBuf.loadProto(userProtoStr).build('protobuf').UserModel;

var _userModel = new UserModel();
_userModel.set('cyUserno', '111111');
_userModel.set('cyPassWord', '123456');
_userModel.set('cyStatus', '1');
 
var buffer = _userModel.encode().toBuffer();
console.log(_userModel);
