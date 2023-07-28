import './footer.css'
import { Text } from '@chakra-ui/react'

export default function Footer(){
    return (
        <div className='footer'>

            <div className='footer-title'>
                    <Text id="watch">Watch</Text>
                    <Text id="flix">Flix</Text>
            </div>

            <div className='connectUs'>
                <Text id='connectUs'> Connect Us</Text>
                <Text id='about'> -About</Text>
                <Text id='contactus'> -Contact Us</Text>
                <Text id='helpcenter'> -Help center</Text>
                <Text id='career'> -Career</Text>
            </div>

            <div className='manage'>
                <Text id='manage'> Manage</Text>
                <Text id='account'> -Account</Text>
                <Text id='manaccount'> -Manage Account</Text>
                <Text id='buy'> -Buy Gift Card</Text>
                <Text id='redeem'> -Redeem</Text>
            </div>

            <div className='info'>
                <Text id='info'>Information</Text>
                <Text id='privacy'> -Privacy</Text>
                <Text id='tnc'> -Terms & Conditions</Text>
                <Text id='cookies'> -Cookies</Text>
                <Text id='faq'> -FAQ</Text>

            </div>

        </div>
    )
}