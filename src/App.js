import { CreateBlogs } from './page/Createblogs';
import { EditBlog } from './page/EditBlog';
import { ShowBlogs } from './page/ShowBlogs';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<ShowBlogs />} />
          <Route path='/create' element={<CreateBlogs />} />
          <Route path='/edit/:id' element={<EditBlog></EditBlog>} />
        </Routes>
    
    </div>
  );
}

export default App;
