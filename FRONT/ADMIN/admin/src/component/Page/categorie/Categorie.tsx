import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { ICategorie } from "./Categorie.type";
import CategorieList from "./CategorieList";
import ModalCategorie from "./ModalCategorie";
import "./Home.style.css";

const Categorie = () => {
  const [categorieList, setCategorieList] = useState([] as ICategorie[]);
  const [categorieSelected, setCategorieSelected] = useState<any>();
  const [type, setType] = useState("");
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [idSelected, setIdSelected] = useState(0);
  const [modal, setModal] = useState(false);
  const [updateData, setUpdateData] = useState(false);

  async function homeAdd() {
    fetch("http://localhost:5000/categorie")
      .then(async (response) => {
        const data = await response.json();
        setCategorieList(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
      setUpdateData(!updateData);
  }

  function getCategorie() {
    fetch("http://localhost:5000/categorie")
      .then(async (response) => {
        const data = await response.json();
        setCategorieList(data);
        let result:any=[]
           data.forEach((element: any, index: any) => {
       result.push({ value: element.id_categorie, label: element.nom_categorie });
     });
    setlisteClients(result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    getCategorie();
  }, [updateData]);
  
  useEffect(() => {
    setNom(categorieSelected?.nom_categorie);
    setImage(categorieSelected?.image);
    setIdSelected(categorieSelected?.id_categorie);
  }, [categorieSelected]);

  const _setCategorieList = (list: ICategorie[]) => {
    setCategorieList(list);
    window.localStorage.setItem("CategorieList", JSON.stringify(list));
  };

  const deleteCategorie = (data: ICategorie) => {
    const indexToDelete = categorieList.indexOf(data);
    const tempList = [...categorieList];

    tempList.splice(indexToDelete, 1);
    _setCategorieList(tempList);
  };
  const handleAddCategorie = () => {
    setType("add");
    setModal(!modal);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Restaurant Dabbek</h1>
        </header>
      </article>

      <section className="section-content">
        <>
          <Button
            color="primary"
            onClick={() => {
              handleAddCategorie();
            }}
            className="add-categorie-btn"
          >
            Ajouter Categorie
          </Button>

          <CategorieList
            list={categorieList}
            setCategorieSelected={setCategorieSelected}
            modal={modal}
            setModal={setModal}
            setUpdateData={setUpdateData}
            updateData={updateData}
          />
        </>
      </section>
      <ModalCategorie
        modal={modal}
        setModal={setModal}
        nom={nom}
        image={image}
        type={type}
        setNom={setNom}
        setImage={setImage}
        idSelected={idSelected}
        setUpdateData={setUpdateData}
            updateData={updateData}

      />
    </>
  );
};

export default Categorie;
function setlisteClients(result: any) {
  throw new Error("Function not implemented.");
}

