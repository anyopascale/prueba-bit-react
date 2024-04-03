
import SkeletonCardItem from './SkeetonCardItem';

import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import "./css/cardItem.scss"



import defaultImage from '../../src/assets/images/not-available.webp'; // Ruta de la imagen por defecto

function getFruitImageUrl(fruit) {
    const imageName = fruit.name.replace(/\s+/g, ''); // Convertir el nombre de la fruta a minúsculas y eliminar espacios

    // Lista de extensiones permitidas
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'avif'];

    // Intentar encontrar la URL de la imagen con cada extensión permitida
    for (const extension of allowedExtensions) {
        const imageUrl = `../../src/assets/images/${imageName}.${extension}`;
        const image = new Image();
        image.src = imageUrl;

        // Verificar si la imagen existe
        if (image.complete) {
            // Si la imagen se ha cargado correctamente, devolver su URL
            return imageUrl;
        }
    }

    // Si no se encuentra ninguna imagen, devolver la imagen por defecto
    return defaultImage;
}




function CardItem() {
    // fetchFruits();
    const [fruits, setFruits] = useState([]); // Estado para almacenar los datos de las frutas
    const [loading, setLoading] = useState(true); // Estado para controlar si se están cargando los datos

    const [visibleItems, setVisibleItems] = useState(6);

    useEffect(() => {
        async function fetchFruits() {
            try {
                const apiUrl = 'http://localhost:3000/fruits';

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setFruits(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchFruits();
        console.log(setFruits)
    }, []);

    const handleLoadMore = () => {
        // Aumenta el número de ítems visibles en 4
        setVisibleItems(prev => prev + 4);
    };

    
    return(
        <div className="col-12 px-2">
            <div className="row">
                <div className="col-12 mb-5">
                    <div className="row g-4">

                        {loading ? (
                            <SkeletonCardItem />
                        ) : (
                            // Renderiza los datos de las frutas una vez que se han cargado
                            fruits.slice(0, visibleItems).map((fruit, index) => (
                                <div key={index} className="col-12 col-lg-6 col-xl-4" >
                                <section className="card-item">
                                    <div className="row g-0">
                                        <div className="col-12">
                                            <div className="card-item-heart">
                                                <span className="icon icon-heart"></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card-item__image">
                                                <img src={getFruitImageUrl(fruit)} onError={(e) => { e.target.src = defaultImage; }} alt={fruit.name} />
                                            </div>
                                        </div>

                                        <div className="col-12 p-3 p-md-4">
                                            <div className="row g-0">
                                                <div className="col-12 title-tertiary color-primary">
                                                    {/* <h4>{fruit.name}</h4> */}
                                                    {fruit.name ? (
                                                        <h4>{fruit.name}</h4>
                                                        ) : (
                                                        <Skeleton height={20} width={200} />
                                                    )}
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="row g-0">
                                                        <div className="col-12 text font-bold">
                                                            <p>Family:</p>
                                                        </div>
                                                        <div className="col-12 text">
                                                            {/* <p>{fruit.family}</p> */}
                                                            {fruit.family ? (
                                                                <p>{fruit.family}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="row g-0">
                                                        <div className="col-12 text font-bold">
                                                            <p>CardItem</p>
                                                        </div>
                                                        <div className="col-12 text">
                                                            {/* <p>{fruit.id}</p> */}
                                                            {fruit.id ? (
                                                                <p>{fruit.id}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="row g-0">
                                                        <div className="col-12 text font-bold">
                                                            <p>Genus:</p>
                                                        </div>
                                                        <div className="col-12 text">
                                                            {/* <p>{fruit.genus}</p> */}
                                                            {fruit.genus ? (
                                                                <p>{fruit.genus}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 title-cuaternary color-primary">
                                                    <h4>Nutritions</h4>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto text font-bold">
                                                            <p>Calories</p>
                                                        </div>
                                                        <div className="col-auto text">
                                                            {/* <p>{fruit.nutritions.calories}</p> */}
                                                            {fruit.nutritions.calories ? (
                                                                <p>{fruit.nutritions.calories}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto text font-bold">
                                                            <p>Fat</p>
                                                        </div>
                                                        <div className="col-auto text">
                                                            {/* <p>{fruit.nutritions.fat}</p> */}
                                                            {fruit.nutritions.fat ? (
                                                                <p>{fruit.nutritions.fat}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto text font-bold">
                                                            <p>Sugar</p>
                                                        </div>
                                                        <div className="col-auto text">
                                                            {/* <p>{fruit.nutritions.sugar}</p> */}
                                                            {fruit.nutritions.sugar ? (
                                                                <p>{fruit.nutritions.sugar}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto text font-bold">
                                                            <p>Carbohydrates</p>
                                                        </div>
                                                        <div className="col-auto text">
                                                            {/* <p>{fruit.nutritions.carbohydrates}</p> */}
                                                            {fruit.nutritions.carbohydrates ? (
                                                                <p>{fruit.nutritions.carbohydrates}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row justify-content-between align-items-center">
                                                        <div className="col-auto text font-bold">
                                                            <p>Protein</p>
                                                        </div>
                                                        <div className="col-auto text">
                                                            {/* <p>{fruit.nutritions.protein}</p> */}
                                                            {fruit.nutritions.protein ? (
                                                                <p>{fruit.nutritions.protein}</p>
                                                                ) : (
                                                                <Skeleton height={20} width={200} />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            ))
                        )}




                    
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    {/* See mORE Button */}
                    {fruits.length > visibleItems && (
                       <button className="button-primary" onClick={handleLoadMore}>SEE MORE</button>
                    )}
                    {/* See mORE Button */}
                </div>
            </div>
        </div>
        
        
    )
}



export default CardItem;
