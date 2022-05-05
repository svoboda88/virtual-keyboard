import './style.css';
import {markup} from './js-modules/markup';
import {EngKeys} from './js-modules/keys';

const createDocument = new markup();
createDocument.createDocument();
createDocument.createButtons(EngKeys);
