import { addPost, getPosts } from '../../../../lib/data';
import { NextRequest,NextResponse } from 'next/server'
export async function POST(req:Request,res:Response) {
    
        const body=await req.json();
        const {userName,email,password,confirmpassword}=body;
        try{
                const post= {userName,email,password,confirmpassword};
                addPost(post);
                return NextResponse.json( {message: "Ok", post: { ...post, userName } },{status:201});

        } catch(err){
                return NextResponse.json(
                        {message:"Error",err},
                        {
                                status:500
                        }
                );

        }
        
    
}
export async function GET(req: Request,res:Response)  {
        try{
        const posts = getPosts().map((post) => ({ ...post, userName: post.userName }));
        return NextResponse.json({ message: 'Ok', posts }, { status: 200 });
        } catch(err){
                return NextResponse.json(
                        {message:"Error",err},
                        {
                                status:500
                        }
                );

        }
};
// export async function GET(req:Request) {
//     const userData = {
//     "name":"sivasathvik",
//     "email":"paturisivasathvik@gmail.com",
//     "password": "sathvik22",
//     "confirmpassword" : "sathvik22"
//     };
    
//     return NextResponse.json(userData);
// }



