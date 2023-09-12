import React, { useState } from "react";

const DocumentUploader = () => {
  const [documents, setDocuments] = useState([]);
  const [documentTypes, setDocumentTypes] = useState([]);

  const handleAddDocument = () => {
    const file = document.getElementById("file").files[0];
    const documentType = document.getElementById("documentType").value;

    const newDocument = {
      file: file,
      documentType: documentType,
    };

    setDocuments([...documents, newDocument]);
  };

  
  return (
    <div>
    
      <input type="file" id="file" multiple />
      <select id="documentType">
        {documentTypes.map((documentType) => (
          <option value={documentType}>{documentType}</option>
        ))}
      </select>
      <button onClick={handleAddDocument}>Add Document</button>
    
    
    </div>
  );
};

export default DocumentUploader;
