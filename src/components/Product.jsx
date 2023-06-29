import { MdEdit, MdDelete } from "react-icons/md";
import Button from "./Button";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function Product({
  id,
  name,
  image,
  price,
  category,
  setEditedProduct,
  cart,
  product,
  setCart,
  setProducts,
}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <h2>
          ({id}) {name}
        </h2>
        <p>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}
        </p>
        <p>({category})</p>
        <div>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedProduct({
                id,
                name,
                image,
                price,
                category,
              })
            }
            title="Edit"
          >
            <MdEdit />
          </Button>

          <Button
            variant="tonal"
            onClick={() =>
              confirm(`Apakah Anda yakin ingin menghapus?`) &&
              setProducts(product.filter((p) => p.id !== id))
            }
            title="Hapus"
          >
            <MdDelete />
          </Button>
          <Button
            onClick={() => {
              if (cart.find((p) => p.id === product.id)) {
                setCart(
                  cart.map((p) =>
                    p.id === product.id
                      ? {
                          ...p,
                          count: p.count + 1,
                        }
                      : p
                  )
                );
              } else {
                setCart([...cart, { ...product, count: 1 }]);
              }
            }}
            title="Tambah ke Keranjang"
          >
            <BsFillCartPlusFill />
          </Button>
        </div>
      </section>
    </div>
  );
}
