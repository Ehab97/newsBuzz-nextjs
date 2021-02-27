
import React from 'react' 
import News from '../components/news/News';
import HeadeInfo from '../components/head/HeadInfo';
//server side #1
export async function getServerSideProps(){
    
     const res=await fetch(`http://80.240.21.204:1337/news?skip=12&limit=300`);
  
     const data=await res.json();

     return{
          props:{
               news:data.news
          }
     }
}
// #2 ssg
// export const getStaticProps=async()=>{
//   const res=await fetch('http://80.240.21.204:1337/news?skip=12&limit=300');
//   const data=await res.json();
//   return {
//        props:{
//             //here creat data whci can be accible inside compnent
//             news:data.news
//        }
//   }
// }
export default function Home({news}) {
console.log(news);

  return (
    <div className="container">
      <HeadeInfo title="news Buzz" keywords="news ,sports, newspaper" info="all news in this page"/>
      <div className="row">                 
          {React.Children.toArray(news.map(item=>( <News item={item}/>)))}
      </div>
        
    </div>
  )
}
