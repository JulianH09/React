import logo from './logo.svg';
import './App.css';
import Review from './components/Review';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
        <Review 
        texto="Turkisss arrus puchuchu" 
        nombre="Cristiano Ronaldo" 
        cargo="Futbolista Profesional" 
        imagen="cr7"/>
        <Review 
        texto="El Ferxxo no se le dedica a cualquiera" 
        nombre="Feid" 
        cargo="Cantante" 
        imagen="Feid"/>
        <Review 
        texto="El Bendito hecho en Medellin, puro gas con fooooo si sabe!" 
        nombre="Blessd" 
        cargo="Cantante" 
        imagen="Blessd"/>
        <Review 
        texto="Ahora toca un verano sin ti"
        nombre="Bad Bunny"
        cargo="Cantante"
        imagen="Bad"/>

        <div className="row d-flex">
        <div className="col-12 col-lg-4">
        <Card
        imagen="ah"
        nombre="Basket #909"
        descripcion="Este NFT tiene un estilo unico junto su balón de Basket en su dedo."
        cantidad_eq="9999 ETH"
        imagen_eq="icon-ethereum"
        imagen_perfil="perfil"
        imagen_rl="icon-clock"
        creador="Zeus"
        dias="2"/>
        </div>
        <div className="col-12 col-lg-4">
        <Card
        imagen="eh"
        nombre="Magic #435"
        descripcion="Un NFT magico junto a su libro con sus trucos de magia."
        cantidad_eq="500 ETH"
        imagen_eq="icon-ethereum"
        imagen_perfil="perfil"
        imagen_rl="icon-clock"
        creador="Homero"
        dias="7"/>
        </div>
        <div className="col-12 col-lg-4">
        <Card
        imagen="ih"
        nombre="Different #383"
        descripcion="El NFT con varios estilos de outfits para diferente ocasión."
        cantidad_eq="3000 ETH"
        imagen_eq="icon-ethereum"
        imagen_perfil="perfil"
        imagen_rl="icon-clock"
        creador="William Shakespeare"
        dias="15"/>
        </div>
        </div>
    </div>
  );
}

export default App;
