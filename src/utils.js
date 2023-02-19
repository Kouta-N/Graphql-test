const jwt = require("jsonwebtoken");
APP_SECRET = "Graphql";

// トークンを複合するための関数
function getTokenPayload(token){
    //トークン化されたものの前の情報を(user.id)を複合する
    return jwt.verify(token,APP_SECRET);
}

// ユーザーIDを取得するための関数
function getUserId(req,authToken){
    if(req){
        // ヘッダーを確認し、認証権限があるか確認をする。
        const authHeader = req.headers.authorization;
        // 権限があるなら
        if(authHeader){
            const token = authHeader.replace("Bearer","");
        }
        // そのトークンを複合する。
        const { userId } = getTokenPayload(token);
        return userId;
    } else if (authToken){
        const {userId} = getTokenPayload(authToken);
        return userId;
    }

    throw new Error('認証権限がありません')
}

module.exports = {
    APP_SECRET,
    getUserId,
}