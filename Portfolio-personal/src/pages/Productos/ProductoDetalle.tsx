import { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
import { getProductoById } from "@/model/api/main/apiProductos"; // Tu nueva función para buscar un producto individual
import type { IProductos } from "@/model/interface/IProductos";
import { ProductoCard } from "@/components/productos/ProductoCard";
import { Button } from "@/components/ui/button";

export const ProductoDetalle = () => {
  const { id } = useParams();
  
  const [producto, setProducto] = useState<IProductos | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductoIndividual = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const datosProducto = await getProductoById(Number(id));
        setProducto(datosProducto);
      } catch (error) {
        console.error("Error cargando el detalle del producto en el controlador:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductoIndividual();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6 bg-background">
        <p className="text-lg font-medium text-muted-foreground animate-pulse">
          Cargando detalles del producto...
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] p-6 bg-background">
      {producto ? (
        // Le pasamos el producto y activamos el modo detalle heredado de Shadcn
        <ProductoCard producto={producto} isDetail={true} />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <Link to="/productos">
            <Button>Regresar a Productos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};