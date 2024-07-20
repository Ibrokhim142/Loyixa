import { Suspense } from "react"
import  "./index.css"

const Loading = () => {
  return (
    
    <div className="w-full h-screen flex items-center justify-center">
       <div className="loading">
       <div className="loader">
        </div>
        <h4 className="text-3xl font-bold block">Loading...</h4>
       </div>
    </div>
  )
}

const SuspenseComponent = ({children}) => {
    return <Suspense fallback={<Loading/>}>
        {children}
    </Suspense>
}
export {Loading} 
export default SuspenseComponent 