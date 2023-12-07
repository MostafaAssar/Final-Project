import { Link } from "react-router-dom";
import * as ROUTES from './constants/routes';

export default function Home(){
    return(
        <>
        <Link to={ROUTES.SEARCH}>{"for search"}</Link><br/>
        <Link to={ROUTES.ITEM_LIST}>{"for list item"}</Link><br/>
        <Link to={ROUTES.SIGN_IN}>{"sign in"}</Link>
        </>
    )
}