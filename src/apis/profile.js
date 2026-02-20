import axios from 'axios';
import {useState} from 'react';

function ProfileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('파일을 선택하세요');

    const formData = new FormData();
    formData.append('image', file); // key는 반드시 image

    try {
      const res = await axios.post(
        'http://localhost:8080/user/profile/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('업로드 성공:', res.data.url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type='file' onChange={handleChange} />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
}

export default ProfileUpload;
