import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'
import FieldSelection from './component/FieldSelection';
import DocumentUploader from './component/DocumentUploader';


function App() {
  const [openPicker, authResponse] = useDrivePicker();  
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "994344428113-e2aqaiui5k4vrne4bv4bnvbu5c6drftv.apps.googleusercontent.com",
      developerKey: "AIzaSyCs75YhkZeAO7AyMvOIddVYTBquYQL94A4",
      viewId: "DOCS",
      token:"ya29.a0AfB_byA3VSD_RFoq7xYe_IhllyPfZyzclKLgu81MidyXBwWogJqh808-_i_H2s7wgo048BM0kmQc4BuaJaxRTlFhphbQSD4ACtTumiea-G8JoTk8FSDRNOKxhICQWiYru-mMdP8ikRNMkzGm4s8sMb8Usl0el-5Y5waCgYKAaESARESFQGOcNnC_ohxnrxf7zN0IoNGZGzq8Q0169",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,

      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }


  
  return (
    <div>
    <h1>Connection gestion</h1>
    <button onClick={() => handleOpenPicker()}>Connect</button>
    
    <h1>Location gestion</h1>
    <button onClick={() => handleOpenPicker()}>Location</button>
    <h1>Field gestion</h1>
    <FieldSelection/>
    <h1>Field Management</h1>
        <form>
        <div className="input-group">
          <label htmlFor="name">First name</label>
          <input type="text" id="name"  />
        </div>
        <div className="input-group">
          <label htmlFor="name">Last name</label>
          <input type="text" id="name" />
        </div>
        <DocumentUploader/>
        
      </form>
        <h1>Upload in drive</h1>
        <button onClick={() => handleOpenPicker()}>Upload</button>
        
    </div>
  );
}

export default App;