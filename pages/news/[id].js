import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import HeadeInfo from '../../components/head/HeadInfo';
import Keyword from './../../components/news/Keyword';
export async function getServerSideProps(context) {
     const id = context.params.id;
     console.log(id);
     const res = await fetch(`http://80.240.21.204:1337/news?skip=12/ ${id}`);
     const data = await res.json();
   
     return {
       props: { news: data.news }
     }
   }
function New({news}) {
     console.log(news);
     const router=useRouter();
     const {id}=router.query;
     const post=news.filter(item=>item._id==id);
     console.log(post);
     return (
          <>
          <HeadeInfo title={post[0]&&post[0].title} keywords={post[0]&&post[0].keywords.map(item=>item.name)}/>
          <div className="container">
               <div className="row">
               <div className="col-md-8 col-xs-12" style={{margin:'0 auto'}}>
                {
                     post&&(    <div className="card text-center " style={{width:'100%'}}>
                     <div className="card-header">
                        <img src={post[0].source.url} alt=".."/>  
                          {post[0].source.title}
                     </div>
                     <div className="card-body">
                          <h3 className="card-title">{post[0].title}</h3>
                          <div className="card-text">{new Date(post[0].created_at).toDateString()}</div>
                          <Link href={post[0].source.link}><a className="btn btn-primary">View page news</a></Link>
                     </div>              
                </div>)
                }
                {!post&&(<p>no data found</p>)}
               </div>
               </div>
          </div>

          </>     )
}
export default New
