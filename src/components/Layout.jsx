import Header from './header';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-full w-full mx-auto bg-[url('/cas-bg.gif')] bg-center bg-no-repeat bg-cover [background-image:linear-gradient(rgb(0_0_0_/_0%),rgb(42_26_183_/_60%)),url('/cas-bg.gif')]">
            <Header />
            {/* <main className="flex-1"> */}
            {children}
            {/* </main> */}
        </div>
    );
};

export default Layout;
