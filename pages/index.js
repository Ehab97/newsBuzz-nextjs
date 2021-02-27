import React from 'react' 
import News from '../components/news/News';
import HeadeInfo from '../components/head/HeadInfo';
import useSWR,{mutate} from 'swr'
import axios from 'axios'
//server side #1
// export async function getServerSideProps(){
    
//      const res=await fetch(`http://80.240.21.204:1337/news?skip=12&limit=100`);
  
//      const data=await res.json();

//      return{
//           props:{
//                news:data.news
//           }
//      }
// }
// #2 ssg
// export const getStaticProps=async()=>{
//   const res=await fetch('http://80.240.21.204:1337/news?skip=12&limit=10');
//   const data=await res.json();
//   return {
//        props:{
//             //here creat data whci can be accible inside compnent
//             news:data.news
//        }
//   }
// }

const fetcher = url => axios.get(url).then(res => res.data)
let id=200;
export default function Home({news}) {

const {data,error}=useSWR(`http://80.240.21.204:1337/news?skip=12&limit=${id}`,fetcher,{ revalidateOnFocus : false });
if(!data) return <div className="text-center" style={{marginTop:'100px'}}><div className="text-center spinner-border"></div></div>;
if(error) return  <div className="text-center" style={{marginTop:'100px'}}><h4>there is an error</h4></div>;

  return (
    <div className="container">
      <HeadeInfo title="news Buzz" keywords="news ,sports, newspaper" info="all news in this page"/>
      <div className="row">  
          {/* using ssr ,ssg */}
          {/* {React.Children.toArray(news.map(item=>( <News item={item}/>)))} */}
          {/* using useSWR */}
          {React.Children.toArray(data.news.map(item=>( <News item={item}/>)))}
  
      </div>
        
    </div>
  )
}
