import React from 'react'
import Link from 'next/link'
import Keyword from './Keyword'

function News({item}) {
     return (
     <>     
      <div className="col-2 fixer">
             {/* <div className="fixe"></div> */}
          </div>
     <div className="col-md-12 col-xs-12 center">
          <Link href={`/news/${item._id}`}>
          <div className="card">
               <div className="card-header">
                    <img src={item.source.url} alt={item.title.slice(1,15)} />
                    <h5>{item.source.title}</h5>
               </div>
               <div className="card-body">
                    <h5 className="card-title">{item.title.slice(0,120)}</h5>
                    <span className="text-mute">{new Date(item.created_at).toDateString()}</span>
                    <hr />
     
                    <div className="keyword-parent">
                         { React.Children.toArray(item.keywords.map(keyword => (<Keyword keyword={ keyword } />)))}
                    </div>
               </div>
          </div>
          </Link>
     </div>
     <div className="col-2 fixel">
             {/* <div className="fixe"></div> */}
          </div>
     </>
     )
}

export default News
