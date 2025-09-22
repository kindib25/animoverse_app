import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className='flex flex-1 flex-col items-center justify-center py-10'>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout