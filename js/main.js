import './data.js';
import {renderPhotos} from './render-photos.js';
import {openEditor, closeEditor, clickBtnClose, closeEscEditor} from './open-close-editor.js';
import  {editSize} from'./edit-photo.js';

renderPhotos();
clickBtnClose();
closeEscEditor();
openEditor();
closeEditor();
editSize();
