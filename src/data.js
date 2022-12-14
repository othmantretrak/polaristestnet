// import house images
import EcchoHouse from './assets/img/houses/echo.png';
import FioreHouse from './assets/img/houses/fiore.png';
import LuminaHouse from './assets/img/houses/lumina.png';
import ReggiaHouse from './assets/img/houses/reggia.png';
import Vivendas from './assets/img/houses/vivendas.png';
import OasisHouse from './assets/img/houses/oasis.png';

//import house location
import EcchoLocation from './assets/img/houses/echo-5.jpg';
import FioreLocation from './assets/img/houses/fiore-1.jpg';
import LuminaLocation from './assets/img/houses/lumina-8.jpg';
import ReggiaLocation from './assets/img/houses/reggia-8.jpg';
import VivendasLocation from './assets/img/houses/vivendas-5.jpeg';
import OasisLocation from './assets/img/houses/oasis-19.jpg';

// import house large images
import Eccho1Lg from './assets/img/houses/echo-1.jpeg';
import Eccho2Lg from './assets/img/houses/echo-2.jpg';
import Eccho3Lg from './assets/img/houses/echo-3.jpeg';
import Eccho4Lg from './assets/img/houses/echo-4.jpeg';
import Eccho6Lg from './assets/img/houses/echo-6.jpg';
import Eccho7Lg from './assets/img/houses/echo-7.png';
import Eccho8Lg from './assets/img/houses/echo-8.jpeg';
import Eccho9Lg from './assets/img/houses/echo-9.jpg';
import Eccho10Lg from './assets/img/houses/echo-10.jpg';
import Fiore1Lg from './assets/img/houses/fiore-2.jpg';
import Fiore3Lg from './assets/img/houses/fiore-3.png';
import Fiore4Lg from './assets/img/houses/fiore-4.png';
import Fiore5Lg from './assets/img/houses/fiore-5.png';
import Fiore6Lg from './assets/img/houses/fiore-6.png';
import Fiore7Lg from './assets/img/houses/fiore-7.jpg';
import Fiore8Lg from './assets/img/houses/fiore-8.png';
import Fiore9Lg from './assets/img/houses/fiore-9.jpg';
import Fiore10Lg from './assets/img/houses/fiore-10.png';
import Lumina1Lg from './assets/img/houses/lumina-5.jpg';
import Lumina2Lg from './assets/img/houses/lumina-1.jpg';
import Lumina3Lg from './assets/img/houses/lumina-3.jpg';
import Lumina4Lg from './assets/img/houses/lumina-4.jpg';
import Lumina5Lg from './assets/img/houses/lumina-2.jpg';
import Lumina6Lg from './assets/img/houses/lumina-6.jpg';
import Lumina7Lg from './assets/img/houses/lumina-7.jpg';
import Reggia1Lg from './assets/img/houses/reggia-4.jpg';
import Reggia2Lg from './assets/img/houses/reggia-1.jpg';
import Reggia3Lg from './assets/img/houses/reggia-2.jpg';
import Reggia4Lg from './assets/img/houses/reggia-3.jpg';
import Reggia5Lg from './assets/img/houses/reggia-5.jpg';
import Reggia6Lg from './assets/img/houses/reggia-6.jpg';
import Reggia7Lg from './assets/img/houses/reggia-7.jpg';
import Reggia9Lg from './assets/img/houses/reggia-9.jpg';
import Vivendas1Lg from './assets/img/houses/vivendas-1.jpeg';
import Vivendas2Lg from './assets/img/houses/vivendas-2.jpeg';
import Vivendas3Lg from './assets/img/houses/vivendas-3.jpeg';
import Vivendas4Lg from './assets/img/houses/vivendas-4.jpeg';
import Vivendas6Lg from './assets/img/houses/vivendas-6.jpeg';
import Vivendas7Lg from './assets/img/houses/vivendas-7.jpeg';
import Vivendas8Lg from './assets/img/houses/vivendas-8.jpeg';
import Vivendas9Lg from './assets/img/houses/vivendas-9.jpg';
import Vivendas10Lg from './assets/img/houses/vivendas-10.jpg';
import Vivendas11Lg from './assets/img/houses/vivendas-11.jpg';
import Vivendas12Lg from './assets/img/houses/vivendas-12.jpg';
import Vivendas13Lg from './assets/img/houses/vivendas-13.jpeg';
import BannerUltimaLg from './assets/img/houses/ultima.png';
import Oasis1Lg from './assets/img/houses/oasis-1.jpg';
import Oasis2Lg from './assets/img/houses/oasis-2.jpg';
import Oasis3Lg from './assets/img/houses/oasis-3.jpg';
import Oasis4Lg from './assets/img/houses/oasis-4.jpg';
import Oasis5Lg from './assets/img/houses/oasis-5.jpg';
import Oasis6Lg from './assets/img/houses/oasis-6.jpg';
import Oasis7Lg from './assets/img/houses/oasis-7.jpg';
import Oasis8Lg from './assets/img/houses/oasis-8.jpg';
import Oasis9Lg from './assets/img/houses/oasis-9.jpg';
import Oasis10Lg from './assets/img/houses/oasis-10.jpg';
import Oasis11Lg from './assets/img/houses/oasis-11.jpg';
import Oasis12Lg from './assets/img/houses/oasis-12.jpg';
import Oasis13Lg from './assets/img/houses/oasis-13.jpg';
import Oasis14Lg from './assets/img/houses/oasis-14.jpg';
import Oasis15Lg from './assets/img/houses/oasis-15.jpg';
import Oasis16Lg from './assets/img/houses/oasis-16.jpg';
import Oasis17Lg from './assets/img/houses/oasis-17.jpg';
import Oasis18Lg from './assets/img/houses/oasis-18.jpg';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';

export const housesData = [
  {
    id: 1,
    type: 'Casa',
    name: 'Eccho',
    isAvailable: 'Dispon??vel',
    description:
      'Criada a partir de um conceito arquitet??nico moderno e com detalhes que encantam, a casa Eccho transborda impon??ncia em cada linha do projeto. S??o 370m?? constru??dos contando com design em conceito aberto, integralizando ambientes, ampla ilumina????o natural e ventila????o cruzada. Casa com 4 su??tes, sendo 1 su??te master, amplo espa??o gourmet com piscina planejada, cozinha e sala de jantar integralizados em conceito aberto. S??o alguns dos detalhes que apaixonam e ambientam esta casa no primeiro bairro parque do Brasil.',
    image: EcchoHouse,
    fachada: Eccho1Lg,
    carouselData: [
      {
        image: '',
        video: 'https://player.vimeo.com/video/756466271?h=9e884055ab'
      },
      {
        image: Eccho2Lg,
        video: ''
      },
      {
        image: Eccho3Lg,
        video: ''
      },
      {
        image: Eccho4Lg,
        video: ''
      },
      {
        image: Eccho6Lg,
        video: ''
      },
      {
        image: Eccho7Lg,
        video: ''
      },
      {
        image: Eccho8Lg,
        video: ''
      },
      {
        image: Eccho9Lg,
        video: ''
      },
      {
        image: Eccho10Lg,
        video: ''
      },

    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 29 | Lote 07',
    bedrooms: '4',
    bathrooms: '6',
    surface: '390m??',
    built: '370m??',
    price: '4690000',
    pricepage: '4.690.000',
    location: EcchoLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 2,
    type: 'Casa',
    name: 'Fiore',
    description:
      'A casa Fiore, traz tons modernos e s??brios, sua fachada encravada em revestimento marmorizado contrastando com brise retr??til amadeirado na sacada, estampam o recado de que o luxo faz morada aqui. Uma obra de arte com 282 m?? constru??dos, piscina, churrasqueira e imponente p?? direito duplo na sala de estar.',
    image: FioreHouse,
    isAvailable: 'Dispon??vel',
    fachada: Fiore1Lg,
    carouselData: [
      {
        image: Fiore3Lg,
        video: ''
      },
      {
        image: Fiore4Lg,
        video: ''
      },
      {
        image: Fiore5Lg,
        video: ''
      },
      {
        image: Fiore6Lg,
        video: ''
      },
      {
        image: Fiore7Lg,
        video: ''
      },
      {
        image: Fiore8Lg,
        video: ''
      },
      {
        image: Fiore9Lg,
        video: ''
      },
      {
        image: Fiore10Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 25 | Lote 13',
    bedrooms: '4',
    bathrooms: '5',
    surface: '360m??',
    built: '282m??',
    price: '3897000',
    pricepage: '3.897.000',
    location: FioreLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 3,
    type: 'Casa',
    name: 'Lumina',
    isAvailable: 'Dispon??vel',
    description:
      'A casa Lumina, obteve sua inspira????o na imponencia de um diamante sendo lapidado e que reflete a luz ao seu redor. S??o 297 m?? marcados por uma mistura de tons amadeirados, pedra natural e cimento, com uma ilumina????o moderna e detalhes de acabamento em led, al??m de um p?? direito duplo magn??fico com painel de vidro acompanhando uma marca????o arredondada semelhante a lapida????o da pedra preciosa. Contando com 4 su??tes, sendo uma master, 6 banheiros, garagem para 4 carros, piscina com borda de vidro laminado e fire place.',
    image: LuminaHouse,
    fachada: Lumina1Lg,
    carouselData: [
      {
        image: Lumina2Lg,
        video: ''
      },
      {
        image: Lumina3Lg,
        video: ''
      },
      {
        image: Lumina4Lg,
        video: ''
      },
      {
        image: Lumina5Lg,
        video: ''
      },
      {
        image: Lumina6Lg,
        video: ''
      },
      {
        image: Lumina7Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 07 | Lote 03',
    bedrooms: '4',
    bathrooms: '6',
    surface: '377m??',
    built: '297m??',
    price: '4276800',
    pricepage: '4.276.800',
    location: LuminaLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 4,
    type: 'Casa',
    name: 'Reggia',
    isAvailable: 'Dispon??vel',
    description:
      'A casa Reggia foi criada a partir de um conceito arquitet??nico ??nico, inspirada na exuberante e imponente Vit??ria R??gia, esta casa parece flutuar do solo em meio ao paisagismo e ??guas decorativas, destacando-se com suas linhas naturais e detalhes que encantam. S??o 488m?? constru??dos atrav??s de um projeto exclusivo que conta com conceito aberto, integralizando ambientes, abund??ncia de ilumina????o natural e ventila????o cruzada. Casa com 4 su??tes, sendo 1 su??te master, amplo espa??o gourmet com piscina planejada, cozinha e sala de jantar integralizados com vis??o privilegiada para a natureza.',
    image: ReggiaHouse,
    fachada: Reggia1Lg,
    carouselData: [
      {
        image: Reggia2Lg,
        video: ''
      },
      {
        image: Reggia3Lg,
        video: ''
      },
      {
        image: Reggia4Lg,
        video: ''
      },
      {
        image: Reggia5Lg,
        video: ''
      },
      {
        image: Reggia6Lg,
        video: ''
      },
      {
        image: Reggia7Lg,
        video: ''
      },
      {
        image: Reggia9Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 29 | Lote 06',
    bedrooms: '4',
    bathrooms: '4',
    surface: '516m??',
    built: '488m??',
    price: '6532900',
    pricepage: '6.532.900',
    location: ReggiaLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 5,
    type: 'Duplex',
    name: 'Vivendas',
    isAvailable: 'Dispon??vel',
    tag: '??ltima',
    description: '',
    image: Vivendas,
    fachada: Vivendas1Lg,
    carouselData: [
      {
        image: BannerUltimaLg,
        video: ''
      },
      {
        image: Vivendas3Lg,
        video: ''
      },
      {
        image: Vivendas4Lg,
        video: ''
      },
      {
        image: Vivendas6Lg,
        video: ''
      },
      {
        image: Vivendas7Lg,
        video: ''
      },
      {
        image: Vivendas8Lg,
        video: ''
      },
      {
        image: Vivendas9Lg,
        video: ''
      },
      {
        image: Vivendas10Lg,
        video: ''
      },
      {
        image: Vivendas11Lg,
        video: ''
      },
      {
        image: Vivendas12Lg,
        video: ''
      },
      {
        image: Vivendas13Lg,
        video: ''
      },
      {
        image: Vivendas2Lg,
        video: ''
      },

    ],

    country: 'Bombinhas',
    address: 'Rua Crispim 1235, Bombas.',
    bedrooms: '2',
    bathrooms: '3',
    surface: '83m??',
    built: '83m??',
    price: '520000',
    pricepage: '520.000',
    location: VivendasLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 6,
    type: 'Casa',
    name: 'Oasis',
    isAvailable: 'Dispon??vel',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 7,
    type: 'Casa',
    name: 'TestNetHouse',
    isAvailable: 'Vendida',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 8,
    type: 'Casa',
    name: 'TestNet2',
    isAvailable: 'Dispon??vel',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 9,
    type: 'Casa',
    name: 'TestNet3House',
    isAvailable: 'Dispon??vel',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 10,
    type: 'Casa',
    name: 'TestNetOasis',
    isAvailable: 'Dispon??vel',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 11,
    type: 'Casa',
    name: 'TestNet4',
    isAvailable: 'Dispon??vel',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 12,
    type: 'Casa',
    name: 'TestNetEccho',
    isAvailable: 'Dispon??vel',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
  {
    id: 13,
    type: 'Casa',
    name: 'TestNetCasa',
    isAvailable: 'Vendida',
    description:
      'Um magnifico ref??gio ao urbano. Esta ?? a casa Oasis, criada com linhas org??nicas e imponentes atrav??s do inconfund??vel tra??o do arquiteto Mauricio Melara. Esta obra de arte traz elementos marcante em seus 530m??, com 4 su??tes, garagens com espa??o para 7 carros e amplos ambientes em conceito aberto, conversando com o cora????o do projeto: uma ??rea de lazer paradis??aca.',
    image: OasisHouse,
    fachada: Oasis1Lg,
    carouselData: [
      {
        image: Oasis2Lg,
        video: ''
      },
      {
        image: Oasis3Lg,
        video: ''
      },
      {
        image: Oasis4Lg,
        video: ''
      },
      {
        image: Oasis5Lg,
        video: ''
      },
      {
        image: Oasis6Lg,
        video: ''
      },
      {
        image: Oasis7Lg,
        video: ''
      },
      {
        image: Oasis8Lg,
        video: ''
      },
      {
        image: Oasis9Lg,
        video: ''
      },
      {
        image: Oasis10Lg,
        video: ''
      },
      {
        image: Oasis11Lg,
        video: ''
      },
      {
        image: Oasis12Lg,
        video: ''
      },
      {
        image: Oasis13Lg,
        video: ''
      },
      {
        image: Oasis14Lg,
        video: ''
      },
      {
        image: Oasis15Lg,
        video: ''
      },
      {
        image: Oasis16Lg,
        video: ''
      },
      {
        image: Oasis17Lg,
        video: ''
      },
      {
        image: Oasis18Lg,
        video: ''
      },
    ],
    country: 'Porto Belo',
    address: 'Viva Park Porto Belo | Quadra 04 | Lote 05-06',
    bedrooms: '4',
    bathrooms: '7',
    surface: '750m??',
    built: '530m??',
    price: '8561500',
    pricepage: '8.561.500',
    location: OasisLocation,
    agent: {
      image: Agent1,
      name: 'Eduardo Topanotti',
      phone: '47 3224-1847',
    },
  },
];
