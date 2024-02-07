import { Image } from 'react-native';
import logoPrincipal from '../../assets/logoPrincipal.jpg'

const Logo = () => {
    return (
        <Image style={{width: '50%'}} source={logoPrincipal}/>
    )
}

export default Logo;