import Footer from './footer'
import Header from './header'
import './maincontent.css'

export function MainContent(props){
    return (
        <div className='mainContent'>
            {props.children}
        </div>
    )
}

export default function DashboardLayout(props){
    return (
        <div className= 'layout'>
            <Header {...props} />
            <MainContent {...props} />
            <Footer {...props} />
        </div>
    )
}