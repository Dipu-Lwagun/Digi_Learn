import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();

    const paths =location.pathname.split('/').filter(Boolean);
  return (
    <div className='flex items-center gap-2 text-sm'>
      <Link to="/" className='text-subheading'>
      Home
      </Link>
        {paths.map((path, index)=>{
            const url ="/" + paths.slice(0, index + 1).join("/");
            return(
                <div key={url} className='flex items-center gap-2 text-subheading'>
                    <span>/</span>
                    {index ===paths.length - 1 ? (
                        <span> {path.replace("-", " ")} </span>
                    ):(
                        <Link to={url} className='text-subheading' >
                            {path.replaceAll("-", " ")}
                        </Link>
                    )}

                </div>
            )

        
        })}
    </div>
  )
}

export default Breadcrumb
