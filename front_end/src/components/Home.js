import { Link } from "react-router-dom";
import * as ROUTES from './constants/routes';
<<<<<<< HEAD
import Rate from "./SingleItem/rate";
=======
import AddToCart from "./AddToCart/AddToCart";
>>>>>>> 10bba48c4cea60ba40dfaab4eb65b0e6e9175582

export default function Home(){
    return(
        <>
        <Link to={ROUTES.SEARCH}>{"for search"}</Link><br/>
        <Link to={ROUTES.ITEM_LIST}>{"for list item"}</Link><br/>
        <Link to={ROUTES.SIGN_IN}>{"sign in"}</Link>
        <AddToCart/>
        </>
    )
}