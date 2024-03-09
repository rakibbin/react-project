import { createBrowserRouter } from "react-router-dom";
import Shop from "../components/Shop";
import About from "../components/About";
import Service from "../components/Service";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Chart from "../components/Chart";
import AddBanner from "../components/banner/AddBanner";
import ListBanner from "../components/banner/ListBanner";
import UpdateBanner from "../components/banner/UpdateBanner";
import AddPopular from "../components/popular/AddPopular";
import ListPopular from "../components/popular/ListPopular";
import UpdatePopular from "../components/popular/UpdatePopular";
import AddBlog from "../components/blog/AddBlog";
import ListBlog from "../components/blog/ListBlog";
import UpdateBlog from "../components/blog/UpdateBlog";
import AddProduct from "../components/product1/AddProduct";
import ListProduct from "../components/product1/ListProduct";
import UpdateProduct from "../components/product1/UpdateProduct";
import AddProducts2 from "../components/products2/AddProducts";
import ListProducts2 from "../components/products2/ListProducts";
import UpdateProducts2 from "../components/products2/UpdateProducts";
import AddChooses from "../components/chooses/AddChooses";
import ListChooses from "../components/chooses/ListChooses";
import UpdateChooses from "../components/chooses/UpdateChooses";
import AddDesign from "../components/design/AddDesign";
import ListDesign from "../components/design/ListDesign";
import UpdateDesign from "../components/design/UpdateDesign";
import AddDesignation from "../components/slider/AddSlider";
import ListDesignation from "../components/slider/ListSlider";
import UpdateDesignation from "../components/slider/UpdateSlider";
import Admin_index2 from "../admin/Admin_index2";
import Listtable from "../admin/admin2_components/adminComponent/Listtable";
import BannerAdmin from "../admin/admin2_components/adminComponent/BannerAdmin";
import BannerAdminAdd from "../admin/admin2_components/adminComponent/BannerAdminAdd";
import BannerAdminUpdate from "../admin/admin2_components/adminComponent/BannerAdminUpdate";

const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/about', element: <About /> },
    { path: '/service', element: <Service /> },
    { path: '/blog', element: <Blog /> },
    { path: '/contact', element: <Contact /> },
    { path: '/chart', element: <Chart /> },
    //...banner.start.......
    { path: '/banner/addbanner', element: <AddBanner /> },
    { path: '/banner/listbanner', element: <ListBanner /> },
    { path: '/banner/updatebanner/:id', element: <UpdateBanner /> },
    //...banner.end.......
    //...popular.start.......
    { path: '/popular/addpopular', element: <AddPopular /> },
    { path: '/popular/listpopular', element: <ListPopular /> },
    { path: '/popular/updatepopular/:id', element: <UpdatePopular /> },
    //...popular.end.......
    //...Blog.start.......
    { path: '/blog/addblog', element: <AddBlog /> },
    { path: '/blog/listblog', element: <ListBlog /> },
    { path: '/blog/updateblog/:id', element: <UpdateBlog /> },
    //...Blog.end.......
    //...product.start.......
    { path: '/product/addproduct', element: <AddProduct /> },
    { path: '/product/listproduct', element: <ListProduct /> },
    { path: '/product/updateproduct/:id', element: <UpdateProduct /> },
    //...product.end.......
    //...product2.start.......
    { path: '/products2/addproducts2', element: <AddProducts2 /> },
    { path: '/products2/listproducts2', element: <ListProducts2 /> },
    { path: '/products2/updateproducts2/:id', element: <UpdateProducts2 /> },
    //...product2.end.......
    //...chooses.start.......
    { path: '/chooses/addchooses', element: <AddChooses /> },
    { path: '/chooses/listchooses', element: <ListChooses /> },
    { path: '/chooses/updatechooses/:id', element: <UpdateChooses /> },
    //...chooses.end.......
    //...chooses.start.......
    { path: '/design/adddesign', element: <AddDesign /> },
    { path: '/design/listdesign', element: <ListDesign /> },
    { path: '/design/updatedesign/:id', element: <UpdateDesign /> },
    //...chooses.end.......

    //...chooses.start.......
    { path: '/designation/adddesignation', element: <AddDesignation /> },
    { path: '/designation/listdesignation', element: <ListDesignation /> },
    { path: '/designation/updatedesignation/:id', element: <UpdateDesignation /> },
    //...chooses.end.......
//........................admin panel start...........................

{ path: '/admin', element: <Admin_index2 /> },//
{ path: '/admin/banner', element: <BannerAdmin /> },
{ path: '/admin/addbanner', element: <BannerAdminAdd /> },
{ path: '/admin/updatebanner/:id', element: <BannerAdminUpdate /> },
//........................admin panel start...........................
    


])
export default routes