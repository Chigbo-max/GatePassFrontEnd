import {Outlet} from 'react-router-dom';

function layout() {
  return (
    <div>

        <main>
            <Outlet />
        </main>

      
    </div>
  )
}

export default layout
