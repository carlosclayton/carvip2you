import SpeedSvg from '../assets/speed.svg'
import AcelerationSvg from '../assets/acceleration.svg'
import ForceSvg from '../assets/force.svg'
import GasolineSvg from '../assets/gasoline.svg'
import ExchangeSvg from '../assets/exchange.svg'
import PeopleSvg from '../assets/people.svg'
import EnergySvg from '../assets/energy.svg'
import CarSvg from '../assets/car.svg'

export function getAccessoryIcon(type: string){
    switch (type){
        case 'speed':
            return SpeedSvg;
        case 'acceleration':
            return AcelerationSvg;
        case 'turing_diameter':
            return ForceSvg;
        case 'gasoline_motor':
            return GasolineSvg;
        case 'electric_motor':
            return EnergySvg;
        case 'hibrid_motor':
            return ExchangeSvg;
        case 'seats':
            return PeopleSvg;
        default:
            return CarSvg;
    }
}
