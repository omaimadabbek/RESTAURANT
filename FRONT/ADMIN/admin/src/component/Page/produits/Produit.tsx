import { useState , useEffect } from "react";
import { Button } from "reactstrap";
import { IProduit  } from "./Produit.type";
import ProduitList from "./ProduitList";
import "./HomeP.style.css";
import ModalProduit from "./ModalProduit";


const Produit = () =>{
    const [produitList, setProduitList] = useState ( [] as IProduit[]);
    const[produitSelected,setProduitSelected]=useState<any>()
    const [type, setType] = useState("");
    const [id_categorie, setCategorie] = useState("");
    const [nom, setNomProduit] = useState("");
    const [prix, setPrix] = useState("");
    const [image, setImage] = useState("");
    const [repture_de_stock, setReptureDeStock] = useState("");
    const [description, setDescription] = useState("");
    const [idSelected, setIdSelected] = useState(0);
    const [listeCategorie, setListeCategorie] = useState<any>([]);
    const [modal, setModal] = useState(false);
    const [updateData, setUpdateData] = useState(false);
    

    async function  homeAdd() {
      fetch('http://localhost:5000/produits')
        .then(async (response) => {
            const data = await response.json();
            console.log(data)
            setProduitList(data)
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
        setUpdateData(!updateData);
    }

    function getProduit(){
        fetch('http://localhost:5000/produits')
          .then(async (response) => {
              const data = await response.json()
              console.log(data)
              setProduitList(data)
          })
          .catch((error) => {
              console.error('There was an error!', error);
          });
         
}
function getCategorie() {
    fetch("http://localhost:5000/categorie")
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
       
        let result:any=[]
            data.forEach((element: any, index: any) => {
      result.push({ value: element.id_categorie, label: element.nom_categorie });
    });
    setListeCategorie(result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    
  }

 useEffect(()=>{
    getProduit()
},[updateData])

 useEffect(()=>{
    getCategorie()
},[])
 useEffect(()=>{
    setCategorie(produitSelected?.id_categorie)
    setNomProduit(produitSelected?.nom)
    setPrix(produitSelected?.prix)
    setImage(produitSelected?.image)
    setReptureDeStock(produitSelected?.repture_de_stock)
    setDescription(produitSelected?.description)
    setIdSelected(produitSelected?.id_produit)
      
 },[produitSelected])

 const _setProduitList=(list:IProduit[])=>{
        setProduitList(list);
        window.localStorage.setItem("produitList",JSON.stringify(list));
    }

const deleteProduit =(data: IProduit) =>{
        const indexToDelete = produitList.indexOf(data);
        const tempList =[...produitList]

        tempList.splice(indexToDelete,1);
        _setProduitList(tempList);

    };
    const handleAddProduit=()=>{
        setType("add")
        setModal(!modal)
    };
   
   return (
        <>
        <article className="article-header">
            <header>
                <h1>Restaurant Dabbek</h1>
            </header>
        </article>

        <section className="section-content" >
        
          <>
            <Button
                color="primary"
                onClick={()=>{handleAddProduit()}}
                className="add-produit-btn"
                
            >
                Ajouter Produit
            </Button>
                       
            <ProduitList 
              list={produitList} 
              setProduitSelected={setProduitSelected} 
              modal={modal} 
              setModal={setModal}
              setUpdateData={setUpdateData} 
              updateData={updateData}/>
               </>
              
              </section>
        <ModalProduit 
        modal={modal}
         setModal={setModal} 
         id_categorie={id_categorie}
         nom={nom}
         prix={prix}
         image={image}
         repture_de_stock={repture_de_stock}
         description={description}
        type={type}
        
        setCategorie={setCategorie}
        setNomProduit={setNomProduit}
        setPrix={setPrix}
        setImage={setImage}
        setReptureDeStock={setReptureDeStock}
        setDescription={setDescription}
        idSelected={idSelected}
        listeCategorie={listeCategorie}
        setUpdateData={setUpdateData}
        updateData={updateData}/> 
     
      </>
    );
};

export default Produit;