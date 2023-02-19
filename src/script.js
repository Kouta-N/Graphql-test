// データベースにアクセスするためのクライアントライブラリ
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
async function main(){
    const newLink = await prisma.link.create({
        data: {
            description: "GraphQlを学ぶ",
            url: "www.udemy-graphql.com"
        },
    });
    const allinks = await prisma.link.findMany();
    console.log(allinks);
}

main().catch((e) => {
    throw e;
})
.finally(async () => {
    //データベース接続の遮断
    prisma.$disconnect;
})