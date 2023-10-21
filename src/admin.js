import renderTable from "./modules/renderTable";
import modalService from "./modules/modalService";
import addService from "./modules/addService";
import editService from "./modules/editService";
import removeService from "./modules/removeService";
import sortService from "./modules/sortService";
import searchService from "./modules/searchService";

const url = 'http://localhost:4545/repairs';

renderTable(url);
modalService();
addService(url);
editService(url);
removeService(url);
sortService(url);
searchService(url);