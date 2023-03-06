import { Product } from "../../../store/models/products";
import { Button, Divider, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useAppSlector } from "../../../utils/hook";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/reducer/cartProduct";
import { BtnActionsCart } from "../../Carts/BtnActionsCart";
import { useNavigate } from "react-router-dom";

export function ProductOrder(props: Product) {
  const { product } = useAppSlector((state) => state.cartProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCart = () => {
    dispatch(addProduct(props));
  };
  return (
    <Paper elevation={3} className="py-2 px-4">
      <Typography variant="h5" className="py-2">
        Цена {props.price}
      </Typography>
      <Divider />
      <Typography variant="body2" className="mt-5 py-2">
        Стандартная доставка Доставка от 4 часов до 4 рабочих дней исходя от
        адреса доставки
      </Typography>
      <Divider />
      <div className="flex justify-between items-center py-3">
        <Button
          variant="contained"
          color="success"
          disabled={product.length < 1}
          onClick={() => navigate("/carts")}
        >
          Купить
        </Button>
        {product.length > 0 ? (
          <BtnActionsCart
            product_id={props.id}
            quantity={
              product.find((item) => item.product_id === props.id)?.quantity
            }
            dataProduct={props}
          />
        ) : (
          <Button variant="contained" color="info" onClick={handleCart}>
            Добавить в корзину
          </Button>
        )}
      </div>
    </Paper>
  );
}
