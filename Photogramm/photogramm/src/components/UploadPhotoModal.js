import {store} from "../redux/store";
import {addPhoto} from "../redux/actions";

export default function UploadPhotoModal(props){
    function onChange(e){
        store.dispatch(addPhoto(URL.createObjectURL(e.target.files[0]), props.id))
        console.log(store.getState())
        props.onChange()
    }
    return(
        <div >
            <div className="modal_overlay"></div>

             <div className="modal_wrap">
                 <div className="modal_container">
                     <button className={"close_btn modal_close"} onClick={props.onCloseClick}><img src={require("../assets/close.png")} alt=""/></button>

                     <p className={"modal_text"}>Add more images</p>
                     <label htmlFor="file_upload" className="custom-file-upload">
                         Upload Image
                     </label>
                     <input onChange={onChange} id="file_upload" type="file"/>
                 </div>
             </div>

        </div>
    )
}